const gulp = require('gulp');
const ghpages  = require('gulp-gh-pages');

gulp.task('ghpages', ()=> {
    return gulp.src('./src/dist/**/*')
    .pipe(ghpages())
})