var Plotly = require('plotly.js');

var countyHomicides = [];
var harvardParkHomicides = [];
var years = [];

annualTotals.forEach(function(row) {
  countyHomicides.push(row['homicides_total']);
  harvardParkHomicides.push(row['homicides_harvard_park']);
  years.push(row['year']);
});


function createChart(x, y, element, title) {
  var settings = [{
    x: x,
    y: y,
    type: 'bar',
    marker: {
      color: '#86c7df'
    },
    hoverinfo: 'y'
  }];

  var layout = {
    title: title,
    xaxis: {
      title: 'Year',
      fixedrange: true
    },
    yaxis: {
      fixedrange: true
    },
    // Add the margin here
    margin: {
      l: 45,
      r: 15,
      t: 45,
      b: 30
    },
    height: 250
  };

  // Create the chart
  Plotly.newPlot(element, settings, layout, {displayModeBar: false});
}

var countyChartTitle = 'Homicides in L.A. County';
var hpChartTitle = 'Homicides in Harvard Park neighborhood';

createChart(years, countyHomicides, 'county-homicides', countyChartTitle);
createChart(years, harvardParkHomicides, 'harvard-park-homicides', hpChartTitle);
