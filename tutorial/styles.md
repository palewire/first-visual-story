```{include} _templates/nav.html
```

# Styles

We want the charts to be positioned side-by-side, so we will need to add some CSS. Navigate to your `app.scss` file.

We can get both charts on the same line by using [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). Using CSS, we will target the `div` that contains both graphics (`div.graphics-container`) and make each graphic 48% of the width, with some space in between them.

```sass
div.graphics-container {
  display: flex;
  justify-content: space-between;
  div.graphic {
    flex: 0 1 48%;
  }
}
```

Now that the charts are next to each other, we can see that despite our resizing in Datawrapper, they are not the same height. We’ll add a few more lines to our CSS to make both iframes the same height (`350px`) and we will also specify with media queries that on screens smaller than `500px` wide, we want the charts to be positioned one after another instead of side-by-side. This will help so that on mobile, they are not super tiny.

```{code-block} scss
---
emphasize-lines: 4-6,9-15
---
div.graphics-container {
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
  }
  div.graphic {
    flex: 0 1 48%;
    @media (max-width: 500px) {
      display: block;
      margin-bottom: 15px;
    }
    iframe {
      min-height: 350px;
    }
  }
}
```

Your charts should now stack into one-column at mobile phone sizes.

```{image} _static/charts/chart-preview-2.png
:width: 100%
```

Let's commit our changes and move on to our next challenge.

```bash
git add .
git commit -m "Styled charts."
git push origin main
```