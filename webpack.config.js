const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
	.BundleAnalyzerPlugin;

module.exports = {
	entry: './index.js',
	mode: 'production',
	plugins: [new BundleAnalyzerPlugin()],
};
