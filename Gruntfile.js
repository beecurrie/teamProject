module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/custom.js',
        dest: 'js/custom.min.js'
      }
    },
    jshint: {
   all: ['Gruntfile.js', 'js/custom.js', 'js/custom.min/js']
 },
 csslint: {
  strict: {
    options: {
      import: 2
    },
    src: ['css/style.css']
  },
  lax: {
    options: {
      import: false
    },
    src: ['css/style.css']
  }
},
sass: {                              // Task
   dist: {                            // Target
     options: {                       // Target options
       style: 'expanded'
     },
     files: {                         // Dictionary of files
       'css/style.css': 'sass/style.scss'      // 'destination': 'source'
     }
   }
 },
 htmllint: {
    options: {},
    src: [
      'test/fixtures/*.html'
    ],
  },
 watch: {
  scripts: {
    files: ['js/custom.js', 'sass/style.scss', 'index.html', 'Gruntfile.js'],
    tasks: ['jshint', 'sass', 'htmllint', 'csslint'],
    options: {
      spawn: false,
    },
  },
},
});


  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-htmllint');
  grunt.loadNpmTasks('grunt-contrib-watch');





  // Default task(s).
  grunt.registerTask('default', ['jshint', 'csslint', 'sass', 'htmllint', 'watch']);
  grunt.registerTask('ugly', ['uglify']);
};
