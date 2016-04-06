# Laravel Elixir Icon fonts

This is a simple [gulp-iconfont](https://github.com/nfroidure/gulp-iconfont)
 and [gulp-iconfont-css](https://github.com/backflip/gulp-iconfont-css) wrapper for [Laravel Elixir](https://github.com/laravel/elixir).

## Install

Install this package over npm.

```sh
npm install laravel-elixir-fonts --save-dev
```

Require it in your `gulpfile.js` and use it.

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-fonts');

elixir(function(mix) {

  mix.fonts([elixir.config.assetsPath + '/svg/**/*.svg'], elixir.config.publicPath + '/fonts/');

});
```

## How To

If you run `mix.fonts()` without parameters, it looks for all SVG-Files in `resources/assets/svg` (folders included).

The output of the `icons.css` file is in `resources/assets/css`.
The output of your `fonts` is in `public/assets/fonts`.

These are the default paths, they can be overwritten by `elixir.config.assetsPath` and `elixir.config.css.outputFolder` or by pass options. See the [config](https://github.com/laravel/elixir/blob/master/Config.js) file from elixir for more options.

## Options

> Wonders are coming...


