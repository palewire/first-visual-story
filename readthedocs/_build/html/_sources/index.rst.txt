:tocdepth: 2

==================
First Graphics App
==================

A step-by-step guide to publishing a standalone story from a dataset.

This tutorial will show you how journalists at America’s top news organizations escape rigid content-management systems to publish custom interactive graphics on deadline. You will get hands-on experience in every stage of the development process, writing JavaScript, HTML and CSS within a Node.js framework. You won't stop until you've deployed a working application on the World Wide Web.


******************
What you will make
******************

By the end of this lesson, you will publish a standalone page with a series of graphics examining the high homicide rate in Harvard Park, a small neighborhood in South Los Angeles. You will do so by repurposing data from `a 2017 Los Angeles Times story <http://www.latimes.com/projects/la-me-harvard-park-homicides/>`_ by Nicole Santa Cruz and Cindy Chang.

A working example of what you will make can be found at `ireapps.github.io/first-graphics-app/ <https://ireapps.github.io/first-graphics-app/>`_

.. image:: _static/preview.gif
   :width: 100%
   :target: https://ireapps.github.io/first-graphics-app/


*****************
About the authors
*****************

This guide was prepared for training sessions of `Investigative Reporters and Editors (IRE) <http://www.ire.org/>`_
and the `National Institute for Computer-Assisted Reporting (NICAR) <http://data.nicar.org/>`_
by `Dana Amihere <http://damihere.com>`_, `Armand Emamdjomeh <http://emamd.net>`_ and `Ben Welsh <http://palewi.re/who-is-ben-welsh/>`_. It debuted in March 2018 `at NICAR's conference
in Chicago <https://www.ire.org/events-and-training/event/3189/3508/>`_. It returned for `a second run <https://www.ire.org/events-and-training/event/3433/4111/>`_ at the 2019 edition of the conference in Newport Beach, California.

Their work was inspired by the footloose spirit of funk music. We urge you to bust free of the computer systems that constrain your creativity. Hit play and get into the groove.

.. raw:: html

    <iframe src="https://open.spotify.com/embed?uri=spotify:user:227b2koy2xxyb23qliakea75y:playlist:54NS8jCdrgUpzUppUpokSg&theme=white" width="300" height="380" frameborder="0" allowtransparency="true" style="margin: 20px 0;"></iframe>


**********************
Prelude: Prerequisites
**********************

Before you can begin, your computer needs the following tools installed and working:

1. A `command-line interface <https://en.wikipedia.org/wiki/Command-line_interface>`_ to interact with your computer
2. A `text editor <https://en.wikipedia.org/wiki/Text_editor>`_ to work with plain text files
3. Version 8.9.4 or greater of the `Node.js <https://nodejs.org/en/>`_ JavaScript runtime
4. The `npm <https://www.npmjs.com>`_ package manager
5. `Git <http://git-scm.com/>`_ version control software and an account at `GitHub.com <http://www.github.com>`_

.. warning::

    Stop and make sure you have all these tools installed and working properly. Otherwise, `you're gonna have a bad time <https://www.youtube.com/watch?v=ynxPshq8ERo>`_.

.. _command-line-prereq:


Command-line interface
----------------------

Unless something is wrong with your computer, there should be a way to open a window that lets you type in commands. Different operating systems give this tool slightly different names, but they all have some form of it.

On Windows you can find the command-line interface by opening the "command prompt." Here are `instructions <https://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/>`_. On Apple computers, you open the `"Terminal" application <http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line>`_. Ubuntu Linux comes with a program of the `same name <http://askubuntu.com/questions/38162/what-is-a-terminal-and-how-do-i-open-and-use-it>`_.


Text editor
-----------

A program like Microsoft Word, which can do all sorts of text formatting like change the size and color of words, is not what you need. Do not try to use it.

You need a program that works with simple `"plain text" files <https://en.wikipedia.org/wiki/Text_file>`_, and is therefore capable of editing documents containing Python code, HTML markup and other languages without dressing them up by adding anything extra. Such programs are easy to find and some of the best ones are free, including those below.

For Windows, we recommend installing `Notepad++ <http://notepad-plus-plus.org/>`_ or `Visual Studio Code <https://code.visualstudio.com/>`_. For Apple computers, try `Atom <https://atom.io>`_ or `Sublime Text <https://www.sublimetext.com/>`_. In Ubuntu Linux you can stick with the pre-installed `gedit <https://help.ubuntu.com/community/gedit>`_ text editor or install a more sophisticated tool like `Atom <https://atom.io>`_.


Node.js
-------

Node.js is an open-source programming framework built using JavaScript. Many programmers like it because it allows them to write JavaScript not just in their browser for "front-end" tasks, but also in the terminal or on a server for "back-end" tasks.

You should be on the latest long-term support (LTS) version of Node, which at the time of this writing was ``10.15.1``. The `Node.js site <https://nodejs.org>`_ has `installer packages <https://nodejs.org/en/download/>`_ available for Windows and Mac OSX.

You can verify if you have Node installed, and if so what version, by typing the following into your terminal:

.. code-block:: bash

    $ nodejs --version


The number you get back is the version you have installed. If you get an error, you don't have Node.js installed and you should start from scratch with an installer package. If you have a slightly older version, you are probably okay. But we make no guarantees. Consider upgrading.


npm
---

Installing Node will also install npm on your computer, which stands for "Node Package Manager." During the class, we will use it to install open-source JavaScript packages that will help us draw charts and maps.

You can verify you have npm installed by running the following command on your terminal.

.. code-block:: bash

    $ npm --version


Git and GitHub
--------------

`Git <http://git-scm.com/>`_ is a version control program for saving the changes you make to files over time. This is useful when you're working on your own, but quickly becomes essential with large software projects when you work with other developers.

`GitHub <https://github.com/>`_ is a website that hosts git code repositories, both public and private. It comes with many helpful tools for reviewing code and managing projects. It also has some `extra tricks <http://pages.github.com/>`_ that make it easy to publish web pages, which we will use later. GitHub offers helpful guides for installing Git for `Windows <https://help.github.com/articles/set-up-git#platform-windows>`_, `Macs <https://help.github.com/articles/set-up-git#platform-mac>`_ and `Linux <https://help.github.com/articles/set-up-git#platform-linux>`_.

You can verify Git is installed from your command line like so:

.. code-block:: bash

    $ git --version

Once that's done, you should create an account at GitHub, if you don't already have one. `The free plan <https://github.com/pricing>`_ is all that's required to complete this lesson. If you make a new account, make sure to confirm your email address with GitHub. We'll need that for something later.


********************
Chapter 1: Hello Git
********************

First things first. It always helps to store all your code in the same place, instead of haphazard folders around your computer. This way, you always know where to look if you need to find a project.

In this case, let's call that directory ``Code``.

.. code-block:: bash

    # You don't have to type the "$" It's just a generic symbol
    # geeks use to show they're working on the command line.
    $ mkdir Code


You can use the `cd` command to "change directory" into the directory we created.

.. code-block:: bash

    # You don't have to type the "$" It's just a generic symbol
    # geeks use to show they're working on the command line.
    $ cd Code


Then, create a new directory where we can store the code for the project we're going to build today. Name it after our application.

.. code-block:: bash

    $ mkdir first-graphics-app


Now, use ``cd`` again to enter the the directory you just created.

.. code-block:: bash

    $ cd first-graphics-app


Use the command ``git init`` to create a new Git repository in the current directory. This will be the root of our version-controlled project.

.. code-block:: bash

    # "." is a common shortcut to refer to the current directory from the terminal
    $ git init .


Visit `GitHub <http://www.github.com>`_ and `create <https://github.com/new>`_ a new public repository named ``first-graphics-app``. Don't check "Initialize with README." You'll want to start with a blank repository.

.. image:: _static/new-repo.png
   :width: 100%
   :target: https://github.com/new


Then connect your local directory to GitHub with the following command. Replace ``<yourusername>`` with your GitHub user name.

.. code-block:: bash

    $ git remote add origin https://github.com/<yourusername>/first-graphics-app.git


Create your first file, a blank ``README`` with a `Markdown <https://en.wikipedia.org/wiki/Markdown>`_ file extension since that's `the preferred format of GitHub <https://help.github.com/articles/github-flavored-markdown>`_. The filename will be ``README.md``. Markdown is a simple way of writing nicely formatted text, complete with headlines, links and images.

.. code-block:: bash

    # Macs or Linux:
    $ touch README.md

    # On Windows, fire it up in your text editor right away:
    $ start notepad++ README.md


Open up the README in your text editor and type something in it. Maybe something like:

.. code-block:: markdown

    My first graphics app
    =====================


Make sure to save it. Then officially add the file to your repository for tracking with Git's ``add`` command.

.. code-block:: bash

    $ git add README.md


Log its creation with Git's ``commit`` command. You can include a personalized message after the ``-m`` flag. If you're on a Windows machine, make sure you use double quotes around your commit message.

.. code-block:: bash

    $ git commit -m "First commit"


If this is your first time using Git, you may be prompted to configure you name and email. If so, take the time now. Then run the ``commit`` command above again.

.. code-block:: bash

    $ git config --global user.email "your@email.com"
    $ git config --global user.name "your name"


Now, finally, push your commit up to GitHub.

.. code-block:: bash

    $ git push origin master


You just created your first code commit! Reload your repository on GitHub and see your handiwork.

.. image:: _static/first-commit.png
   :width: 100%


**************************
Chapter 2: Hello framework
**************************

Now that we have our Git repository created, we're going to start installing the tools we need to do our job.

The first and more important is a `framework <https://en.wikipedia.org/wiki/Software_framework>`_. What's that? Nothing more than fancy name for a set of software tools that, working together, can stand up a website. Believe it or not, it takes dozens of different things to pull a good site together. Frameworks aim to make the challenge easier by organizing a curated set of tools into a system that saves programmers time.

There are a lot of different frameworks out there. Maybe you've heard of some them, like `Django <https://www.djangoproject.com/>`_ for Python or `Rails <http://rubyonrails.org>`_ for Ruby.

.. note::

    While some frameworks are more popular than others, each newsroom tends to go its own way with a custom system for publishing pages. The programming languages and the details vary, but the fundamentals are almost all the same. Some of them have even been released as open-source software. They include:

    * The Los Angeles Times Data Desk's `bigbuild <https://github.com/datadesk/django-bigbuild>`_
    * The Dallas Morning News' `generator-dmninteractives <https://github.com/DallasMorningNews/generator-dmninteractives>`_
    * The Seattle Times' `newsapp-template <https://github.com/seattletimes/newsapp-template/>`_
    * The NPR Apps team's `dailygraphics <https://github.com/nprapps/dailygraphics>`_
    * Politico's `generator-politico-graphics  <https://github.com/The-Politico/generator-politico-graphics>`_

Node.js is so fancy it has more than plain old frameworks. It even includes a framework for create frameworks! It's called `Yeoman <http://yeoman.io>`_. It offers a "generator" system that makes it easier for publishers to tailor the framework to their site, without having to reinvent all the wheels themselves.

We'll start by installing Yeoman using the Node Package Manager (``npm``), which can visit the Internet to download and install any of the thousands of open-source Node.js packages listed in its directory.

.. code-block:: bash

    $ npm install -g yo@2.0.5


The ``-g`` means that we're installing the packages globally. You'll be able to run these from any directory on your computer.

The ``@`` followed by numbers after the ``yo`` package means we're installing a specific version. Codebases often change quickly, and by specifying a version, you're protecting yourself against future changes that could break your code.

Next we'll install `Gulp <https://gulpjs.com/>`_, a helpful Node.js utility for running a framework on your computer as you develop a site. Again, we turn to npm.

.. code-block:: bash

    $ npm install -g gulp@3.9.1


Finally, we use npm to install `yeogurt <https://github.com/larsonjj/generator-yeogurt>`_, our project generator that yeoman will build. It includes dozens of customizations of the Yeoman system created by its author to help us build websites. It can't do everything a full-featured newsroom framework might. But it can do a lot, and enough for us to achieve our goals for this class.

.. code-block:: bash

    $ npm install -g generator-yeogurt@2.0.1


Create a new project using our yeogurt generator as the guide.

.. code-block:: bash

    $ yo yeogurt


After you run the command, you will be asked a series of questions. *Pay close attention* because you will need to choose the proper options to continue with our tutorial, and some of the correct selections are not the default choice.

.. image:: _static/yeogurt-setup.png
   :width: 100%


1. Your project name should be the slug "first-graphics-app"
2. The HTML preprocessor you choose must be "Nunjucks."
3. The JavaScript preprocessor your choose must be "ES6 (Using Babel)"
4. Styles must be written with "Sass"
5. The Sass syntax must be "Scss"

Don't sweat the rest. But make sure you get the above right.

Yeoman will then use the generator to create a complete project that's ready for us to work in. Take a look at the folders its created in the ``src`` directory. That's the framework offering your a comfortable place to do your work. Let's get in there set up shop.

First, fire up its test server to see what it has to offer out of the box.

.. code-block:: bash

    $ gulp serve


Visit `localhost:3000 <http://localhost:3000>`_ in your browser. There you can see the generic website offered as a starting point by our Yeoman generator.

.. image:: _static/welcome.png
   :width: 100%


Congratulations, you've got your framework up and running. Let's save our work and then we'll be ready to start developing our own content.

Open a second terminal (this way you can keep your server running) and navigate to your code folder.

.. code-block:: bash

    $ cd Code
    $ cd first-graphics-app


Commit our work.

.. code-block:: bash

    $ git add .
    # ☝️ A fun trick to add *all* of the pages you've changed with one command. ☝️
    $ git commit -m "Installed framework"


Push it to GitHub.

.. code-block:: bash

    $ git push origin master


*************************
Chapter 3: Hello template
*************************

Navigate back to `localhost:3000 <http://localhost:3000/>`_ in your browser. You should see the same default homepage as before.

.. image:: _static/welcome.png
   :width: 100%


Its contents is configured in the ``index.nunjucks`` file found in the directory Yeoman created. It uses a templating language for JavaScript invented at Mozilla called `Nunjucks <https://mozilla.github.io/nunjucks/>`_.

You can edit the page by changing what's found inside of the ``content`` block. Make a change and save the file.

.. code-block:: jinja
    :emphasize-lines: 2

    {% block content %}
    <p>Hello World</p>
    {% endblock %}


You should see it immediately show up thanks to a `BrowserSync <https://browsersync.io>`_, a popular feature of Gulp that automatically updates your test site after you make a change.

.. image:: _static/hello-world.png
   :width: 100%


Look closely at the index file you and will notice that it doesn't include code for much of what you can see on the live page. For instance, you won't see the HTML of the navigation bar or the stylesheets that dicatate how the page looks.

That's because that boilerplate has been moved back into a parent template "extended" by the index file with a line of Nunjucks code at the top of the page.

.. code-block:: jinja

    {% extends '_layouts/base.nunjucks' %}


That "base" file, sometimes called the "layout," can be inherited by other pages on your site to avoid duplication and share common code. One change to a parent file instantly ripples out to all pages the extend it. This approach to "template inheritance" is not just found in Nunjucks. It can be found in other templating systems, including Python ones like `Django <https://docs.djangoproject.com/en/1.7/topics/templates/>`_ and `Jinja <http://jinja.pocoo.org>`_.

You can find the base layout packaged with our framework in the ``_layouts/base.nunjucks`` file. It includes a set of block tags, like ``content``, that act as placeholders for use in templates that extend it.

Make a small change above the block and save the file.

.. code-block:: jinja
    :emphasize-lines: 1

    Above content
    {% block content %}{% endblock %}


You should see the change on our site, with the new line appearing above the paragraph we added earlier to the index file.

.. image:: _static/above-content.png
    :width: 100%


Most newsrooms that use a similar system have a own base template for all of their custom pages. Graphic artists and designers install and extend it as the first step in their work. They develop their custom page within its confines and largely accept the furniture it provides, like the site's header and footer, fonts, common color schemes. This allows them to work more quickly because they do not have to bother with reinventing their site's most common elements.

.. note::

    While most newsrooms keep their base templates to themselves, a few have published them as open-source software. You can find them online, if you know where to look. They include:

    * The Los Angeles Times Data Desk's `HTML Cookbook <http://cookbook.latimes.com>`_
    * The Texas Tribune News App team's `style guide <https://apps.texastribune.org/styles/>`_
    * Politico's `style guide <https://github.com/The-Politico/politico-style>`_


For this class, we have developed a base template that will act as a proxy for a real newsroom's base template. It is not as sophisticated or complete as a real-world example, but it will provide all of the basic elements we will need for this class.

You can find it in the code block below. Copy all of its contents and paste them into ``_layouts/base.nunjucks``, replacing everything.

.. code-block:: jinja

    <!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>First Graphics App</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="styles/main.css">
        <link rel="stylesheet" href="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/base.css?rev=8">
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

As you can see, it includes all of the standard HTML tags, with our custom stylesheets and content blocks mixed in.

To see the effects, return to ``index.nunjucks`` and fill in a headline using the ``headline`` block introduced by our base template. Save the page and you should quickly see it appear on the page.

.. code-block:: jinja
    :emphasize-lines: 3

    {% extends '_layouts/base.nunjucks' %}

    {% block headline %}My headline will go here{% endblock %}


.. image:: _static/headline.png
    :width: 100%


Now fill in a byline.

.. code-block:: jinja
    :emphasize-lines: 4

    {% extends '_layouts/base.nunjucks' %}

    {% block headline %}My headline will go here{% endblock %}
    {% block byline %}By me{% endblock %}


.. image:: _static/byline.png
    :width: 100%


And let's do the publication date too while we are at it.

.. code-block:: jinja
    :emphasize-lines: 5-7

    {% extends '_layouts/base.nunjucks' %}

    {% block headline %}My headline will go here{% endblock %}
    {% block byline %}By me{% endblock %}
    {% block pubdate %}
        <time datetime="2019-03-09" pubdate>Mar. 9, 2019</time>
    {% endblock %}


.. image:: _static/pubdate.png
    :width: 100%


Congratulations, you've installed a base template and started in on creating your first custom page. Now is another good time to pause and commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Started editing templates"


And, again, push it to GitHub.

.. code-block:: bash

    $ git push origin master


.. note::

    You'll notice that the all of the sub folders in the ``src/`` directory of your project have underscores ``_`` in front of their name. This convention is used to note that these files are **private**, and won't be deployed.

    Instead, Gulp processes the contents of these folders when it builds the project and serves the files from a ``tmp/`` folder, where you'll see unprefixed ``images/``, ``scripts/`` and ``styles/`` directories.


*********************
Chapter 4: Hello data
*********************

We've got our page all set up. Now it's time to start telling our story. To do that, we need our data.

If we were writing this application entirely in the browser with traditional JavaScript we'd have to pull it in with dynamic "AJAX" calls that retrieve data over the web as the page is constructed. But since we're working with a Node.js system, running code here the backend, we can import our data directly into the template instead and lay it out before the page is rendered in the browser. This results in a faster experience for our users, and opens up new ways for us to be creative with our data.

Every newsroom's system will handle this differently. Our Yeoman generator is preconfigured to open all JSON data files in the ``_data`` and import them into our nunjucks templates.

Let's give it a try. Grab the `list of Harvard Park homicides <https://raw.githubusercontent.com/ireapps/first-graphics-app/master/src/_data/harvard_park_homicides.json>`_ published by the Los Angeles Times and save it to ``_data/harvard_park_homicides.json``. It includes every homicide victim in the neighborhood since 2000 in the `JSON data format <https://en.wikipedia.org/wiki/JSON>`_ favored by JavaScript.

.. code-block:: javascript

    [
       {
          "case_number":"2017-04514",
          "slug":"eddie-rosendo-lino",
          "first_name":"Eddie",
          "middle_name":"Rosendo",
          "last_name":"Lino",
          "death_date":"2017-06-18T00:00:00.000Z",
          "death_year":2017,
          "age":23.0,
          "race":"black",
          "gender":"male",
          "image":null,
          "longitude":-118.304107484,
          "latitude":33.9904336958
       },
       {
          "case_number":"2017-03454",
          "slug":"alex-david-lomeli",
          "first_name":"Alex",
          "middle_name":"David",
          "last_name":"Lomeli",
          "death_date":"2017-05-07T00:00:00.000Z",
          "death_year":2017,
          "age":18.0,
          "race":"latino",
          "gender":"male",
          "image":null,
          "longitude":-118.300290584,
          "latitude":33.9793646958
       },
       ...


Return to ``index.nunjucks`` and add the following to the bottom to print the data out on the page. We can do that using the ``{{ }}`` print tags provided by nunjucks.

.. code-block:: jinja

    {% block content %}
        {{ site.data.harvard_park_homicides }}
    {% endblock %}


Here's what you should see.

.. image:: _static/data-dump.png
    :width: 100%


Loop through them and print them all. We'll use the ``{% %}`` template tags provided by nunjucks that let you use common computer programming logic when you're laying out a page.

.. code-block:: jinja
    :emphasize-lines: 2-4

    {% block content %}
    {% for obj in site.data.harvard_park_homicides %}
        {{ obj }}
    {% endfor %}
    {% endblock %}


.. image:: _static/data-dump.png
    :width: 100%


Add a line break with a ``<br>`` tag. That's just boring old HTML. Writing pages with a templating language like nunjucks is typically nothing more than mixing traditional HTML with the programming and print tags that negotiate your data files and other settings variables.


.. code-block:: jinja
    :emphasize-lines: 3

    {% block content %}
    {% for obj in site.data.harvard_park_homicides %}
        {{ obj }}<br>
    {% endfor %}
    {% endblock %}


.. image:: _static/hello-loop.png
    :width: 100%


All of the fields found in the JSON dictionary for each homicide are available by adding a ``.`` after the object. Try it by printing the last name.

.. code-block:: jinja
    :emphasize-lines: 3

    {% block content %}
    {% for obj in site.data.harvard_park_homicides %}
        {{ obj.last_name }}<br>
    {% endfor %}
    {% endblock %}


.. image:: _static/hello-last-name.png
    :width: 100%


Add the first name. To have them display more nicely, you can also add a line break in between each one.

.. code-block:: jinja
    :emphasize-lines: 3

    {% block content %}
    {% for obj in site.data.harvard_park_homicides %}
        {{ obj.first_name }} {{ obj.last_name }}<br>
    {% endfor %}
    {% endblock %}


.. image:: _static/hello-full-name.png
    :width: 100%


Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Printed a list of names from data"


Push it to GitHub.

.. code-block:: bash

    $ git push origin master


**********************
Chapter 5: Hello cards
**********************

Bootstrap is an HTML, CSS and JavaScript toolkit that you can use to create the cosmetic "front-end" of web applications. Bootstrap is made up of different pre-made, ready-to-use pieces called components. Think of Bootstrap as building blocks you can mix and match to help jumpstart a project. Its components can be used as-is or as a base to be customized by the developer.

The components library includes things that you might include in a project, like buttons, modals and dropdowns.


.. image:: _static/bootstrap.png
    :width: 100%

We're going to create a photo grid of the Harvard Park homicide victims' pictures. Each grid block will have a picture and some basic information about the victim. We're going to use the Bootstrap 4 "cards" component accomplish this. Cards are self-contained boxes of information which can be arranged and grouped on a page any way you want.

.. image:: _static/bootstrap-cols.png
    :width: 100%

First, need to set up our grid. To do that, we need to talk about divs, or the building blocks of HTML. The simplest way to think of a div is as container. Like any container, divs hold things. Divs can be nested inside of each other, like putting a box inside a box.

This is how Bootstrap cards work. Each card is a container which has additional containers inside it to hold, in this case, a picture, the victim's name, age, race and when he/she was killed.

Now that we understand divs, we can build the base of our grid. For this, we'll need a container div for each victim. We'll add just the name of the first and last name of each victim first.

.. code-block:: jinja
    :emphasize-lines: 3-7

    {% block content %}
    {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
          </div>
        </div>
    {% endfor %}
    {% endblock %}


.. image:: _static/cards-first.png
    :width: 100%


Let's add a sentence below the name we just printed to summarize who each victim was and when they died.

.. code-block:: jinja
    :emphasize-lines: 5

    {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
    {% endfor %}


Let's add each victim's image to their card.

.. code-block:: jinja
    :emphasize-lines: 3

    {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          <img class="card-img-top" src="{{ obj.image }}">
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
    {% endfor %}


.. image:: _static/card-no-columns.png
    :width: 100%


What do we do if there is no image of the victim?  As soon as the code reaches a victim with no image, the code will break.

To fix this, let's add an if clause around the image tag to check for an image in the data. This way, our code will loop through the list of victims and <em>if</em> there is an image, it will add it to the right card. If there isn't, the code will move on to the next victim until it reaches the end of the list.

.. code-block:: jinja
    :emphasize-lines: 3

    {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
    {% endfor %}


What we've got so far is a grid that doesn't look much like a grid. Let's give it some structure to make it neat and tidy. To do that, we're going to arrange our grid of cards using Bootstrap's card columns.

.. code-block:: jinja
    :emphasize-lines: 1,11

    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>


We want to be able to click on each card and be redirected to that victim's page in the Los Angeles Times' Homicide Report? Let's do it! While we're at it, let's add some ``<strong>`` tags to the victims' names to make them stand out from the sentence about them.

.. code-block:: jinja
    :emphasize-lines: 6

    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank"><strong><h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5></strong></a>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>


.. image:: _static/card-slug.png
    :width: 100%


Let's write a headline for our cards section.

.. code-block:: jinja
    :emphasize-lines: 1

    <h3>Lives lost</h3>
    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank"><strong><h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5></strong></a>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>


.. image:: _static/card-headline.png
    :width: 100%


And now, some summary text.

.. code-block:: jinja
    :emphasize-lines: 2

    <h3>Lives lost in Harvard Park</h3>
    <p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank"><strong><h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5></strong></a>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>


Let's set up our card grid as it's own section by adding ``<section>`` tags.

.. code-block:: jinja
    :emphasize-lines: 1,15

    <section>
        <h3>Lives lost in Harvard Park</h3>
        <p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
        <div class="card-columns">
            {% for obj in site.data.harvard_park_homicides %}
            <div class="card">
              {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
              <div class="card-body">
                <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank"><strong><h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5></strong></a>
                <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
              </div>
            </div>
            {% endfor %}
        </div>
    </section>


.. image:: _static/card-full-section.png
    :width: 100%


Let's commit our work for this section.

.. code-block:: bash

    $ git add .
    $ git commit -m "Created a victims card grid"


Push it to GitHub.

.. code-block:: bash

    $ git push origin master



***********************
Chapter 6: Hello charts
***********************

We have data, but what does it look like?

To visualize our data, we're going to use `D3.js <https://d3js.org/>`_ library, which has become the industry standard for data visualization. Since it is so flexible for data vizualization and mapping applications, D3 powers many of the news graphics made with JavaScript you see online.

.. note::

    We're going to dive straight into the deep end with creating a D3 chart from scratch in this section. There is a lot of setup involved with this, and it'll probably seem like overkill at points. And it is! D3 gives you a very high level of control over your graphics, which makes all this setup necessary.

    We wanted to use this section as an introduction to D3 and give you a foothold into the `many, many different types of visualizations you can make with it <https://github.com/d3/d3/wiki/Gallery>`_.

First, use npm to install D3.

.. code-block:: bash

    $ npm install -s d3@5


The ``-s`` argument saves d3 to a dependencies file. That way, if you ever need to go through the install steps for your app again, you can do so easily by simply running ``npm install``.

From here, we'll be working in our ``_scripts`` folder. Create a file called ``_charts.js`` inside of ``_scripts/``.

You can include the libraries we installed (or any JavaScript file!) by using ``require()``. While with modern versions of D3 you can import specific parts of the library that are most relevant to your app, we're just going to import the whole library for simplicity.

.. code-block:: javascript

    var d3 = require('d3');

    // At the end of the _charts.js file
    console.log('hello, this is my charts file!');


Remember our underscore coding convention? Here, ``_charts.js`` has an underscore (``_``) in front of it because it will be compiled into ``main.js`` when the site is baked.

That is, if we tell it to. Use the same ``require()`` method to pull our code into ``main.js``. Unlike ``_charts.js``, ``main.js`` doesn't have an underscore, because it is the file pulls in all the other scripts.

You don't have to use this convention, but it's handy as a visual marker of what files are dependent on others.

.. code-block:: javascript
    :emphasize-lines: 14

    // Main javascript entry point
    // Should handle bootstrapping/starting application

    'use strict';

    import $ from 'jquery';
    import Link from '../_modules/link/link';

    $(() => {
      new Link(); // Activate Link modules logic
      console.log('Welcome to Yeogurt!');
    });

    var chart = require('./_charts.js');


Structuring our code this way helps keep things organized, as each file controls one specific part of the page. Need to make an adjustment to your chart? Go to ``_charts.js``.

Now if you reload your page and go to your inspector (click on the three dots in the top right of Chrome, go down to "More tools" and select "Developer tools"), you should see ``hello, this is my charts file!`` in the console.

.. image:: _static/hello-charts.png
    :width: 100%

What chart should we make? The story points out that Harvard Park experienced an increase in homicides as there was a decrease across the rest of the county. Let's try to visualize that.

First, we need somewhere for our charts to go. In our ``index.nunjucks`` file, inside of ``{% block content %}`` where you want the chart to appear, create a ``div`` element with an id of ``county-homicides``, and another with an id of ``harvard-park-homicides``.

.. code-block:: jinja
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

    <h3>Lives lost</h3>
    <p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>

    {% for obj in site.data.harvard_park_homicides %}
    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            <p class="card-text">A {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }} died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>
    {% endfor %}

    {% endblock %}


Meanwhile, we need data. Copy the `annual totals data <https://raw.githubusercontent.com/ireapps/first-graphics-app/master/src/_data/annual_totals.json>`_ to a new file, ``_data/annual_totals.json``. This file contains annual homicide counts for Harvard Park and all of Los Angeles County. We can use nunjucks to include our data file directly in the template.

Add a ``{% scripts %}`` block to the end of your ``index.nunjucks`` file:

.. code-block:: jinja

    {% block scripts %}
    <script>
    var annualTotals = {% include '_data/annual_totals.json' %};
    </script>
    {% endblock %}


We want to make two charts - one of county homicides and one of killings in Harvard Park. Let's start with county homicides. D3 requires us to do a bit of house work before we get started. The first thing we need is a container for our chart to go in. We'll be making these charts in an ``<svg>`` element, which stands for Scalable Vector Graphic.

The first thing we'll want to do is select the HTML container of the chart with D3, and "append" an ``svg`` element to it.

.. code-block:: javascript
    :emphasize-lines: 3-5

    var d3 = require('d3');

    // Make sure you use the # here!
    var container = d3.select('#county-homicides');
    var svg = container.append('svg')

Now if you look in your inspector, you'll see that we've appended an ``<svg>`` to the element with an ID of ``county-homicides``. However, we also need to specify a height and width for the SVG, otherwise it will always just have default dimensions of 300x150, no matter how large our screen or device is.

.. image:: _static/chart-empty-svg.png
    :width: 100%

Let's use ``.node()`` to access the HTML element and save the width and height of the container to variables. I like to specify the height as a percentage of the width, to get an aspect ratio.

.. code-block:: javascript
    :emphasize-lines: 5-6

    var d3 = require('d3');

    // Make sure you use the # here!
    var container = d3.select('#county-homicides');
    var containerWidth = container.node().offsetWidth;
    var containerHeight = containerWidth * 0.66;

    var svg = container.append('svg')

Now we can use them to set the properties, or "attributes" of the SVG using D3's ``.attr()`` method. Notice that we can "chain" methods on a selection in D3, which allows our code to be a little more concise.

.. code-block:: javascript
    :emphasize-lines: 9-10

    var d3 = require('d3');

    // Make sure you use the # here!
    var container = d3.select('#county-homicides');
    var containerWidth = container.node().offsetWidth;
    var containerHeight = containerWidth * 0.66;

    var svg = container.append('svg')
                .attr('width', containerWidth)
                .attr('height', containerHeight)

Now if you look, your SVG should be rendered at the appropriate height and width, filling the available space.

.. image:: _static/chart-empty-svg-2.png
    :width: 100%

Two more setup steps before we actually start making our charts. First, if we simply start drawing data onto the SVG, we'll likely see areas where the data clips off the chart. We can avoid this by defining a pre-set margin we'll use throughout the process.

We also create two variables, ``chartWidth`` and ``chartHeight`` that refer to the dimensions of the chart with the margins included.

.. code-block:: javascript
    :emphasize-lines: 3,8-9

    var d3 = require('d3');

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

Second, we should add a ``<g>``, or "group" tag, where everything else in our chart will go. Add this to the end of your ``svg`` declaration. We'll also want to give it a ``transform`` attribute that shifts it slightly according to our margins.

.. code-block:: javascript
    :emphasize-lines: 5-6

    // ... more code is up here
    var svg = container.append('svg')
            .attr('width', chartWidth)
            .attr('height', chartHeight)
            .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`)

Adding the ``g`` tag and shifting it may seem like a weird step, but it's an important step to take to make sure the value labels aren't going to clip off the edges of our charts. To show what this does, this example skips a few steps ahead so you can see elements inside the ``g`` tag shifted by the margins of the chart.

.. image:: _static/chart-g-margins.png
    :width: 100%

And here's what it looks like without the margins, see how the labels are clipped?

.. image:: _static/chart-g-nomargins.png
    :width: 100%

At this point, we're ready to start drawing our chart. Let's start with by creating the "scales" for our data. D3 manages its data by mapping input values from the data, also known as the domain, into output values on the screen, or the range. This creates a scale that transforms the input into the output.

D3 has many different types of scales, for linear, categorical and time-based data. In this case, we'll want a linear scale for the Y axis, and a "band" scale, which is a type of categorical scale useful for bar charts, for the X axis.

I like to calculate the input, or domain, before creating the axes. The domain takes the form of an array with the minimum and maximum value that you want to map: e.g., ``[0, 100]`` if you're looking at a 100-point grade scale. We can use D3's ``min`` and ``max`` helper functions to find this.

If you look at the data in ``src/_data/annual_totals.json``, you'll see that each year's data is organized like this:

.. code-block:: javascript

  {
    "year":2000,
    "homicides_total":1036,
    "homicides_harvard_park":3
  }

Since we're charting homicides for the entire county we want the ``homicides_total`` attribute in our data for the Y axis, and the X axis will be the year. The arrow ``=>`` is a shorthand method of accessing the ``homicides_total`` attribute of each object in the annualTotals array.

Note that for the X axis, all we want is an array of the years, e.g.:``[2000, 2001, ...]`` so we can call ``.map()`` on our data to return the year value. ``.map()`` iterates over every value in an array and returns a value for every item.

For the Y-axis, we want the domain to start at 0, so we can set that manually.

.. code-block:: javascript

    // The rest of your code is up here

  	var xDomain = annualTotals.map(d => d.year);

  	var yDomain = [
        0,
        d3.max(annualTotals.map(d => d.homicides_total))
  	];

If you know the min and max values, you can also set these manually, which can be useful if you want your chart max to be a nice even number.

At the bottom of your file, let's create an ``xScale`` and ``yScale`` now. Note that at this point we're also setting the range, or output values, to the range between 0 and the height and width of our SVG.

.. code-block:: javascript

    // The rest of your code is up here

    var xScale = d3.scaleBand()
                  .domain(xDomain)
                  .range([0, chartWidth])
                  .padding(0.1);

    var yScale = d3.scaleLinear()
                  .domain(yDomain)
                  .range([chartHeight, 0]);

Note that the X scale has an additional method, ``.padding()``, which specifies how far apart our bars are from one another.

Now that we have scales, we can create our axes. D3 has helper functions for each side of the chart we want our axes on, in this case the left for the Y-axis and bottom for the X-axis. We also assign one of the scales we just created to each axis.

For the Y-axis, we also want to add grid lines and limit the number of ticks that are shown.

.. code-block:: javascript

    // The rest of your code is up here

    var xAxis = d3.axisBottom(xScale);
    var yAxis = d3.axisLeft(yScale)
                  .tickSize(-chartWidth)
                  .ticks(4);

Finally, we append those to the chart by appending a ``<g>`` tag and "calling" the axis function we just created. I like to give each axis element a class of "axis" and "x" or "y", depending on which axis we're creating.

.. code-block:: javascript

    // The rest of your code is up here

    svg.append("g")
        .attr("class", "x axis")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);


.. image:: _static/chart-xaxis-top.png
    :width: 100%


Well that doesn't look quite right. The reason the X axis is displaying at the top of the chart is that in SVGs, the coordinate 0,0 is at the top left. So we need to shift, or ``translate`` the X axis down by the height of the chart. The Y axis is fine where it is.

.. code-block:: javascript
    :emphasize-lines: 5

    // The rest of your code is up here

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", `translate(0,${chartHeight})`)
        .call(xAxis);


.. image:: _static/chart-xaxis-bottom.png
    :width: 100%


Now that the axes are there, we're finally ready to draw our bars. D3 handles it's data by binding the data to the SVG elements - hence the name: "Data Driven Documents."

The format seems a little strange at first, because you're selecting elements, then binding data to the selection, then creating elements that are bound to the data. You do this by chaining two methods, ``.data()``, which determines the data set that you're binding, and ``.enter()``, which iterates over the data set.

Since we're making a bar chart, we're going to create a ``<rect>`` element, and give it a class of ``bar``.

.. note::

    If you'd like to know more about how D3 data binding works, Scott Murray has an `excellent explanation and tutorial<https://alignedleft.com/tutorials/d3/binding-data>`_ on his website.

Let's give it a try, by binding our ``annualTotals`` data to the bars on the chart. Start below the code for your axes. First, let's simply append the ``<rect>`` elements to the chart

.. code-block:: javascript

    // The rest of your code is up here

    svg.selectAll('.bar')
        .data(annualTotals)
        .enter()
        .append('rect')
        .attr('class', 'bar')

.. image:: _static/chart-empty-rects.png
    :width: 100%

Now if you look at your chart... nothing has changed! But open your inspector and look at your SVG - you'll see lots of ``<rect>`` elements, you just can't see them because they don't have any values for height and width, or x and y position values. Let's do this next.

.. code-block:: javascript
    :emphasize-lines: 8-11

    // The rest of your code is up here

    svg.selectAll('.bar')
        .data(annualTotals)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.year))
        .attr('y', d => yScale(d.homicides_total))
        .attr('width', xScale.bandwidth())
        .attr('height', d => chartHeight - yScale(d.homicides_total))

The X value will be determined by the year, and the Y by the ``homicides_total`` value of each object. The width of each bar is set by a method called ``.bandwidth()`` on our scale, and the height will scaled corresponding to the number of homicides.

.. image:: _static/chart-bars.png
    :width: 100%

You have a bar chart! At this point we can step back and style out the chart, and leave room for a second chart that shows Harvard Park homicides.

At this point, create a new file in the ``_styles`` folder, and call it ``_charts.scss``.

The first thing we need to do is make the chart smaller - right now it's huge! Add the following CSS rule to ``_charts.scss`` which will allow the chart to display at roughly half width and leave room for a second chart.

.. code-block:: css

    .inline-chart {
        width: 49%;
        display: inline-block;
    }

If you look at the page now, you'll see that nothing has changed. That's because, like the JavaScript, we need to import the styles that we just created into our ``main.scss`` file.

You can do that by adding the following line to ``main.scss``.

.. code-block:: css
    :emphasize-lines: 6

    // Normalize Styles
    @import 'node_modules/normalize.css/normalize';

    // Import Modules
    @import '../_modules/link/link';
    @import './charts.scss';


.. image:: _static/chart-half-width.png
    :width: 100%

Let's also color the bars and clean up some of the lines. If you remember, the bars were ``<rect>`` elements, and if you use the inspector, you can find the x axis lines we want to remove. Back in ``_charts.scss``:

.. code-block:: css

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

The last thing we want to style is the grid lines - they're too heavy and should fade into the background more. Note that we want to keep the baseline black to indicate that we're starting at 0, so we'll use a fancy CSS selector that says to style every tick line that's not the baseline.

.. code-block:: css

    // The rest of your styles are up here
    .y .tick:not(:first-of-type) line {
      stroke: #e7e7e7;
    }


.. image:: _static/chart-styled.png
    :width: 100%

Now we have a nicely styled chart, and we're ready to start on our second one. Do we want to copy everything all over again? No! Instead, we can pull the JavaScript we just wrote into a function that will take our data and an element, and create the chart for us!

Open up ``_charts.js`` again, and create a function, ``createChart``. We'll need to think about this for a second - what are the values that are going to change between the two charts?

- Container element
- Data field used for the homicide counts
- Y-axis values

If we calculate the domain values correctly the Y-axis values should automatically update so we shouldn't have to worry about that too much. So our function should have two arguments - the ID of the container element, and the data field we're using.

.. code-block:: javascript

    // the rest of your code is up here
    function createChart(el, fieldname) {

    }

Now, you can copy everything we wrote in ``_charts.js`` under the ``require('d3')`` line into this function. Your file should look like this now.

.. code-block:: javascript

    var d3 = require('d3');

    function createChart(el, fieldname) {
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

      var yDomain = [
          0,
          d3.max(annualTotals.map(d => d.homicides_total))
      ];

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

      svg.selectAll('.bar')
          .data(annualTotals)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => xScale(d.year))
          .attr('y', d => yScale(d.homicides_total))
          .attr('width', xScale.bandwidth())
          .attr('height', d => chartHeight - yScale(d.homicides_total));
    }

Now, if you reload your page, your chart will have disappeared! That's because our code is no longer running since it's in a function, but we're not calling that function.

At the end of the file, let's call the function with the arguments necessary for the countywide homicides chart. Remember the element id is ``county-homicides``, and the field we're using is ``homicides_total``.

.. code-block:: javascript

    // the rest of your code is up here
    createChart("#county-homicides", "homicides_total")

You'll see that your chart is back! But the only reason this is actually working is because we've already hard-coded our variables into the script. Let's abstract it out to use the arguments that we're providing.

First, let's change the ``container`` variable to use the ID we're providing.

.. code-block:: javascript
    :emphasize-lines: 3

    function createChart(el, fieldname) {
      var margin = {top: 20, right:20, bottom:20, left:40} ;
      var container = d3.select(el);

      //... the function continues down here
    }

Now try calling it on the second element we created, with the ``homicides_harvard_park`` variable as the second argument.

.. code-block:: javascript
    :emphasize-lines: 2

    createChart("#county-homicides", "homicides_total")
    createChart("#harvard-park-homicides", "homicides_harvard_park")

.. image:: _static/chart-twice.png
    :width: 100%

This gives us the same chart twice, which is expected since we still have the data values hard-coded.

To change this, we'll have to find every instance where we reference the ``homicides_total`` field directly in the function, and change it to reference the argument we are passing in for the data field.

Note that in many cases we'll have to change the syntax from ``d.homicides_total`` to ``d[fieldname]`` - this is because we're referencing a variable and not a specific field.

Luckily, we only have to do this a few times, once where we're calculating the domain, and then where we're setting the y position and heights of the bars.

.. code-block:: javascript
    :emphasize-lines: 19,51,53

    function createChart(el, fieldname) {
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

      var yDomain = [
          0,
          d3.max(annualTotals.map(d => d[fieldname]))
      ];

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

      svg.selectAll('.bar')
          .data(annualTotals)
          .enter()
          .append('rect')
          .attr('class', 'bar')
          .attr('x', d => xScale(d.year))
          .attr('y', d => yScale(d[fieldname]))
          .attr('width', xScale.bandwidth())
          .attr('height', d => chartHeight - yScale(d[fieldname]));
    }


.. image:: _static/chart-side-by-side.png
    :width: 100%

Now that our charts are smaller and they're right next to each other, we need to clean up those year labels. Since our years are the same in both charts, we can set this manually when we're creating the X axis.

Let's update the ``xAxis`` variable in ``createCharts`` to label the first and last bars on the chart, and the 5-year intervals.

.. code-block:: javascript
    :emphasize-lines: 3

      // ... more code is up here
      var xAxis = d3.axisBottom(xScale)
                  .tickValues([2000, 2005, 2010, 2015, 2017]);

      var yAxis = d3.axisLeft(yScale)
                      .tickSize(-chartWidth)
                      .ticks(4);

      // ... more code is down here

.. image:: _static/chart-clean-axes.png
    :width: 100%

This cleans things up a lot! We have some pretty good-looking charts. Our charts need titles, which we can add directly to the HTML. Going back to the ``index.nunjucks`` file, add the titles in ``<h4>`` tags inside your chart containers

.. code-block:: jinja
    :emphasize-lines: 3,6

    <div class="charts">
      <div class="inline-chart" id="county-homicides">
        <h4 class="chart-title">County homicides, 2000-2017</h4>
      </div>
      <div class="inline-chart" id="harvard-park-homicides">
        <h4 class="chart-title">Harvard Park homicides, 2000-2017</h4>
      </div>
    </div>

Let's style those a bit too, add these rules to the bottom of ``_styles/_charts.scss``.

.. code-block:: css

    .chart-title {
      font-weight: bold;
      font-size: 16px;
      text-align: center;
    }


.. image:: _static/chart-with-title.png
    :width: 100%


Last, let's add a headline to introduce our charts section.

.. code-block:: jinja
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


.. image:: _static/chart-section-headline.png
    :width: 100%

And an introductory paragraph to say a little bit about what we're looking at.

.. code-block:: jinja
    :emphasize-lines: 2

    <h3>A South L.A. neighborhood stands apart</h3>
    <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>

    <div class="charts-holder clearfix">
        <div class="inline-chart" id="county-homicides"></div>
        <div class="inline-chart" id="harvard-park-homicides"></div>
    </div>

.. image:: _static/chart-intro-graf.png
    :width: 100%

Last, let's wrap our charts HTML in ``<section>`` tags to keep things orderly.

.. code-block:: jinja
    :emphasize-lines: 1,9

    <section>
        <h3>A South L.A. neighborhood stands apart</h3>
        <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>

        <div class="charts-holder clearfix">
            <div class="inline-chart" id="county-homicides"></div>
            <div class="inline-chart" id="harvard-park-homicides"></div>
        </div>
    </section>


Congratulations, you've made your charts! Let's commit our changes and move on to our next challenge.

.. code-block:: bash

    $ git commit -m "Made my first charts."
    $ git push origin master

.. note::

    We used D3.js in this class, but there are many other JavaScript charting libraries, each one slightly different. If you want to explore this on your own, here are some other options that generally abstract away the process we used in this class.

    - `Vega-lite <https://vega.github.io/vega-lite/>`_
    - `Charts.js <http://www.chartjs.org/>`_ Looks really awesome and abstracts a lot of the pain points of D3 away, but as it only draws to ``<canvas>`` and we wanted to be able to individually inspect SVG elements, we didn't use it for this class.
    - `C3.js <http://c3js.org/>`_ Important to note that this does not seem to support the latest versions of D3.

    There are also tools that allow you to use a visual editor, creating charts and other visualizations that you can download and/or embed in your project.

    - `Observable <https://beta.observablehq.com>`_ is a relatively new site that allows you to take a more exploratory approach to building your visualizations. Charts and maps update automatically as you update data or settings.
    - `Chartbuilder <https://quartz.github.io/Chartbuilder/>`_ from `Quartz <https://qz.com/>`_, is very good for basic, fast charts with light customization.
    - `DataWrapper <https://www.datawrapper.de/>`_ allows a range of visualizations beyond basic charts, including scatter plots and maps.

**Extra credit**

Now let's try and make these charts interactive. We want to highlight a bar and display its value whenever a user hovers over it. To do this, we're going to use D3's "event binding."

In our ``createChart()`` function, we'll want to add a new method, ``.on()` to the code snippet where we create out bars.

For now, let's log the value to our console.

.. code-block:: javascript
    :emphasize-lines: 10-12

    svg.selectAll('.bar')
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

Now if you look in your console, you should see the values for each bar being logged when you mouse over.

Now let's use this change each bar's color, and the ``mouseleave`` event to remove that highlight when the mouse exit.

.. code-block:: javascript
    :emphasize-lines: 10-15

    svg.selectAll('.bar')
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

And add the rule for ``.highlight`` to the CSS.

.. code-block:: css

    .highlight {
      fill: #2AB2E4;
    }

We have interactivity!

.. image:: _static/chart-highlighting.gif

Now let's add a tooltip. First, in the ``createCharts`` function, add a line that appends a ``<text>`` element to the SVG. Place this under the lines where you append your axes to the SVG, but before you add the bars.

.. code-block:: javascript
    :emphasize-lines: 5-6

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    var tooltip = svg.append('text')
        .attr('class', 'chart-tooltip');


Now in ``_charts.js``, let's go back to our ``.on()`` statement and try filling out the text element with the proper value, and positioning it. Let's also clear the div when the mouse leaves.

.. code-block:: javascript
    :emphasize-lines: 11-18,21-22

    svg.selectAll('.bar')
        .data(annualTotals)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => xScale(d.year))
        .attr('y', d => yScale(d[fieldname]))
        .attr('width', d => xScale.bandwidth())
        .attr('height', d => chartHeight - yScale(d[fieldname]))
        .on('mouseenter', function(d) {
            // centers the text above each bar
            var x = xScale(d.year) + xScale.bandwidth() / 2;
            // the - 5 bumps up the text a bit so it's not directly over the bar
            var y = yScale(d[fieldname]) - 5;

            d3.select(this).classed('highlight', true);
            tooltip.text(d[fieldname])
                .attr('transform', `translate(${x}, ${y})`)
        })
        .on('mouseleave', function(d) {
            d3.select(this).classed('highlight', false);
            tooltip.text('');
        });

Now back in our CSS, we can style this out a bit.

.. code-block:: css

    .chart-tooltip {
      font-family: Helvetica;
      font-size: 12px;
      text-anchor: middle;
    }

You have an interactive chart!

.. image:: _static/chart-tooltip.gif
    :width: 100%



********************
Chapter 7: Hello map
********************

Next we'll move on to creating a map focused on West 62nd Street and Harvard Boulevard, an intersection in South Los Angeles where four men died in less than a year and a half.

To draw the map we will rely on `Leaflet <http://leafletjs.com>`_, a JavaScript library for creating interactive maps. We will install it just as before by using ``npm`` from our terminal.

.. code-block:: base

    $ npm install -s leaflet@1.4.0


After it's been installed, we should import Leaflet into ``_scripts/main.js`` so that its tools are available on our site.

.. code-block:: javascript
    :emphasize-lines: 15

    // Main javascript entry point
    // Should handle bootstrapping/starting application

    'use strict';

    var $ = require('jquery');
    var Link = require('../_modules/link/link');

    $(function() {
      new Link(); // Activate Link modules logic
      console.log('Welcome to Yeogurt!');
    });

    var chart = require('./charts.js');
    var L = require("leaflet");


We'll also need to add a little hack to the file so that Leaflet's images will load. Don't ask. It's a long story.

.. code-block:: javascript
    :emphasize-lines: 17

    // Main javascript entry point
    // Should handle bootstrapping/starting application

    'use strict';

    var $ = require('jquery');
    var Link = require('../_modules/link/link');

    $(function() {
      new Link(); // Activate Link modules logic
      console.log('Welcome to Yeogurt!');
    });

    var chart = require('./charts.js');
    var L = require("leaflet");

    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';


Next we import Leaflet's stylesheets in ``_styles/main.scss`` so that they are also included on our site.

.. code-block:: css
    :emphasize-lines: 7

    // Normalize Styles
    @import 'node_modules/normalize.css/normalize';

    // Import Modules
    @import '../_modules/link/link';
    @import '_charts.scss';
    @import 'node_modules/leaflet/dist/leaflet';


Now, back in the ``index.nunjucks`` template, we should create a placeholder in the page template where the map will live. Let's set it right above the charts section we've just finished.

.. code-block:: jinja
    :emphasize-lines: 1

    <div id="map"></div>

    <section>
        <h3>A South L.A. neighborhood stands apart</h3>
        <p>Harvard Park's 2016 homicide total was its highest in at least 15 years despite a downward trend in killings across L.A. County.</p>

        <div class="charts-holder clearfix">
            <div class="inline-chart" id="county-homicides"></div>
            <div class="inline-chart" id="harvard-park-homicides"></div>
        </div>
    </section>


To bring the map to life, add a new file named ``_map.js`` to the ``_scripts`` directory. Import it in ``main.js``.

.. code-block:: javascript
    :emphasize-lines: 16

    // Main javascript entry point
    // Should handle bootstrapping/starting application

    'use strict';

    var $ = require('jquery');
    var Link = require('../_modules/link/link');

    $(function() {
      new Link(); // Activate Link modules logic
      console.log('Welcome to Yeogurt!');
    });

    var chart = require('./charts.js');
    var L = require("leaflet");
    var map = require("./_map.js");

    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.3.1/dist/images/';


Now in ``_scripts/_map.js`` paste in the following Leaflet code to generate a simple map. It does three things: create a new map in the HTML element we made with "map" set as its ID; add a new map layer with roads, borders, water and other features from OpenStreetMap; finally, add the layer to the map.

.. code-block:: javascript

    var map = L.map('map');
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);


After you save, the index page should reload with a blank map.

.. image:: _static/blank-map.png
    :width: 100%


To zero in on the area we're reporting on, we will need its longitude and latitude coordinates. Go to Google Maps and find 62nd Street and Harvard Boulevard in South LA. Hold down a click until it gives you the coordinates in a popup box. Paste those numbers into Leaflet's ``setView`` method with a zoom level of 15 included.

.. code-block:: javascript
    :emphasize-lines: 4

    var map = L.map('map')
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 15);

.. image:: _static/first-map.png?v=2
    :width: 100%


After you save the file, your map should have relocated. Let's tighten up that zoom and save again.

.. code-block:: javascript
    :emphasize-lines: 4

    var map = L.map('map')
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 18);


.. image:: _static/corner-map.png?v=2
    :width: 100%


Now let's load some data on the map. We will return to the list of all homicides already stored in ``_data/harvard_park_homicides.json``.

Open ``index.nunjucks`` and add a new variable to the ``scripts`` block where the homicides list is stored.

.. code-block:: jinja
    :emphasize-lines: 4

    {% block scripts %}
    <script>
    var annualTotals = {% include '_data/annual_totals.json' %};
    var homicides = {% include '_data/harvard_park_homicides.json' %};
    </script>
    {% endblock %}


Now return to ``_scripts/_map.js``. At the bottom add some JavaScript code that steps through the homicide list and adds each one to the map as a circle, just like the real Homicide Report.

.. code-block:: javascript
    :emphasize-lines: 6-9

    var map = L.map('map')
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 18);

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map);
    });


Save the file and you should now see all the homicides mapped on the page.

.. image:: _static/hello-circles.png?v=2
    :width: 100%


Next, extend the code in ``_scripts/_map.js`` to add a tooltip label on each point.

.. code-block:: javascript
    :emphasize-lines: 4

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name);
    })


Here's what you should see after you do that.

.. image:: _static/hello-tooltips.gif?v=2
    :width: 100%


Next let's sprinkle some CSS in our page to make the circles match the orange color of the dots found on The Homicide Report. As we did with the charts, go to the ``_styles`` folder and create a new file. We'll call this one ``_map.scss``. In that file, copy or write the following:

.. code-block:: css

    #map path {
        fill: #e64d1f;
        fill-opacity: 0.5;
        stroke-opacity: 0;
    }


Just as before, that won't change anything until you import our new file into the main stylesheet. Again, use ``@import`` to introduce your CSS file into ``main.css``

.. code-block:: css
    :emphasize-lines: 8

    // Normalize Styles
    @import 'node_modules/normalize.css/normalize';

    // Import Modules
    @import '../_modules/link/link';
    @import '_charts.scss';
    @import 'node_modules/leaflet/dist/leaflet';
    @import '_map.scss';


After you save, here's what you'll get.

.. image:: _static/orange-circles.png?v=2
    :width: 100%


To make the tooltips visible all the time, edit the JavaScript in ``_scripts/_map.js`` to make the tooltips "permanent."

.. code-block:: javascript
    :emphasize-lines: 4

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
    });

Here they are.

.. image:: _static/permanent-tooltips.png?v=2
    :width: 100%


Alright. We've got an okay map. But it's zoomed in so close a reader might now know where it is. To combat this problem, graphic artists often inset a small map in the corner that shows the the area of focus from a greater distance.

Lucky for us, there's already a Leaflet extension that provides this feature. It's called `MiniMap <https://github.com/Norkart/Leaflet-MiniMap>`_.

To put it to use, we'll need to return to our friend ``npm``.

.. code-block:: bash

    $ npm install -s leaflet-minimap@3.6.1


Just as with other libraries, we need to import it into `_scripts/main.js`.

.. code-block:: javascript
    :emphasize-lines: 16

    // Main javascript entry point
    // Should handle bootstrapping/starting application

    'use strict';

    var $ = require('jquery');
    var Link = require('../_modules/link/link');

    $(function() {
      new Link(); // Activate Link modules logic
      console.log('Welcome to Yeogurt!');
    });

    var chart = require('./charts.js');
    var L = require("leaflet");
    var MiniMap = require('leaflet-minimap');
    var map = require("./_map.js");

    L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.4.0/dist/images/';


Its stylesheets also need to be imported to ``_styles/main.scss``.

.. code-block:: css
    :emphasize-lines: 8

    // Normalize Styles
    @import 'node_modules/normalize.css/normalize';

    // Import Modules
    @import '../_modules/link/link';
    @import '_charts.scss';
    @import 'node_modules/leaflet/dist/leaflet';
    @import 'node_modules/leaflet-minimap/src/Control.MiniMap';
    @import '_map.scss';


Now that everything is installed, return to ``scripts/_map.js`` and create an inset map with the library's custom tools. We can set its view with the ``maxZoom`` option.

.. code-block:: javascript
    :emphasize-lines: 12-16

    var map = L.map('map')
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 18);

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
    })

    var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
        maxZoom: 8
    });
    var mini = new L.Control.MiniMap(sat2);
    mini.addTo(map);


Save the file and the inset map should appear on your page.

.. image:: _static/hello-minimap.png?v=2
    :width: 100%

Just for fun, let's add a couple creature comforts to map. By default, the scroll wheel on your mouse will trigger zooms on the map. Some people (Armand!) have strong feelings about this. Let's do them a favor and turn it off.

.. code-block:: javascript
    :emphasize-lines: 1-3

    var map = L.map('map', {
        scrollWheelZoom: false
    });
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA');
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 18);

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
    })

    var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
        maxZoom: 8
    });
    var mini = new L.Control.MiniMap(sat2);
    mini.addTo(map);


While we're at it, let's also restrict the zoom level so it you can't back too far away from LA.

.. code-block:: javascript
    :emphasize-lines: 4-6

    var map = L.map('map', {
        scrollWheelZoom: false
    })
    var sat = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
        minZoom: 9
    });
    sat.addTo(map);
    map.setView([33.983265, -118.306799], 18);

    homicides.forEach(function (obj) {
        L.circleMarker([obj.latitude,  obj.longitude])
          .addTo(map)
          .bindTooltip(obj.first_name + " " + obj.last_name, {permanent: true});
    })

    var sat2 = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibGF0aW1lcyIsImEiOiJjanJmNjg4ZzYweGtvNDNxa2ZpZ2lma3Z4In0.g0lYVIEs9Y5QcUOhXactHA', {
        maxZoom: 8
    });
    var mini = new L.Control.MiniMap(sat2);
    mini.addTo(map);


Finally, let's preface the map with so a headline.

.. code-block:: html
    :emphasize-lines: 1

    <h3>One corner. Four killings</h3>
    <div id="map"></div>


.. image:: _static/map-hed.png?v=2
    :width: 100%


Then an introductory paragraph.

.. code-block:: html
    :emphasize-lines: 2

    <h3>One corner. Four killings</h3>
    <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
    <div id="map"></div>


.. image:: _static/map-deck.png?v=2
    :width: 100%


All wrapped up in a ``<section>`` tag.

.. code-block:: html
    :emphasize-lines: 1,5

    <section>
        <h3>One corner. Four killings</h3>
        <p>The southwest corner of Harvard Park, at West 62nd Street and Harvard Boulevard, has been especially deadly. In the last year-and-a-half, four men have been killed there — while sitting in a car, trying to defuse an argument or walking home from the barber shop or the corner store.</p>
        <div id="map"></div>
    </section>


.. image:: _static/map-section.png?v=2
    :width: 100%


Congratulations. You've created a custom map. Before we get on to the business of sharing it with the world, we need a couple more pieces here.

Hey. How about a headline?

.. code-block:: html
    :emphasize-lines: 3

    {% extends '_layouts/base.nunjucks' %}

    {% block headline %}A South L.A. neighborhood grapples with a wave of violence{% endblock %}
    {% block byline %}By me{% endblock %}
    {% block pubdate %}
        <time datetime="2018-03-10" pubdate>Mar. 10, 2018</time>
    {% endblock %}


.. image:: _static/final-hed.png?v=2
    :width: 100%


And a real byline.

.. code-block:: html
    :emphasize-lines: 4

    {% extends '_layouts/base.nunjucks' %}

    {% block headline %}A South L.A. neighborhood grapples with a wave of violence{% endblock %}
    {% block byline %}By <a href="http://www.firstgraphicsapp.org/">The First Graphics App Tutorial</a>{% endblock %}
    {% block pubdate %}
        <time datetime="2018-03-10" pubdate>Mar. 10, 2018</time>
    {% endblock %}


.. image:: _static/final-byline.png?v=2
    :width: 100%


And let's a write a lead.

.. code-block:: html
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
    ...
    {% endblock %}


.. image:: _static/final-lead.png?v=2
    :width: 100%

Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Added map, headline and chatter"


Push it to GitHub.

.. code-block:: bash

    $ git push origin master

Now we're ready. Let's do it live.


*************************
Chapter 8: Hello Internet
*************************

In in our last chapter, all the work we've done will finally be published online.

Our Yeoman framework, with its tools, structure and shortcuts, has served us well. It's been a great place to experiment, organize and develop our work. But it's useless to our readers.

The HTML, JavaScript and CSS files the framework generates are all they need. Without all the code running our terminal, those files aren't be able to take advantage of Yeogurt, Gulp, BrowserSync and all our other tricks. But it won't matter. We can upload the simple files our framework renders to the web and they'll be enough for anyone who wants them.

That process — converting a dynamic, living website to simple files living on the filesystem — is a common strategy for publishing news sites. It goes by different names, like "flattening," "freezing" or "baking."  Whatever you call it, it’s a solid path to cheap­, stable host­ing for simple sites. It is used across the industry for pub­lish­ing elec­tion res­ults, longform stories, spe­cial pro­jects and numerous other things.

.. note::

    Examples of static news pages in the wild include:

    * `A wide array of interactive graphics <https://www.washingtonpost.com/graphics/2017/ns/year-in-graphics/>`_ by The Washington Post
    * Hundreds of Los Angeles Times stories at `latimes.com/projects <http://www.latimes.com/projects/>`_
    * Dozens more from The Seattle Times at `projects.seattletimes.com <https://projects.seattletimes.com>`_
    * Interactive apps by `The Dallas Morning News <https://interactives.dallasnews.com/2018/secrets-dallas-dead/>`_
    * `Live election results <https://open.blogs.nytimes.com/2010/12/20/using-flat-files-so-elections-dont-break-your-server/>`_ published by The New York Times
    * Data downloads from the `California Civic Data Coalition <https://calaccess.californiacivicdata.org/downloads/latest/>`_


Lucky for us, Yeogurt is pre-configured to flatten our dynamic site. And GitHub has a hosting service for publishing static pages. Here's all it takes.

Next, open the ``package.json`` file at the root of the project. Scroll to the bottom. In the ``config`` section edit it to instruct Gulp to flatten files to the ``docs`` directory.

.. code-block:: javascript
    :emphasize-lines: 8

    "config": {
      "//": "Entry files",
      "host": "127.0.0.1",
      "port": "3000",
      "baseUrl": "./",
      "directories": {
        "source": "src",
        "destination": "docs",
        "temporary": "tmp",
        "//": "Directories relative to `source` directory",
        "modules": "_modules",
        "layouts": "_layouts",
        "images": "_images",
        "styles": "_styles",
        "scripts": "_scripts",
        "data": "_data"
      }
    }


Return to your terminal where the ``serve`` command is running. Hit ``CTRL-C`` or ``CTRL-Z`` to terminate its process.

Once you are back at the standard terminal, enter the following command to build a static version of your site. Rather than start up the local test server we've been using so far, it will instead save the site as flat files in ``docs``.

.. code-block:: bash

    $ gulp --production


That saves the entire file to the `docs` folder. We're doing that because it's the folder expected by GitHub's free publishing system, called "Pages."

Commit and push to GitHub.

.. code-block:: bash

    $ git add .
    $ git commit -m "Built site to docs folder"
    $ git push origin master


To take advantage of it. Go to the repository on GitHub. Click on the "Settings" tab. Scroll down to the "GitHub Pages" section. Select "master branch /docs folder" as the source. Hit save.

This will result in any files pushed to the "docs" directory of your repository being published on the web. For free.

Wait a few moments and visit `\<your_username\>.github.com/first-graphics-app/ <https://ireapps.github.io/first-graphics-app/>`_. You should see your app published live on the World Wide Web.

.. image:: _static/preview.gif
   :width: 100%
   :target: https://ireapps.github.io/first-graphics-app/


.. warning::

   If your page does not appear, make sure that you have verified your email address with GitHub. It is required before the site will allow publishing pages. And keep in mind there are many other options for publishing flat files, like `Amazon's S3 service <https://en.wikipedia.org/wiki/Amazon_S3>`_.


Congratulations. You've finished this class.
