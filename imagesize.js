"use strict";

(function(root, factory) {
  // AMD && CommonJS support
  if (typeof define === 'function' && define['amd']) {
    define(function() { return factory; });
  } else if (typeof module !== 'undefined' && module['exports']) {
    module['exports'] = factory;
  } else if (typeof root !== 'undefined') {
    root['imagesize'] = factory;
  }
})(this, function(value, onSuccess, onError) {
  onSuccess = typeof onSuccess === 'function' ? onSuccess : function() {};
  onError = typeof onError === 'function' ? onError : function() {};

  var src = (function(value) {
    if (value) {
      if (typeof value === 'object' && value.nodeType === 1) {
        if ('src' in value) {
          return value.currentSrc || value.src;
        } else {
          return null;
        }
      } else {
        return value;
      }
    }
  })(value);

  var promise = new Promise(function(resolve, reject) {
    if (typeof src === 'string') {
      var image = new Image();

      var cb = function() {
        resolve({
          src: src,
          width: image.width,
          height: image.height
        });

        image.src = '';
      };

      image.onload = cb;
      image.onerror = reject;
      image.src = src;

      var wait = function() {
        if (!image.complete) {
          if (image.width && image.height) {
            cb();
          } else {
            setTimeout(wait);
          }
        }
      };

      wait();
    } else {
      reject();
    }
  });

  promise.then(onSuccess, onError);
});
