module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		usemin: {
			
		},
        concat: {
            // 2. Configuration for concatinating files goes here.
	        dist: {
		        src: [
		            'js/js/*.js', // All JS in the libs folder
		            'js/global.js'  // This specific file
		        ],
		        dest: 'build/production.js',
		    }
        },
        uglify: {
		    build: {
		        src: 'js/build/production.js',
		        dest: 'js/build/production.min.js'
		    }
		},
		cssmin{
			
		},
		watch: {
		    scripts: {
		        files: ['js/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    } 
		},		
		copy: {
			  main: {
			    files: [
			      // includes files within path
			      {expand: true, src: ['path/*'], dest: 'dest/', filter: 'isFile'}
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
    		'useminPrepare',
    		'concat', 
    		'cssmin', 
    		'uglify', 
    		'usemin',
    		'watch'
    ]);

};
