module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        less: {
            prod: {
                options: {
                    paths: ["css"],
                    sourceMap: true,
                    sourceMapFileInline: true,
                    plugins: [
                        new (require('less-plugin-autoprefix'))({browsers: ["last 5 versions"]}),
                        new (require('less-plugin-clean-css'))({compatibility: "ie9", advanced: "true"})
                    ]
                },
                files: {
                    "css/style.css": "less/*.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            picturefill: {
                files: {
                    'js/picturefill.min.js': 'js/picturefill.js'
                }
            }
        },
        watch: {
            files: ['less/*.less'],
            tasks: ['less']
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['less']);
};