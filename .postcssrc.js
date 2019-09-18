module.exports = {
	plugins: [
		require('postcss-font-magician')({
			'display': 'fallback',
			'foundries': 'google',
			'protocol': 'https:'
		}),
		require('autoprefixer'),
	],
};
