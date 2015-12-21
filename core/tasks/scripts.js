var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var babel = require("gulp-babel");
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');

var production = require('../gulpfile');

gulp.task('scripts', [ 'scripts.app', 'scripts.vendor' ]);

gulp.task('scripts.app', function () {
	return gulp.src([
		'site/src/js/modules/**/*.js',
		'site/src/js/services/*.js',
		'site/src/js/directives/*.js',
		'site/src/js/controllers/*.js',
		'site/src/js/Router.js',
		'site/src/js/Config.js',
		'site/src/js/Application.js'
	])
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('app.js'))
		.pipe(gulpif(production, uglify()))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('site/assets/js/'));
});

gulp.task('scripts.vendor', function () {
	return gulp.src([
		'site/src/vendor/jquery-2.1.4.min.js',
		'site/src/vendor/jquery.nicescroll.js',
		'bower_components/angular/angular.js',
		'bower_components/angular-animate/angular-animate.js',
		'bower_components/angular-aria/angular-aria.js',
		'bower_components/angular-messages/angular-messages.js',
		'bower_components/angular-material/angular-material.js',
		'bower_components/angular-loading-bar/src/loading-bar.js',
		'site/src/vendor/angular/*.js',
		'site/src/vendor/*.js'
	])
		.pipe(plumber())
		.pipe(concat('vendor.js', { newLine: ';\n' }))
		.pipe(gulpif(production, uglify()))
		.pipe(gulp.dest('site/assets/js/'));
});
