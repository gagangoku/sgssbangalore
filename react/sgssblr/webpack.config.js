const path = require('path');

module.exports = {
    entry: {
        client: './src/client.js',      // client side companion for SSR
        // bundle: './src/bundle.js',      // Pure client side app
    },
    output: {
        path: path.resolve(__dirname, 'assets'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: "babel-loader",
                options: {
                    presets: [
                        '@babel/preset-env',
                        {'plugins': ['@babel/plugin-proposal-class-properties']},
                    ],
                }
            }
        ]
    },
    watchOptions: {
        aggregateTimeout: 1000,
        poll: 500,
        ignored: /node_modules/,
    }
};

