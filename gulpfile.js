var gulp = require('gulp');
    jade = require('gulp-jade')
    sass = require('gulp-sass')
    connect = require('gulp-connect');


gulp.task('test', ['copy_index', 'images', 'data'], function () {
    console.log('运行成功');
})

gulp.task('sass', function () {
    return gulp.src('sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('jade', function () {
    return gulp.src('jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('dist'))
})


gulp.task('connect', function () {
    connect.server({
        port: 8888,
        root: 'dist',
        livereload: true
    });
});

gulp.task('live', function () {
    gulp.src('dist/**')
        .pipe(connect.reload());
});


gulp.task('see', function () {
    gulp.watch('sass/**', ['sass'])
    gulp.watch('jade/*.jade', ['jade'])
    gulp.watch('dist/**', ['live'])
})


gulp.task('default', ['connect', 'see']);
