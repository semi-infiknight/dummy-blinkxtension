const path = require('path');

module.exports = {
  entry: './contentScript.ts',  // Entry point is contentScript.ts in the same folder
  output: {
    filename: 'contentScript.js',    // Output filename
    path: path.resolve(__dirname),   // Output path (same folder as all other files)
  },
  resolve: {
    extensions: ['.ts', '.js'],      // Automatically resolve .ts and .js extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/,               // Test for TypeScript files
        use: 'ts-loader',            // Use ts-loader to compile TypeScript
        exclude: /node_modules/,     // Exclude node_modules
      },
      {
        test: /\.css$/,              // Test for CSS files
        use: ['style-loader', 'css-loader'],  // Process CSS with style-loader and css-loader
      },
    ],
  },
  mode: 'production',                // Set the mode to production for optimization
};
