const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.config.base");

const SCSS = {
    test: /\.scss$/,
    use: [
        "style-loader",
        "css-loader",
        {
            loader: "postcss-loader",
            options: {
                plugins: () => ([
                    require("autoprefixer")
                ]),
            },
        },
        {
            loader: "fast-sass-loader"
        }
    ],
}

const DEVSERVER = {
    publicPath: "/build/",
    contentBase: path.join(__dirname, "dist/"),
    hot: true,
    watchContentBase: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300
    },
    stats: "errors-only",
    overlay: true,
    open: true,
    compress: true,
}

const PLUGINS = [
    new webpack.HotModuleReplacementPlugin()
]

module.exports = merge(baseConfig, {
    output: {
        publicPath: "/build/"
    },
    mode: "development",
    module: {
        rules: [
            SCSS
        ]
    },
    devtool: "eval-source-map",
    plugins: PLUGINS,
    devServer: DEVSERVER,
})


