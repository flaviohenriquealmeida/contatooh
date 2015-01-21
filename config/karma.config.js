// Karma configuration
// Generated on Fri Sep 19 2014 18:15:23 GMT-0300 (BRT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
    'public/vendor/angular/angular.js',
    'public/vendor/angular-mocks/angular-mocks.js',
    'public/vendor/angular-resource/angular-resource.js',
    'public/vendor/angular-route/angular-route.js',
    'public/js/main.js',
    'public/js/controllers/**/*.js',
    'public/js/services/**/*.js',
    'public/js/directives/**/*.js',
    'test/spec/**/*Spec.js',
    'public/js/directives/meus-componentes/*.html'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    preprocessors : {
        'public/js/directives/**/*.html': 'ng-html2js'
    },

    plugins : [
        'karma-chrome-launcher',
        'karma-ng-html2js-preprocessor',
        'karma-phantomjs-launcher',
        'karma-jasmine'
    ],

    ngHtml2JsPreprocessor: {
        moduleName: 'templates',
        stripPrefix: '.*public/'
    },
    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false

  });
};
