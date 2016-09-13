var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    Task = elixir.Task,
    iconFont = require('gulp-iconfont'),
    iconFontCss = require('gulp-iconfont-css'),
    runTimestamp = Math.round(Date.now()/1000),
    extendOptions = require('extend-options');


elixir.extend('fonts', function(src, output, options) {

    options = options || {};
    options.font = options.font || {};
    options.css = options.css || {};
    var fontName = '_font_icons';
    options.font.fontName = options.font.fontName || fontName;
    var elixirConfig = this.config,
        config = {
            font: {
                normalize: true,
                fontName: options.font.fontName, // required
                prependUnicode: false, // recommended option
                formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
                timestamp: runTimestamp // recommended to get consistent builds when watching files
            },
            css: {
                fontName: options.font.fontName,
                targetPath: '../../' + elixirConfig.assetsPath + '/' + elixirConfig.css.sass.folder + '/' + options.font.fontName + '.scss',
                fontPath: '../fonts/'
            }
        };

    extendOptions(config.font, options.font);
    extendOptions(config.css, options.css);

    new Task('fonts', function() {
        return gulp.src(src)
            .pipe(iconFontCss(options.css))
            .pipe(iconFont(options.font))
            .pipe(gulp.dest(output));
    }).watch(src);

});
