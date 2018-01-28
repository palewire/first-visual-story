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

```bash
mkdir Code
```

Move in.

```bash
cd Code
```

Create a new directory project

```bash
mkdir first-graphics-app
```

Move in.

```bash
cd Code
```

Install yeoman

```bash
sudo npm install -g yo gulp
```

Use yeoman to install our project generator.

```bash
sudo npm install -g generator-yeogurt
```

Create a new project.

```bash
yo yeogurt
```

Be sure to pick "nunjucks" when creating the project.

Fire up the test server

```bash
gulp serve
```

Visit localhost:3000 in your browser.

Make an edit to index.nunjucks and see it show up on the live site.

```html
    <h1>Welcome to First Graphics App!</h1>
```

Open a second terminal and navigate to your code folder.

```bash
cd Code
cd first-graphics-app
```

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

```
yo yeogurt:page harvard-park-homicides
```

Navigate to localhost:3000/harvard-park-homicides/.

Make a change to harvard-park-homicides/index.nunjucks. See it show up.

```html
{% block content %}
<p>Hello World</p>
{% endblock %}
```

Open up _layouts/base.nunjucks and explain how the template inheritance system works.

Make a small change to base.nunjucks and see it come up live.

```nunjucks
Above content
{% block content %}{% endblock %}
```

Replace _layouts/base.nunjucks with our more polished base template.

```nunjucks
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
```

Fill in a headline and see it show up.

```
{% block headline %}My headline will go here{% endblock %}
```

Fill in a byline and see it show up.

```
{% block byline %}By me{% endblock %}
```

Commit our work.

.. code-block:: bash

    $ git add .
    $ git commit -m "Installed framework"

Push it to GitHub.

.. code-block:: bash
    $ git push origin master


*********************
Chapter 4: Hello data
*********************

TK

**********************
Chapter 5: Hello table
**********************

TK

**********************
Chapter 6: Hello chart
**********************

TK

********************
Chapter 7: Hello map
********************

TK

*************************
Chapter 8: Hello Internet
*************************

TK
