'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
       // CSS TASKS ===============================================================
        // process the less file to style.css
        less: {
          build: {
            files: {
              'css/sample.css': 'css/sample.less',
              'css/parallax.css': 'css/parallax.less'
            }
          }
        },
        watch: {
            // if any .less file changes in directory "public/css/" run the "less"-task.
            files: "css/*.less",
            tasks: ['less']
        },
        // watch our node server for changes
        nodemon: {
            dev: {
                script: 'server.js'
            }            
        },
       

        // run watch and nodemon at the same time
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon','watch','less'] // start the tasks nodemon, watch and less
        }   
    });
    //START: DevDependencies
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-concurrent'); // start concurrent which inturn starts nodemon
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    //END: DevDependencies

    // start the task
    grunt.registerTask('default', [
        'concurrent'
    ]);

};