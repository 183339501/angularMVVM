module.exports = function (grunt) {
	
	grunt.initConfig({
		pkg : grunt.file.readJSON("package.json"),
		cssmin : {
			build : {
				src : "css/layout.css",
				dest : "css/layout.min.css"
			}
		},
		uglify: {
		  options: {
		    compress: {
		      warnings: false
		    },
		    mangle: true,
		    preserveComments: 'some'
		  },
		  core: {
		    src: 'js/jquery.all.js',
		    dest: 'js/jquery.all.min.js'
		  }
		}
	});

	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.registerTask("default",["cssmin","uglify"]);
}; 