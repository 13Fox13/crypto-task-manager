/* eslint-disable @typescript-eslint/no-require-imports */
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));

