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

# Git

First things first. It always helps to store all your code in the same place, instead of haphazard folders around your computer. This way, you always know where to look if you need to find a project.

In this case, let's call that directory `Code`.

```bash
# You don't have to type the "$" It's just a generic symbol
# geeks use to show they're working on the command line.
$ mkdir Code
```

You can use the `cd` command to "change directory" into the directory we created.

```bash
# You don't have to type the "$" It's just a generic symbol
# geeks use to show they're working on the command line.
$ cd Code
```

Then, create a new directory where we can store the code for the project we're going to build today. Name it after our application.

```bash
$ mkdir first-graphics-app
```

Now, use `cd` again to enter the the directory you just created.

```bash
$ cd first-graphics-app
```

Use the command `git init` to create a new Git repository in the current directory. This will be the root of our version-controlled project.

```bash
# "." is a common shortcut to refer to the current directory from the terminal
$ git init .
```

Visit [GitHub](http://www.github.com) and [create](https://github.com/new) a new public repository named `first-graphics-app`. Don't check "Initialize with README." You'll want to start with a blank repository.

```{image} _static/new-repo.png
:target: https://github.com/new
:width: 100%
```

Then connect your local directory to GitHub with the following command. Replace `<yourusername>` with your GitHub user name.

```bash
$ git remote add origin https://github.com/<yourusername>/first-graphics-app.git
```

Create your first file, a blank `README` with a [Markdown](https://en.wikipedia.org/wiki/Markdown) file extension since that's [the preferred format of GitHub](https://help.github.com/articles/github-flavored-markdown). The filename will be `README.md`. Markdown is a simple way of writing nicely formatted text, complete with headlines, links and images.

```bash
# Macs or Linux:
$ touch README.md

# If you're using Visual Studio Code, fire it up in your text editor right away:
$ code README.md
```

Open up the README in your text editor and type something in it. Maybe something like:

```
My first graphics app
=====================
```

Make sure to save it. Then officially add the file to your repository for tracking with Git's `add` command.

```bash
$ git add README.md
```

Log its creation with Git's `commit` command. You can include a personalized message after the `-m` flag. If you're on a Windows machine, make sure you use double quotes around your commit message.

```bash
$ git commit -m "First commit"
```

If this is your first time using Git, you may be prompted to configure you name and email. If so, take the time now. Then run the `commit` command above again.

```bash
$ git config --global user.email "your@email.com"
$ git config --global user.name "your name"
```

Now, finally, push your commit up to GitHub.

```bash
$ git push origin master
```

You just created your first code commit! Reload your repository on GitHub and see your handiwork.

```{image} _static/first-commit.png
:width: 100%
```