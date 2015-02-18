var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    concatcss = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlreplace = require('gulp-html-replace'),
    rimraf = require('rimraf'),
    sequence = require('gulp-run-sequence'),
    connect = require('gulp-connect');

gulp.task('default', function () {
    connect.server({
        root: './www'
    });
});

gulp.task('build', function (cb) {
    sequence('clean', ['styles', 'js', 'html', 'templates'], 'app', cb);
});

gulp.task('clean', function (cb) {
    rimraf('./dist', cb);
});

gulp.task('styles', function () {
    return gulp.src([
            './www/styles/**/*.css',
            './www/lib/bootstrap/dist/css/bootstrap.css',
            './www/lib/angular-ui-grid/ui-grid.css'
        ])
        .pipe(concatcss('styles.css'))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./tmp'))
});

gulp.task('js', function () {
    return gulp.src([
        './www/lib/angular/angular.js',
        './www/lib/angular-ui-router/release/angular-ui-router.js',
        './www/lib/angular-ui-grid/ui-grid.js',
        './www/app/**/*.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./tmp'))
});

gulp.task('html', function () {
    return gulp.src('./www/index.html')
        .pipe(htmlreplace({
            js: 'app.js',
            css: 'style.css'
        }))
        .pipe(gulp.dest('./tmp'))
});

gulp.task('templates', function () {
    return gulp.src('./www/templates/**/')
        .pipe(gulp.dest('./tmp/templates'))
});

gulp.task('app', function () {
    return gulp.src('./tmp/**/')
        .pipe(gulp.dest('./dist'))
});

// JS
// 1 - jshint
// 2 - uglifyjs
// 3 - concat

// HTML
// 1 - html-replace

// CSS
// 1 - cssmin
// 2 - concatcss
// 3 - autoprefixer

// npm install --save-dev gulp gulp-uglify gulp concat gulp-cssmin gulp-concat-css gulp-autoprefixer gulp-htmlreplace rimraf
