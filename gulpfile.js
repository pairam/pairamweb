var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    prettify = require('gulp-jsbeautifier'),
    runSequence = require('run-sequence'),
    sourcemaps = require('gulp-sourcemaps'),
    less = require('gulp-less');

// minify JS
gulp.task('minify-js', function() {
    gulp.src('js/src/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest('./js/'));
});

// minify CSS
gulp.task('minify-css', function() {
    gulp.src(['./styles/**/*.css', '!./styles/**/*.min.css'])
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.minifyCss({
            keepBreaks: true
        }))
        .pipe(gulp.dest('./styles/'))
        .pipe(gulp.dest('./_build/css/'));
});

// concat files
gulp.task('concat', function() {
    gulp.src('./js/*.js')
        .pipe($.concat('scripts.js'))
        .pipe(gulp.dest('./_build/'));
});

// SASS task, will run when any SCSS files change & BrowserSync
// will auto-update browsers
gulp.task('less', function() {
    return gulp.src('./less/style.less')
        .pipe(sourcemaps.init())
        .pipe(less({
          filename: 'style.less'
        }))
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

// SASS Build task
gulp.task('lessbuild', function() {
    var s = $.size();

    return gulp.src('./less/style.less')
        .pipe($.less({
            style: 'compact'
        }))
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

// BUGFIX: warning: possible EventEmitter memory leak detected. 11 listeners added.
require('events').EventEmitter.prototype._maxListeners = 100;

// default task to be run with `gulp` command
// this default task will run BrowserSync & then use Gulp to watch files.
// when a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['less', 'minify-css'], function() {
    gulp.watch('less/**/*.less', function(file) {
        if (file.type === "changed") {
            reload(file.path);
        }
    });
    gulp.watch(['js/src/*.js'], ['minify-js']);
    gulp.watch('less/**/*.less', ['less', 'minify-css']);
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