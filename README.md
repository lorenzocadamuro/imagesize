# Imagesize
Retrieve width and height of an image before it is completely loaded.

Imagesize uses ES6 Promises. I raccomend the polyfill https://github.com/stefanpenner/es6-promise

## Install

```sh
bower install imagesize
```

## Use

```javascript
var image = document.getElementById('foo');

// the first parameter might be also a url
imagesize(image, function(data) {
  console.log('Success', data.width, data.height);
}, function() {
  console.log('Error');
});
```
