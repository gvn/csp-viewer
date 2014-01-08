module.exports = function (grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 2700,
          open: true
        }
      }
    },
    jshint: {
      all: ['*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    jsbeautifier: {
      modify: {
        src: ['*.js'],
        options: {
          config: '.jsbeautifyrc'
        }
      },
      validate: {
        src: ['*.js'],
        options: {
          mode: 'VERIFY_ONLY',
          config: '.jsbeautifyrc'
        }
      }
    },
    jade: {
      production: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          src: 'app/partials/**/*.jade',
          ext: '.html'
        }]
      }
    },
    watch: {
      index: {
        files: ['index.jade'],
        tasks: ['jade:production']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsbeautifier');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['build', 'connect', 'watch']);
  grunt.registerTask('build', ['jade']);

  // Clean code before a commit
  grunt.registerTask('clean', ['jsbeautifier:modify', 'jshint']);

  // Validate code (read only)
  grunt.registerTask('validate', ['jsbeautifier:validate', 'jshint']);

};
