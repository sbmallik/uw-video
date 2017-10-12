'use strict';

module.exports = {
  '@tags': ['dom2','uiComponent'],

  'Sample navigation': function(browser) {

    browser
      // GIVEN I am on the varsity node home page
      .pause(6000)
      .url('https://preps.cincinnati.com/')
      .pause(5000)
      // WHEN I click on the football link for example
      // THEN I should be redirected to the football page
      .clickShadowElement('Football',"innerHTML")
      .assert.urlContains("Football")
      .perform(function(){
        browser.clickShadowElement("Standings","innerHTML")
        browser.assert.urlContains("standings")
      })
  },

  afterEach: function(browser, done) {
    browser
      .customSauceEnd()
      .end();
    done();
  },

};
