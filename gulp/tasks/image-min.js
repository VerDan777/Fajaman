const gulp  = require('gulp');
const imageMin = require('gulp-imagemin');

gulp.task('ImageMin', ()=> {
    return gulp.src('./src/dist/img/**/*.{png,jpg, gif}')
    .pipe(imageMin([
        imageMin.optipng({optimizationLevel: 3}),
        imageMin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('build/img'))
})