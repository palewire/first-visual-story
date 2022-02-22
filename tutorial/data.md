```{include} _templates/nav.html
```

# Data

We've got our system set up. Now it's time to start telling our story. To do that, we need our data.

If we were writing this application entirely in the browser with traditional JavaScript we'd have to pull it in with dynamic "AJAX" calls that retrieve data over the web as the page is constructed. But since we're working with a Node.js system, running code here on the backend, we can import data directly into the template instead and lay it out before the page is rendered in the browser. This results in a faster experience for our users, and opens up new ways for us to be creative with our data.

Every newsroom's system will handle this differently. Our Yeoman generator is preconfigured to open all JSON data files in the `_data` folder and import them into our Nunjucks templates.

Let's give it a try. Grab the [list of Harvard Park homicides](https://raw.githubusercontent.com/ireapps/first-graphics-app/master/data/harvard_park_homicides.json) published by the Los Angeles Times and save it to `_data/harvard_park_homicides.json`. It includes every homicide victim in the neighborhood since 2000 in the [JSON data format](https://en.wikipedia.org/wiki/JSON) favored by JavaScript.

```javascript
[
   {
      "case_number":"2017-04514",
      "slug":"eddie-rosendo-lino",
      "first_name":"Eddie",
      "middle_name":"Rosendo",
      "last_name":"Lino",
      "death_date":"2017-06-18T00:00:00.000Z",
      "death_year":2017,
      "age":23.0,
      "race":"black",
      "gender":"male",
      "image":null,
      "longitude":-118.304107484,
      "latitude":33.9904336958
   },
   {
      "case_number":"2017-03454",
      "slug":"alex-david-lomeli",
      "first_name":"Alex",
      "middle_name":"David",
      "last_name":"Lomeli",
      "death_date":"2017-05-07T00:00:00.000Z",
      "death_year":2017,
      "age":18.0,
      "race":"latino",
      "gender":"male",
      "image":null,
      "longitude":-118.300290584,
      "latitude":33.9793646958
   },
   ...
```

Return to `index.nunjucks` and add the following to the bottom to print the data out on the page. We can do that using the `{{ }}` print tags provided by Nunjucks.

```jinja
{% block content %}
    {{ site.data.harvard_park_homicides }}
{% endblock %}
```

Instead of just printing the data in one big block, let's loop through the records and print them one by one. We'll use the `{% %}` template tags provided by Nunjucks, which allow you to use common computer programming logic when you're laying out a page.

```{code-block} jinja
:emphasize-lines: 2-4

{% block content %}
{% for obj in site.data.harvard_park_homicides %}
    {{ obj }}
{% endfor %}
{% endblock %}
```

```{image} _static/data-dump.png
:width: 100%
```

To put each one on its own line, add a line break with a `<br>` tag. That's just boring old HTML. Writing pages with a templating language like Nunjucks is typically nothing more than mixing traditional HTML with the template tags that negotiate your data files and other variables.

```{code-block} jinja
:emphasize-lines: 3

{% block content %}
{% for obj in site.data.harvard_park_homicides %}
    {{ obj }}<br>
{% endfor %}
{% endblock %}
```

```{image} _static/hello-loop.png
:width: 100%
```

That's good, but hardly informative. How do we start printing out the contents of the data? The fields in the JSON dictionary for each homicide are available by adding a `.` after the object. For instance, here's how to print the contents of the `last_name` field.

```{code-block} jinja
:emphasize-lines: 3

{% block content %}
{% for obj in site.data.harvard_park_homicides %}
    {{ obj.last_name }}<br>
{% endfor %}
{% endblock %}
```

```{image} _static/hello-last-name.png
:width: 100%
```

Now the first name.

```{code-block} jinja
:emphasize-lines: 3

{% block content %}
{% for obj in site.data.harvard_park_homicides %}
    {{ obj.first_name }} {{ obj.last_name }}<br>
{% endfor %}
{% endblock %}
```

```{image} _static/hello-full-name.png
:width: 100%
```

Not bad. We've actually got some data on the page. Seems like a good moment to stop, take a break and commit our work.

```bash
$ git add .
$ git commit -m "Printed a list of names from data"
```

Push it to GitHub.

```bash
$ git push origin master
```