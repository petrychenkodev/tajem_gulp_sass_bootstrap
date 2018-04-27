'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./src/maps'))
    .pipe(gulp.dest('./'))
});

gulp.task('browser-sync', function () {
  browserSync.init(null, {
    server: {
      baseDir: './'
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass', 'bs-reload']);
});