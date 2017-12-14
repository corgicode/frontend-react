const path = require('path');

module.exports = {
    module: {
        rules: [
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
                        data: `@import "${path.join(__dirname, '../src/styles/_variables.scss')}";`
                    }
                }
            ]
        },
        { test: /\.woff(2)?(\?[a-z0-9#=&.]+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
        { test: /\.(ttf|eot|svg)(\?[a-z0-9#=&.]+)?$/, loader: 'file-loader?name=assets/fonts/[name].[ext]' },
        { test: /\.(gif|jpg|png)(\?[a-z0-9#=&.]+)?$/, loader: 'file-loader?name=assets/images/[name].[ext]' }
    ],
    }
};
