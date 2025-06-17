module.exports = {
  default: {
    paths: [ "tests/b-features/**/*.feature" ],
    require: [ "tests/c-steps/**/*.js", "support/**/*.js" ],
    formatOptions: {
      snippetInterface: 'async-await',
      colorsEnabled: true
    },
    // Define all the reports to be generated
    format: [
      'html:reports/cucumber-report.html',
      'junit:reports/cucumber-report.xml',
      '@cucumber/pretty-formatter'
    ],
    dryRun: false,
    tags: ""
  }
}