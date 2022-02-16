<nav>
  <div class="row">
    <div class="sevencol">
      <div class="shingle">
        <a href="https://palewi.re/">
          <div rel="rnews:copyrightedBy rnews:hasSource rnews:providedBy">
            <div about="http://palewi.re/" typeof="rnews:Organization">
              <div property="rnews:name">palewire</div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="fivecol last links">
      <ul>
        <li>
          <a href="http://palewi.re/posts/" title="Posts">
            Posts
          </a>
        </li>
        <li>
          <a href="http://palewi.re/work/" title="Work">
            Work
          </a>
        </li>
        <li>
          <a href="http://palewi.re/talks/" title="Talks">
            Talks
          </a>
        </li>
        <li>
          <a href="http://palewi.re/who-is-ben-welsh/" title="Who is Ben Welsh?">
            About
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="row topbar">
    <div class="twelvecol last"></div>
</div>

# Cards

[Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) is an HTML, CSS and JavaScript toolkit that you can use to create the cosmetic "front-end" of web applications. It is a collection of ready-to-use pieces called components, which are building blocks you can mix and match to help jumpstart a project. Its components can be used as-is or as a base to be customized by the developer.

The components library includes things that you might include in a project, like buttons, modals and dropdowns.

```{image} _static/bootstrap.png
:width: 100%
```

We're going to create a photo grid of pictures of Harvard Park homicide victims. Each grid block will have a picture and some basic information. We're going to use [the "cards" component](https://getbootstrap.com/docs/4.4/components/card/) included in Bootstrap's version 4 to accomplish this. Cards are self-contained boxes of information which can be arranged and grouped on a page any way you want.

```{image} _static/bootstrap-cols.png
:width: 100%
```

First, we need to set up our grid. To do that, we need to talk about [HTML's division tag](https://www.w3schools.com/Tags/tag_div.asp), also known as a `<>`. The simplest way to think of a div is as container. Like any container, divs hold things. Divs can be nested inside of each other, like putting a box inside a box.

This is how Bootstrap cards work. Each card is a container which has additional containers inside it to hold, in this case, a picture, the victim's name, age, race and when he or she was killed.

Like other HTML tags, divs can have `class` attributes that help identify their function and link them to cosmetic styles. Bootstrap provides us with a standard layout of divs that, if structured and labeled properly, will instantly snap together to look like cards.

Let's give it a try. We will start by creating a container div for each victim. We'll add just the name of the first and last name of each victim first.

```{code-block} jinja
:emphasize-lines: 3-7

{% block content %}
{% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
      </div>
    </div>
{% endfor %}
{% endblock %}
```

```{image} _static/cards-first.png
:width: 100%
```

Let's add a sentence below the name that summarizes who each victim was and when they died.

```{code-block} jinja
:emphasize-lines: 5

{% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

Now let's add each victim's image to their card.

```{code-block} jinja
:emphasize-lines: 3

{% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      <img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

```{image} _static/card-no-columns.png
:width: 100%
```

Ugh. That's a lot of broken images. To fix it, let's add an `if` clause around the image tag to check for an image in the data. This way, our code will loop through the list of victims and \_if\_ there is an image it will add it to the right card. If not, the code will move on to the next row in the data.

```{code-block} jinja
:emphasize-lines: 3

{% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

Phew. Better. But what we've got so far is a grid that doesn't look much like a grid. In fact it's not a grid at all. It's just a big stack.

To arrange our cards using Bootstrap's system, we need to play by Bootstrap's rules. Look at its documentation and you'll see that Bootstrap asks us to wrap our cards in a div with the class `card-columns` if we want a grid. Like this:

```{code-block} jinja
:emphasize-lines: 1,11

<div class="card-columns">
    {% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    {% endfor %}
</div>
```

Note that the new div is outside of our `for` loop, meaning it only appears on the page once with all of the card divs inside of it.

We're not done yet. We want to be able to click on each card and be redirected to the victim's page on the Los Angeles Times Homicide Report site. While we're at it, let's add some `<strong>` tags to the victims' names to make them stand out from the sentence about them.

```{code-block} jinja
:emphasize-lines: 6-10

<div class="card-columns">
    {% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    {% endfor %}
</div>
```

```{image} _static/card-slug.png
:width: 100%
```

Now let's start to wrap things up by writing a headline for our cards section.

```{code-block} jinja
:emphasize-lines: 1

<h3>Lives lost in Harvard Park</h3>
<div class="card-columns">
    {% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    {% endfor %}
</div>
```

```{image} _static/card-headline.png
:width: 100%
```

And now, some introductory text. We can use a new templating trick, the `length` filter, to insert some automatically generated statistics into the text.

```{code-block} jinja
:emphasize-lines: 2

<h3>Lives lost in Harvard Park</h3>
<p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
<div class="card-columns">
    {% for obj in site.data.harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    {% endfor %}
</div>
```

Let's set up our card grid as it's own section by adding `<section>` tags. This is simple example of adding some hidden stucture to your page so its easier for search engines and other spiders to parse.

```{code-block} jinja
:emphasize-lines: 1,19

<section>
    <h3>Lives lost in Harvard Park</h3>
    <p>The {{ site.data.harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
    <div class="card-columns">
        {% for obj in site.data.harvard_park_homicides %}
        <div class="card">
          {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}">{% endif %}
          <div class="card-body">
            <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
                <strong>
                    <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
                </strong>
            </a>
            <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
          </div>
        </div>
        {% endfor %}
    </div>
</section>
```

```{image} _static/card-full-section.png
:width: 100%
```

We're all done here. So let's commit our work for this chapter.

```bash
$ git add .
$ git commit -m "Created a victims card grid"
```

Push it to GitHub.

```bash
$ git push origin master
```