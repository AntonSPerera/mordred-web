const webpack = require("webpack");
const path = require("path");

const plugins = [
    new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
];

module.exports = {
    entry: ["event-source-polyfill", "./tmp/main.js"],
    output: {
        filename: "main.js",
    },
    plugins: plugins,
};
