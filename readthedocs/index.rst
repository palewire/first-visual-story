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

A working example of what you will make can be found at `ireapps.github.io/first-graphics-app/harvard-park-homicides <https://ireapps.github.io/first-graphics-app/harvard-park-homicides/>`_

*****************
About the authors
*****************

This guide was prepared for training sessions of `Investigative Reporters and Editors (IRE) <http://www.ire.org/>`_
and the `National Institute for Computer-Assisted Reporting (NICAR) <http://data.nicar.org/>`_
by `Dana Amihere <http://damihere.com>`_, `Armand Emamdjomeh <http://emamd.net>`_ and `Ben Welsh <http://palewi.re/who-is-ben-welsh/>`_. It will debut in March 2017 `at NICAR's conference
in Chicago <https://www.ire.org/events-and-training/event/3189/3508/>`_.

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

Create a new page for our app

.. code-block:: bash

    $ yo yeogurt:page harvard-park-homicides


Navigate to `localhost:3000/harvard-park-homicides/ <http://localhost:3000/harvard-park-homicides/>`_.

Make a change to ``harvard-park-homicides/index.nunjucks`` by editing the ``content`` block. See it show up.

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

    {# Custom Configuration #}
    {% block config %}
      {# Setup site's base URL to match the "baseUrl" key within `package.json` #}
      {# Otherwise default to relative pathing #}
      {% set baseUrl = config.baseUrl or './' %}
    {% endblock %}

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>First News App</title>
        <link rel="stylesheet" href="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/base.css">
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
        </header>
        {% block content %}{% endblock %}
        <script src="{{baseUrl}}scripts/main.js"></script>
        {% block scripts %}{% endblock %}
    </body>
    </html>


Fill in a headline and see it show up.

.. code-block:: nunjucks

    {% block headline %}My headline will go here{% endblock %}


Fill in a byline and see it show up.

.. code-block:: nunjucks

    {% block byline %}By me{% endblock %}


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

We'll use two JavaScript libraries to make our charts: `D3 <https://d3js.org/>`_ and `D4 <http://visible.io/>`_. D4 is basicaly a layer on top of D3 to make building simple charts easier.

First, use npm to install the packages. We're installing a "bleeding-edge" version of D4 that's meant to work in modern setups.

.. code-block:: bash

    $ npm install d3
    $ npm install -s git+https://git@github.com/heavysixer/d4.git


From here, we'll be working in our ``_scripts`` folder. Create a file called ``charts.js`` inside of ``src/_scripts/``.

You can include the libraries we installed (or any JavaScript file!) by using ``require()``.

.. code-block:: javascript

    var d3 = require("d3");
    var d4 = require("d4");

    // At the end of the charts.js file
    console.log("hello, this is my charts file!")

Then we use the same ``require()`` method to pull our code into ``main.js``.

.. code-block:: javascript

    var chart = require('./charts.js');

Structuring our code this way helps keep things organized, as each file controls one specific part of the page.







********************
Chapter 7: Hello map
********************

Install Leaflet with npm.

.. code-block:: base

    $ npm install leaflet

Import Leaflet's JavaScript in `_scripts/main.js`.

.. code-block:: javascript

    var L = require("leaflet");

Add a little hack we'll need to get the images to work.

.. code-block:: javascript

    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.3.1/dist/images/';

Import Leaflet's stylesheets in `_styles/main.scss`

.. code-block:: css

    @import 'node_modules/leaflet/dist/leaflet';

Create a starter map.

.. code-block:: nunjucks

    {% block content %}
    <div id="map"></div>
    {% endblock %}

    {% block scripts %}
    <script>
        var map = L.map('map').setView([41.890434, -87.623571], 15);
        var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    		maxZoom: 18,
            minZoom: 5,
    		attribution: 'Map data &copy; OpenStreetMap contributors',
    	});
        osm.addTo(map);
    </script>
    {% endblock %}


Go to Google Maps and find 62nd Street and Harvard Boulevard in South LA. Hold down a click until it gives you the latitude and longitude. Paste those numbers into Leaflet's setView method.

.. code-block:: javascript

    var map = L.map('map').setView([33.983265, -118.306799], 15);


Move in the zoom.

.. code-block:: javascript

    var map = L.map('map').setView([33.983265, -118.306799], 16);


Add a pin.

.. code-block:: javascript

    var marker = L.marker([33.983265, -118.306799]).addTo(map);


Add a popup.

.. code-block:: javascript

    marker.bindPopup("W. 62nd Street and Harvard Boulevard").openPopup();


Install Leaflet-minimap

.. code-block:: bash

    $ npm install leaflet-minimap

Add it to `_scripts/main.js`.

.. code-block:: javascript

    var MiniMap = require('leaflet-minimap');

Add the stylesheets.

.. code-block:: css

    @import 'node_modules/leaflet-minimap/src/Control.MiniMap';

Create a minimap in the corner

.. code-block:: javascript

    var osm2 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 9,
        attribution: 'Map data &copy; OpenStreetMap contributors',
    });
    var mini = new L.Control.MiniMap(osm2, { toggleDisplay: true });
    mini.addTo(map);


Create a point for each of the four people who have died on that corner.

.. code-block:: nunjucks

    {% for obj in site.data.harvard_park_homicides %}
        {% if obj.death_year > 2015 %}
            L.marker([{{ obj.latitude }},  {{ obj.longitude }}])
              .addTo(map)
              s.bindPopup("{{ obj.first_name }} {{ obj.last_name }}");
        {% endif %}
    {% endfor %}


Set the map zoom to that corner, and remove our first marker.

.. code-block:: javascript

    map.setView([33.983265, -118.306799], 18);


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
