var gulp = require('gulp'),
	tinypng = require('gulp-tinypng-compress');


gulp.task('tinypng', function (done) {
	gulp.src('images/**/*.{png,jpg,jpeg}')
		.pipe(tinypng({
			key: 'JL3eHc9iPMEmSToiK7xy9pm9wLaC3WQQ'
		}))
		.pipe(gulp.dest('img'));
	done();
});
