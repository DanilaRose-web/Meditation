"use strict"; //говорит о том что используется современный js

const buildEnv = {
    development: 'development',
    production: 'production',
}
const NODE_ENV = process.env.NODE_ENV || buildEnv.development; //переменная окружения - для распознования продакшна или девелопмента
const isDevelopment = NODE_ENV == buildEnv.development;
const webpack = require('webpack');//подключаем вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
//const VueLoader = require('vue-loader');

const VueLoaderPlugin = require('vue-loader/lib/plugin')

const path = require('path');
var apiBaseUrl = 'ws://artifactum.tirscript.com/guid/websocket';//http://localhost:64622
var apiUrl = isDevelopment? apiBaseUrl : apiBaseUrl.replace(/\w+\:\/\/[\w\:]+\//i, "/") ;//http://тест.школа-пмр.рф/web-api

var styleLoaders = [{loader:'style-loader'}, {loader:'css-loader'}, 
{
    loader: 'less-loader',  
    options: {
      javascriptEnabled: true,
      modifyVars: require('./global.less.js')//require(path.resolve(__dirname,'global.less.js'))//lessVars//{'@UiBoxMenuBgColor': '#ffffff'}//lessVars//require(path.resolve(__dirname,'global.less.js')) // файл с глобальными переменными                    
    }
}];
//console.log('lessVars',lessVars);
module.exports = {    
    mode: NODE_ENV,
    entry: './src/main',//корневой модуль который будет собираться main.js в корне
    output: {        
        publicPath: '/',
        path: path.resolve(__dirname, 'build'), //куда будет собираться файл
        filename: 'bundle.js' //название результирующего файла
    },
    devtool: 'source-map',//при сборке бандла создается map скрипт который нужен чтобы в отладке каждый модуль выглядел как отдельный файл. Иначе сложно дебажить 
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV), //объявляется для всех модулей глобальная переменная NODE_ENV(видна только при сборке) в которой будет строка с переменной окружения 'development'. В модулях можно будет писать: if(NODE_ENV=='development').....
            ApiUrl: JSON.stringify(apiUrl) //ссылка на апи
        }),
        new HtmlWebpackPlugin({ //генерация файла index.html для продакшна по шаблону index.html для девелопа.(добавляется ссылка на прод-скрипт с хэшем)
            hash: !isDevelopment,
            filename: path.resolve(__dirname, 'build/index.html'), 
            template: path.resolve(__dirname, 'src/index.html')           
        }),
        new VueLoaderPlugin(),// плагин для загрузки vue
        new webpack.ProvidePlugin({
           //$: "jquery",
            //jQuery:"jquery",
            //Modernizr : "Modernizr"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { 
                    from: 'src/assets',
                    to: 'assets' 
                }
                
            ]
        })
    ],
    //https://webpack.js.org/configuration/dev-server/
    devServer: { //запустить тестовый сервер
        contentBase: path.resolve(__dirname, 'build'),
        inline: true,
        hot: true,
        port: 9095,
        historyApiFallback: true, //j       
        compress: true,//включить gzip compression   
        proxy:{ //url rewrite
            // '/web-api':{
            //     target: 'http://localhost:64622/',//cabinets
            //     changeOrigin: true,
            // },
            // '/Files':{
            //     target: 'http://localhost:6877',//cabinets
            //     changeOrigin: true,
            // },
            // '/Photo/':{
            //     target: 'http://localhost:64622/',//public web
            //     changeOrigin: true,
            // }
        }     
    },
    resolve: {
        extensions: ['.ts', '.js', '.json',  '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            "@": path.resolve(__dirname, "./src"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@layouts": path.resolve(__dirname, "./src/components/layouts"),
            "@partials": path.resolve(__dirname, "./src/components/partials"),
            "@controls": path.resolve(__dirname, "./src/components/controls"),
            "@components": path.resolve(__dirname, "./src/components"),
            // "@assets": path.resolve(__dirname, "./dist/assets"),            
            //'jquery': path.resolve(__dirname, "./src/assets/js/jquery.min.js"),      
            //'bootstrap': path.resolve(__dirname, "./src/assets/js/bootstrap.min.js"),
            //'Modernizr':path.resolve(__dirname, "./src/assets/js/modernizr.custom.js"),
          },          
    },
    module: {
        rules: [{// правила парсинга файлов с определенными расширениями
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    ts: 'ts-loader',
                    options: {
                        transpileOnly: true,// для ускорения сборки проекта
                        experimentalWatchApi: true, //для ускорения сборки проекта
                    },
                    less: styleLoaders
                    // less: [
                    //     'style-loader', 
                    //     'css-loader',
                    //     {
                    //         loader: 'less-loader',
                    //         options: {
                    //             modifyVars: require(path.resolve(__dirname, 'global.less.js')) // файл с глобальными переменными                    
                    //         }
                    //     }
                    // ]
                        
                    //scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
                    //sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
                },
            }
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true,  //для ускорения сборки проекта
                experimentalWatchApi: true,  //для ускорения сборки проекта
                appendTsSuffixTo: [/\.vue$/]
            }
        },

        {
            test: /\.less$/,
            loader: styleLoaders//'style-loader!css-loader!less-loader'//!sass-loader!stylus-loader
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },
        {
            test: /\.(eot|svg|ttf|woff|woff2|ttc|otf)(\?\S*)?$/,
            loader: 'file-loader'
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        },
        ]
    },
}


if (NODE_ENV === buildEnv.production) {
    module.exports.devtool = 'source-map';//при сборке бандла создается map скрипт который нужен чтобы в отладке каждый модуль выглядел как отдельный файл. Иначе сложно дебажить     
    module.exports.optimization= { //минимизация скриптов
        minimize: true
      };
}
