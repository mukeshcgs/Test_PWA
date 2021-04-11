const path = require('path');
const webpack = require('webpack');

// const appDirectory = path.resolve(__dirname, '../');
const appDirectory = path.resolve(__dirname);
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { presets } = require(`${appDirectory}/babel.config.js`);
const compileNodeModules = [
    // Add every react-native package that needs compiling
    'react-native-gesture-handler',
    "react-native-community/masked-view",
    "react-navigation/drawer",
    "react-navigation",
    "react-navigation",

].map((moduleName) => path.resolve(appDirectory, `node_modules/${moduleName}`));

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
    test: /\.js$/,
    // Add every directory that needs to be compiled by Babel during the build.
    include: [
        path.resolve(appDirectory, 'index.web.js'),
        path.resolve(appDirectory, 'src'),
        path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
        ...compileNodeModules,
    ],
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
            presets: ['module:metro-react-native-babel-preset'],
            presets,
            // Re-write paths to import only the modules needed by the app
            plugins: ['react-native-web']
        }
    }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
    test: /\.(gif|jpe?g|png|svg)$/,
    use: {
        loader: 'url-loader',
        options: {
            name: '[name].[ext]'
        }
    }
};
const RNimageLoaderConfiguration = {
    test: /\.(png|jpe?g|gif)$/,
    options: {
        name: 'assets/[name].[hash:8].[ext]',
        scalings: { '@2x': 2, '@3x': 3 },
    },
    loader: 'react-native-web-image-loader',
};
module.exports = {
    mode: "development",
    entry: [
        // load any web API polyfills
        // path.resolve(appDirectory, 'polyfills-web.js'),
        // your web-specific entry file
        path.resolve(appDirectory, 'index.web.js')
    ],

    // configures where the build ends up
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(appDirectory, 'dist')
    },

    devServer: {
        inline: true,
        contentBase: "./dist",
    },
    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            RNimageLoaderConfiguration,
        ]
    },

    resolve: {
        // This will only alias the exact import "react-native"
        alias: {
            'react-native$': 'react-native-web'
        },
        // If you're working on a multi-platform React Native app, web-specific
        // module implementations should be written in files using the extension
        // `.web.js`.
        extensions: ['.web.js', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            // See: https://github.com/necolas/react-native-web/issues/349
            __DEV__: JSON.stringify(true),
        }),
    ],
}