var dest = "./build";
var src = './src';

var reactify     = require('reactify');
var babelify     = require("babelify");

module.exports = {
  browserSync: {
    server: {
      // Serve up our build folder
      baseDir: [dest, 'mocks']
    }
  },
  sass: {
    src: src + "/styles/main.scss",
    dest: dest + '/styles/',
    settings: {
      style: 'compressed',
      precision: 10,
      //indentedSyntax: true, // Enable .sass syntax!
      //imagePath: 'images', // Used by the image-url helper
      sourcemap: true // inline source maps
    }
  },
  images: {
    src: src + "/images/**/*",
    dest: dest + "/images"
  },
  markup: {
    src: src + "/*.html",
    dest: dest
  },
  browserify: {
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      noparse: ['react/addons', 'reflux', 'fastclick', 'react-router'],
      entries: src + '/scripts/app.jsx',
      dest: dest + '/scripts/',
      outputName: 'app.js',
      transform: [babelify, reactify],
      extensions: ['.jsx'],
      cache: {},
      packageCache: {},
      fullPaths: true
    }]
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
