/* eslint-disable import/no-extraneous-dependencies */
const { src, dest } = require('gulp');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const svgstore = require('gulp-svgstore');
const config = require('./config');

const svgSprite = cb => {
  src(config.src.svg)
    .pipe(plumber(config.notify))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(dest(config.dest.svg));

  cb();
};

exports.svgSprite = svgSprite;
