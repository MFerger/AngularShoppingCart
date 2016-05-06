var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var injectHTML = require('gulp-js-html-inject');

gulp.task('angular.dev', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify({ debug: true }))
    .pipe(injectHTML({
      basepath: 'src/js/templates'
    }))
    .pipe(gulp.dest('public/'))
});

gulp.task('sass', function(){
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('public/'))
});

gulp.task('watch', function(){
  gulp.watch('src/js/**/*.*', ['angular.dev']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['angular.dev', 'sass', 'watch']);
