var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssnext = require('cssnext'),
	autoprefixer = require('autoprefixer'),
	precss = require('precss'),
	lost = require('lost'),
	canadianstyle = require('postcss-canadian-stylesheets');

gulp.task('processCSS', function() {
	var processors = [precss, cssnext, lost, autoprefixer, canadianstyle];

	return gulp.src('./css/dev/main.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./css/dist'));
});

gulp.task('watch', function() {
    gulp.watch('css/dev/*.css', ['processCSS']);
});