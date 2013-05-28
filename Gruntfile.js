// Generated on 2013-05-21 using generator-webapp 0.1.5
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'webroot'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/js{,*/}*.coffee'],
                tasks: ['coffee:dist']
            },
            compass: {
                files: ['<%= yeoman.app %>/css/src/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/css/{,*/}*.css',
                    '<%= yeoman.app %>/js/{,*/}*.js',
                    '<%= yeoman.app %>/img/{,*/}*.{png,jpg,jpeg,webp}'
                ],
                tasks: ['livereload']
            }
        },
        clean: {
            dist: ['<%= yeoman.app %>/css/main.css']
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%= yeoman.app %>/js/{,*/}*.js',
                '!<%= yeoman.app %>/js/vendor/*'
            ]
        },
        coffee: {
            dist: {
                files: [{
                    // rather than compiling multiple files here you should
                    // require them into your main .coffee file
                    expand: true,
                    cwd: '<%= yeoman.app %>/js',
                    src: '*.coffee',
                    dest: '<%= yeoman.app %>/js',
                    ext: '.js'
                }]
            }
        },
        compass: {
            options: {
                sassDir: '<%= yeoman.app %>/css/src',
                cssDir: '<%= yeoman.app %>/css',
                imagesDir: '<%= yeoman.app %>/img',
                javascriptsDir: '<%= yeoman.app %>/js',
                importPath: 'webroot/components',
                relativeAssets: true
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        requirejs: {
            dist: {
                // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    // `name` and `out` is set by grunt-usemin
                    baseUrl: 'webroot/js',
                    optimize: 'none',
                    // TODO: Figure out how to make sourcemaps work with grunt-usemin
                    // https://github.com/yeoman/grunt-usemin/issues/30
                    //generateSourceMaps: true,
                    // required to support SourceMaps
                    // http://requirejs.org/docs/errors.html#sourcemapcomments
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true,
                    //uglify2: {} // https://github.com/mishoo/UglifyJS2
                }
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.app %>/img',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: '<%= yeoman.app %>/img'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    '<%= yeoman.app %>/css/main.css': [
                        '<%= yeoman.app %>/css/{,*/}*.css'
                    ]
                }
            }
        },
        bower: {
            all: {
                rjsConfig: '<%= yeoman.app %>/js/main.js'
            }
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('reload', [
        'clean',
        'coffee',
        'compass:server',
        'livereload-start',
        'watch'
    ]);

    grunt.registerTask('build', [
        'clean',
        'coffee',
        'compass:dist',
        'requirejs',
        'imagemin',
        'cssmin'
    ]);

    grunt.registerTask('default', [
        'clean',
        'coffee',
        'compass:server',
        'livereload-start',
        'watch'
    ]);
};
