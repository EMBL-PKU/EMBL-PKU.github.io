---
title: PKU-EMBL Lab - Publications
layout: gridlay
excerpt: "PKU-EMBL Lab -- Publications"
sitemap: false
permalink: /publications/
---

# Publications

A full and continuously updated publication list is available on [Google Scholar](https://scholar.google.com/citations?hl=en&user=FunfWVAAAAAJ). Selected representative papers from the PKU-EMBL Lab and related research program are listed below.

{% for publi in site.data.publist %}

<p class="publication-item">
  <span class="publication-title">{{ publi.title }}</span><br />
  <em>{{ publi.authors }}</em><br />
  <a class="publication-link{% if publi.link.url contains 'scholar.google.com' %} scholar-link{% endif %}" href="{{ publi.link.url }}">{{ publi.link.display }}</a>
</p>

{% endfor %}
