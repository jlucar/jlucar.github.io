module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {                  // Task
      dev: {                    // Another target
        options: {
          sassDir: 'styles/scss',
          cssDir: 'styles/css',
          specify: 'styles/scss/common.scss',
          watch: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');

  // Default task(s).
  grunt.registerTask('default', ['compass']);

};
