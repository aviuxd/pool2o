module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
		copy: {
			target:{
			    files: [
			      // includes files within path
			      {	
			      	expand: true, 
			      	src: ['images/*'], 
			      	dest: 'release/', 
			      	filter: 'isFile'
			      },
			      {	
			      	expand: true, 
			      	src: ['css/*'], 
			      	dest: 'release/', 
			      	filter: 'isFile'
			      },
			      {	
			      	expand: true, 
			      	src: ['js/*'], 
			      	dest: 'release/', 
			      	filter: 'isFile'
			      },
			      {expand: true, src: ['*.html'], dest: 'release'},	
			      
			    ]	
			}
		},
		useminPrepare: {
	    	html: ['release/*.html'],
			options: {
				dest: 'release/build'
			}	
		},
/*
        concat: {
            // 2. Configuration for concatinating files goes here.
	        src: [
	            'js/*.js', // All JS in the libs folder
	        ],
	        dest: 'build/js/optimized.js',
        },
        uglify: {
	        src: 'build/js/optimized.js',
	        dest: 'build/js/optimized.min.js'
		    
		},
		cssmin: {
			  combine: {
			    files: {
			      'build/css/optimized.css': 
			      [
			      	'css/bootstrap.css', 
			      	'css/theme.css',
			      	'css/cover.css',
			      	'css/form.css',
			      	'css/structure.css',
			      	'css/bg.css'
			      	]
			    }
			  },
			  minify: {
			    expand: true,
			    cwd: 'build/css/',
			    src: ['*.css', '!*.min.css'],
			    dest: 'build/css/',
			    ext: '.min.css'
			  }								
		},
*/
/*
		watch: {
			main:{
			    scripts: {
			        files: ['js/*.js'],
			        tasks: ['concat', 'uglify'],
			        options: {
			            spawn: false,
			        }
			    } 				
			}
		},
*/		

		usemin: {
			  html: ['release/*.html'],
			  options: {
			    /* assetsDirs: ['/images'], */
			    dest:		'release'
			  }	
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
	grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
/*     grunt.loadNpmTasks('grunt-contrib-watch'); */
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
	
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', [
    		'copy',
    		'useminPrepare',
    		'concat', 
    		'cssmin', 
    		'uglify', 
    		'usemin',
    		/* 'watch' */
    ]);

};
