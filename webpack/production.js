const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../', 'build'),
        filename: 'bundle-assets/js/[name]-[contenthash].bundle.js',
        assetModuleFilename:
            'bundle-assets/images/[contenthash].bundle[ext][query]',
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: ['postcss-preset-env'],
                            },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle-assets/css/[name]-[contenthash].bundle.css',
        }),
    ],
};
