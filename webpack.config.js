const webpack = require('webpack'),
         glob = require('glob');
         path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css',

});


module.exports = {
    entry: {
        // 'app': glob.sync('./assets/js/*.js'),
        'main': path.join(__dirname, 'assets', 'js', 'main.js'),


    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // externals: ['axios'],
    resolve: {
          alias: {
            vue: 'vue/dist/vue.js'
          }
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ['css-loader', 'sass-loader']
                })
            },

            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        // presets: ['env']
                    }
                }
            },


            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env']
                    }
                }
            },

        ]
      },
    plugins: [
        extractPlugin
    ]

}
