var d3 = require('d3');

var annualTotals = require('../_data/annual_totals.json');
console.log("ANNUAL TOTALS", annualTotals)


var margin = {top: 20, right:20, bottom:20, left:40};
// Make sure you use the # here!
var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;
var width = containerWidth - margin.right - margin.left;
var height = containerHeight - margin.top - margin.bottom;

var svg = container.append('svg')
            .attr('width', containerWidth)
            .attr('height', containerHeight)
            .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

var xDomain = [
    d3.min(annualTotals, d => d.year),
    d3.max(annualTotals, d => d.year)
];

var yDomain = [
    d3.min(annualTotals, d => d.homicides_total),
    d3.max(annualTotals, d => d.homicides_total)
];

var xScale = d3.scaleLinear()
                .domain(xDomain)
                .range([0, width]);

var yScale = d3.scaleLinear()
                .domain(yDomain)
                .range([height, 0]);

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${height})`)
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);


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
