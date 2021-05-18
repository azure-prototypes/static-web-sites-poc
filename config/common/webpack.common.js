const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const paths = require('./paths');

module.exports = {
	// Where webpack looks to start building the bundle
	entry: [`${paths.src}/index.js`],

	// Where webpack outputs the assets and bundles
	output: {
		path: paths.build,
		filename: '[name].bunpathsdle.js',
		publicPath: '/',
	},

	// Customize the webpack build process
	plugins: [
		// resolve env variables
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(
					process.env.NODE_ENV || 'development',
				),
				API_TOKEN: JSON.stringify(process.env.API_TOKEN),
			},
		}),

		// Removes/cleans build folders and unused assets when rebuilding
		new CleanWebpackPlugin(),

		// Copies files from target to destination folder
		new CopyWebpackPlugin({
			patterns: [
				{
					from: `${paths.src}/assets`,
					to: 'assets',
					globOptions: {
						ignore: ['*.DS_Store'],
					},
				},
			],
		}),

		// Generates an HTML file from a template
		// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
		new HtmlWebpackPlugin({
			title: 'Pricing Portal',
			favicon: `${paths.src}/assets/icons/favicon.png`,
			template: `${paths.public}/index.html`, // template file
			filename: 'index.html', // output file
		}),
	],

	// Determine how modules within the project are treated
	module: {
		rules: [
			// JavaScript: Use Babel to transpile JavaScript files
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },

			// Images: Copy image files to build folder
			{ test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

			// Fonts and SVGs: Inline files
			{ test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
		],
	},

	// Resolve folder paths
	resolve: {
		alias: {
			components: path.resolve(__dirname, '../../src/components'),
			layouts: path.resolve(__dirname, '../../src/layouts'),
			hooks: path.resolve(__dirname, '../../src/hooks/'),
			utils: path.resolve(__dirname, '../../src/utils/'),
			constants: path.resolve(__dirname, '../../src/constants/'),
			api: path.resolve(__dirname, '../../src/api/'),
			icons: path.resolve(__dirname, '../../src/assets/icons/'),
			styles: path.resolve(__dirname, '../../src/theme/styles/'),
		},
		extensions: ['.js', '.jsx'],
	},
};
