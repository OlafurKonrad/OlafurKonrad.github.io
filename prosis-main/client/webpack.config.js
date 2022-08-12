const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_PROSIS_SERVER_DOMAIN': '"http://localhost:3500/api/v1"'
        })
    ]
};