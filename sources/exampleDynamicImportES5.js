var a = true;

if (a) {
  dynamicLib = require('foo');
} else {
  dynamicLib = require('bar');
}