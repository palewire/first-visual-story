```{include} _templates/nav.html

```

# Charts

To visualize our data, we’re going to use [Datawrapper](https://www.datawrapper.de/), a free online tool that can make charts and maps without code. Its [Datawrapper Academy](https://academy.datawrapper.de/) has tons of documentation for making various types of charts/graphics and maps, if you’re interested in learning more about the tool.

We'll make the charts by following these steps:

1. Create the first chart
2. Create the second chart
3. Add the charts to the page
4. Style the charts section with CSS

## Create the first chart

Once logged into Datawrapper, go to Create New and select “Chart.”

```{image} _static/charts/chart-create-new-chart.png
:width: 100%
```

You will then see a screen asking you to upload data.

You can [upload your data](https://academy.datawrapper.de/article/86-upload-data) by pasting data directly from a table or a csv, you can upload an XLS or CSV file, you can link to a publicly shared Google Sheet with the data or you can link to an external dataset.

```{image} _static/charts/chart-upload-data.png
:width: 100%
```

We’re going to paste in the data. The following CSV data contains annual homicide counts for Harvard Park and all of Los Angeles County. Copy the following data and paste it into the blank text area in Datawrapper.

```
year,homicides_total,homicides_harvard_park
2000,1036,3
2001,1125,2
2002,1196,4
2003,1086,4
2004,1087,6
2005,1104,3
2006,1057,2
2007,892,2
2008,843,6
2009,732,4
2010,654,3
2011,594,1
2012,617,5
2013,569,0
2014,542,2
2015,613,3
2016,637,8
2017,587,6
```

Once pasted, click “Proceed” on the bottom right-hand corner. The next step (“Check & Describe”) will give us a preview of the data in a table. We can look for errors and make sure that Datawrapper is [reading the fields correctly](https://academy.datawrapper.de/article/84-data-column-types) as numbers, dates or text. If you click on a column, it will show you some options on the left-hand side where you can change the type or perform [mathematical functions](https://academy.datawrapper.de/article/103-options-to-change-number-formats-divide-round-prepend-append) to the entire column. You can also quickly see the minimum, maximum, mean and median of the column. There are some more options available in this step, and you can read more about it in the [Datawrapper Academy](https://academy.datawrapper.de/category/87-upload-data).

As you can see, the data we pasted in has three columns (`year`, `homicides_total` and `homicides_harvard_park`).

For our first graphic, we only need `year` and `homicides_total`. Click on Column C, and on the left-hand side, check the box that says “Hide column from visualization.”

```{image} _static/charts/chart-hide-visualization.png
:width: 100%
```

Click “Proceed.”

On the next screen (“Visualize”, you will see a visualization of your data. By default, it will be a line chart. There are several options on the left-hand side. Select “Column Chart.”

```{image} _static/charts/chart-column-chart.png
:width: 100%
```

Next to the “Chart type” tab, there are a couple of options to further refine and annotate our chart. Let’s go to the “Refine” tab.

The “Refine” tab is where you can change the color of the columns, specify a custom range for your chart, select a number format (if you’re working with large numbers, percents, decimals) and more. You can also specify which X-axis labels you want to show.

Our chart is currently showing every other year. On mobile (click the mobile image under “Size” below the chart to preview), we see fewer years. Since we will be using our charts side-by-side, let’s base ourselves on the mobile view. ​

Let’s specify that we want to label the first and last bars on the chart, and the 5-year intervals. That means `2000,2005,2010,2015,2017`. Go ahead and enter those years in the "Custom ticks" field under the “Horizontal axis” section on the left-hand side.

```{image} _static/charts/chart-custom-ticks.png
:width: 100%
```

Now, let’s give our chart a headline. Click on the “Annotate” tab.

In the “Title” field, you’ll see there’s a placeholder for the headline. Replace it with `County homicides, 2000-2017`.

Our chart is a little tall. Let’s change the height to 350 pixels. Under the preview of the chart, in the section titled “Size” make sure the mobile preview is selected and edit the second size field so that it reads `320 x 350`.

The next tab, “Layout” allows us to swap between pre-determined Datawrapper themes (we’ll use the default “Datawrapper” theme for these charts), enable automatic dark mode, and change the way that the footer appears.

Now, let’s go to “Publish & Embed” or click “Proceed” on the bottom left-hand side. Click the big, blue “Publish” button.

Once it’s published, you will see a link and iframe code appear under the “Share & Embed” section. We’ll be using the “Embed code.” We will come back to this screen when we need to copy that code.

## Create the second chart

Let’s build our second chart, with Harvard Park homicides data.

Following the same steps, create a new chart and paste in the same CSV data:

```
year,homicides_total,homicides_harvard_park
2000,1036,3
2001,1125,2
2002,1196,4
2003,1086,4
2004,1087,6
2005,1104,3
2006,1057,2
2007,892,2
2008,843,6
2009,732,4
2010,654,3
2011,594,1
2012,617,5
2013,569,0
2014,542,2
2015,613,3
2016,637,8
2017,587,6
```

This time, instead of hiding the data in Column C, let’s hide the data in Column B (“homicides_total”).

When you proceed to the “Visualize” section, you’ll select “Column Chart” as the chart type again.

Under “Refine,” we will specify the same years as the first chart for the X-axis: `2000,2005,2010,2015,2017`

Under the “Annotate” tab, we will make the title for the chart: “Harvard Park homicides, 2000-2017”

Since we are going to place these charts side-by-side, we’ll want to make sure this second chart is the same height. Change the height to 350px. Under “Size,” select the mobile preview and make the size `320 x 350`.

Continue to “Publish & Embed” or click “Proceed” on the bottom left-hand side, and publish the chart.

## Add the charts to the page

In the `index.html` file, we’ll find a spot below the cards section for the charts. Let’s wrap our charts HTML in `<section>` tags to keep things orderly. We'll also add a headline and short introduction to the section.

```
<section>
  <h2>A South L.A. neighborhood stands apart</h2>
  <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>
  </section>
```

Next, we’ll want to create a container to hold the graphics. We will give this `div` a class of `graphics-container`. Inside it, we'll add two other `divs` with the class `graphic` to hold each graphic.

```
<section>
  <h2>A South L.A. neighborhood stands apart</h2>
  <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>
  <div class="graphics-container">
      <div class="graphic">
	<!-- first graphic’s embed code goes here -->
      </div>
      <div class="graphic">
	<!-- second graphic’s embed code goes here -->
       </div>
  </div>
</section>
```

Now that we have containers for the iframes, let’s go back and get those iframe embed codes and paste them within the `div`s with the class `graphic`.

The iframe embed codes are located in the “Publish & Embed” step of each map in Datawrapper. Click on the clipboard to the right of the embed code field to copy the responsive iframe code.

```{image} _static/charts/chart-embed-code.png
:width: 100%
```

Paste it in place of the html notes in the previous code block example. Your html should look something like this at the end:

```
<section>
  <h2>A South L.A. neighborhood stands apart</h2>
  <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>
  <div class="graphics-container">
      <div class="graphic">
          <iframe title="County homicides, 2000-2017" aria-label="Column Chart" id="datawrapper-chart-XSj9X" src="https://datawrapper.dwcdn.net/XSj9X/5/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="350"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
          </script>
      </div>
      <div class="graphic">
          <iframe title="Harvard Park homicides, 2000-2017" aria-label="Column Chart" id="datawrapper-chart-qvF1G" src="https://datawrapper.dwcdn.net/qvF1G/4/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="350"></iframe><script type="text/javascript">!function(){"use strict";window.addEventListener("message",(function(e){if(void 0!==e.data["datawrapper-height"]){var t=document.querySelectorAll("iframe");for(var a in e.data["datawrapper-height"])for(var r=0;r<t.length;r++){if(t[r].contentWindow===e.source)t[r].style.height=e.data["datawrapper-height"][a]+"px"}}}))}();
          </script>
      </div>
  </div>
</section>
```

At this point, you should see something like this on your page:

```{image} _static/charts/chart-preview-1.png
:width: 100%
```

We want the charts to be positioned side-by-side, so we will need to add some CSS.

## Style the charts section with CSS

Navigate to your app.scss file.

We can get both charts on the same line by using [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Using CSS, we will target the `div` that contains both graphics (`div.graphics-container`) and make each graphic 48% of the width, with some space in between them.

```
div.graphics-container {
  display: flex;
  justify-content: space-between;
  div.graphic {
    flex: 0 1 48%;
    }
}

Now that the charts are next to each other, we can see that despite our resizing in Datawrapper, they are not the same height. We’ll add a few more lines to our CSS to make both iframes the same height (`350px`) and we will also specify with media queries that on screens smaller than `500px` wide, we want the charts to be positioned one after another instead of side-by-side. This will help so that on mobile, they are not super tiny.

```

div.graphics-container {
display: flex;
justify-content: space-between;
@media (max-width: 500px) {
display: block;
}
div.graphic {
flex: 0 1 48%;
@media (max-width: 500px) {
display: block;
margin-bottom: 15px;
}
iframe {
height: 350px !important;
}
}
}

Congratulations, you’ve made your charts!

```{image} _static/charts/chart-preview-2.png
:width: 100%
```

Let's commit our changes and move on to our next challenge.

```bash
$ git commit -m "Made my first charts."
$ git push origin master
```

```{note}
**NOTE***
We used Datawrapper in this class, but there are many other ways to create charts.

There are other tools similar to Datawrapper that allow you to use a visual editor, creating charts and other visualizations that you can download and/or embed in your project.

- [Observable](https://beta.observablehq.com) is a relatively new site that allows you to take a more exploratory approach to building your visualizations. Charts and maps update automatically as you update data or settings.
- [Chartbuilder](https://quartz.github.io/Chartbuilder/) from [Quartz](https://qz.com/), is very good for basic, fast charts with light customization.

There are also JavaScript charting libraries, each one slightly different. If you want to explore these on your own, here are some options:

- [D3](https://d3js.org/)
- [Vega-lite](https://vega.github.io/vega-lite/)
- [Charts.js](http://www.chartjs.org/) Looks really awesome and abstracts a lot of the pain points of D3 away, but as it only draws to `<canvas>` and we wanted to be able to individually inspect SVG elements, we didn't use it for this class.
- [C3.js](http://c3js.org/) Important to note that this does not seem to support the latest versions of D3.
```
