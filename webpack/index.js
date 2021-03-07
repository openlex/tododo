const path = require("path");
const CssMinimizerPlugin = require('mini-css-extract-plugin');
const webpackRules = require("./webpack.rules");
const webpackPlugins = require("./webpack.plugins");
const aliases = require("./webpack.aliases");
const devMode = process.env.NODE_ENV !== 'production';

const configs = {
	entry: "./src/index.tsx",
	devtool: devMode ? "source-map" : undefined,
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "[name].bundle.js",
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".mdx", ".json", '.scss', '.sass'],
		alias: aliases,
	},
	module: webpackRules(devMode),
	devServer: {
		contentBase: path.join(__dirname, "../dist"),
		port: 8008,
		hot: true,
		historyApiFallback: true,
	},
	plugins: webpackPlugins(devMode),
	optimization: !devMode
		? {
			minimizer: [
				new CssMinimizerPlugin(),
			]
		} : undefined,
};

module.exports = configs;
