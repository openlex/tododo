const path = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isDevMode, options) => {
	const plugins = [
		new HtmlWebpackPlugin({
			title: "todo list",
			template: path.resolve(__dirname, '../src/template.html'),
			filename: "index.html",
		}),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: isDevMode ? '[name].css' : '[name].[contenthash].css',
			chunkFilename: isDevMode ? '[id].css' : '[id].[contenthash].css'
		}),
	];

	if (isDevMode) {
		plugins.push(new webpack.HotModuleReplacementPlugin());
	}

	return plugins;
}
