const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (isDevMode, options) => {
	const miniCssExtractPluginLoader = {
		loader: MiniCssExtractPlugin.loader,
		options: {
			publicPath: 'dist/css/',
			modules: true,
			sourceMap: isDevMode,
		},
	};

	return [
		{
			test: /\.(js|ts|md)x?$/,
			loader: require.resolve('babel-loader'),
			exclude: /node_modules/,
		},
		{
			test: /\.module\.(c|sa|sc)ss$/,
			exclude: [/node_modules/, /webpack/],
			use: [
				isDevMode ? 'style-loader' : miniCssExtractPluginLoader,
				{
					loader: 'css-loader',
					options: {
						importLoaders: 1,
						modules: {
							localIdentName:
								'[name]__[local]-[hash:base64:5]',
						},
						sourceMap: isDevMode,
					},
				},
				{
					loader: 'postcss-loader',
					options: {
						sourceMap: isDevMode,
						config: {path: '.'},
					},
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: isDevMode,
					},
				},
			],
		},
		{
			test: /\.(c|sa|sc)ss$/,
			exclude: /\.module.(c|sa|sc)ss$/,
			loader: [
				isDevMode ? 'style-loader' : miniCssExtractPluginLoader,
				'css-loader',
				'postcss-loader',
				{
					loader: 'sass-loader',
					options: {
						sourceMap: isDevMode,
					},
				},
			],
		},
	]
};
