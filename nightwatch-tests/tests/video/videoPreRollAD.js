'use strict';

module.exports = {
  '@tags': ['preRollAD', 'video','uiComponent'],

  'Sample navigation': function(browser) {
    browser
      // GIVEN I am on the sample UW Video page
      .url(
//           'http://dev-uw.usatoday.com/video/embed/106079790'
           browser.launchUrl + 
           browser.globals.propertyData.videoPath + 
           browser.globals.propertyData.preRollAD1min
      )
      .waitForElementVisible('#uwVideoPlayer', 5000)

      // WHEN I click on the video play button
      .customGetShadowDomElement(['video-wrap', '#playIcon'], 'click', function() {
        // THEN The pre-roll AD should display
        this.customGetShadowDomElement(['video-wrap', '.ad.on-top'], 'assert', function() {
//          this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#slider'], 'assert', function() {
          this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#adTitle>div'], 'assert', function(result) {
            this.elementIdText(result.value.ELEMENT, function(result2) {
              this.assert.equal(result2.value, 'Sponsor Message');
            })
          }) // Assert presence of the pre-roll AD title
        })
          this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#currentTime'], 'assert', function(result) {
            this.elementIdText(result.value.ELEMENT, function(result3) {
              this.pause(1000)
              this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#currentTime'], 'assert', function(result) {
                this.elementIdText(result.value.ELEMENT, function(result4) {
                  this.assert.notEqual(result3.value, result4.value); // Validate the timestamp increments
                })
              }) // Assert presence of the pre-roll AD play time element
            })
          }) // Assert presence of the pre-roll AD play time element
//        })
      })

  },

  afterEach: function(browser, done) {
    browser
      .customSauceEnd()
      .end();
    done();
  },

};
