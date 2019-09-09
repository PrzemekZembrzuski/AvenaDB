'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('./public/styles/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./public/styles/css'));
  })

gulp.task('sass:watch', function() { gulp.watch('./public/styles/scss/*.scss', gulp.series('sass'));});