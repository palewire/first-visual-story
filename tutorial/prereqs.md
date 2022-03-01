```{include} _templates/nav.html

```

# Prerequisites

This chapter will help you prepare your computer with the required software. Stop and make sure you have all these tools installed and working properly. Otherwise, [you're gonna have a bad time](https://www.youtube.com/watch?v=ynxPshq8ERo).

```{contents} Sections
  :depth: 1
  :local:
```

## Command-line interface

Whether you know it or not, there is a way to open a special window and directly issue commands to your operating system. Different systems give this tool slightly different names, but they all have some form of it.

On Windows this is called the “command prompt.” On MacOS it is called the “terminal.” Others may call it the “command line.” They’re the same thing, just in different slightly shapes.

```{note}
If you're a Windows user, we recommend you avoid the standard command line provided by the operating system. Instead, you'd be well served by the [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10), which will create a development environment better suited for open-source software work.

We recommend you install the Ubuntu distribution from the Windows Store. This will give you access to a generic terminal without the quirks of Windows.
```

## Text editor

A program like Microsoft Word, which can do all sorts of text formatting like change the size and color of words, is not what you need. Do not try to use it.

You need a program that works with simple ["plain text" files](https://en.wikipedia.org/wiki/Text_file), and is therefore capable of editing documents containing Python code, HTML markup and other languages without dressing them up. Such programs are easy to find and some of the best ones are free.

Regardless of your operating system, we recommend newcomers begin by installing [Visual Studio Code](https://code.visualstudio.com/). [Atom](https://atom.io) and [Sublime Text](https://www.sublimetext.com/) are also excellent options. They’re all free.

## Node.js

[Node.js](https://nodejs.org/en/) is an open-source programming framework built using JavaScript. Many programmers like it because it allows them to write [JavaScript](https://en.wikipedia.org/wiki/JavaScript), which was initially designed to run in web browsers, from the terminal or on a server.

We recommend you use the latest [long-term support](https://en.wikipedia.org/wiki/Long-term_support) version, which at the time of this writing was `16.14.0`. The [Node.js site](https://nodejs.org) has [installer packages](https://nodejs.org/en/download/) available for Windows, MacOS and Linux.

You can verify you have Node.js installed, and if so what version, by running the following in your terminal:

```bash
node --version
```

The number you get back is the version you have installed. If you get an error, you don't have Node.js and you seek out an installer. If you have a slightly older version, you are probably okay. But we make no guarantees. Consider upgrading.

## The `npm` package manager

Installing Node will also install [`npm`](<https://en.wikipedia.org/wiki/Npm_(software)>) on your computer, which stands for "Node Package Manager." We will use it to install open-source JavaScript packages beyond what’s provided by Node.JS, including tools that will help us draw charts and maps.

You can verify you have `npm` installed by running the following command on your terminal:

```bash
npm --version
```

## Git and GitHub

The [`git`](http://git-scm.com/) program allows you to carefully track the changes you make to files over time. This is useful when you're working on your own, but quickly becomes essential on large software projects where you work with other developers.

You can verify `git` is installed from your command line like so:

```bash
git --version
```

## GitHub

[GitHub](https://github.com/) is a website that hosts `git` code repositories, both public and private. It comes with many helpful tools for reviewing code and managing projects. It also has some [extra tricks](http://pages.github.com/) that make it easy to publish web pages, which we will use later. GitHub offers helpful guides for installing Git for [Windows](https://help.github.com/articles/set-up-git#platform-windows), [Macs](https://help.github.com/articles/set-up-git#platform-mac) and [Linux](https://help.github.com/articles/set-up-git#platform-linux).

[The free plan](https://github.com/pricing) is all that's required to complete this lesson. If you make a new account, make sure to confirm your email address with GitHub. We'll need that for something later.

## The `gh` client

There are numerous methods to connect with GitHub from your terminal, covered thoroughly in [GitHub’s documentation](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository). This tutorial will demonstrate how to use the [`gh`](https://cli.github.com/) command-line utility. If you don't have it installed, visit [cli.github.com](https://cli.github.com/) and follow the instructions there.

You can verify you’re ready by executing the following command, which should print out the version of `gh` you have installed.

```bash
gh --version
```

The output should look something like this:

```bash
gh version 2.5.1 (2022-02-15)
https://github.com/cli/cli/releases/tag/v2.5.1
```

```{note}
If you get an error instead, open a fresh terminal and try again. If it’s still not working, revisit [cli.github.com](https://cli.github.com) to make sure you've followed all the necessary steps.
```

With all that installed, you’re ready to get to work.
