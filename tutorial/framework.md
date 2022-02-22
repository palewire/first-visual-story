```{include} _templates/nav.html
```

# Framework

Now that we have our Git repository created, we're going to start installing the tools we need to do our job.

The first and more important is a [framework](https://en.wikipedia.org/wiki/Software_framework). What's that? Nothing more than fancy name for a set of software tools that, working together, can stand up a website. Believe it or not, it takes dozens of different things to pull a good site together. Frameworks aim to make the challenge easier by organizing a curated set of tools into a system that saves programmers time.

There are a lot of different frameworks out there. Maybe you've heard of some them, like [Django](https://www.djangoproject.com/) for Python or [Rails](http://rubyonrails.org) for Ruby.

:::{note}
While some frameworks are more popular than others, each newsroom tends to go its own way with a custom system for publishing pages. The programming languages and the details vary, but the fundamentals are almost all the same. Some of them have even been released as open-source software. They include:

- The Los Angeles Times Data Desk's [bigbuild](https://github.com/datadesk/django-bigbuild)
- The Dallas Morning News' [generator-dmninteractives](https://github.com/DallasMorningNews/generator-dmninteractives)
- The Seattle Times' [newsapp-template](https://github.com/seattletimes/newsapp-template/)
- The NPR Apps team's [dailygraphics](https://github.com/nprapps/dailygraphics)
- Politico's [generator-politico-graphics](https://github.com/The-Politico/generator-politico-graphics)
:::

Node.js is so fancy it has more than plain old frameworks. It even includes a framework for creating frameworks! It's called [Yeoman](http://yeoman.io). Its "generator" system makes it easier for publishers to tailor a framework to their site without having to reinvent all the wheels themselves.

We'll start by installing Yeoman using the Node Package Manager (`npm`), which can visit the Internet to download and install any of the thousands of open-source Node.js packages listed in its directory.

```bash
$ npm install -g yo@3.1.1
```

The `-g` means that we're installing the packages globally. You'll be able to run these from any directory on your computer.

The `@` followed by numbers after the `yo` package means we're installing a specific version. Code libraries often change quickly. By specifying a version, we're protecting ourselves against future changes that could break the code of this lesson. If you don't care what version you're installing, you could just use the name of the package, i.e, `npm install -g yo`.

Next we'll install [Gulp](https://gulpjs.com/), a helpful Node.js utility for running a framework on your computer as you develop a site. Again, we turn to npm.

```bash
$ npm install -g gulp@4.0.2
```

Finally, we use npm to install [yeogurt](https://github.com/larsonjj/generator-yeogurt), our project generator for Yeoman. It includes dozens of customizations created by its author to help us build websites. It can't do everything a full-featured newsroom framework might, but it can do enough for us to achieve our goals for this class.

```bash
$ npm install -g generator-yeogurt@3.1.2
```

Create a new project using our yeogurt generator as the guide.

```bash
$ yo yeogurt
```

After you run the command, you will be asked a series of questions. *Pay close attention* because you will need to choose the proper options to continue with our tutorial, and some of the correct selections are not the default choice.

```{image} _static/yeogurt-setup.png
:width: 100%
```

1. Your project name should be the slug "first-graphics-app"
2. The HTML preprocessor you choose must be "Nunjucks."
3. Styles must be written with "Sass"
4. The Sass syntax must be "Scss"

Don't sweat the rest. But make sure you get the above right.

Yeoman will then use the generator to create a complete project that's ready for us to work in. Take a look at the folders its created in the `src` directory. That's the framework offering your a comfortable place to do your work. Let's get in there set up shop.

First, fire up its test server to see what it has to offer out of the box.

```bash
$ npm run-script serve
```

Visit [localhost:3000](http://localhost:3000) in your browser. There you can see the generic website offered as a starting point by our Yeoman generator.

```{image} _static/welcome.png
:width: 100%
```

Congratulations, you've got your framework up and running. Let's save our work and then we'll be ready to start developing our own content.

:::{note}
You'll notice that the all of the sub folders in the `src/` directory of your project have underscores `_` in front of their name. This convention is used to note that these files are **private**, and won't be deployed to your live site.

Instead, Gulp processes the contents of these folders when it builds the project and serves the files from a `tmp/` folder, where you'll see unprefixed `images/`, `scripts/` and `styles/` directories.
:::

Open a second terminal (this way you can keep your server running) and navigate to your code folder.

```bash
$ cd Code
$ cd first-graphics-app
```

Commit our work.

```bash
$ git add .
# ☝️ A fun trick to add *all* of the pages you've changed with one command. ☝️
$ git commit -m "Installed framework"
```

Push it to GitHub.

```bash
$ git push origin master
```