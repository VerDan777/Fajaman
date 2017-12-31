const gulp = require('gulp');
const webpack = require('webpack-stream');
const notify = require('gulp-notify');

const config = {
    entry: {
        script: './src/js/app.js'
    },
    output: {
        filename:"[name].js"
    },
    module: {
        loaders: [{
            loader: "babel-loader",
            query: {
                presets: ["es2015"]
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

gulp.task('scripts', ()=> {
    return gulp.src('./src/js/app.js')
    .pipe(webpack(config))
    .on('error', notify.onError(function(error) {
        return {
            title: 'Scripts',
            message: error.message
        }
    }))
    .pipe(gulp.dest('./src/dist/'))
})