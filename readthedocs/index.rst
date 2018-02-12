:tocdepth: 2

==================
First Graphics App
==================

A step-by-step guide to publishing a standalone story from a dataset.

This tutorial will show you how journalists at America’s top news organizations escape rigid content-management systems to publish custom interactive graphics on deadline. You will get hands-on experience in every stage of the development process, writing JavaScript, HTML and CSS within a Node.js framework. You won't stop until you've deployed a working application on the World Wide Web.

******************
What you will make
******************

By the end of this lesson, you will publish an standalone page with a series of graphics examining the high homicide rate in Harvard Park, a small neighborhood in South Los Angeles. You will do so by repurposing data from `a 2017 Los Angeles Times story <http://www.latimes.com/projects/la-me-harvard-park-homicides/>`_ by Nicole Santa Cruz and Cindy Chang.

A working example of what you will make can be found at `ireapps.github.io/first-graphics-app/ <https://ireapps.github.io/first-graphics-app/>`_

*****************
About the authors
*****************

This guide was prepared for training sessions of `Investigative Reporters and Editors (IRE) <http://www.ire.org/>`_
and the `National Institute for Computer-Assisted Reporting (NICAR) <http://data.nicar.org/>`_
by `Dana Amihere <http://damihere.com>`_, `Armand Emamdjomeh <http://emamd.net>`_ and `Ben Welsh <http://palewi.re/who-is-ben-welsh/>`_. It will debut in March 2017 `at NICAR's conference
in Chicago <https://www.ire.org/events-and-training/event/3189/3508/>`_.

Their work was inspired by the footloose spirit of funk music. We urge you to bust free of the computer systems that constrain your creativity. Hit play and get into the groove.  

.. raw:: html

    <iframe src="https://open.spotify.com/embed?uri=spotify:user:227b2koy2xxyb23qliakea75y:playlist:54NS8jCdrgUpzUppUpokSg&theme=white" width="300" height="380" frameborder="0" allowtransparency="true"></iframe>

**********************
Prelude: Prerequisites
**********************

Before you can begin, your computer needs the following tools installed and working:

1. A `command-line interface <https://en.wikipedia.org/wiki/Command-line_interface>`_ to interact with your computer
2. A `text editor <https://en.wikipedia.org/wiki/Text_editor>`_ to work with plain text files
3. Version x.x or greater of the `Node.js <https://nodejs.org/en/>`_ JavaScript runtime
4. The `npm <https://www.npmjs.com>`_ package manager
5. `Git <http://git-scm.com/>`_ version control software and an account at `GitHub.com <http://www.github.com>`_

.. warning::

    Stop and make sure you have all these tools installed and working properly. Otherwise, `you're gonna have a bad time <https://www.youtube.com/watch?v=ynxPshq8ERo>`_.

.. _command-line-prereq:

Command-line interface
----------------------

Unless something is wrong with your computer, there should be a way to open a window that lets you type in commands. Different operating systems give this tool slightly different names, but they all have some form of it.

On Windows you can find the command-line interface by opening the "command prompt." Here are `instructions <https://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/>`_.

On Apple computers, you open the `"Terminal" application <http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line>`_.

Ubuntu Linux comes with a program of the `same name <http://askubuntu.com/questions/38162/what-is-a-terminal-and-how-do-i-open-and-use-it>`_.

Text editor
-----------

A program like Microsoft Word, which can do all sorts of text formatting like change the size and color of words, is not what you need. Do not try to use it.

You need a program that works with simple `"plain text" files <https://en.wikipedia.org/wiki/Text_file>`_, and is therefore capable of editing documents containing Python code, HTML markup and other languages without dressing them up by adding anything extra. Such programs are easy to find and some of the best ones are free, including those below.

For Windows, we recommend installing `Notepad++ <http://notepad-plus-plus.org/>`_.

For Apple computers, try `Atom <https://atom.io>`_ or `Sublime Text <https://www.sublimetext.com/>`_.

In Ubuntu Linux you can stick with the pre-installed `gedit <https://help.ubuntu.com/community/gedit>`_ text editor or install a more sophisticated tool like `Atom <https://atom.io>`_

Node.js
-------

TK

npm
---

TK

Git and GitHub
--------------

`Git <http://git-scm.com/>`_ is a version control program for saving the changes you make to files over time. This is useful when you're working on your own, but quickly becomes essential with large software projects when you work with other developers.

`GitHub <https://github.com/>`_ is a website that hosts git code repositories, both public and private. It comes with many helpful tools for reviewing code and managing projects. It also has some `extra tricks <http://pages.github.com/>`_ that make it easy to publish web pages, which we will use later.

GitHub offers helpful guides for installing Git for `Windows <https://help.github.com/articles/set-up-git#platform-windows>`_, `Macs <https://help.github.com/articles/set-up-git#platform-mac>`_ and `Linux <https://help.github.com/articles/set-up-git#platform-linux>`_.

You can verify it's installed from your command line like so:

.. code-block:: bash

    $ git --version

Once that's done, you should create an account at GitHub, if you don't already have one. `The free plan <https://github.com/pricing>`_ is all that's required to complete this lesson.


********************
Chapter 1: Hello Git
********************

Start by creating a new directory where we can store the code for our project. Name it after our application.

.. code-block:: bash

    # You don't have to type the "$" It's just a generic symbol
    # geeks use to show they're working on the command line.
    $ mkdir first-graphics-app

Jump into the directory it created.

.. code-block:: bash

    $ cd first-graphics-app

Create a new Git repository in the current directory.

.. code-block:: bash

    # "." is a common shortcut to refer to the current directory from the terminal
    $ git init .

Visit `GitHub <http://www.github.com>`_ and create a new public repository named ``first-graphics-app``. Don't check "Initialize with README." You want to start with a blank repository.

Then connect your local directory to GitHub with the following command.

.. code-block:: bash

    $ git remote add origin https://github.com/<yourusername>/first-graphics-app.git

Create your first file, a blank ``README`` with a `Markdown <https://en.wikipedia.org/wiki/Markdown>`_ file extension since that's `the preferred format of GitHub <https://help.github.com/articles/github-flavored-markdown>`_.

.. code-block:: bash

    # Macs or Linux:
    $ touch README.md
    # In Windows fire it up in your text editor right away:
    $ start notepad++ README.md

Open up the README in your text editor and type something in it. Maybe something like:

.. code-block:: markdown

    My first graphics app
    =====================

Make sure to save it. Then officially add the file to your repository for tracking with Git's ``add`` command.

.. code-block:: bash

    $ git add README.md

Log its creation with Git's ``commit`` command. You can include a personalized message after the ``-m`` flag.

.. code-block:: bash

    $ git commit -m "First commit"

If this is your first time using Git, you may be prompted to configure you name and email. If so, take the time now. Then run the ``commit`` command above again.

.. code-block:: bash

    $ git config --global user.email "your@email.com"
    $ git config --global user.name "your name"

Now, finally, push your commit up to GitHub.

.. code-block:: bash

    $ git push origin master

Reload your repository on GitHub and see your handiwork.


**************************
Chapter 2: Hello framework
**************************

Create a Code directory for your work.

.. code-block:: bash

    $ mkdir code


Move in.

.. code-block:: bash

    $ cd code


Create a new directory for your project.

.. code-block:: bash

    $ mkdir first-graphics-app


Use ``npm`` to install `yeoman <http://yeoman.io/>`_ (a tempate and scaffolding system) and `gulp <https://gulpjs.com/>`_ (a task runner).

.. code-block:: bash

    $ sudo npm install -g yo gulp


Use npm to install `yeogurt <https://github.com/larsonjj/generator-yeogurt>`_, our project generator that yeoman will build.

.. code-block:: bash

    $ sudo npm install -g generator-yeogurt


Create a new project.

.. code-block:: bash

    $ yo yeogurt


Be sure to pick "nunjucks" when creating the project.

Fire up the test server

.. code-block:: bash

    $ gulp serve


Visit `localhost:3000 <http://localhost:3000>`_ in your browser.

Replace the content of ``src/index.nunjucks`` with the below line, and see it show up on the live site.

.. code-block:: html

    <h1>Welcome to First Graphics App!</h1>


Open a second terminal and navigate to your code folder.

.. code-block:: bash

    $ cd code
    $ cd first-graphics-app


Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Installed framework"

Push it to GitHub.

.. code-block:: bash

    $ git push origin master


*************************
Chapter 3: Hello template
*************************

Navigate to `localhost:3000/ <http://localhost:3000/>`_.

Make a change to ``index.nunjucks`` by editing the ``content`` block. See it show up.

.. code-block:: nunjucks

    {% block content %}
    <p>Hello World</p>
    {% endblock %}


Open up ``_layouts/base.nunjucks`` and explain how the template inheritance system works.

Make a small change to ``_layouts/base.nunjucks`` and see it come up live.

.. code-block:: nunjucks

    Above content
    {% block content %}{% endblock %}


Replace ``_layouts/base.nunjucks`` with our more polished base template.

.. code-block:: nunjucks

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>First Graphics App</title>
        <link rel="stylesheet" href="styles/main.css">
        <link rel="stylesheet" href="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/base.css?rev=4">
        {% block stylesheets %}{% endblock %}
    </head>
    <body>
        <nav>
            <a href="http://first-graphics-app.readthedocs.org/">
                <img src="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/ire-logo.png">
            </a>
        </nav>
        <header>
            <h1>{% block headline %}{% endblock %}</h1>
            <div class="byline">
                {% block byline %}{% endblock %}
            </div>
            <div class="pubdate">
                {% block pubdate %}{% endblock %}
            </div>
        </header>
        {% block content %}{% endblock %}
        {% block scripts %}{% endblock %}
        <script src="scripts/main.js"></script>
    </body>
    </html>

Fill in a headline and see it show up.

.. code-block:: nunjucks

    {% block headline %}My headline will go here{% endblock %}

Fill in a byline and see it show up.

.. code-block:: nunjucks

    {% block byline %}By me{% endblock %}

Let's do the publication date too while we are at it.

.. code-block:: nunjucks

    {% block pubdate %}
        <time datetime="2017-11-19" pubdate>Nov. 19, 2017</time>
    {% endblock %}

Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Started editing templates"

Push it to GitHub.

.. code-block:: bash

    $ git push origin master


*********************
Chapter 4: Hello data
*********************

Add the `Harvard Park homicides data files <https://raw.githubusercontent.com/ireapps/first-graphics-app/master/src/_data/harvard_park_homicides.json>`_ to ``_data/harvard_park_homicides.json``

Return to ``src/harvard-park-homicides/index.nunjucks`` and print them out on the page.

.. code-block:: nunjucks

    {% block content %}
    {{ site.data.harvard_park_homicides }}
    {% endblock %}

Loop through them and print them all.

.. code-block:: nunjucks

    {% for obj in site.data.harvard_park_homicides %}
        {{ obj }}
    {% endfor %}

Print the last name.

.. code-block:: nunjucks

    {% for obj in site.data.harvard_park_homicides %}
        {{ obj.last_name }}<br>
    {% endfor %}

Add the first name. To have them display more nicely, you can also add a line break in between each one.

.. code-block:: nunjucks

    {% for obj in site.data.harvard_park_homicides %}
        {{ obj.first_name }} {{ obj.last_name }}<br>
    {% endfor %}

Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Printed a list of names from data"

Push it to GitHub.

.. code-block:: bash

    $ git push origin master


**********************
Chapter 5: Hello table
**********************

TK

**********************
Chapter 6: Hello chart
**********************

We have data, but what does it look like? To visualize our data, we're going to use `plotly.js <https://plot.ly/javascript/>`_. Plotly.js is an open source library built on the popular `D3 <https://d3js.org/>`_ library, which powers a lot of the news graphics made with JavaScript you'll see.

First, use npm to install plotly.js.

.. code-block:: bash

    $ npm install -s plotly.js

The ``-s`` argument saves plotly to a dependencies file. That way, if you ever need to go through the install steps for your app again, you can do so easily.

From here, we'll be working in our ``_scripts`` folder. Create a file called ``charts.js`` inside of ``src/_scripts/``.

You can include the libraries we installed (or any JavaScript file!) by using ``require()``.

.. code-block:: javascript

    var Plotly = require('plotly.js');

    // At the end of the charts.js file
    console.log("hello, this is my charts file!")

Then we use the same ``require()`` method to pull our code into ``main.js``.

.. code-block:: javascript

    var chart = require('./charts.js');

Structuring our code this way helps keep things organized, as each file controls one specific part of the page. Need to make an adjustment to your chart? Go to ``charts.js``. Want to tweak the map (which we'll do later)? Look in ``map.js``

Now if you reload your page and go to your inspector (click on the three dots in the top right of Chrome, go down to "More tools" and select "Developer tools"), you should see ``hello, this is my charts file!`` in the console.

TK PICTURE OF INSPECTOR / CONSOLE HERE

What chart should we make? The story points out that Harvard Park experienced an increase in homicides as there was a decrease across the rest of the city. Let's try to visualize that.

First, we need somewhere for our charts to go. In our ``harvard-park-homicides/index.nunjucks`` file, inside of ``{% block content %}`` where you want the chart to go, create a ``div`` element with an id of "city-homicides", and another with an id of "harvard-park-homicides".

.. code-block:: html

    <div id="city-homicides"></div>
    <div id="harvard-park-homicides"></div>

Meanwhile, we need data. Copy the `annual totals data <https://raw.githubusercontent.com/ireapps/first-graphics-app/master/src/_data/annual_totals.json>`_ to ``_data/annual_totals.json``. We can use nunjucks to include our data file directly in the template.

Inside of the ``{% scripts %}`` block:

.. code-block:: html

    {% block scripts %}
    <script>
    var homicides = {% include '_data/annual_totals.json' %}
    </script>
    {% endblock %}

Let's create the bare bones of a function that will make our charts. Back in ``charts.js``:

.. code-block:: javascript

    function createChart(x, y, element) {
        // The code that creates our chart will go here.
    }

This is the start of a function that will take values for the x and y axes, and an HTML element, and create a chart with the data inside the element.

By structuring our code this way, we'll be able to make multiple charts without repeating our code (known as `DRY <https://en.wikipedia.org/wiki/Don%27t_repeat_yourself>`_).

Making a chart in Plotly is simple, but we have to do some data transformation first. Plotly wants the x and y values of the chart to be in arrays, which are like a list of values.

We want to make two charts - one of city homicides and one of killings in Harvard Park. So let's make arrays that will hold those values that we will then provide to our function, as well as the years.

.. code-block:: javascript

    // Initialize the arrays that will hold our lists of data
    var cityHomicides = [];
    var harvardParkHomicides = [];
    var years = [];

    function createChart(x, y, element) {
        // The code that creates our chart will go here.
    }

Then we want to fill our arrays by looping over each item in our ``data`` by using a ``for`` loop. ``.push()`` adds a value into an array.

.. code-block:: javascript

    var cityHomicides = [];
    var harvardParkHomicides = [];
    var years = [];

    for (var i = 0; i < homicides.length; i++) {
      cityHomicides.push(homicides[i]['homicides_total']);
      harvardParkHomicides.push(homicides[i]['homicides_harvard_park']);
      years.push(homicides[i]['year']);
    }

    function createChart(x, y, element) {
        // The code that creates our chart will go here.
    }


Now that we've populated our data, we're ready to work on our chart function. Inside of ``createChart()``, create the settings for our chart. Right now, they're pretty simple, with options for the x and y axis, and specifying the type of the chart.

Below the settings we call ``Plotly.newPlot()`` with our element and settings to create the chart.

.. code-block:: javascript

    function createChart(x, y, element) {

        // Use our x and y arrays for the values of the chart
        var chartSettings = [{
          x: x,
          y: y,
          type: 'bar'
        }];

        // Create the chart
        Plotly.newPlot(element, chartSettings);
    }

If you reload the page, you still won't see anything, because we've created a function, but haven't actually called it.

At the end of your file, type:

.. code-block:: javascript

    // The rest of your code is up here
    createChart(years, cityHomicides, 'city-homicides');

Not bad, right? Now, we can make a second chart by using the Harvard Park data. Be sure to replace the ID of the element you're building the chart in.

.. code-block:: javascript

    // The rest of your code is up here
    createChart(years, harvardParkHomicides, 'harvard-park-homicides');

This is a good start, but we can further customize these charts so they fit better with the rest of the page. Now, let's try to:

- Add axis labels
- Change the colors of the bars
- Change the fonts to match our page
- Give the charts titles
- Display the two charts alongside one another

Let's add labels to our axes. Create a new variable, ``chartLayout`` in your ``createChart`` function. We can then specify properties for ``xaxis`` and yaxis``.

.. code-block:: javascript

    var chartLayout = {
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Homicides'
        }
    };


Then, add ``chartLayout`` as a third argument to ``Plotly.newPlot()``

.. code-block:: javascript

    Plotly.newPlot(element, chartSettings, chartLayout);

Everything in plotly.js is handled by settings like this. For example, to change the markers to an light blue, update ``chartSettings``.

.. code-block:: javascript

    var chartSettings = [{
      x: x,
      y: y,
      type: 'bar',
      // Add the new settings for marker here
      marker: {
        color: '#86c7df'
      }
    }];

Right now, our charts are stacked up on top of each other, which isn't a very nice layout. We can use HTML and CSS to lay out our charts side-by-side.

In ``index.nunjucks``, add a ``div`` element that wraps your charts, and add a ``class`` of ``inline-chart`` to each of your charts.

.. code-block:: html

    <div class="charts-holder">
        <div class="inline-chart" id="city-homicides"></div>
        <div class="inline-chart" id="harvard-park-homicides"></div>
    </div>

This gives us a structure that we can style with CSS. In the ``_scripts`` folder, create a file called ``_charts.scss``. In that file, copy or write the following:

.. code-block:: css

    .inline-chart {
        width: 49%;
        float: left;
    }

You won't see anything yet, because we haven't imported it into our main stylesheet. Use ``@import`` to bring your CSS file into ``main.css``

.. code-block:: css

    // Normalize Styles
    @import 'node_modules/normalize.css/normalize';

    // Import Modules
    @import '../_modules/link/link';

    // Add this to main.scss
    @import '_charts.scss';

Again, this is the same modular structure that allows us to organize our chart styles in a different place from our map styles, for example.

The charts are laid out side-by-side like we want them, but there's way too much space in between them. Luckily, we can adjust the margins in the chart layout. Back in ``_scripts/charts.js``, the following settings should work.

``l``, ``r``, ``t`` and ``b`` stand for left, right, top and bottom margins, respectively.

.. code-block:: javascript

    var chartLayout = {
        xaxis: {
            title: 'Year'
        },
        yaxis: {
            title: 'Homicides'
        },
        // Add the margin here
        margin: {
            l: 45,
            r: 15,
            t: 20,
            b: 30
        }
    };

We can also add a parameter to reduce the height, they're a bit tall.

.. code-block:: javascript
    var chartLayout = {
        // Other properties are above
        // Add a height parameter to the bottom of your file
        height: 250
    };


********************
Chapter 7: Hello map
********************

Install Leaflet with npm.

.. code-block:: base

    $ npm install -s leaflet

Import Leaflet's JavaScript in `_scripts/main.js`.

.. code-block:: javascript

    var L = require("leaflet");

Add a little hack we'll need to get the images to work.

.. code-block:: javascript

    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.3.1/dist/images/';

Import Leaflet's stylesheets in `_styles/main.scss`

.. code-block:: css

    @import 'node_modules/leaflet/dist/leaflet';

Create a placeholder in the page template where the map will live.

.. code-block:: nunjucks

    {% block content %}
    <div id="map"></div>
    {% endblock %}

Add a new file named `map.js` to the `_scripts` directory. Import it in `main.js`.

.. code-block:: javascript

    var map = require("./map.js");

Now in `map.js` paste in the following Leaflet code to generate a simple map.

.. code-block:: javascript

    var map = L.map('map');
    var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    osm.addTo(map);`

Reload the index page to see the results.

Go to Google Maps and find 62nd Street and Harvard Boulevard in South LA. Hold down a click until it gives you the latitude and longitude. Paste those numbers into Leaflet's setView method.

.. code-block:: javascript

    map.setView([33.983265, -118.306799], 15);

Move in the zoom.

.. code-block:: javascript

    map.setView([33.983265, -118.306799], 16);

Add a pin at that point.

.. code-block:: javascript

    var marker = L.marker([33.983265, -118.306799]).addTo(map);

Add a popup.

.. code-block:: javascript

    marker.bindPopup("W. 62nd Street and Harvard Boulevard").openPopup();

At the bottom of the page import in the homicide list as we did with the totals for our chart.

.. code-block:: nunjucks

    var homicides = {% include '_data/harvard_park_homicides.json' %};

Loop through the data in `map.js` and add each point to the map as a circle, just like the real Homicide Report.

.. code-block:: javascript

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
        .addTo(map);
    })

Extend that code to add a tooltip label on each point.

.. code-block:: javascript

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name);
    })

Sprinkle some CSS in our page to make it match the colors.

.. code-block:: nunjucks

    {% block stylesheets %}
    <style>
        path {
            fill: #e64d1f;
            fill-opacity: 0.5;
            stroke-opacity: 0;
        }
    </style>
    {% endblock %}

Now add an option to the tooltip that makes them all visible all the time.

.. code-block:: javascript

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
    })

Now let's add a mini map in the corner yet for context.

Install Leaflet-minimap.

.. code-block:: bash

    $ npm install -s leaflet-minimap

Add it to `_scripts/main.js`.

.. code-block:: javascript

    var MiniMap = require('leaflet-minimap');

Add the stylesheets.

.. code-block:: css

    @import 'node_modules/leaflet-minimap/src/Control.MiniMap';

Create a minimap in the corner

.. code-block:: javascript

    var osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 9
    });
    var mini = new L.Control.MiniMap(osm2, { toggleDisplay: true });
    mini.addTo(map);

Add a deck headline.

.. code-block:: html

    <h3>One corner. Four killings. </h3>

Write a section graf.

.. code-block:: html

    <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>

Wrap it in a section tag.

.. code-block:: html

    <section>
        <h3>One corner. Four killings. </h3>
        <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
        <div id="map"></div>
    </section>


*************************
Chapter 8: Hello Internet
*************************

Build a static version of your site

.. code-block:: bash

    $ gulp --production


Inspect the files in the build directory.

Edit ``package.json`` to build files to docs instead.

.. code-block:: javascript

    "destination": "docs",


Build the static site again.

.. code-block:: bash

    $ gulp --production


Commit and push to GitHub.

.. code-block:: bash

    $ git add package.json
    $ git add docs
    $ git commit -am "Message here"
    $ git push origin master


Go to GitHub config and turn on GitHub Pages with the ``/docs`` on the master branch as the source. Hit save.

Visit `\<your_username\>.github.com/first-graphics-app/ <https://ireapps.github.io/first-graphics-app/>`_.

Visit `\<your_username\>.github.com/first-graphics-app/harvard-park-homicides <https://ireapps.github.io/first-graphics-app/harvard-park-homicides/>`_.
