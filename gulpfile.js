'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
  return gulp.src('src/styles/main.scss')
    .pipe($.rubySass({style: 'expanded'}))
    .pipe($.autoprefixer('last 3 versions'))
    .pipe($.rename('off-canvas.css'))
    .pipe(gulp.dest('dist'))
    .pipe($.csso())
    .pipe($.rename('off-canvas.min.css'))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('scripts', function() {
  return gulp.src([
    'src/scripts/off-canvas.coffee'
  ])
    .pipe($.coffee())
    .pipe($.concat('off-canvas.js'))
    .pipe(gulp.dest('dist'))
    .pipe($.rename('off-canvas.min.js'))
    .pipe($.uglify({mangle: false}))
    .pipe(gulp.dest('dist'))
    .pipe($.size());
});

gulp.task('clean', function () {
  return gulp.src(['dist'], {read: false}).pipe($.clean());
});

gulp.task('build', ['styles', 'scripts']);

gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('watch', ['build'], function () {
  gulp.watch('src/styles/**/*.scss', ['styles']);
  gulp.watch('src/scripts/**/*.coffee', ['scripts']);
});

gulp.task('test', function () {
  console.log('Not yet available.');
});
