/*
 * grunt-json-manifest
 * https://github.com/jps/New folder
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
        // '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    manifest: {
      options: {
        debug: false,
        indent: 2,
        sorted: false,
        kind: 'JSON',
        version: '1.7.5',
        dependencies: {
          'amdefine': '0.0.4',
          'chai': '~1.5.0',
          'grunt': '~0.4.0',
          'grunt-contrib-jshint': '~0.1.0',
          'grunt-contrib-watch': '~0.2.0',
          'grunt-mocha-test': '~0.2.0',
          'grunt-release': '~0.2.0',
          'handlebars': '~1.0.9',
          'testem': '~0.2.68'
        }
      },
      component: {
        options: {
          name: 'Component Target',
          styles: [
            "upstage.css"
          ],
          scripts: [],
          images: [],
          fonts: [],
          files: []
        },
        files: {
          'test/actual/one.json': ['test/fixtures/*.*'],
          'test/actual/two.json': ['test/**/*.*']
        }
      },
      yaml: {
        options: {
          name: 'YAML files',
          kind: 'yml',
          styles: [
            "upstage.css"
          ],
          scripts: [],
          images: [],
          fonts: [],
          files: []
        },
        files: {
          'test/actual/circle.yml': ['test/fixtures/*.*'],
          'test/actual/square.yml': ['test/**/*.*']
        }
      },
      main: {
        options: {
          name: 'Main Target'
        },
        files: {
          'test/actual/main.json': ['test/main/*.*']
        }
      },
      theme: {
        options: {
          name: 'Theme Target'
        },
        files: {
          'test/actual/css.json': ['test/fixtures/*.css'],
          'test/actual/js.json': ['test/fixtures/*.js']
        }
      }
    },

    // Configuration to be run (and then tested).
    clean: {
      json: ['test/actual/*.json']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'clean', 'manifest']);

  // By default, lint and run all tests.
  // grunt.registerTask('test', ['default', 'nodeunit']);

};
