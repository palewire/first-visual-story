Requirements:

* git
* node > 8.9
* npm

Create a Code directory for your work.

```bash
mkdir Code
```

Move in.

```bash
cd Code
```

Create a new directory project

```bash
mkdir first-graphics-app
```

Move in.

```bash
cd Code
```

Install yeoman

```bash
sudo npm install -g yo gulp
```

Use yeoman to install our project generator.

```bash
sudo npm install -g generator-yeogurt
```

Create a new project.

```bash
yo react-static
```

Be sure to pick "nunjucks" when creating the project.

Fire up the test server

```bash
gulp serve
```

Visit localhost:3000 in your browser.

Make an edit to index.nunjucks and see it show up on the live site.

```html
    <h1>Welcome to First Graphics App!</h1>
```

Open a second terminal and navigate to your code folder.

```bash
cd Code
cd first-graphics-app
```

Create a new page for our app

```
yo yeogurt:page harvard-park-homicides
```

Navigate to localhost:3000/harvard-park-homicides/.

Make a change to harvard-park-homicides/index.nunjucks. See it show up.

```html
{% block content %}
<p>Hello World</p>
{% endblock %}
```

Open up _layouts/base.nunjucks and explain how the template inheritance system works.

Make a small change to base.nunjucks and see it come up live.

```nunjucks
Above content
{% block content %}{% endblock %}
```

Replace _layouts/base.nunjucks with our more polished base template.

```nunjucks
{# Custom Configuration #}
{% block config %}
  {# Setup site's base URL to match the "baseUrl" key within `package.json` #}
  {# Otherwise default to relative pathing #}
  {% set baseUrl = config.baseUrl or './' %}
{% endblock %}

<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>First News App</title>
    <link rel="stylesheet" href="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/base.css">
    {% block stylesheets %}{% endblock %}
</head>
<body>
    <nav>
        <a href="http://first-graphics-app.readthedocs.org/">
            <img src="https://bl.ocks.org/palewire/raw/1035cd306a2f85b362b1a20ce315b8eb/ire-logo.png">
        </a>
    </nav>
    <header>
        <h1>{% block headline %}{% endblock %}</h1>
        <div class="byline">
            {% block byline %}{% endblock %}
        </div>
    </header>
    {% block content %}{% endblock %}
    <script src="{{baseUrl}}scripts/main.js"></script>
    {% block scripts %}{% endblock %}
</body>
</html>
```

Fill in a headline and see it show up.

```
{% block headline %}My headline will go here{% endblock %}
```

Fill in a byline and see it show up.

```
{% block byline %}By me{% endblock %}
```

Add annual-totals JSON file to _data/annual_totals.json

Return to index.nunjucks and print them out on the page.

```
{% block content %}
{{ site.data.annual_totals }}
{% endblock %}
```

Loop through them and print the annual totals.

```
{% for obj in site.data.annual_totals %}
    {{ obj.year }}: {{ obj.homicides_total }}
{% endfor %}
```

Make that an HTML table.

{% block content %}
<table>
{% for obj in site.data.annual_totals %}
    <tr>
        <td>{{ obj.year }}</td>
        <td>{{ obj.homicides_total }}</td>
    </tr>
{% endfor %}
</table>
{% endblock %}

Make another table with the Harvard Park homicide totals.

{% block content %}
<table>
{% for obj in site.data.annual_totals %}
    <tr>
        <td>{{ obj.year }}</td>
        <td>{{ obj.homicides_total }}</td>
    </tr>
{% endfor %}
</table>

<table>
{% for obj in site.data.annual_totals %}
    <tr>
        <td>{{ obj.year }}</td>
        <td>{{ obj.homicides_harvard_park }}</td>
    </tr>
{% endfor %}
</table>
{% endblock %}


Build a static version of your site

```
gulp --production
```
