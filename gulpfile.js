var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('styles', function() {
  gulp.src('test/styles/main.scss')
    .pipe($.plumber())
    .pipe($.rubySass())
    .pipe($.postcss([require('autoprefixer-core')]));
    .pipe(gulp.dest('test/styles'));
});
