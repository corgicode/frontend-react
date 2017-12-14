'use strict';

const path = require('path');

module.exports = (config) => {
    config.module.loaders.push(
        {
            enforce: 'pre',
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
                configFile: '.eslintrc',
                failOnWarning: false,
                failOnError: false
            }
        },
        {
            test: /\.scss/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: 'assets/[name]---[local]---[hash:base64:5]',
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        data: `@import "${path.join(__dirname, 'app/styles/_mixins.scss')}";`
                    }
                }
            ]
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        },
        { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]' },
        { test: /\.(gif|jpg|png)(\?[a-z0-9#=&.]+)?$/, loader: 'file-loader?name=assets/images/[name].[ext]' }
    );
    return config;
};
