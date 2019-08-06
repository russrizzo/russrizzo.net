var gulp = require('gulp');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('css', function(){
	gulp.src(['src/scss/main.scss'])
	.pipe(plumber({
		errorHandler: function (error) {
		console.log(error.message);
		this.emit('end');
	}}))
	.pipe(sass())
	.pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
	.pipe(concat('main.built.css'))
	.pipe(gulp.dest('css/'))
});

gulp.task('js', function(){
	return gulp.src('src/js/main.js')
	.pipe(plumber({
		errorHandler: function (error) {
		console.log(error.message);
		this.emit('end');
	}}))
	.pipe(browserify({
		insertGlobals : false
	}))
	.pipe(concat('main.built.js'))
	.pipe(gulp.dest('js/'))
});

gulp.task('head', function(){
	return gulp.src('src/js/head.js')
	.pipe(plumber({
		errorHandler: function (error) {
		console.log(error.message);
		this.emit('end');
	}}))
	.pipe(browserify({
		insertGlobals : false
	}))
	.pipe(concat('head.built.js'))
	.pipe(gulp.dest('js/'))
});

gulp.task('default', function(){
	gulp.watch("src/scss/**/*.scss", ['css']);
	gulp.watch("src/js/**/*.js", ['js', 'head']);
});

gulp.task('all', ['css', 'js', 'head']);
