module.exports = {
	entry: [
		'./js/_app.js',
	],
	mode: 'development',
	output: {
	path: `${__dirname}/dist/js/`,
	filename: 'bundle.js',
	},
}
