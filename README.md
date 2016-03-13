# Imagesize
Retrieve width and height of an image before it is completely loaded.

Module uses ES6 Promises. I raccomend the polyfill https://github.com/stefanpenner/es6-promise

## Install

```sh
bower install imagesize
```

## Use

```javascript
var image = document.getElementById('foo');

imagesize(image, function(image) {
  console.log('Success', image.width, image.height);
}, function() {
  console.log('Error');
});
```
