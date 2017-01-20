var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var header = require('gulp-header');
var pkg = require('./package.json');
var fs = require('fs');

gulp.task('app', function() {
	gulp.src([
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
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(gulp.dest('dist/'))
});

gulp.task('lib', function() {
	gulp.src([
	  	'vendor/js/jquery.js',
		'vendor/js/jquery.ui.js',
		'vendor/js/jquery.scrollto.js',
		'vendor/js/jquery.tipsy.js',
		'vendor/js/jquery.classynotty.js'
  	])
    .pipe(concat('lib.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function() {
	gulp.src([
	  	'src/css/main.css',
		'src/css/resources.css'
  	])
    .pipe(concat('app.min.css'))
    .pipe(cleanCSS())
    .pipe(header(fs.readFileSync('HEADER', 'utf8'), { pkg: pkg } ))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', ['build'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['build'], function () {
    browserSync.init({
        proxy: "localhost/city-builder/",
		files: ["dist/app.min.css", "dist/app.min.js", "dist/lib.min.js"]
    });
    gulp.watch(["src/**/*.js", "src/**/*.css"], ['watch']);
});

gulp.task('build', ['css', 'app', 'lib']);

gulp.task('default',['serve']);
