'use strict';

module.exports = {
  '@tags': ['shadowDom','uiComponent'],

  'Sample navigation': function(browser) {
    browser
      // GIVEN I am on the varsity node home page
      .url(browser.globals.propertyData.varsityURL)
      // WHEN I click on the first sports link (for example sake)
      // THEN I should be redirected to a specific sports page
      .waitForElementVisible('varsity-sports-app', 5000)
      .customClickShadowRootElement([['varsity-sports-app', 'varsity-front', 'sports-link-list', 'ul li:nth-child(1) a']], function() {
        this.assert.urlContains('CrossCountryBoys'); // Assert target URL
        this.customClickShadowRootElement([['varsity-sports-app', 'nav-selector', 'paper-button']]) // Assert presence of the desired element in the page
      })
  },

  afterEach: function(browser, done) {
    browser
      .customSauceEnd()
      .end();
    done();
  },

};
