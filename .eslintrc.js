module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['eslint:recommended', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {},
	plugins: ['svelte3'],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		"svelte3/ignore-styles": () => true
	}
}
