A step-by-step guide to publishing a standalone story from a dataset.

* Demonstration: [ireapps.github.io/first-graphics-app](https://ireapps.github.io/first-graphics-app/)
* Documentation: [www.firstgraphics.app](http://www.firstgraphics.app)
* Issues: [https://github.com/ireapps/first-graphics-app/issues](https://github.com/ireapps/first-graphics-app/issues)

## Contributing to the docs

The documentation for this site is published via [Read the Docs](https://readthedocs.org/) and controlled by the [Sphinx](https://www.sphinx-doc.org/en/master/) configuration and [reStructured Text](https://docutils.sourceforge.io/rst.html) files in the `readthedocs` directory. An edit there followed by push to the master branch on GitHub will trigger the docs being redeployed to [www.firstgraphics.app](http://www.firstgraphics.app).

To run the docs locally, first make sure you have installed everything in the `Pipfile`. Then run `make html` and then `make livehtml` from inside the `readthedocs` directory in the repo.

## Editing the example site

The demonstration site at [ireapps.github.io/first-graphics-app](https://ireapps.github.io/first-graphics-app/) is published via GitHub's Pages framework, following the instructions in the tutorial. The files on the web are available here in the `docs` folder. Changes made there will go live following a push to the master branch on GitHub.

