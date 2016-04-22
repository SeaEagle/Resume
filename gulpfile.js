// 加载gulp库
var gulp = require('gulp');
var sass = require('gulp-sass');

// sass task
gulp.task('sass', function () {
    console.log('Test sass');
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

// watch task
gulp.task('watch', function () {
    console.log('Test watch');
    gulp.watch('sass/**/*.scss', ['sass']);
});

// default task
gulp.task('default', ['watch']);