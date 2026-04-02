---
layout: page
permalink: /projects/
title: Projects
description:
nav: true
nav_order: 2
---

<div class="projects-page">
  <p class="projects-page-intro">Selected research and public OSS/Tooling projects are listed below.</p>

  <div class="projects">
    {% assign ordered_projects = site.projects | sort: "importance" | reverse %}
    {% assign project_categories = "research,oss-tools" | split: "," %}

    {% for category in project_categories %}
      {% if category == "research" %}
        {% assign category_label = "Research Projects" %}
      {% elsif category == "oss-tools" %}
        {% assign category_label = "Open Source & Developer Tools" %}
      {% else %}
        {% assign category_label = category %}
      {% endif %}

      {% assign category_projects = ordered_projects | where: "category", category %}

      {% if category_projects.size > 0 %}
        <h2 class="category">{{ category_label }}</h2>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-2">
            {% for project in category_projects %}
              {% include projects.liquid %}
            {% endfor %}
          </div>
        </div>
      {% endif %}
    {% endfor %}

  </div>
</div>
