```{include} _templates/nav.html
```

# Git

First things first. It always helps to store all your code in the same place, instead of haphazard folders around your computer. This way, you always know where to look if you need to find a project.

```{contents} Sections
  :depth: 1
  :local:
```

## Create a repository

Once you have your terminal open, it will start you off in your computer’s home directory, much like your file explorer.

Let’s verify that using a command called [`pwd`](https://en.wikipedia.org/wiki/Pwd), which stands for present working directory. The output is the full path of your terminal’s current location in the file system. You should get back something like `/Users/palewire/`, the path to your home directory.

```bash
pwd
```

Next let’s enter the [`ls`](https://en.wikipedia.org/wiki/Ls) command to see all of its subdirectories. The terminal should print out the same list of folders you can see in your home directory via the file explorer.

```bash
ls
```

Our first task is to create a folder to store our code.

Use the [`mkdir`](https://en.wikipedia.org/wiki/Mkdir) command to create a new directory in the same style as the Desktop, Documents and Downloads folders included by most operating systems.

We will name this folder `Code`. To verify the command works, open the file explorer and navigate to your home folder. After it’s run, you should see the new directory alongside the rest.

```bash
mkdir Code
```

Now jump into the new directory with the [`cd`](https://en.wikipedia.org/wiki/Cd_(command)) command, which operates the same as double clicking on a folder in your file explorer.

```bash
cd Code
```

Then, create a new directory where we can store the code for the project we're going to build today. Name it after our application.

```bash
mkdir first-visual-story
```

Now, use `cd` again to enter the the directory you just created.

```bash
cd first-graphics-app
```

Use the command [`git init`](https://git-scm.com/docs/git-init) to create a new repository in the current directory. This will be the root of our version-controlled project.

```bash
git init .
```

```{note}
The `.` symbol is a common shortcut to refer to the current directory from the terminal
```

## Connect to GitHub

Visit [GitHub](http://www.github.com) and [create](https://github.com/new) a new public repository named `first-visual-story`. Don't check "Initialize with README." You'll want to start with a blank repository.

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