const gulp = require('gulp');
const notify = require('gulp-notify');
const pug = require('gulp-pug2');

gulp.task('PugRender', () => {
    return gulp.src('./src/*.pug')
    .pipe(pug())
    .on('error', notify.onError(function(error) {
        return {
            title: 'Pug',
            message: error.message
        }
    }))
    .pipe(gulp.dest('./src/dist'))
})