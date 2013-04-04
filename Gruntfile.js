/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      assets: {
        src: ['assets/js/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      }
    },
    mocha: {
      options: {
        run: true
      },
      assets: {
        src: ['test/**/*.html']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      assets: {
        files: '<%= jshint.assets.src %>',
        tasks: ['jshint:assets']
      },
      test: {
        files: ['<%= jshint.test.src %>', '<%= mocha.assets.src %>'],
        tasks: ['jshint:test', 'mocha:test']
      }

    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha');

  // Default task.
  grunt.registerTask('default', ['jshint']);

};
