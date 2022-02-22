```{include} _templates/nav.html
```

# Prerequisites

Before you can begin, your computer needs the following tools installed and working:

1. A [command-line interface](https://en.wikipedia.org/wiki/Command-line_interface) to interact with your computer
2. A [text editor](https://en.wikipedia.org/wiki/Text_editor) to work with plain text files
3. Version 8.9.4 or greater of the [Node.js](https://nodejs.org/en/) JavaScript runtime
4. The [npm](https://www.npmjs.com) package manager
5. [Git](http://git-scm.com/) version control software and an account at [GitHub.com](http://www.github.com)

```{warning}
Stop and make sure you have all these tools installed and working properly. Otherwise, [you're gonna have a bad time](https://www.youtube.com/watch?v=ynxPshq8ERo).
```

(command-line-prereq)=

## Command-line interface

Unless something is wrong with your computer, there should be a way to open a special window that lets you type in commands. Different operating systems give this tool slightly different names, but they all have some form of it. The generic term for it is the "command-line interface."

On Windows you can find it by opening the "command prompt." Here are [instructions](https://www.bleepingcomputer.com/tutorials/windows-command-prompt-introduction/). On Apple computers, you open the ["Terminal" application](http://blog.teamtreehouse.com/introduction-to-the-mac-os-x-command-line). Ubuntu Linux comes with a program of the [same name](http://askubuntu.com/questions/38162/what-is-a-terminal-and-how-do-i-open-and-use-it).

## Text editor

A program like Microsoft Word, which can do all sorts of text formatting, like change the size and color of words, is not what you need. Do not try to use it.

You need a program that works with simple ["plain text" files](https://en.wikipedia.org/wiki/Text_file), and is therefore capable of editing documents containing Python code, HTML markup and other languages without dressing them up. Such programs are easy to find and some of the best ones are free, including those below.

Regardless of your operating system, we recommend installing [Visual Studio Code](https://code.visualstudio.com/). [Atom](https://atom.io) and [Sublime Text](https://www.sublimetext.com/) are also excellent options.

## Node.js

Node.js is an open-source programming framework built using JavaScript. Many programmers like it because it allows them to write JavaScript not just in their browser for "front-end" tasks, but also in the terminal or on a server for "back-end" tasks.

We recommend you use the latest "long-term support" version, which at the time of this writing was `12.16.1`. The [Node.js site](https://nodejs.org) has [installer packages](https://nodejs.org/en/download/) available for Windows and Mac OSX.

You can verify if you have Node installed, and if so what version, by typing the following into your terminal:

```bash
$ node --version
```

The number you get back is the version you have installed. If you get an error, you don't have Node.js installed and you should start from scratch with an installer package. If you have a slightly older version, you are probably okay. But we make no guarantees. Consider upgrading.

## npm

Installing Node will also install npm on your computer, which stands for "Node Package Manager." During the class, we will use it to install open-source JavaScript packages that will help us draw charts and maps.

You can verify you have npm installed by running the following command on your terminal.

```bash
$ npm --version
```

## Git and GitHub

[Git](http://git-scm.com/) is a version control program for saving the changes you make to files over time. This is useful when you're working on your own, but quickly becomes essential with large software projects when you work with other developers.

[GitHub](https://github.com/) is a website that hosts git code repositories, both public and private. It comes with many helpful tools for reviewing code and managing projects. It also has some [extra tricks](http://pages.github.com/) that make it easy to publish web pages, which we will use later. GitHub offers helpful guides for installing Git for [Windows](https://help.github.com/articles/set-up-git#platform-windows), [Macs](https://help.github.com/articles/set-up-git#platform-mac) and [Linux](https://help.github.com/articles/set-up-git#platform-linux).

You can verify Git is installed from your command line like so:

```bash
$ git --version
```

Once that's done, you should create an account at GitHub, if you don't already have one. [The free plan](https://github.com/pricing) is all that's required to complete this lesson. If you make a new account, make sure to confirm your email address with GitHub. We'll need that for something later.