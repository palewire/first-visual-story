```{include} _templates/nav.html

```

# Scripts

Next we'll move on to creating a map focused on West 62nd Street and Harvard Boulevard, an intersection in South Los Angeles where four men died in less than a year and a half.

To draw the map we will rely on [Leaflet](http://leafletjs.com), a JavaScript library for creating maps. JavaScript is a programming language that is primarily used to create interactive websites. JavaScript code is typically executed directly by the browser, so it can run on the user's computer, which allows for faster and more responsive websites, as well as a better user experience.

Learning how to write JavaScript and everything it takes to create a Leaflet map is beyond the scope of this class, But, as with CSS, we can cover the broad outlines of how JavaScript code is included in a framework.

## The entrypoint

Most of today's frameworks offer a file that is the starting point for the JavaScript code execution. Commonly known as the entrypoint, it is booted up in your page template when the page loads. In the case of baker, that file is called `app.js` and it is found in the `scripts` directory. You can put whatever JavaScript code you'd like in the folder, but it's the `app.js` file that will be the first to run.

Let's test it out by opening up `app.js` and insert a single, simple line of JavaScript.

```{code-block} javascript
alert("Hello World");
```

Save the file and reload your page. You should see a popup that reads "Hello World," an action triggered by JavaScript's built-in [`alert`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) function.

## Installing dependencies

Before we start writing code there, we'll need to install Leaflet. Since it is maintained by a community of volunteers and not included with Node.js by default, we will need to download it using the `npm` tool we used earlier. That can be done by providing Leaflet's unique identifier [in the Node Package Manager](https://www.npmjs.com/package/leaflet) to the npm install` command.

```bash
npm install leaflet
```

Next we import Leaflet's stylesheets in `styles/app.scss` so that they are also included on our site. We do this by using `@use` and the path to a file.

```{code-block} css
:emphasize-lines: 4

// RESET
// Smooths out the rough edges across browsers
@use './tools/normalize';
@use 'node_modules/leaflet/dist/leaflet';

// VARIABLES
```

Now, back in the `index.html` template, we should create a placeholder in the page template where the map will live. Let's set it right above the charts section we've just finished. We will set the `id` attribute to give our `div` a unique identifer we can use later in our JavaScript.

```{code-block} jinja
:emphasize-lines: 1

<div id="map"></div>

<section>
    <h3>A South L.A. neighborhood stands apart</h3>
    <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>
```

To bring the map to life, open the `app.js` file and paste in the following block of code, which will import our data file and make a simple Leaflet map.

```{code-block} javascript
// Import dependencies
import * as L from 'leaflet';

// Import data
import homicides from '../_data/harvard_park_homicides.json';

// Set the id of the div on the page where the map will go
const divId = undefined;

// Create the map
const map = L.map(divId, {
  scrollWheelZoom: false,
});

// Add a satellite layer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
  {
    minZoom: 13,
  }
).addTo(map);

// Set the center and zoom
map.setView([33.983265, -118.306799], 18);

// Load the data
homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])  // As a pin ...
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name);  // ... with a tooltip
});
```

If you save the file, the code will run but your map will not appear. That's because we need to connect our JavaScript with `div` on our page. Leaflet does this by accepting the `id` element of the division where you'd like to place your map. Edit `app.js` to set the `divId` variable that's now defined to our id. Make sure to put it in quotes.

```{code-block} javascript
:emphasize-lines: 8
// Import dependencies
import * as L from 'leaflet';

// Import data
import homicides from '../_data/harvard_park_homicides.json';

// Set the id of the div on the page where the map will go
const divId = "map";

// Create the map
const map = L.map(divId, {
  scrollWheelZoom: false,
});

// Add a satellite layer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA',
  {
    minZoom: 13,
  }
).addTo(map);

// Set the center and zoom
map.setView([33.983265, -118.306799], 18);

// Load the data
homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])  // As a pin ...
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name);  // ... with a tooltip
});
```

Here's what you should see after you do that.

```{image} _static/hello-tooltips.gif?v=2
:width: 100%
```

## Styling the data

Next let's add some styles to our page to make the circles match the orange color of the dots found on [The Homicide Report](https://homicide.latimes.com/). As we did with the charts, go to the `styles` folder and open `app.scss`. In that file, copy or write the following:

```css
#map path {
  fill: #e64d1f;
  fill-opacity: 0.5;
  stroke-opacity: 0;
}
```

After you save, here's what you'll get.

```{image} _static/orange-circles.png?v=2
:width: 100%
```

## Some final touches

If you want to make the tooltips visible all the time, edit the JavaScript in `scripts/map.js` to make the tooltips "permanent."

```{code-block} javascript
:emphasize-lines: 4

homicides.forEach(obj => {
    L.circleMarker([obj.latitude,  obj.longitude])
      .addTo(map)
      .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});  // ... with a tooltip
});
```
Here they are.

```{image} _static/permanent-tooltips.png?v=2
:width: 100%
```

Finally, let's preface the map with so a headline.

```{code-block} html
:emphasize-lines: 1

<h3>One corner. Four killings</h3>
<div id="map"></div>
```

```{image} _static/map-hed.png?v=2
:width: 100%
```

Then an introductory paragraph.

```{code-block} html
:emphasize-lines: 2

<h3>One corner. Four killings</h3>
<p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
<div id="map"></div>
```

```{image} _static/map-deck.png?v=2
:width: 100%
```

And wrap it all up in a `<section>` tag.

```{code-block} html
:emphasize-lines: 1,5

<section>
    <h3>One corner. Four killings</h3>
    <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
    <div id="map"></div>
</section>
```

```{image} _static/map-section.png?v=2
:width: 100%
```

Congratulations. You've created a custom map. Before we get on to the business of sharing it with the world, we need a couple more pieces here.

Hey. How about a headline?

```{code-block} html
:emphasize-lines: 1

{% block headline %}A South L.A. neighborhood grapples with a wave of violence{% endblock headline %}
{% block byline %}By me{% endblock byline %}
{% block pubdate %}
    <time datetime="2020-03-07" pubdate>Mar. 7, 2020</time>
{% endblock pubdate %}
```

```{image} _static/final-hed.png?v=2
:width: 100%
```

And a real byline.

```{code-block} html
:emphasize-lines: 2

{% block headline %}A South L.A. neighborhood grapples with a wave of violence{% endblock headline %}
{% block byline %}By <a href="https://palewi.re/docs/first-visual-story/">The First Visual Story Tutorial</a>{% endblock byline %}
{% block pubdate %}
    <time datetime="2022-03-05" pubdate>Mar. 5, 2022</time>
{% endblock pubdate %}
```

```{image} _static/final-byline.png?v=2
:width: 100%
```

And let's a write a lead at the top of the content block.

```{code-block} html
:emphasize-lines: 2-4

{% block content %}
<section>
    <p>The area around Harvard Park was the deadliest place for African Americans in Los Angeles County last year, according to <a href="http://homicide.latimes.com/">The Times’ Homicide Report</a>. So far this year, six people have been killed. Most of the victims were black men.</p>
</section>
<section>
    <h3>One corner. Four killings</h3>
    <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
    <div id="map"></div>
</section>
```

```{image} _static/final-lead.png?v=2
:width: 100%
```

Add our work.

```bash
git add .
```

Commit it.

```bash
git commit -m "Added map, headline and chatter"
```

Push to GitHub.

```bash
git push origin main
```

Now we're ready. Let’s do it live.
