<nav>
  <div class="row">
    <div class="sevencol">
      <div class="shingle">
        <a href="https://palewi.re/">
          <div rel="rnews:copyrightedBy rnews:hasSource rnews:providedBy">
            <div about="http://palewi.re/" typeof="rnews:Organization">
              <div property="rnews:name">palewire</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="fivecol last links">
      <ul>
        <li>
          <a href="http://palewi.re/posts/" title="Posts">
            Posts
          </a>
        </li>
        <li>
          <a href="http://palewi.re/work/" title="Work">
            Work
          </a>
        </li>
        <li>
          <a href="http://palewi.re/talks/" title="Talks">
            Talks
          </a>
        </li>
        <li>
          <a href="http://palewi.re/who-is-ben-welsh/" title="Who is Ben Welsh?">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="row topbar">
    <div class="twelvecol last"></div>
</div>

# Charts

To visualize our data, we're going to use the [D3.js](https://d3js.org/) library, which has become the industry standard for creating custom data visualizations. Because it is so flexible and allows for so many different data-driven expressions, D3 powers many of the news graphics made with JavaScript you see online.

:::{note}
We're going to dive straight into the deep end by creating a D3 chart from scratch. It involves a lot of code and will probably seem like overkill.

In fact, it is. D3 gives you a very high level of control over your graphics. It takes a long period of study to master. No one can do in a day.

Our goal in this class is to instead quickly introduce you to D3's basic outlines so you can see how it is being used in the field.
:::

First, return to your terminal and use npm to install D3.

```bash
$ npm install d3@5
```

From here, we'll be working in our `_scripts` folder, where our framework expects us to write JavaScript.

It includes a file called `main.js` which is run every time the page loads. Our framework starts us out with some boilerplate there.

```javascript
// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';

$(() => {
    new Link(); // Activate Link modules logic
    console.log('Welcome to Yeogurt!');
});
```

Rather than write our code directly in there, we are going to create a separate file for our charts. We will call it `_charts.js` and save it inside of `_scripts/`.

:::{note}
Remember the underscore coding convention we talked about befre? Here it is again. We named our new file `_charts.js` with an underscore (`_`) in front because its code will be compiled into `main.js` when the site is baked. Unlike `_charts.js`, `main.js` doesn't have an underscore, because it is the master file that pulls in all the other scripts.

Structuring our code this way helps keep things organized, as each file controls one specific part of the page. Need to make an adjustment to your chart? Go to `_charts.js`.
:::

You can include the libraries we installed (or any JavaScript file!) by using `import`. While with modern versions of D3 you can import only the specific parts of the library needed by your app, we're just going to import the whole library for simplicity.

```javascript
import * as d3 from "d3";

// At the end of the _charts.js file
console.log('hello, this is my charts file!');
```

Now we can use the same `import` method to pull our charts code into `main.js`.

You don't have to use this convention, but it's handy as a visual marker of what files are dependent on others.

```{code-block} javascript
:emphasize-lines: 10

// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import 'core-js';
import 'regenerator-runtime/runtime';
import $ from 'jquery';
import { Link } from '../_modules/link/link';
import './_charts.js';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
```

Now if you reload your page and go to your inspector by right clicking on the page and selecting "inspect", you should see `hello, this is my charts file!` in the console.

```{image} _static/hello-charts.png
:width: 100%
```

Now that we have our tools, it's time for the real work. What chart should we make? The story points out that Harvard Park experienced an increase in homicides at the same time there was a decrease across the rest of the county. Let's try to visualize that.

First, we need somewhere for our charts to live on the page. In our `index.nunjucks` file, inside of `{% block content %}` where you want the chart to appear, create a `div` element with an id of `county-homicides`, and another with an id of `harvard-park-homicides`.

```{code-block} jinja
:emphasize-lines: 11-14

{% extends '_layouts/base.nunjucks' %}

{% block headline %}My headline will go here{% endblock %}
{% block byline %}By me{% endblock %}
{% block pubdate %}
    <time datetime="2018-03-10" pubdate>Mar. 10, 2018</time>
{% endblock %}

{% block content %}

<div class="charts">
  <div class="inline-chart" id="county-homicides"></div>
  <div class="inline-chart" id="harvard-park-homicides"></div>
</div>

<section>
    <h3>Lives lost</h3>
    <p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
    <div class="card-columns">
    {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
        {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
        <div class="card-body">
            <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
                    <strong>
                        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
                    </strong>
                </a>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
        </div>
        </div>
    {% endfor %}
    </div>
</section>
{% endblock %}
```

That's nice, but we can't make a chart without data. Copy the [annual totals data](https://raw.githubusercontent.com/ireapps/first-graphics-app/master/data/annual_totals.json) on GitHub to a new file at `_data/annual_totals.json`. This file contains annual homicide counts for Harvard Park and all of Los Angeles County.

That's nice, but we can't make a chart without data. Copy the [annual totals data](https://raw.githubusercontent.com/ireapps/first-graphics-app/master/data/annual_totals.json) on GitHub to a new file at `_data/annual_totals.json`. This file contains annual homicide counts for Harvard Park and all of Los Angeles County.

We can use the same import syntax to include the data in our `_charts.js` file. Since it's a JSON file it will work right away.

```javascript
import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";
```

We want to make two charts - one of county homicides and one of killings in Harvard Park. Let's start with county homicides. D3 requires us to do a bit of house work before we get started. The first thing we need is a container for our chart to go in. We'll be making these charts in an `<svg>` element, which stands for Scalable Vector Graphic.

The first thing we'll want to do is select the HTML container of the chart with D3, and "append" an `svg` element to it. So, back in `_charts.js`, lets add the following:

```{code-block} javascript
:emphasize-lines: 4-6

import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";

// Make sure you use the # here!
var container = d3.select('#county-homicides');
var svg = container.append('svg')
```

Now if you look in your inspector, you'll see that we've appended an `<svg>` to the element with an ID of `county-homicides`. However, we also need to specify a height and width for the SVG, otherwise it will always just have default dimensions of 300x150, no matter how large our screen or device is.

```{image} _static/chart-empty-svg.png
:width: 100%
```

Let's use `.node()` to access the HTML element and save the width and height of the container to variables. I like to specify the height as a percentage of the width, to get an aspect ratio.

```{code-block} javascript
:emphasize-lines: 6-7

import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";

// Make sure you use the # here!
var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;

var svg = container.append('svg')
```

Now we can use them to set the properties, or "attributes" of the SVG using D3's `.attr()` method. Notice that we can "chain" methods on a selection in D3, which allows our code to be a little more concise.

```{code-block} javascript
:emphasize-lines: 10-11

import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";

// Make sure you use the # here!
var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;

var svg = container.append('svg')
            .attr('width', containerWidth)
            .attr('height', containerHeight)
```

Now if you look, your SVG should be rendered at the appropriate height and width, filling the available space.

```{image} _static/chart-empty-svg-2.png
:width: 100%
```

Two more setup steps before we actually start making our charts. First, if we simply start drawing data onto the SVG, we'll likely see areas where the data clips off the chart. We can avoid this by defining a pre-set margin we'll use throughout the process.

We also create two variables, `chartWidth` and `chartHeight` that refer to the dimensions of the chart with the margins included.

```{code-block} javascript
:emphasize-lines: 4,9-10

import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";

var margin = {top: 20, right:20, bottom:20, left:40};
// Make sure you use the # here!
var container = d3.select('#county-homicides');
var containerWidth = container.node().offsetWidth;
var containerHeight = containerWidth * 0.66;
var chartWidth = containerWidth - margin.right - margin.left;
var chartHeight = containerHeight - margin.top - margin.bottom;

var svg = container.append('svg')
            .attr('width', containerWidth)
            .attr('height', containerHeight)
```

Second, we should add a `<g>`, or "group" tag, where everything else in our chart will go. Add this to the end of your `svg` declaration. We'll also want to give it a `transform` attribute that shifts it slightly according to our margins.

```{code-block} javascript
:emphasize-lines: 5-6

// ... more code is up here
var svg = container.append('svg')
        .attr('width', chartWidth)
        .attr('height', chartHeight)
        .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
```

Adding the `g` tag and shifting it may seem like a weird step, but it's an important step to take to make sure the value labels aren't going to clip off the edges of our charts. To show what this does, this example skips a few steps ahead so you can see elements inside the `g` tag shifted by the margins of the chart.

```{image} _static/chart-g-margins.png
:width: 100%
```

And here's what it looks like without the margins, see how the labels are clipped?

```{image} _static/chart-g-nomargins.png
:width: 100%
```

At this point, we're ready to start drawing our chart. Let's start by creating the "scales" for our data. D3 manages its data by mapping input values from the data, also known as the domain, into output values on the screen, or the range. This creates a scale that transforms the input into the output.

D3 has many different types of scales, for linear, categorical and time-based data. In this case, we'll want a linear scale for the Y axis, and a "band" scale, which is a type of categorical scale useful for bar charts, for the X axis.

I like to calculate the input, or domain, before creating the axes. The domain takes the form of an array with the minimum and maximum value that you want to map: e.g., `[0, 100]` if you're looking at a 100-point grade scale. We can use D3's `min` and `max` helper functions to find this.

If you look at the data in `src/_data/annual_totals.json`, you'll see that each year's data is organized like this:

```javascript
{
  "year":2000,
  "homicides_total":1036,
  "homicides_harvard_park":3
}
```

Since we're charting homicides for the entire county we want the `homicides_total` attribute in our data for the Y axis, and the X axis will be the year. The arrow `=>` is a shorthand method of accessing the `homicides_total` attribute of each object in the annualTotals array.

For the X axis, all we want is an array of the years, e.g.:`[2000, 2001, ...]` so we can call `.map()` on our data to return the year value. `.map()` iterates over every value in an array and returns a value for every item.

```javascript
// The rest of your code is up here

var xDomain = annualTotals.map(d => d.year);
```

For the Y-axis, we want the domain to start at 0, so we can set that manually. We can use D3's `max` method to get the largest value in the dataset.

```javascript
// The rest of your code is up here

var yDomain = [0, d3.max(annualTotals.map(d => d.homicides_total))];
```

If you know the min and max values, you can also set these manually, which can be useful if you want your chart max to be a nice even number.

At the bottom of your file, let's create an `xScale` and `yScale` now. Note that at this point we're also setting the range, or output values, to the range between 0 and the height and width of our SVG.

```javascript
// The rest of your code is up here

var xScale = d3.scaleBand()
  .domain(xDomain)
  .range([0, chartWidth])
  .padding(0.1);

var yScale = d3.scaleLinear()
  .domain(yDomain)
  .range([chartHeight, 0]);
```

Note that the X scale has an additional method, `.padding()`, which specifies how far apart our bars are from one another.

Now that we have scales, we can create our axes. D3 has helper functions for each side of the chart we want our axes on, in this case the left for the Y-axis and bottom for the X-axis. We also assign one of the scales we just created to each axis.

For the Y-axis, we also want to add grid lines and limit the number of ticks that are shown.

```javascript
// The rest of your code is up here

var xAxis = d3.axisBottom(xScale);
var yAxis = d3.axisLeft(yScale)
  .tickSize(-chartWidth)
  .ticks(4);
```

Finally, we append those to the chart by appending a `<g>` tag and "calling" the axis function we just created. I like to give each axis element a class of "axis" and "x" or "y", depending on which axis we're creating.

```javascript
// The rest of your code is up here

svg.append("g")
    .attr("class", "x axis")
    .call(xAxis);

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
```

```{image} _static/chart-xaxis-top.png
:width: 100%
```

Well that doesn't look quite right. The reason the X axis is displaying at the top of the chart is that in SVGs, the coordinate 0,0 is at the top left. So we need to shift, or `translate` the X axis down by the height of the chart. The Y axis is fine where it is.

Replace the code for the X axis with the below.

```{code-block} javascript
:emphasize-lines: 5

// The rest of your code is up here

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", `translate(0,${chartHeight})`)
    .call(xAxis);
```

```{image} _static/chart-xaxis-bottom.png
:width: 100%
```

Now that the axes are there, we're finally ready to draw our bars. D3 handles its data by binding the records to the SVG elements - hence the name: "Data Driven Documents."

The format seems a little strange at first, because you're selecting elements, then binding data to the selection, then creating elements that are bound to the data. You do this by chaining two methods, `.data()`, which determines the data set that you're binding, and `.enter()`, which iterates over the data set.

Since we're making a bar chart, we're going to create a `<rect>` element, and give it a class of `bar`.

:::{note}
If you'd like to know more about how D3 data binding works, Scott Murray has an [excellent explanation and tutorial](https://alignedleft.com/tutorials/d3/binding-data) on his website.
:::

Let's give it a try, by binding our `annualTotals` data to the bars on the chart. Start below the code for your axes. First, let's simply append the `<rect>` elements to the chart

```javascript
// The rest of your code is up here

svg.append('g')
    .attr('class', 'bars')
    .selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
```

```{image} _static/chart-empty-rects.png
:width: 100%
```

Now if you look at your chart... nothing has changed! But open your inspector and look at your SVG - you'll see lots of `<rect>` elements, you just can't see them because they don't have any values for height and width, or x and y position values. Let's do this next.

```{code-block} javascript
:emphasize-lines: 10-13

// The rest of your code is up here

svg.append('g')
    .attr('class', 'bars')
    .selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d.homicides_total))
    .attr('width', xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d.homicides_total))
```

The X value will be determined by the year, and the Y by the `homicides_total` value of each object. The width of each bar is set by a method called `.bandwidth()` on our scale, and the height will scaled corresponding to the number of homicides.

```{image} _static/chart-bars.png
:width: 100%
```

You have a bar chart! At this point we can step back and style out the chart, and leave room for a second chart that shows Harvard Park homicides.

At this point, create a new file in the `_styles` folder, and call it `_charts.scss`.

The first thing we need to do is make the chart smaller - right now it's huge! Add the following CSS rule to `_charts.scss` which will allow the chart to display at roughly half width and leave room for a second chart.

```css
.inline-chart {
    width: 49%;
    display: inline-block;
}
```

If you look at the page now, you'll see that nothing has changed. That's because, like the JavaScript, we need to import the styles that we just created into our `main.scss` file.

You can do that by adding the following line to `main.scss`.

```{code-block} css
:emphasize-lines: 6

// Normalize Styles
@import 'node_modules/normalize.css/normalize';

// Import Modules
@import '../_modules/link/link';
@import './_charts.scss';
```

```{image} _static/chart-half-width.png
:width: 100%
```

Let's also color the bars and clean up some of the lines. If you remember, the bars were `<rect>` elements, and if you use the inspector, you can find the x axis lines we want to remove. Back in `_charts.scss`:

```css
rect {
  fill: #86C7DF;
}

.y .domain {
  display: none;
}

.x .domain {
  display: none;
}

.x .tick line {
  display: none;
}
```

The last thing we want to style is the grid lines - they're too heavy and should fade into the background more. Note that we want to keep the baseline black to indicate that we're starting at 0, so we'll use a fancy CSS selector that says to style every tick line that's not the baseline.

```css
// The rest of your styles are up here
.y .tick:not(:first-of-type) line {
  stroke: #e7e7e7;
}
```

```{image} _static/chart-styled.png
:width: 100%
```

Now we have a nicely styled chart, and we're ready to start on our second one. Do we want to copy everything all over again? No! Instead, we can pull the JavaScript we just wrote into a function that will take our data and an element, and create the chart for us!

Open up `_charts.js` again, and create a function, `createChart`. We'll need to think about this for a second - what are the values that are going to change between the two charts?

- The container element
- The data field used for the homicide counts
- The y-axis values

If we calculate the domain values correctly the Y-axis values should automatically update so we shouldn't have to worry about that too much. So our function should have two arguments - the ID of the container element, and the data field we're using.

```javascript
// the rest of your code is up here
function createChart(el, fieldname) {

}
```

Now, you can copy everything we wrote in `_charts.js` under the `import` line into this function. Your file should look like this now.

```{code-block} javascript
:emphasize-lines: 4,56

import * as d3 from "d3";
import annualTotals from "../_data/annual_totals";

var createChart = (el, fieldname) => {
  var margin = {top: 20, right:20, bottom:20, left:40} ;
  var container = d3.select('#county-homicides');
  var containerWidth = container.node().offsetWidth;
  var containerHeight = containerWidth * 0.66;
  var chartWidth = containerWidth - margin.right - margin.left;
  var chartHeight = containerHeight - margin.top - margin.bottom;

  var svg = container.append('svg')
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

  var xDomain = annualTotals.map(d => d.year);

  var yDomain = [0, d3.max(annualTotals.map(d => d.homicides_total))];

  var xScale = d3.scaleBand()
    .domain(xDomain)
    .range([0, chartWidth])
    .padding(0.1);

  var yScale = d3.scaleLinear()
    .domain(yDomain)
    .range([chartHeight, 0]);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale)
      .tickSize(-chartWidth)
      .ticks(4);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  svg.append('g')
      .attr('class', 'bars')
      .selectAll('.bar')
      .data(annualTotals)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.year))
      .attr('y', d => yScale(d.homicides_total))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(d.homicides_total));
}
```

Now, if you reload your page, your chart will have disappeared! That's because our code is packed away inside a function, which won't run until we call on it.

At the end of the file, let's return to `_charts.js` and call the function with the arguments necessary for the countywide homicides chart. Remember the element id is `county-homicides`, and the field we're using is `homicides_total`.

```javascript
// the rest of your code is up here
createChart("#county-homicides", "homicides_total")
```

You'll see that your chart is back! But the only reason this is actually working is because we've already hard-coded our variables into the script. Let's abstract it out to use the arguments that we're providing.

First, let's change the `container` variable to use the ID we're providing.

```{code-block} javascript
:emphasize-lines: 3

var createChart = (el, fieldname) => {
  var margin = {top: 20, right:20, bottom:20, left:40} ;
  var container = d3.select(el);

  //... the function continues down here
}
```

Now try calling it on the second element we created, with the `homicides_harvard_park` variable as the second argument.

```{code-block} javascript
:emphasize-lines: 2

createChart("#county-homicides", "homicides_total")
createChart("#harvard-park-homicides", "homicides_harvard_park")
```

```{image} _static/chart-twice.png
:width: 100%
```

This gives us the same chart twice, which is expected since we still have the data values hard-coded.

To change this, we'll have to find every instance where we reference the `homicides_total` field directly in the function, and change it to reference the argument we are passing in for the data field.

Note that in many cases we'll have to change the syntax from `d.homicides_total` to `d[fieldname]` - this is because we're referencing a variable and not a specific field.

Luckily, we only have to do this a few times, once where we're calculating the domain, and then where we're setting the y position and heights of the bars.

```{code-block} javascript
:emphasize-lines: 17,50,52

var createChart = (el, fieldname) => {
  var margin = {top: 20, right:20, bottom:20, left:40};
  var container = d3.select(el);
  var containerWidth = container.node().offsetWidth;
  var containerHeight = containerWidth * 0.66;
  var chartWidth = containerWidth - margin.right - margin.left;
  var chartHeight = containerHeight - margin.top - margin.bottom;

  var svg = container.append('svg')
      .attr('width', containerWidth)
      .attr('height', containerHeight)
      .append('g')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)

  var xDomain = annualTotals.map(d => d.year);

  var yDomain = [0, d3.max(annualTotals.map(d => d[fieldname]))];

  var xScale = d3.scaleBand()
    .domain(xDomain)
    .range([0, chartWidth])
    .padding(0.1);

  var yScale = d3.scaleLinear()
    .domain(yDomain)
    .range([chartHeight, 0]);

  var xAxis = d3.axisBottom(xScale);
  var yAxis = d3.axisLeft(yScale)
      .tickSize(-chartWidth)
      .ticks(4);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${chartHeight})`)
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  svg.append('g')
      .attr('class', 'bars')
      .selectAll('.bar')
      .data(annualTotals)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => xScale(d.year))
      .attr('y', d => yScale(d[fieldname]))
      .attr('width', xScale.bandwidth())
      .attr('height', d => chartHeight - yScale(d[fieldname]));
}
```

```{image} _static/chart-side-by-side.png
:width: 100%
```

Now that our charts are smaller and they're right next to each other, we need to clean up those year labels. Since our years are the same in both charts, we can set this manually when we're creating the X axis.

Let's update the `xAxis` variable in `createCharts` to label the first and last bars on the chart, and the 5-year intervals.

```{code-block} javascript
:emphasize-lines: 3

  // ... more code is up here
  var xAxis = d3.axisBottom(xScale)
      .tickValues([2000, 2005, 2010, 2015, 2017]);

  var yAxis = d3.axisLeft(yScale)
      .tickSize(-chartWidth)
      .ticks(4);

  // ... more code is down here
```

```{image} _static/chart-clean-axes.png
:width: 100%
```

This cleans things up a lot! We have some pretty good-looking charts. Our charts need titles, which we can add directly to the HTML. Going back to the `index.nunjucks` file, add the titles in `<h4>` tags inside your chart containers

```{code-block} jinja
:emphasize-lines: 3,6

<div class="charts">
  <div class="inline-chart" id="county-homicides">
    <h4 class="chart-title">County homicides, 2000-2017</h4>
  </div>
  <div class="inline-chart" id="harvard-park-homicides">
    <h4 class="chart-title">Harvard Park homicides, 2000-2017</h4>
  </div>
</div>
```

Let's style those a bit too, add these rules to the bottom of `_styles/_charts.scss`.

```css
.chart-title {
  font-weight: bold;
  font-size: 16px;
  text-align: center;
}
```

```{image} _static/chart-with-title.png
:width: 100%
```

Last, let's add a headline to introduce our charts section.

```{code-block} jinja
:emphasize-lines: 1

<h3>A South L.A. neighborhood stands apart</h3>

<div class="charts">
  <div class="inline-chart" id="county-homicides">
    <h4 class="chart-title">County homicides, 2000-2017</h4>
  </div>
  <div class="inline-chart" id="harvard-park-homicides">
    <h4 class="chart-title">Harvard Park homicides, 2000-2017</h4>
  </div>
</div>
```

```{image} _static/chart-section-headline.png
:width: 100%
```

And an introductory paragraph to say a little bit about what we're looking at.

```{code-block} jinja
:emphasize-lines: 2

<h3>A South L.A. neighborhood stands apart</h3>
<p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>

<div class="charts-holder clearfix">
    <div class="inline-chart" id="county-homicides"></div>
    <div class="inline-chart" id="harvard-park-homicides"></div>
</div>
```

```{image} _static/chart-intro-graf.png
:width: 100%
```

Last, let's wrap our charts HTML in `<section>` tags to keep things orderly.

```{code-block} jinja
:emphasize-lines: 1,9

<section>
    <h3>A South L.A. neighborhood stands apart</h3>
    <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>

    <div class="charts-holder clearfix">
        <div class="inline-chart" id="county-homicides"></div>
        <div class="inline-chart" id="harvard-park-homicides"></div>
    </div>
</section>
```

Congratulations, you've made your charts! Let's commit our changes and move on to our next challenge.

```bash
$ git commit -m "Made my first charts."
$ git push origin master
```

:::{note}
We used D3.js in this class, but there are many other JavaScript charting libraries, each one slightly different. If you want to explore this on your own, here are some other options that generally abstract away the process we used in this class.

- [Vega-lite](https://vega.github.io/vega-lite/)
- [Charts.js](http://www.chartjs.org/) Looks really awesome and abstracts a lot of the pain points of D3 away, but as it only draws to `<canvas>` and we wanted to be able to individually inspect SVG elements, we didn't use it for this class.
- [C3.js](http://c3js.org/) Important to note that this does not seem to support the latest versions of D3.

There are also tools that allow you to use a visual editor, creating charts and other visualizations that you can download and/or embed in your project.

- [Observable](https://beta.observablehq.com) is a relatively new site that allows you to take a more exploratory approach to building your visualizations. Charts and maps update automatically as you update data or settings.
- [Chartbuilder](https://quartz.github.io/Chartbuilder/) from [Quartz](https://qz.com/), is very good for basic, fast charts with light customization.
- [DataWrapper](https://www.datawrapper.de/) allows a range of visualizations beyond basic charts, including scatter plots and maps.
:::

**Extra credit - interactivity!**

Now let's try and make these charts interactive. We want to highlight a bar and display its value whenever a user hovers over it. To do this, we're going to use D3's "event binding."

In our `createChart()` function, we'll want to add a new method, `.on()` to the code snippet where we create out bars.

For now, let's log the value to our console.

```{code-block} javascript
:emphasize-lines: 10-12

svg.append('g')
    .attr('class', 'bars')
    .selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d[fieldname]))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d[fieldname]))
    .on('mouseenter', d => {
        console.log(d[fieldname])
    });
```

Now if you look in your console, you should see the values for each bar being logged when you mouse over.

Now let's use this change each bar's color, and the `mouseleave` event to remove that highlight when the mouse exit.

```{code-block} javascript
:emphasize-lines: 10-15

svg.append('g')
    .attr('class', 'bars')
    .selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d[fieldname]))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d[fieldname]))
    .on('mouseenter', function(d) {
        d3.select(this).classed('highlight', true);
    })
    .on('mouseleave', function(d) {
        d3.select(this).classed('highlight', false);
    });
```

And add the rule for `.highlight` to the CSS.

```css
.highlight {
  fill: #2AB2E4;
}
```

We have interactivity!

```{image} _static/chart-highlighting.gif
```

Now let's add a tooltip. First, in the `createCharts` function, add a line that appends a `<text>` element to the SVG. Place this under the lines where you append your axes to the SVG, but before you add the bars.

```{code-block} javascript
:emphasize-lines: 5-6

svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);

var tooltip = svg.append('text')
    .attr('class', 'chart-tooltip');
```

Now in `_charts.js`, let's go back to our `.on()` statement and try filling out the text element with the proper value, and positioning it. Let's also clear the div when the mouse leaves.

```{code-block} javascript
:emphasize-lines: 13-19,22-23

svg.append('g')
    .attr('class', 'bars')
    .selectAll('.bar')
    .data(annualTotals)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.year))
    .attr('y', d => yScale(d[fieldname]))
    .attr('width', d => xScale.bandwidth())
    .attr('height', d => chartHeight - yScale(d[fieldname]))
    .on('mouseenter', function(d) {
        d3.select(this).classed('highlight', true);

        // centers the text above each bar
        var x = xScale(d.year) + xScale.bandwidth() / 2;
        // the - 5 bumps up the text a bit so it's not directly over the bar
        var y = yScale(d[fieldname]) - 5;

        tooltip.text(d[fieldname])
            .attr('transform', `translate(${x}, ${y})`)
    })
    .on('mouseleave', function(d) {
        d3.select(this).classed('highlight', false);
        tooltip.text('');
    });
```

Now back in our CSS, we can style this out a bit.

```css
.chart-tooltip {
  font-family: Helvetica;
  font-size: 12px;
  text-anchor: middle;
}
```

You have an interactive chart!

```{image} _static/chart-tooltip.gif
:width: 100%
```