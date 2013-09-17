/*global desc, task, jake, complete, fail */
(function () {
    "use strict";

    task("default", ["lint", "test"], function () {
        console.log("");
        console.log(colors.green + "------");
        console.log("* OK *");
        console.log("------" + colors.reset);
    });

    desc("Lint Everything");
    task("lint", ["lint node", "lint browser"]);

    task("lint node", [], function () {
        var lint = require("./lint/lint_runner.js");

        var files = new jake.FileList();
        files.include("Jakefile.js");

        var lintOptions = {
            node: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true
        };

        var passed = lint.validateFileList(files.toArray(), lintOptions, {});
        if (!passed) fail(colors.red + "NODE LINT FAILED" + colors.reset);
    });

    task("lint browser", [], function () {
        var lint = require("./lint/lint_runner.js");

        var files = new jake.FileList();
        files.include("../src/scripts/business/**/*.js");
        files.include("../src/scripts/tests/**/*.js");

        var lintOptions = {
            browser: true,
            curly: false,
            eqeqeq: true,
            forin: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            noempty: true,
            nonew: true,
            regexp: true,
            undef: true,
            strict: true,
            trailing: true,
            white: true,
            passfail: true
        };

        var passed = lint.validateFileList(files.toArray(), lintOptions, {});
        if (!passed) fail(colors.red + "BROWSER LINT FAILED" + colors.reset);
    });

    desc("Start Karma");
    task("karma", function () {
        var config = {};
        sh("START node node_modules/karma/bin/karma start");
    });

    desc("Test Everything");
    task("test", ["test client"]);

    desc("Test Browser Code");
    task("test client", [], function () {
        sh("node node_modules/karma/bin/karma run", colors.red + "CLIENT TESTS FAILED" + colors.reset, complete);
    }, { async: true });

    var sh = function (command, errorMessage, callback) {
        console.log("> " + command);

        var stdout = "";
        var process = jake.createExec(command, { printStdout: true, printStderr: true });
        process.on("stdout", function (chunk) {
            stdout += chunk;
            console.log(stdout);
            stdout = "";
        });
        process.on("error", function () {
            fail(errorMessage);
        });
        process.on("cmdEnd", function () {
            console.log();
            callback(stdout);
        });
        process.run();
    };

    var colors = {
        black: '\u001b[30m',
        red: '\u001b[31m',
        green: '\u001b[32m',
        yellow: '\u001b[33m',
        blue: '\u001b[34m',
        magenta: '\u001b[35m',
        cyan: '\u001b[36m',
        white: '\u001b[37m',
        reset: '\u001b[0m'
    };
})();
