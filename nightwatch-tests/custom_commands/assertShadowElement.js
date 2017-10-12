'use strict';

exports.command = function(keyWord,propertyName) {

  this.execute(function(keyWord,propertyName){
    var elements = document.getElementsByTagName("*");

    function findShadowDomElement (keyWord, elements,propertyName) {
      for (var currentElement of elements) {
        if (currentElement[propertyName] === keyWord) {
          return currentElement;
        } else if (currentElement.shadowRoot !== null && currentElement.shadowRoot !== undefined && currentElement[propertyName] === keyWord) {
          return currentElement;
        } else if (currentElement.shadowRoot !== null && currentElement.shadowRoot !== undefined) {
          var shadowElements = currentElement.shadowRoot.querySelectorAll("* /deep/ *")
          var match = findShadowDomElement(keyWord, shadowElements,propertyName)
          if (match && match.text === keyWord) {
            return match;
          }
        }
      }
    }
    return findShadowDomElement(keyWord, elements,propertyName);

  }, [keyWord,propertyName], function(result){
    this.assert.equal(result.status, 0);
  });
}
