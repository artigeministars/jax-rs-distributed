import path from "path";
import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from "eslint-webpack-plugin";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import * as webpack from 'webpack';
import * as webpackDevServer from 'webpack-dev-server';

const config: Configuration = {
	mode: "development",
	output: {
		publicPath: "/",
		path: path.resolve("./dist"),
		},
 	entry: "./src/index.tsx",
 	module: {
 	      rules: [
 	      	{
 	      	   test: /\.(ts|js)x?$/i,
 	      	   exclude: /node_modules/,
 	      	   use: {
 	      	       loader: "babel-loader",
 	      	       options: {
 	      	       	presets: [
				      "@babel/preset-env",
				      "@babel/preset-react",
				      "@babel/preset-typescript",
				    ],
 	      	       }
 	      	   }
 	      	
 	      	},
 	      	{
      test: /\.(ts|tsx)?$/,
      loader: "ts-loader",
      exclude: /node_modules/
    },
 	      	 {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
       {
        test: /\.(scss|css|module.scss|module.css)$/,
        /* use: ['style-loader','css-loader','postcss-loader','sass-loader'] */
        use: [
            'style-loader',
            // remove modules: true
           // {loader: 'css-loader', options: {sourceMap: true, importLoaders: 2, modules: true }},
           {loader: 'css-loader', options: {sourceMap: true}},
           {loader: 'postcss-loader', options: {sourceMap: true}},
           {loader: 'sass-loader', options: {sourceMap: true}},
        ],
      
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
 	      ]
 	},
 	 resolve: {
    alias: {
      "@components":path.resolve("./src/components/"),
      "@utils":path.resolve("./src/utils/"),
      "@axios":path.resolve("./src/axios/"),
      "@services":path.resolve("./src/services/"),
      "@models":path.resolve("./src/models/"),
    },
    extensions: [".tsx", ".ts", ".js",".scss",".css",".json"],
  },
 plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      statsFilename: "stats.json",
      generateStatsFile: true,
      // Excludes module sources from stats file so there won't be any sensitive data
      statsOptions: { source: false },
      logLevel: "error",
      defaultSizes: "parsed",
      openAnalyzer: false,
      
       // bundleDir: "../../reports",  
       // reportFilename: "reports",
       // reportTitle: "bundle analysis",
      })
  ], 
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    hot: true
  },


}

export default config;
