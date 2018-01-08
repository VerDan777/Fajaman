const gulp = require('gulp');
const webpack = require('webpack-stream');
const notify = require('gulp-notify');
const webpack2  = require('webpack');

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
    },
    devtool: 'source-map',
    plugins: [
        new webpack2.DefinePlugin({
          'process.env': { 'NODE_ENV': "'production'" }
        }),
        new webpack2.optimize.UglifyJsPlugin()
      ]
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
