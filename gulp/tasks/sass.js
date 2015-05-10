var gulp         = require('gulp');
var config       = require('../config').sass;
var $            = require('gulp-load-plugins')();

gulp.task('sass', function () {
    // $.sass(config.src)
    // .pipe(sourcemaps.init())
    return $.rubySass('src/styles/main.scss',
                      config.settings)
    .pipe($.autoprefixer({ browsers: ['last 2 version'] }))
    .pipe(gulp.dest(config.dest));
    //    .on('error', handleErrors)
    //.pipe(sourcemaps.write())
        //.pipe(browserSync.reload({stream:true}));
});
