/* This command performs a click and returns an element which is enclosed within a shadow DOM.
The command syntax is customClickShadowRootElement(ARRAY_OF_SHADOWROOT_ELEMENT, callback_function).
The array of elements are the ones that contains a shadow_root as a child. 
To locate the desired element all such elements should be listed in a specific order.
The parent level element should be listed first followed by childs.
Optionally a callback function can be added as well.
At the moment this function serves as an interim solution for accessing elements within shadow DOM.
*/
 
'use strict';

exports.command = function(selector, callback) {
  var self = this;

  return this.execute(function(selectors) {
    if (!Array.isArray(selectors)) {
      selectors = [selectors];
    }

    function findElement(selectors) {
      var currentElement = document;
      for (var i = 0; i < selectors.length; i = i+1 ) {
        if (i > 0) {
          currentElement = currentElement.shadowRoot;
        }
        currentElement = currentElement.querySelector(selectors[i]);
        if (!currentElement) {
          break;
        }
      }
      return currentElement;
    }

    if (!(document.body.createShadowRoot || document.body.attachShadow)) {
      selectors = [selectors.join(' ')];
    }

    return findElement(selectors).click();
  }, selector, function(result) {
    this.assert.equal(result.status, 0);
    if (typeof callback === "function") {
      callback.call(self, result);
    }
  })
};
