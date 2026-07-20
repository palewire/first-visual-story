A step-by-step guide to publishing a standalone story from a dataset.

- Tutorial: [palewi.re/docs/first-visual-story](https://palewi.re/docs/first-visual-story/)
- Demonstration: [palewire.github.io/first-visual-story](https://palewire.github.io/first-visual-story/)
- Issues: [https://github.com/palewire/first-visual-story/issues](https://github.com/palewire/first-visual-story/issues)

### Contributing to the tutorial

The documentation for this site is published via [Sphinx](https://www.sphinx-doc.org/en/master/) and written in [Markdown](https://www.markdownguide.org/) files in the [`tutorial` directory](/tutorial/).

An edit there followed by push to the master branch on GitHub will trigger the docs being redeployed to [https://palewi.re/docs/first-visual-story/](https://palewi.re/docs/first-visual-story/).

### Running the tutorial locally

- Install dependencies with [uv](https://docs.astral.sh/uv/):

  ```bash
  uv sync --all-groups
  ```
- Run `make docs`. You'll be able to see your local version of the docs at localhost:8000

### Editing the demostration site

The demonstration site at [palewire.github.io/first-visual-story](https://palewire.github.io/first-visual-story/) is published via GitHub Pages and the `demo` folder, following the instructions in the tutorial. Changes made there will go live following a push to the `main` branch.
