const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin'); //引入这行

module.exports ={
    entry:path.join(__dirname,"src/index.js"),
    output:{
         filename:"bundle.js",
         path:path.join(__dirname,"dist")
    },  plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
         new VueLoaderPlugin() //new一个实例
    ],
    module:{
        rules:[
            {
                test:/.vue$/,
                loader:"vue-loader"
            }
        ]
    }
}