Requirements:

* git
* node > 8.9
* npm

Make that an HTML table.

```
<table>
{% for obj in site.data.harvard_park_homicides %}
    <tr>
        <td>{{ obj.first_name }}</td>
        <td>{{ obj.last_name }}</td>
    </tr>
{% endfor %}
</table>
```

Add the death date.

<table>
{% for obj in site.data.harvard_park_homicides %}
    <tr>
        <td>{{ obj.death_date }}</td>
        <td>{{ obj.first_name }}</td>
        <td>{{ obj.last_name }}</td>
    </tr>
{% endfor %}
</table>

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
