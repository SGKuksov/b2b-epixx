/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const config = require('./config');

const static = cb => {
  src(config.js.src)
    .pipe(plumber(config.notify))
    .pipe(dest(config.js.dest));

  cb();
};

exports.static = static;
