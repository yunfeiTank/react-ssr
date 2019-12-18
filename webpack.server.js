/**
 * description:服务端产出资源
 * 
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports ={
    target:'node',
    mode:'development',
    entry:'./server/index.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },
    externals: [nodeExternals()],
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            },
            {
                test:/\.css$/,
                use:['isomorphic-style-loader','css-loader']
            }
        ]
    }
}