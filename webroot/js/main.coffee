require.config
	paths:
		jquery: '../components/jquery/jquery'
		bootstrap: 'vendor/bootstrap'
		angular: '../components/angular/angular'
	shim:
		jquery:
			exports: 'jquery'
		bootstrap:
			deps: ['jquery']
			exports: 'jquery'
		angular:
			deps: ['jquery']
			exports: 'angular'
		controllers:
			deps: ['angular']
			exports: 'controllers'
		app:
			deps: ['angular', 'controllers']
			exports: 'app'

require [
	'../components/jquery/jquery'
	'vendor/bootstrap'
	'../components/angular/angular'
	'controllers'
	'app'
], (jquery, bootstrap, angular, controllers, app) ->

	console.log 'jQuery JavaScript Library v1.9.1'
	console.log 'Twitter Bootstrap v2.3.1'
	console.log 'CoffeeScript v0.4.0'
	console.log 'Modernizr v2.6.2'
	console.log 'RequireJS v2.1.6'
	console.log 'AngularJS v1.1.4'

	# App here