const gulp = require('gulp');
const run = require('run-sequence');

gulp.task('build', (fn)=> {
    run(
        'clean',
        'styles',
        'scripts',
        'copy',
        'ImageMin',
        fn
    );
});