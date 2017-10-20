const path = require('path');

module.exports = {
	entry: [
		'./src/index.js',
		'react-hot-loader/patch'
	],
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: [
					{
						loader: 'babel-loader'
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			'node_modules'
		]
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './',
		port: 5000
	}
};
