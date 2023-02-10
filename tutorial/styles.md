```{include} _templates/nav.html
```

# Styles

We want the charts to be positioned side-by-side, so we will need to add some code that dictates the design of the page.

```{contents} Sections
  :depth: 1
  :local:
```

## What is CSS?

Customizing design is typically done by writing [CSS](https://en.wikipedia.org/wiki/CSS) code. Short for Cascading Style Sheets, CSS is a language used to add style and layout to webpages. It allows developers to control the colors, fonts, layout, and other visual elements of a webpage, while remaining separate from the HTML structure, which makes your code easier to maintain and update.

```{note}
We don't have time to cover how CSS works in this class. There are dozens of free tutorials available elsewhere online, including [one by Mozilla](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction).
```

Every decent framework offers some method for managing CSS. In baker's cases, CSS files are stored in the `styles` folder. There you can find an `app.scss` file that acts a starting point for whatever styles you'd like to include.

There we can get both charts on the same line by using the [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) layout system. To start, lets target the `div` that contains the parent graphics container.

```{code-block}
.graphics-container {
  display: flex;
  justify-content: space-between;
}
```

One benefit of baker, and many other frameworks, is that they allow you to take advantage of extensions to the traditional tools like CSS. One example is SCSS, also known as [Sassy CSS](https://sass-lang.com/). It extends the capabilities of CSS with features such as variables, mixins and other functions that make writing and maintaining CSS code more efficient and organized.

We can use it here by nesting a directive to limit the width of the two charts to just shy of half the page. By placing the code inside of the parent container's code, we will only style the two elements in our container.

```{code-block}
:emphasize-lines: 4-6

.graphics-container {
  display: flex;
  justify-content: space-between;
  .graphic {
    flex: 0 1 48%;
  }
}
```

Now that the charts are next to each other, we can see that despite our resizing in Datawrapper, they are not the same height. We’ll add a few more lines to our CSS to make both iframes the same height.

```{code-block} scss
---
emphasize-lines: 13-15
---
.graphics-container {
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
  }
  .graphic {
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

We can also specify media queries that target screens smaller than 500 pixels wide, more commonly known as mobile phones, where we want the charts to be stacked on top of each other instead of squeezed side-by-side.

```{code-block} scss
---
emphasize-lines: 4-6,9-12
---
.graphics-container {
  display: flex;
  justify-content: space-between;
  @media (max-width: 500px) {
    display: block;
  }
  .graphic {
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

Let's commit our changes and move on to our next challenge. You know the drill.

```bash
git add .
git commit -m "Styled charts."
git push origin main
```
