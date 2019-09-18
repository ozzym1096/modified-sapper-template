module.exports = {
	extends: 'problems',
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'indent': ['warning', 'tab'],
		'no-mixed-spaces-and-tabs': 'warning',
		'no-secrets/no-secrets': [
			'error',
			{
				'additionalRegexes': require('eslint-plugin-no-secrets/regexes.js')
			}
		]
	},
	plugins: [
		'svelte3',
		'no-secrets'
	],
	overrides: [
		{
			files: ['**/*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	settings: {
		'svelte3/ignore-styles': () => true,
	},
};
