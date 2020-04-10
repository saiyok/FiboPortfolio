const path = require('path');

module.exports = {
    node:{
        fs:'empty'
    },
    target: "web",
    entry: {
        app: ["./src/client/index.js"]
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets:[
                        require.resolve('@babel/preset-react'),
                    ]
                }
            },
            {
                test:/\.(scss|css)$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader'
            }
        ],
    },
    output: {
        path: path.resolve(__dirname, './public/assets'),
        filename: "front-dist.js",
    },
    devServer:{
        host: '0.0.0.0',
        publicPath: '/asset/',
        contentBase: path.resolve(__dirname, "./public"),
        watchContentBase: true,
        compress: true,
        port: 3001
    },
    devtool: 'inline-source-map'
};