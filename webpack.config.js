const path = require( 'path' );
const HTMLWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");

const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

const MomentTimezoneDataPlugin = require('moment-timezone-data-webpack-plugin');
const currentYear = new Date().getFullYear();
const supportedLocales = ['ru-ru', 'ru']

const webpack = require('webpack');

/*-------------------------------------------------*/

module.exports = {

    // webpack optimization mode
    mode: ( 'development' === process.env.NODE_ENV ? 'development' : 'production' ),

    // entry files
    entry: 'development' === process.env.NODE_ENV ? [
        './src/index.dev.js', // in development
    ] : [
        './src/index.prod.js', // in production
    ],

    // output files and chunks
    output: {
        path: path.resolve( __dirname, 'dist' ),
        publicPath: '/',
        filename: '[name].[contenthash].js',
        clean: true,
    },

    // module/loaders configuration
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [ 'babel-loader' ]
            },
            {
                test: /\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'
                ]
            },
            {
                test: /\.(jpg|png|svg|ttf|otf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            },
        ]
    },

    // webpack plugins
    plugins: [
        new CompressionPlugin(),
        
        //new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
        
        new webpack.ContextReplacementPlugin(
            /^date-fns[/\\]locale$/,
            new RegExp(`\\.[/\\\\](${supportedLocales.join('|')})[/\\\\]index\\.js$`)
        ),

        new MomentLocalesPlugin({
            localesToKeep: ['ru-ru'],
        }),

        /*new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false }
        }),*/

        new MomentTimezoneDataPlugin({
            //matchZones: /^America/
            matchZones: /^Europe/,
            startYear: currentYear - 5,
            endYear: currentYear + 5,
        }),

        // extract css to external stylesheet file
        new MiniCssExtractPlugin( {
            //filename: 'build/styles.css',
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            experimentalUseImportModule: true
        } ),

        // prepare HTML file with assets
        new HTMLWebpackPlugin( {
            filename: 'index.html',
            template: path.resolve( __dirname, 'src/index.html' ),
            minify: false,
            title: 'Caching'
        } ),

        // copy static files from `src` to `dist`
        new CopyWebpackPlugin( {
            patterns: [
                {
                    from: path.resolve( __dirname, 'src/assets' ),
                    to: path.resolve( __dirname, 'dist/assets' )
                }
            ]
        } ),
    ],

    // resolve files configuration
    resolve: {
        extensions: [ '.js', '.jsx', '.scss', '.css' ],
    },

    // webpack optimizations
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {

            chunks: 'async',
            cacheGroups: {

                default: {
                    minChunks: 2,
                    reuseExistingChunk: true,
                },

                vendor_react: {
                    test: /.*\/node_modules\/react\/index\.js/,
                    name: 'vendor-react',
                    chunks: 'initial',
                    enforce: true,
                },
            },

            
       },
    },
    
    
    // development server configuration
    devServer: {
        port: 5075,
        historyApiFallback: true,
    },

    // generate source map
    //devtool: ( 'development' === process.env.NODE_ENV ? 'eval-source-map' : 'eval' ),
    devtool: 'source-map'

};