import { mkdirSync, renameSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname } from 'node:path';

const required = (name) => {
	const value = process.env[name];
	if (!value) throw new Error(`${name} is required.`);
	return value;
};

const apiUrl = required('FLAGTURE_API_URL').replace(/\/+$/, '');
const audience = required('FLAGTURE_OIDC_AUDIENCE');
const outputFile = required('FLAGTURE_OUTPUT_FILE').replace(/^~(?=$|\/)/, homedir());

const oidcRequestUrl = required('ACTIONS_ID_TOKEN_REQUEST_URL');
const oidcRequestToken = required('ACTIONS_ID_TOKEN_REQUEST_TOKEN');

const oidcResponse = await fetch(`${oidcRequestUrl}&audience=${encodeURIComponent(audience)}`, {
	headers: { Authorization: `Bearer ${oidcRequestToken}` },
});
if (!oidcResponse.ok) throw new Error(`Failed to request a GitHub OIDC token (HTTP ${oidcResponse.status}).`);
const { value: oidcToken } = await oidcResponse.json();
console.log(`::add-mask::${oidcToken}`);

const configResponse = await fetch(
	`${apiUrl}/runtime/effective-config`,
	{ headers: { Authorization: `Bearer ${oidcToken}`, Accept: 'application/json' } }
);
if (!configResponse.ok) throw new Error(`Flagture returned HTTP ${configResponse.status} for the effective config.`);
const config = await configResponse.json();

const NAME_PATTERN = /^[A-Za-z_][A-Za-z0-9_]*$/;
const entries = new Map();
for (const scope of ['variables', 'secrets']) {
	for (const [key, value] of Object.entries(config[scope] ?? {})) {
		if (!NAME_PATTERN.test(key)) throw new Error(`Invalid environment variable name in ${scope}: ${key}`);
		if (typeof value !== 'string') throw new Error(`Value for ${key} in ${scope} must be a string.`);
		if (entries.has(key)) throw new Error(`Duplicate key ${key} in variables and secrets.`);
		entries.set(key, value);
	}
}

const formatValue = (value) => {
	if (!/['\r\n]/.test(value)) return `'${value}'`;
	const escaped = value
		.replace(/\\/g, '\\\\')
		.replace(/"/g, '\\"')
		.replace(/\r/g, '\\r')
		.replace(/\n/g, '\\n')
		.replace(/\$/g, '$$$$');
	return `"${escaped}"`;
};

const contents = [...entries].map(([key, value]) => `${key}=${formatValue(value)}\n`).join('');

mkdirSync(dirname(outputFile), { recursive: true });
const temporaryFile = `${outputFile}.tmp`;
writeFileSync(temporaryFile, contents, { mode: 0o600 });
renameSync(temporaryFile, outputFile);

console.log(`Wrote ${entries.size} Flagture configuration entries.`);
