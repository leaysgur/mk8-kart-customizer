'use strict';

/**
 *
 * Deps
 *
 */
var gulp    = require('gulp');
var babel   = require('gulp-babel');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var bower   = require('gulp-bower');
var del     = require('del');
var amdOptm = require('amd-optimize');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');


/**
 *
 * Constants
 *
 */
var PATH = {
    SCRIPT: {
        SRC:        ['./src/script/**/*.js', './src/script/**/*.jsx'],
        SRC_DIR:    './src/script',
        DIST:       './dist/script/**/*.js',
        DIST_DIR:   './dist/script',
        BUNDLE_DIR: './dist/bundle'
    },
    STYLE: {}
};


/**
 *
 * Tasks
 *
 */
gulp.task('clean:script', function() {
    return del([PATH.SCRIPT.DIST_DIR, PATH.SCRIPT.BUNDLE_DIR]);
});

gulp.task('init', ['clean:script', 'compile:script'], function() {
    return bower();
});

gulp.task('compile:script', function () {
    return gulp
        .src(PATH.SCRIPT.SRC)
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(changed(PATH.SCRIPT.DIST_DIR))
        .pipe(babel())
        .pipe(gulp.dest(PATH.SCRIPT.DIST_DIR));
});

gulp.task('watch:script', ['compile:script'], function(){
    return gulp
        .watch(PATH.SCRIPT.SRC, ['compile:script']);
});

gulp.task('bundle:script', function() {
    // SPAが増えたらココに追記
    return gulp
        .src(PATH.SCRIPT.DIST)
        .pipe(amdOptm('app/Main', require(PATH.SCRIPT.DIST_DIR+'/RequireConfig.js')))
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(PATH.SCRIPT.BUNDLE_DIR));
});


/**
 *
 * Aliases
 *
 */
gulp.task('dev', ['watch:script']);
gulp.task('build', ['init', 'bundle:script']);
gulp.task('default', ['init']);
