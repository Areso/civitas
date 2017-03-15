var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var header = require('gulp-header');
var del = require('del');
var pkg = require('./package.json');
var fs = require('fs');
var replace = require('gulp-replace');

gulp.task('app', ['cleanup_js'], function() {
	return gulp.src([
	  	'src/js/others/functions.js',
		'src/js/constants/default.js',
		'src/js/languages/en.js',
		'src/js/constants/api.js',
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
		'src/js/objects/utils.js',
		'src/js/objects/modules/api.js',
		'src/js/objects/modules/jailer.js',
		'src/js/objects/ui.js',
		'src/js/objects/city.js',
		'src/js/objects/event.js',
		'src/js/objects/building.js',
		'src/js/ui/building.js',
		'src/js/ui/buildings.js',
		'src/js/ui/storage.js',
		'src/js/ui/city.js',
		'src/js/ui/rankings.js',
		'src/js/ui/sendGoods.js',
		'src/js/ui/declareWar.js',
		'src/js/ui/world.js',
		'src/js/ui/advisor.js',
		'src/js/ui/army.js',
		'src/js/ui/trades.js',
		'src/js/ui/window.js',
		'src/js/objects/soldier.js',
		'src/js/objects/ship.js',
		'src/js/objects/army.js',
		'src/js/objects/game.js'
  	])
    .pipe(concat('app.js'))
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('app_minify', ['app'], function() {
	return gulp.src([
		'dist/app.js'
  	])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lib_minify', ['lib'], function() {
	return gulp.src([
		'dist/lib.js'
  	])
    .pipe(concat('lib.min.js'))
    .pipe(uglify({
    	preserveComments: 'license'
  	}))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lib', ['cleanup_js'], function() {
	return gulp.src([
	  	'vendor/js/jquery.js',
		'vendor/js/jquery.ui.js',
		'vendor/js/jquery.scrollto.js',
		'vendor/js/jquery.tipsy.js'
  	])
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', ['cleanup_css'], function() {
	return gulp.src([
	  	'src/css/main.css',
		'src/css/resources.css'
  	])
    .pipe(concat('app.css'))
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css_minify', ['css'], function() {
	return gulp.src([
		'dist/app.css'
  	])
    .pipe(concat('app.min.css'))
    .pipe(cleanCSS())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(replace('__VERSION_NUMBER__', pkg.version + '.' + ((new Date()).getMonth() + 1) + '' + (new Date()).getDate() + '' + (new Date()).getFullYear()))
    .pipe(gulp.dest('dist/'))
});

gulp.task('cleanup_css', function() {
	return del([
		'dist/*.css'
    ]);
});

gulp.task('cleanup_js', function() {
	return del([
		'dist/*.js'
    ]);
});

gulp.task('deploy', ['cleanup_deploy'], function() {
	return true;
});

gulp.task('cleanup_deploy', function() {
	return true;
});

gulp.task('watch', function () {
	gulp.watch("src/**/*.js", ['build_js']);
	gulp.watch("src/**/*.css", ['build_css']);
	gulp.watch("images/**/*.*", ['deploy']);
});

gulp.task('build_js', ['app_minify', 'lib_minify']);

gulp.task('build_css', ['css_minify']);

gulp.task('build', ['build_css', 'build_js', 'deploy']);

gulp.task('default', ['watch', 'build']);
