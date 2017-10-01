'use strict';

// Constructor
var Welcome = function() {
  this.name = 'welcome';
  console.log('%s module', this.name);
};

module.exports = Welcome;
