---
layout: default
title: 'justin elszasz: portfolio'
permalink: /portfolio/
---

<!-- data cities media design energy making -->

# My Portfolio


{% include portfolio_filter.html %}

<div class="masonry-container">

{% for project in site.data.projects.projects %}
  {% include project_card.html 
     category=project.category 
     image=project.image 
     title=project.title 
     description=project.description 
     link=project.link %}
{% endfor %}

</div>
