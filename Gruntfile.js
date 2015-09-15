module.exports = function(grunt) {
    grunt.initConfig({
        auto_install: {
            subdir: {
                options: {
                    cwd: 'node_modules/express/',
                    stdout: true,
                    stderr: true,
                    failOnError: true,
                }
            },
            subdir_2: {
                options: {
                    cwd: '',
                    stdout: true,
                    stderr: true,
                    failOnError: true,
                }
            },
            subdir_3: {
                options: {
                    cwd: 'node_modules/express/public/',
                    stdout: true,
                    stderr: true,
                    failOnError: true,
                }
            }
        },
        karma: {
            unit: {
                configFile: 'node_modules/express/tests/karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS'],
            }
        },
    });

    grunt.loadNpmTasks('grunt-auto-install');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['auto_install', 'karma']);
}
