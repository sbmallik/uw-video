module.exports = {
    '@tags': ['shopNow', 'functional'],

    '"Shop Now" redirects to an online store.': function(browser) {

      browser
        // GIVEN user navigates to hsSportsAwardsURL
        .url(browser.globals.propertyData.hsSportsAwardsURL)
        .customScrollElementToView('.qa-merch', true, function(result) {
          this.elementIdClick(result.value.ELEMENT, function() {
            this.customChangeWindows(1)
            this.assert.urlContains('collections');
            this.waitForElementVisible('#CollectionSection', 10000)
          })
        })

    },

    afterEach: function(browser, done) {
      browser
        .customSauceEnd()
        .end();
      done();
    }

  };
