'use strict';

module.exports = {
  '@tags': ['basicFeatures', 'video','uiComponent'],

  'Sample navigation': function(browser) {
    browser
      // GIVEN I am on the sample UW Video page
      .url(
//           'http://dev-uw.usatoday.com/video/embed/106079790'
           browser.launchUrl + 
           browser.globals.propertyData.videoNoAdPath + 
           browser.globals.propertyData.noAdSettings
      )
      .waitForElementVisible('#uwVideoPlayer', 5000)

      // WHEN I click on the video play button
      .customGetShadowDomElement(['video-wrap', '#playIcon'], 'click', function() {
        this.pause(1000) // Wait for the 1 second pre-roll AD to expire
        // THEN The video should start playing
        this.customGetShadowDomElement(['video-wrap', '.video.on-top'], 'assert', function() {
          this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#slider'], 'assert', function(result) {
          }) // Assert presence of the pre-roll AD title
          this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#currentTime'], 'assert', function(result) {
            this.elementIdText(result.value.ELEMENT, function(result3) {
              this.pause(1000, function() {
                this.customGetShadowDomElement(['video-wrap', '#player', '#progress', '#currentTime'], 'assert', function(result) {
                  this.elementIdText(result.value.ELEMENT, function(result4) {
                    this.assert.notEqual(result3.value, result4.value); // Validate the timestamp increments
                  })
                })
              }) // Assert presence of the pre-roll AD play time element
            })
          }) // Assert presence of the pre-roll AD play time element
        })
      })

  },

  afterEach: function(browser, done) {
    browser
      .customSauceEnd()
      .end();
    done();
  },

};
