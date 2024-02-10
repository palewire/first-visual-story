# HTML

This chapter will guide you through converting your list of victims in a grid with photographs.

```{contents} Sections
  :depth: 1
  :local:
```

## Meet Bootstrap

[Bootstrap](https://getbootstrap.com/docs/5.1/getting-started/introduction/) is an HTML, CSS and JavaScript toolkit that you can use to create the cosmetic frontend of web applications. It is a collection of ready-to-use pieces called components, which are building blocks you can mix and match to help jumpstart a project. Its components can be used as-is or as a base to be customized by the developer.

The components library includes things that you might include in a project, like buttons, modals and dropdowns.

```{image} _static/bootstrap.png
:width: 100%
```

We aim to create a grid of victims where each block will have a picture and some basic information. To do this, we’re going to use [the "cards" component](https://getbootstrap.com/docs/4.4/components/card/) included in Bootstrap's version 5. Cards are self-contained boxes of information which can be arranged and grouped on a page any way you want.

```{image} _static/bootstrap-cols.png
:width: 100%
```

## Add division tags

First, we need to set up our grid. To do that, we need to talk about [HTML's division tag](https://www.w3schools.com/Tags/tag_div.asp), also known as a `<div>`. In simple terms, a div is a container. Like any container, divisions hold things. Divisions can be nested inside of each other, like putting one box inside another box.

This is how Bootstrap cards work. Each card is a container which has additional containers inside it to hold, in this example, a picture, the victim's name, age, race and when he or she was killed.

Like other HTML tags, divisions can have `class` attributes that help identify their function and link them to cosmetic styles. Bootstrap provides us with a standard layout of boxes that, if structured and labeled properly, will instantly snap together to look like cards.

Let's give it a try. We will start by creating a container div for each victim. We'll add just the name of the first and last name of each victim first.

```{code-block} jinja
:emphasize-lines: 3-7

{% block content %}
{% for obj in harvard_park_homicides %}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
      </div>
    </div>
{% endfor %}
{% endblock content %}
```

![](_static/cards-first.png)

Let's add a sentence below the name that summarizes who each victim was and when they died.

```{code-block} jinja
:emphasize-lines: 5

{% for obj in harvard_park_homicides %}
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

![](_static/cards-second.png)

## Add images

Now let's add each victim's image to their card.

```{code-block} jinja
:emphasize-lines: 3

{% for obj in harvard_park_homicides %}
    <div class="card">
      <img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

Ugh. You save and nothing changes on localhost. What’s wrong? When in doubt, take a look at your terminal. You should see something like this:

![](_static/card-image-fail.png)

Baker has raised an error. Look carefully and you can see it’s telling you that `attempted to output null or undefined value`. This means you tried to print something in your template that doesn’t exist. Check your data and you’ll see that not every victim has an image. So trying to print one for every iteration of the `for` loop caused this crash.

To fix it, let's add an `if` clause around the image tag to check for an image in the data. This way, our code will loop through the list of victims and if there is an image it will add it to the right card. If not, the code will move on to the next row in the data.

```{code-block} jinja
:emphasize-lines: 3

{% for obj in harvard_park_homicides %}
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
{% endfor %}
```

The error should go away and you should see something more like this in your browser.

![](_static/cards-image.png)

Phew. That’s better, but still far from what we want. What we've got so far is a grid that doesn't look much like a grid. In fact it's not a grid at all. It's just a big stack.

## Create a grid

To arrange our cards using Bootstrap’s system, we need to play by Bootstrap's rules.

Look at [its documentation](https://getbootstrap.com/docs/5.1/examples/masonry/) and you’ll see that Bootstrap asks us to wrap our cards in a div with the class `row` and a special attribute required by Masonry, the Javascript tool that will layout the page. It also wants us to use some special Bootstrap classes to dictate how wide our cards will be.

Make the following changes. Remember there’s no shame in using copy and paste.

```{code-block} jinja
:emphasize-lines: 1,3,11,13

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for obj in harvard_park_homicides %}
    <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    </div>
    {% endfor %}
</div>
```

![](_static/cards-working.png)

```{note}
Notice that the new division is outside of our `for` loop, meaning it only appears on the page once with all of the cards inside of it.
```

We're not done yet. We want to be able to click on each card and be redirected to the victim's page on the Los Angeles Times Homicide Report site. While we're at it, let's add some `<strong>` tags to the victims' names to make them stand out from the sentence about them.

```{code-block} jinja
:emphasize-lines: 7-11

<div class="row" data-masonry='{"percentPosition": true }'>
    {% for obj in harvard_park_homicides %}
    <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    </div>
    {% endfor %}
</div>
```

![](_static/cards-links.png)

## Add supporting elements

Now let's start to wrap things up by writing a headline for our cards section.

```{code-block} jinja
:emphasize-lines: 1

<h3>Lives lost in Harvard Park</h3>
<div class="row" data-masonry='{"percentPosition": true }'>
    {% for obj in harvard_park_homicides %}
    <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    </div>
    {% endfor %}
</div>
```

![](_static/cards-headline.png)

And now, some introductory text. We can use a new templating trick, the `length` filter, to insert some automatically generated statistics into the text.

```{code-block} jinja
:emphasize-lines: 2

<h3>Lives lost in Harvard Park</h3>
<p>The {{ harvard_park_homicides|length }} homicides in Harvard Park since 2000 were primarily black and Latino males, but the list includes husbands, wives, fathers, mothers of all ages, and even some small children.</p>
<div class="row" data-masonry='{"percentPosition": true }'>
    {% for obj in harvard_park_homicides %}
    <div class="col-sm-6 col-lg-4 mb-4">
    <div class="card">
      {% if obj.image %}<img class="card-img-top" src="{{ obj.image }}" alt="{{ obj.first_name }} {{ obj.last_name }}">{% endif %}
      <div class="card-body">
        <a href="http://homicide.latimes.com/post/{{ obj.slug }}" target="_blank">
            <strong>
                <h5 class="card-title">{{ obj.first_name }} {{ obj.last_name }}</h5>
            </strong>
        </a>
        <p class="card-text">{{ obj.last_name }}, a {{ obj.age}}-year-old {{ obj.race }} {{ obj.gender }}, died in {{ obj.death_year }}.</p>
      </div>
    </div>
    </div>
    {% endfor %}
</div>
```

![](_static/cards-description.png)

## Commit your work

We're all done here. So let's commit our work for this chapter.

First add.

```bash
git add .
```

Then commit.

```bash
$ git commit -m "Created a victims card grid"
```

Then push.

```bash
git push origin main
```
