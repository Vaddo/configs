'use strict';

module.exports = function (grunt) {
//
// grunt libraries ---------------------------------------------------
//
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-phplint');
    grunt.loadNpmTasks('grunt-phpmd');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-files-check');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-shell');


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        // globals
        rules: 'tests/rulesets',

        app: {
            root:       '../source',
            source:     '<%= app.root %>/src',
            web:        '<%= app.root %>/web',
            bin:        '<%= app.root %>/bin',
            cache:      '<%= app.root %>/app/cache',
            console:    '<%= app.root %>/app/console',

            compassLib: '<%= app.source %>/My/WebsiteBundle/Resources/public/sass',
            compassLocation1: '<%= app.source %>/My/WebsiteBundle/Resources/public'
        },



//
// load task files ---------------------------------------------------
//
        watch:   grunt.file.readJSON('grunt_tasks/watch.json'),
        phplint: grunt.file.readJSON('grunt_tasks/phplint.json'),
        jshint:  grunt.file.readJSON('grunt_tasks/jshint.json'),
        clean:   grunt.file.readJSON('grunt_tasks/clean.json'),
        phpmd:   grunt.file.readJSON('grunt_tasks/phpmd.json'),

        //
        // WATCHOUT: sassDir and cssDir need to be defined in
        //           for every bundle which should be compiled and
        //           autoprefixed.
        //
        compass:      grunt.file.readJSON('grunt_tasks/compass.json'),
        autoprefixer: grunt.file.readJSON('grunt_tasks/autoprefixer.json'),

        open:        grunt.file.readJSON('grunt_tasks/open-browser.json'),
        files_check: grunt.file.readJSON('grunt_tasks/files-check.json'),
        shell:       grunt.file.readJSON('grunt_tasks/shell.json'),
    });



//
// register tasks ----------------------------------------------------
//
    grunt.registerTask('dev', ['clean',
                               'open:develop',
                               'compass',
                               'autoprefixer',
                               'shell:symlinks',
                               'watch']);

    grunt.registerTask('sym',   ['shell:symlinks']);
    grunt.registerTask('cache', ['clean']);
};
