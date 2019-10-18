const BrowserSyncPlugin = require("browser-sync-webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      // BrowserSync options
      {
        // browse to http://localhost:3000/ during development
        host: "localhost",
        port: 3000,
        // proxy the Webpack Dev Server endpoint
        // (which should be serving on http://localhost:3100/)
        // through BrowserSync
        // for this project it is on port 8000
        proxy: "http://localhost:8000/"
      },
      // plugin options
      {
        // make BrowserSync reload the page every time file changes
        reload: true
      }
    )
  ]
};