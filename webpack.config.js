const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackConcatPlugin = require("webpack-concat-files-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");

const jsArr = [
  path.resolve(__dirname, "src/js/ssm.min.js"),
  path.resolve(__dirname, "src/js/popups.js"),
  path.resolve(__dirname, "src/js/swiper.js"),
  path.resolve(__dirname, "src/js/script.js"),
];

const files = fs.readdirSync(path.join(__dirname, "src"));

const templatesFiles =
  files.filter((el) => /\.html$/.test(el) && el !== "index.html") || [];

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const plugins = [
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new WebpackConcatPlugin({
      allowOptimization: true,
      bundles: [
        {
          src: jsArr,
          dest: "./public/js/script.js",
        },
      ],
    }),
  ];

  if (!isProduction) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        inject: false,
      }),
      new webpack.HotModuleReplacementPlugin()
    );

    templatesFiles.length &&
      templatesFiles.map((item) => {
        plugins.push(
          new HtmlWebpackPlugin({
            filename: `${item}`,
            template: path.resolve(__dirname, `src/${item}`),
            inject: false,
          })
        );
      });
  }
  if (isProduction) {
    plugins.push(
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: "**/*",
            context: path.resolve(__dirname, "src"),
            globOptions: {
              ignore: ["**/*.{js,jsx,scss}"],
            },
          },
        ],
      })
    );
  }

  return {
    mode: argv.mode,

    stats: {
      loggingDebug: ["sass-loader"],
    },
    entry: {
      index: ["./src/js/app/index.jsx", "./src/scss/style.scss"],
    },
    output: {
      path: __dirname + "/public",
      filename: "js/[name].js",
    },
    devtool: isProduction ? "source-map" : "source-map",
    resolve: {
      extensions: ["*", ".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
              options: {
                url: false,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sassOptions: {
                  outputStyle: isProduction ? "compressed" : "expanded",
                },
              },
            },

            "import-glob-loader",
          ],
        },
      ],
    },

    plugins,

    devServer: {
      static: {
        directory: path.join(__dirname, "src"),
      },
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        progress: false,
        logging: "none",
      },
      compress: true,
      port: 9000,
      open: true,
      hot: false,
    },
  };
};
