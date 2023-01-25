```{include} _templates/nav.html

```

# Embeds

You won't have to code up every element yourself. Visual stories often include assets hosted elsewhere, like videos from YouTube or maps from Mapbox. In those cases, you may be given ready-to-serve components that you only need to embed in the page.

In HTML this is typically done with an inline frame. Using a special tag called an `iframe` you can insert a HTML document within the current page. It essentially creates a "window" on the page through which another webpage can be viewed. The webpage being embedded is specified by the `src` attribute of the element. For instance, this snippet will create an iframe of https://example.com that is 500 pixels wide and 300 pixels high. 

```html
<iframe src="https://example.com" width="500" height="300"></iframe>
```

## Embedding Datawrapper charts

[Datawrapper](https://www.datawrapper.de/) is a free online tool that can make charts and maps without requiring any code. It offers iframe tags that can easily be embedded in any HTML page. You can commonly find visual stories that rely on datawrapper to make bar charts, line charts and other simple plots, which allows develops to focus their development time on more ambitious components.

Ahead of this class, we have prepared two datawrapper charts for inclusion in the page. [One](https://www.datawrapper.de/_/XSj9X/) shows a declining countywide trend in homicides. [The other](https://www.datawrapper.de/_/qvF1G/) tracks the same metric in Harvard Park.

```{note}
The [Datawrapper Academy](https://academy.datawrapper.de/) has tons of documentation for making various types of charts/graphics and maps, if you’re interested in learning more about the tool.
```

In the `index.html` file, we’ll find a spot before the cards section for the charts. To keep things consistent with our previous component, let’s start with a `<section>` tag, a headline and short introduction.

```html
<section>
  <h3>A South L.A. neighborhood stands apart</h3>
  <p>
    Harvard Park's 2016 homicide total was its highest in at least 15 years
    despite a downward trend in killings across L.A. County.
  </p>
</section>
```

Next, we’ll want to create a container to hold the graphics. Give this `div` the class of `graphics-container`. Inside it, we'll add two other `divs` with the class `graphic`, one for each chart.

```{code-block} html
---
emphasize-lines: 7-14
---
<section>
  <h3>A South L.A. neighborhood stands apart</h3>
  <p>
    Harvard Park's 2016 homicide total was its highest in at least 15 years
    despite a downward trend in killings across L.A. County.
  </p>
  <div class="graphics-container">
    <div class="graphic">
      <!-- first graphic’s embed code goes here -->
    </div>
    <div class="graphic">
      <!-- second graphic’s embed code goes here -->
    </div>
  </div>
</section>
```

Now that we have containers for the iframes, let’s go back and get those iframe embed codes and paste them within the `div`s with the class `graphic`.

The iframe embed codes are located in the “Publish & Embed” step of each chart in Datawrapper. In cases where you make a chart youself, you can find the code there. In many cases, a might delegate the creation of an outside asset to colleague. Then they'll provide you with the necessary iframe code. Let's simulate that here. Here's the iframe code for the first chart.

```html
<iframe
  title="County homicides, 2000-2017"
  aria-label="Column Chart"
  id="datawrapper-chart-XSj9X"
  src="https://datawrapper.dwcdn.net/XSj9X/5/"
  scrolling="no"
  frameborder="0"
  style="width: 0; min-width: 100% !important; border: none;"
  height="350"
></iframe>
<script type="text/javascript">
  !(function () {
    'use strict';
    window.addEventListener('message', function (e) {
      if (void 0 !== e.data['datawrapper-height']) {
        var t = document.querySelectorAll('iframe');
        for (var a in e.data['datawrapper-height'])
          for (var r = 0; r < t.length; r++) {
            if (t[r].contentWindow === e.source)
              t[r].style.height = e.data['datawrapper-height'][a] + 'px';
          }
      }
    });
  })();
</script>
```

Copy that and paste it inside the first placeholder div in the previous code block example. Your html should look something like this at the end:

```{code-block} html
---
emphasize-lines: 9-33
---
<section>
  <h3>A South L.A. neighborhood stands apart</h3>
  <p>
    Harvard Park's 2016 homicide total was its highest in at least 15 years
    despite a downward trend in killings across L.A. County.
  </p>
  <div class="graphics-container">
    <div class="graphic">
      <iframe
        title="County homicides, 2000-2017"
        aria-label="Column Chart"
        id="datawrapper-chart-XSj9X"
        src="https://datawrapper.dwcdn.net/XSj9X/5/"
        scrolling="no"
        frameborder="0"
        style="width: 0; min-width: 100% !important; border: none;"
        height="350"
      ></iframe>
      <script type="text/javascript">
        !(function () {
          'use strict';
          window.addEventListener('message', function (e) {
            if (void 0 !== e.data['datawrapper-height']) {
              var t = document.querySelectorAll('iframe');
              for (var a in e.data['datawrapper-height'])
                for (var r = 0; r < t.length; r++) {
                  if (t[r].contentWindow === e.source)
                    t[r].style.height = e.data['datawrapper-height'][a] + 'px';
                }
            }
          });
        })();
      </script>
    </div>
    <div class="graphic">
      <!-- second graphic’s embed code goes here -->
    </div>
  </div>
</section>
```

Now copy the code for the second chart.

```html
<iframe
  title="Harvard Park homicides, 2000-2017"
  aria-label="Column Chart"
  id="datawrapper-chart-qvF1G"
  src="https://datawrapper.dwcdn.net/qvF1G/4/"
  scrolling="no"
  frameborder="0"
  style="width: 0; min-width: 100% !important; border: none;"
  height="350"
></iframe>
<script type="text/javascript">
  !(function () {
    'use strict';
    window.addEventListener('message', function (e) {
      if (void 0 !== e.data['datawrapper-height']) {
        var t = document.querySelectorAll('iframe');
        for (var a in e.data['datawrapper-height'])
          for (var r = 0; r < t.length; r++) {
            if (t[r].contentWindow === e.source)
              t[r].style.height = e.data['datawrapper-height'][a] + 'px';
          }
      }
    });
  })();
</script>
```

And paste it in the second placeholder.

```{code-block} html
---
emphasize-lines: 36-60
---
<section>
  <h3>A South L.A. neighborhood stands apart</h3>
  <p>
    Harvard Park's 2016 homicide total was its highest in at least 15 years
    despite a downward trend in killings across L.A. County.
  </p>
  <div class="graphics-container">
    <div class="graphic">
      <iframe
        title="County homicides, 2000-2017"
        aria-label="Column Chart"
        id="datawrapper-chart-XSj9X"
        src="https://datawrapper.dwcdn.net/XSj9X/5/"
        scrolling="no"
        frameborder="0"
        style="width: 0; min-width: 100% !important; border: none;"
        height="350"
      ></iframe>
      <script type="text/javascript">
        !(function () {
          'use strict';
          window.addEventListener('message', function (e) {
            if (void 0 !== e.data['datawrapper-height']) {
              var t = document.querySelectorAll('iframe');
              for (var a in e.data['datawrapper-height'])
                for (var r = 0; r < t.length; r++) {
                  if (t[r].contentWindow === e.source)
                    t[r].style.height = e.data['datawrapper-height'][a] + 'px';
                }
            }
          });
        })();
      </script>
    </div>
    <div class="graphic">
      <iframe
        title="Harvard Park homicides, 2000-2017"
        aria-label="Column Chart"
        id="datawrapper-chart-qvF1G"
        src="https://datawrapper.dwcdn.net/qvF1G/4/"
        scrolling="no"
        frameborder="0"
        style="width: 0; min-width: 100% !important; border: none;"
        height="350"
      ></iframe>
      <script type="text/javascript">
        !(function () {
          'use strict';
          window.addEventListener('message', function (e) {
            if (void 0 !== e.data['datawrapper-height']) {
              var t = document.querySelectorAll('iframe');
              for (var a in e.data['datawrapper-height'])
                for (var r = 0; r < t.length; r++) {
                  if (t[r].contentWindow === e.source)
                    t[r].style.height = e.data['datawrapper-height'][a] + 'px';
                }
            }
          });
        })();
      </script>
    </div>
  </div>
</section>
```

At this point, you should see something like this on your page:

```{image} _static/charts/chart-preview-1.png
:width: 100%
```

Let's commit our changes and move on to our next challenge.

```bash
git add .
git commit -m "Embedded charts."
git push origin main
```