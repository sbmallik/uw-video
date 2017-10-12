var driver;
var results;
var Eyes = require('eyes.selenium').Eyes;
var MatchLevel = require('eyes.sdk/src/MatchSettings').MatchLevel;
var eyes = new Eyes("https://gannetteyes.applitools.com");
var webdriver = require('selenium-webdriver');
var _http = require('selenium-webdriver/http');
var url = require('url');
var sauceHttpConnectUrl = 'http://' + process.env.SAUCE_USERNAME + ':' + process.env.SAUCE_ACCESS_KEY +'@ondemand.saucelabs.com:4444/wd/hub';
var FileLogHandler = require('eyes.selenium').FileLogHandler;

eyes.setLogHandler(new FileLogHandler(true));
eyes.setApiKey(process.env.APPLITOOLS_API_KEY);
eyes.setStitchMode(Eyes.StitchMode.CSS);
eyes.setMatchLevel(MatchLevel.Strict);
eyes.setSaveNewTests(true);
eyes.setForceFullPageScreenshot(true);

module.exports = {
  '@tags': ['fullPage', 'visual'],

    before : function(browser) {
        eyes.setBatch('nightwatch-skeleton-'+browser.globals.propertyData.environment, process.env.APPLITOOLS_BATCH_ID || Date.now());
        browser.session(function(session){
            var client = Promise.resolve(url)
            .then(function (url) {
                return new _http.HttpClient(sauceHttpConnectUrl, null, null);
            });
        var executor = new _http.Executor(client);
        driver = webdriver.WebDriver.attachToSession(executor, session.sessionId);
        eyes.open(driver, 'Applitools', 'nigthwatch-skeleton '+browser.globals.propertyData.environment);
    });
  },

  'Nightwatch-Skeleton Visual Full Screenshot' : function(browser) {
      browser
      // GIVEN the user goes directly to the idaremetoURL page
        .url(browser.globals.propertyData.idaremetoURL)
        .perform(function(done){
            // THEN user takes a FULL screenshots of the current URL
            //      to capture visual an assertation 
            eyes.checkElementBy(webdriver.By.css('body'), null, "Nightwatch-Skeleton Visual Full Screenshoot").then(function(){
            done();
          });
        })
        .perform(function(done) {
          // End visual testing and validate visual correctness.
          eyes.close(false).then(function(results) {
            browser.assert.equal(results.mismatches, 0);
            done();
          });
        });
  },

  afterEach: function(browser, done) {
    browser
      .customSauceEnd()
      .end();
    done();
  }

};
