const path = require('path');
// pour obtenir le chemin absolu avec path.resolve

const dev = process.env.NODE_ENV === 'dev'

let config = {
    entry: './assets/js/app.js',
    watch: false,
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js',
        publicPath: 'dist/',
    },
    devtool: dev ? "cheap-eval-source-map" : false, // configuration tool to see the line explicitly
    mode: 'production', // bundle = only 87
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }
        ]
    },
}

if(dev){
    config.mode = 'development';
    config.watch = true;
}

module.exports = config;