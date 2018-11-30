declare module 'laravel-mix' {
  import Webpack = require('webpack')
  import { Options as BrowserSyncOptions } from 'browser-sync'
  import { Options as AutoPreFixerOptions } from 'autoprefixer'
  import { Options as NodeSassOptions } from 'node-sass'

  interface LaravelMix {
    // Javascript
    js(src: string | string[], output: string): LaravelMix
    react(src: string | string[], output: string): LaravelMix

    // Library Code Splitting
    extract(src: Array<string>): LaravelMix

    // BrowserSync
    browserSync(option: string | BrowserSyncOptions): LaravelMix

    // Versioning
    version(): LaravelMix

    // CSS Preprocessors
    less(src: string, output: string, options?: object): LaravelMix
    postCss(src: string, output: string, options: any[]): LaravelMix
    sass(src: string, output: string, options?: NodeSassOptions): LaravelMix
    standaloneSass(src: string, output: string, options?: object): LaravelMix
    stylus(src: string, output: string, options?: object): LaravelMix

    // Copying Files
    copy(from: string | Array<string>, to: string): LaravelMix
    copyDirectory(fromDir: string, toDir: string): LaravelMix

    // OS Notifications
    disableNotifications(): LaravelMix

    // Concatenation and Minification
    combine(src: string[], destination: string): LaravelMix
    babel(src: string[], destination: string): LaravelMix
    minify(src: string | string[]): LaravelMix

    // Autoloading
    autoload(options: { [key: string]: [string, string] }): LaravelMix

    // Event Hooks
    then(cb: (stats?: Webpack.Stats) => void): LaravelMix

    // Quick Webpack Configuration
    webpackConfig(
      config: Webpack.Configuration | ((webpack: typeof Webpack) => void)
    ): LaravelMix

    // Extending Mix
    extend(name: string, extendOption: any): LaravelMix

    // Laravel Mix Options
    options(option: {
      autoprefixer?: boolean | AutoPreFixerOptions
      clearConsole?: boolean
      extractVueStyles?: boolean
      processCssUrls?: boolean
      uglify?: object
      purifyCss?: boolean | object
      postCss?: any[]
      hmrOptions?: {
        host: string
        port: number
      }
    }): LaravelMix
  }

  type CssType = (src: string, output: string, options?: object) => LaravelMix

  var laravelMixType: LaravelMix
  export = laravelMixType
}
