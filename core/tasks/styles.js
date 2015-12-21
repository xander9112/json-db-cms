var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var csso = require('gulp-csso');
var gulpif = require('gulp-if');

var production = require('../gulpfile');
var sass = require('gulp-sass');

gulp.task('styles', function () {
	return gulp.src([
		'bower_components/angular-material/angular-material.scss',
		'site/src/styles/**/*'
	])
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade:  false
		}))
		.pipe(concat('style.css'))
		.pipe(gulpif(production, csso()))
		.pipe(gulp.dest('site/assets/css/'));
});
