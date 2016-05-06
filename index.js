var gulp = require('gulp'),
    elixir = require('laravel-elixir'),
    Task = elixir.Task,
    iconFont = require('gulp-iconfont'),
    iconFontCss = require('gulp-iconfont-css'),
    runTimestamp = Math.round(Date.now()/1000),
    extend = require("xtend");


elixir.extend('fonts', function(src, output, options) {

    options = options || {};
    var fontName = '_font_icons',
    elixirConfig = this.config,
    config = {
        font: {
            normalize: true,
            fontName: fontName, // required
            prependUnicode: false, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp // recommended to get consistent builds when watching files
        },
        css: {
            fontName: fontName,
            targetPath: '../../' + elixirConfig.assetsPath + '/' + elixirConfig.css.sass.folder + '/' + fontName + '.scss',
            fontPath: '../fonts/'
        }
    };

    config = extend(config, options);
    console.log(config);

    new Task('fonts', function() {
        return gulp.src(src)
            .pipe(iconFontCss(config.css))
            .pipe(iconFont(config.font))
            .pipe(gulp.dest(output));
    }).watch(src);

});
