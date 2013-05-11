module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		compass: {
			prod: {
				options: {
					sassDir: 'webroot/css/src',
					cssDir: 'webroot/css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'webroot/css/src',
					cssDir: 'webroot/css'
				}
			}
		},

		jam: {
			prod: {
				src: ['webroot/js/src/*.js'],
				dest: 'webroot/js/main.js'
			},
			dev: {
				src: ['webroot/js/src/*.js'],
				dest: 'webroot/js/main.js',
				options: {
					verbose: true,
					nominify: true,
					wrap: true
				}
			}
		},

		jshint: {
			files: ['Gruntfile.js', 'webroot/js/src/**/*.js']
		},

		watch: {
			css: {
				files: ['webroot/css/src/**/*.scss'],
				tasks: ['compass:dev']
			},
			js: {
				files: ['<%= jam.dev.src %>'],
				tasks: ['jshint', 'jam:dev']
			}
		}
	});

	// tasks from npm
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jam');

	// our tasks
	grunt.registerTask('default', ['compass:dev', 'jshint', 'jam:dev']);
	grunt.registerTask('prod', ['compass:prod', 'jshint', 'jam:prod']);
};
