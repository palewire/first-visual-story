var d3 = require('d3');

var annualTotals = require('../_data/annual_totals.json');
console.log("ANNUAL TOTALS", annualTotals)


// Make sure you use the # here!
var container = d3.select('#county-homicides');
var width = container.node().offsetWidth;
var height = width * 0.66;
var margin = 10;

var svg = container.append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);


// Initialize the arrays that will hold our lists of data
// var countyHomicides = annualTotals.map(a => a.homicides_total);
// var harvardParkHomicides = annualTotals.map(a => a.homicides_harvard_park);
// var years = annualTotals.map(a => a.year);


// function createChart() {

// }

// var countyChartTitle = '<b>Homicides in L.A. County</b>';
// var hpChartTitle = '<b>Homicides in Harvard Park neighborhood</b>';

// createChart(years, countyHomicides, 'county-homicides', countyChartTitle);
// createChart(years, harvardParkHomicides, 'harvard-park-homicides', hpChartTitle);
