import path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

const config: Configuration = {
	 mode: "production",
	  entry: "./src/index.tsx",
	  output: {
	  	path: path.resolve("./dist"),
	  	filename: "[name].[contenthash].js",
    publicPath: "",
    assetModuleFilename: 'images/avatar/[hash][ext][query]'
	  },
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
          },
        },
      },
      {
        test: /\.(scss|css|module.scss|module.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: false
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
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
      "@assets":path.resolve("./src/assets/"),
      "@routes":path.resolve("./src/routes/")
    },
    extensions: [".tsx", ".ts", ".js",".scss",".css"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
  ],
 optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), "..."],
    // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
    // instead of having their own. This also helps with long-term caching, since the chunks will only
    // change when actual code changes, not the webpack runtime.
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },		  
	 
};

export default config;
