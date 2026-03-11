const { FlatCompat } = require( '@eslint/eslintrc' );

const compat = new FlatCompat( {
	baseDirectory: __dirname,
} );

module.exports = [
	{
		ignores: [
			'node_modules/**',
			'vendor/**',
			'wp-admin/**',
			'wp-includes/**',
			'wp-content/languages/**',
			'**/*.min.js',
		],
	},
	{
		files: [ 'eslint.config.cjs' ],
		rules: {
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
				},
			],
		},
	},
	...compat.config( {
		extends: [
			'plugin:@wordpress/eslint-plugin/recommended-with-formatting',
		],
	} ),
];
