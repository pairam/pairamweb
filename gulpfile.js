var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    prettify = require('gulp-jsbeautifier'),
    uglify = require('gulp-uglify'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    less = require('gulp-less');

// Gulp debug tool + usage -> .pipe(uglify().on('error', gutil.log))
var gutil = require('gulp-util');

// LESS task
gulp.task('less', function() {
    return gulp.src('./less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            filename: 'style.less'
        }))
        .pipe($.autoprefixer('last 3 version'))
        .on('error', $.notify.onError({
            title: 'LESS Failed',
            message: 'Error(s) occurred during compile!'
        }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./css'))
        .pipe($.notify({
            message: 'Styles task complete', onLast: true
        }));
});

// minify CSS
gulp.task('minify-css', ['less'], function() {
    gulp.src(['./css/style.css'])
        .pipe($.autoprefixer('last 3 version'))
        .pipe($.minifyCss({
            keepBreaks: false,
            advanced: false, 
            aggressiveMerging: false
        }))
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./css/'));
});

// SASS Build task
gulp.task('styles', function() {
    var s = $.size();

    return gulp.src('./less/style.less')
    .pipe($.less())
    .pipe($.autoprefixer('last 3 version'))
    .pipe($.minifyCss({
        keepBreaks: false,
        aggressiveMerging: false,
        advanced: false
    }))
    .pipe($.rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(s)
    .pipe($.notify({
        onLast: true,
        message: function() {
            return 'Total CSS size ' + s.prettySize;
        }
    }));
});

// concat files
gulp.task('concat', function() {
    gulp.src('./js/src/*.js')
        .pipe($.concat('scripts.js'))
        .pipe(gulp.dest('./js/dist/'));
});

// minify JS
gulp.task('minify-js', ['concat'], function() {
    gulp.src('./js/dist/scripts.js')
        .pipe($.uglify({
            mangle: false
        }))
        .pipe(rename({
            basename: "scripts",
            suffix: ".min",
            extname: ".js"
        }))
        .pipe(gulp.dest('./js/dist/'))
        .pipe($.notify({
            message: 'Scripts task complete', onLast: true
        }))
});

// BUGFIX: warning: possible EventEmitter memory leak detected. 11 listeners added.
require('events').EventEmitter.prototype._maxListeners = 100;

// default task to be run with `gulp` command
// this default task will run BrowserSync & then use Gulp to watch files.
// when a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['concat', 'minify-js', 'less', 'minify-css'], function() {
    gulp.watch(['js/src/*.js'], ['concat', 'minify-js']);
    gulp.watch(['less/**/*.less'], ['less', 'minify-css']);
});

gulp.task('prettify', function() {
    gulp.src(['./*.css', './*.html', './*.js'])
        .pipe(prettify({
            indent_level: 4,
            js: {
                indent_level: 4
            }
        }))
        .pipe(gulp.dest('./'));
});

/**
 * build task:
 * 1. clean /_build folder
 * 2. compile SASS files, minify and uncss compiled css
 * 3. copy and minimize images
 * 4. minify and copy all HTML files into $templateCache
 * 5. build index.html
 * 6. minify and copy all JS files
 * 7. copy fonts
 * 8. show build folder size
 * 
 */
gulp.task('build', function(callback) {
    runSequence(
        'less:build',
        'usemin',
        'build:size',
        callback);
});