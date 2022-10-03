var HtmlReporter = require('nightwatch-html-reporter');

/* Same options as when using the built in nightwatch reporter option */
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: './reports/html-reports',// Reports directory
    uniqueFilename: true, // filename is unique by appending a timestamp to the end
    separateReportPerSuite: false, // append the last suite name to the report filename.
    themeName: 'compact',
    reportFilename: 'Automation_results_'
});

module.exports = {
    write: function (results, options, done) {
        reporter.fn(results, done);
    }
};