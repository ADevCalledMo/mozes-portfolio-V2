// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: "@mdx-js/loader",
//           options: pluginOptions.options,
//         },
//       ],
//     });

//     return config;
//   },
// };

// // loaders: [
// //   {
// //     test: /.jsx?$/,
// //     loader: "babel-loader",
// //     exclude: /node_modules/,
// //   },
// //   {
// //     test: /\.css$/,
// //     loader: "style-loader!css-loader",
// //   },
// //   {
// //     test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
// //     loader: "url-loader?limit=100000",
// //   },
// // ],
