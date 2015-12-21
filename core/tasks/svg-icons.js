var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('svg-icons', function () {
	return gulp.src([
		'site/src/svg-icons/**/*'
	])
		.pipe(plumber())
		.pipe(gulp.dest('site/assets/svg-icons'));
});
