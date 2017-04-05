var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var header = require('gulp-header');
var del = require('del');
var pkg = require('./package.json');
var fs = require('fs');
var replace = require('gulp-replace');

gulp.task('app', function() {
	del([
		'dist/application.*.js'
    ]);
	return gulp.src([
	  	'src/js/others/functions.js',
		'src/js/constants/default.js',
		'src/js/languages/en.js',
		'src/js/constants/initial.js',
		/*
		'src/js/constants/api.js',
		*/
		'src/js/constants/diplomacy.js',
		'src/js/constants/nation.js',
		'src/js/constants/climate.js',
		'src/js/constants/personality.js',
		'src/js/constants/army.js',
		'src/js/constants/navy.js',
		'src/js/constants/buildings.js',
		'src/js/constants/cities.js',
		'src/js/constants/events.js',
		'src/js/constants/resources.js',
		'src/js/constants/achievements.js',
		'src/js/helpers/utils.js',
		/*
		'src/js/objects/modules/ai.js',
		'src/js/objects/modules/api.js',
		'src/js/objects/modules/jailer.js',
		'src/js/objects/modules/history.js',
		*/
		'src/js/helpers/ui.js',
		'src/js/objects/core/city.js',
		'src/js/objects/core/city/research.js',
		'src/js/objects/core/city/fame.js',
		'src/js/objects/core/city/espionage.js',
		'src/js/objects/core/city/prestige.js',
		'src/js/objects/core/city/army.js',
		'src/js/objects/core/event.js',
		'src/js/objects/core/building.js',
		'src/js/objects/core/soldier.js',
		'src/js/objects/core/ship.js',
		'src/js/objects/core/window.js',
		'src/js/objects/core/panel.js',
		/*
		'src/js/objects/core/army.js',
		*/
		'src/js/objects/game.js',
		'src/js/definitions/ui/panel/city.js',
		'src/js/definitions/ui/panel/help.js',
		'src/js/definitions/ui/panel/building.js',
		'src/js/definitions/ui/panel/storage.js',
		'src/js/definitions/ui/panel/world.js',
		'src/js/definitions/ui/panel/rankings.js',
		'src/js/definitions/ui/panel/advisor.js',
		'src/js/definitions/ui/panel/army.js',
		'src/js/definitions/ui/panel/buildings.js',
		'src/js/definitions/ui/panel/settlement.js',
		'src/js/definitions/ui/panel/trades.js',
		'src/js/definitions/ui/window/options.js'
  	])
    .pipe(concat('application.debug.js'))
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('app_minify', ['app'], function() {
	return gulp.src([
		'dist/application.debug.js'
  	])
    .pipe(concat('application.min.js'))
    .pipe(uglify())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lib_minify', ['lib'], function() {
	return gulp.src([
		'dist/libraries.debug.js'
  	])
    .pipe(concat('libraries.min.js'))
    .pipe(uglify({
    	preserveComments: 'license'
  	}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lib', function() {
	del([
		'dist/libraries.*.js'
    ]);
	return gulp.src([
	  	'vendor/js/jquery.js',
		'vendor/js/jquery.ui.js',
		'vendor/js/jquery.scrollto.js',
		'vendor/js/jquery.tipsy.js'
  	])
    .pipe(concat('libraries.debug.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function() {
	del([
		'dist/styles.*.js'
    ]);
	return gulp.src([
	  	'src/css/main.css',
		'src/css/resources.css'
  	])
    .pipe(concat('styles.debug.css'))
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css_minify', ['css'], function() {
	return gulp.src([
		'dist/styles.debug.css'
  	])
    .pipe(concat('styles.min.css'))
    .pipe(cleanCSS())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('minify', ['app_minify', 'lib_minify', 'css_minify'], function() {
	return true;
});

gulp.task('watch', function () {
	gulp.watch("src/**/*.js", ['app']);
	gulp.watch("src/**/*.css", ['css']);
	gulp.watch("vendor/**/*.js", ['lib']);
});

gulp.task('build', ['css', 'app', 'lib']);

gulp.task('default', ['watch', 'build']);
