const path      = require("path");
const webpack  = require("webpack");
const notifier = require("webpack-notifier");

const config = {
    entry: {
        main   : "./src/main",
        commons: [ "jquery", "jquery-ui-bundle", "knockout", "tslib" ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        publicPath: "/js",
        path      : path.join(__dirname, "../server/src/wwwroot/js/"),
        filename  : "[name].build.js"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test   : /\.ts$/,
                exclude: /node_modules/,
                loader : "tslint-loader",
                options: {
                    emitErrors  : true,
                    failOnHint  : true,
                    configFile  : "./tslint.json",
                    tsConfigFile: "./tsconfig.json",
                    exclude     : /node_modules/
                }
            },
            {
                test   : /\.ts$/,
                exclude: /node_modules/,
                loader : "ts-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.ProvidePlugin({
            $              : "jquery",
            jQuery         : "jquery",
            "window.jQuery": "jquery"
        }),
        new webpack.ProvidePlugin({
            ko: "knockout"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name     : "commons",
            minChunks: 2
        }),
        new notifier()
    ]
};

if (process.env.NODE_ENV === "development") {
    console.log("Development Mode");

    config.devtool = "source-map";
} else {
    console.log("Production Mode");

    config.devtool = "hidden-source-map";
    config.plugins = config.plugins.concat([
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true,
                warnings : false
            },
            comments : false,
            sourceMap: true
        })
    ]);
}

module.exports = config;