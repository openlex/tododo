module.exports = {
	presets: [
		['@babel/preset-env', { targets: 'defaults' }],
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	plugins: [
		'emotion',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-private-methods',
	],
	env: {
		production: {
			plugins: ['emotion', 'babel-plugin-jsx-remove-data-test-id'],
		},
		development: {
			plugins: [
				['emotion', { sourceMap: true }],
				'babel-plugin-jsx-remove-data-test-id',
			],
		},
		test: {
			plugins: [
				['emotion', { sourceMap: true }],
				'@babel/plugin-transform-modules-commonjs',
			],
		},
	},
};
