/**
 * Created by Marco on 12/06/2015.
 */
var grunt = require('grunt');

module.exports = {
    getLibrary: function (name) {
        var projects = grunt.config('projects'),
            path = require('path'),
            file = projects.projectDirectory +
                projects.projectConfig +
                '/' + projects.projectConfigFiles[projects.projectConfigFiles.indexOf(name + ".json")];

        return grunt.file.readJSON(path.resolve(file));
    }
};