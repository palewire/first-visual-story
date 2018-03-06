// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Link = require('../_modules/link/link');
var L = require("leaflet");
var MiniMap = require('leaflet-minimap');

$(function() {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});

var chart = require('./_charts.js');
var map = require("./_map.js");

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.3.1/dist/images/';
