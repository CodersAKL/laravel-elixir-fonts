var gulp = require('gulp'),
	elixir = require('laravel-elixir'),
	Task = elixir.Task,
	iconFont = require('gulp-iconfont'),
	iconFontCss = require('gulp-iconfont-css'),
	runTimestamp = Math.round(Date.now()/1000),
	fontName = 'icons';


elixir.extend('fonts', function(src, output) {

	new Task('fonts', function() {
		return gulp.src(src)
			.pipe(iconFontCss({
				fontName: fontName,
				// path: elixir.config.assetsPath + '/' + elixir.config.css.sass.folder + '/_' + fontName + '.scss',
				targetPath: '../css/' + fontName + '.css',
				fontPath: '../fonts/'
			}))
			.pipe(iconFont({
				normalize: true,
				fontName: fontName, // required
				prependUnicode: false, // recommended option
				formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
				timestamp: runTimestamp // recommended to get consistent builds when watching files
			}))
			.pipe(gulp.dest(output))
			.pipe(new elixir.Notification('Fonts generated'));
	}).watch(src);

});
