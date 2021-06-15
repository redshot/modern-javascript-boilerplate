const path = require("path");

// Add or remove `mode: development`
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
};

/**
 * This project has both babel and webpack and it has the ability to bundle javascript from modern javascript into javascript compatible to older browsers
 * Set module.exports and output property to an object
 * The command to run the project in npm run dev, npm run build or depending on the config in package.json
 * npm i -D name-of-package saves the package as devdependency, npm i -S name-of-package saves the package as runtime dependency
 * Webpack will automatically pickup the config file base on its name alone and decide the settings to how to output the bundle
 * development is unminified while producttion mode is minified. if there is no mode indicated webpack will minify it
 * module property takes an object with rules property array that contains an object. each item in rules array can be an object
 * Without @babel/preset-react, npm run build will display an error because it does not know how to handle JSX. JSX is not a valid JavaScript
 *  @babel/preset-env is a collection of babel plugins to transform modern JavaScript code, depending on the target browser we specify in the configuration.
 * Execute `node_modules/.bin/babel ./src/greet.js` in the command line to find out if ES6 is transpiled.
 *  - `node_modules/.bin/babel ./src/greet.js --presets=@babel/preset-env` i is another command to find out if transpiled
 *    - By seeing Object.defineProperty(exports, "__esModule", { value: true });, we will know that this module is a transpile esModule
 *  - Watch 07 Transform Modern JavaScript Features with Babel for more info.
 * Babel loader uses presets to work with different JavaScript flavors and supersets.
 *  We can convert ES6(EcmaScript 2015) into vanilla JavaScript.
 *  The presets array can contain more than one preset, for example we could add react preset to write JSX code in our project.
 */
