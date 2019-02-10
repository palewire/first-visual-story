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

// There has to be a better way of doing this
var xDomain = annualTotals.map(d => d.year);

var yDomain = [
    d3.min(annualTotals, d => d.homicides_total),
    d3.max(annualTotals, d => d.homicides_total)
];

var xScale = d3.scaleBand()
                .domain(xDomain)
                .range([0, width])
                .padding(0.1);

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

svg.selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.homicides_total))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => height - yScale(d.homicides_total));


// function createChart() {

// }

// var countyChartTitle = '<b>Homicides in L.A. County</b>';
// var hpChartTitle = '<b>Homicides in Harvard Park neighborhood</b>';

// createChart(years, countyHomicides, 'county-homicides', countyChartTitle);
// createChart(years, harvardParkHomicides, 'harvard-park-homicides', hpChartTitle);
