---
title: "News"
layout: textlay
excerpt: "PKU-EMBL Lab at Peking University."
sitemap: false
permalink: /allnews.html
---

# News

{% for article in site.data.news %}

<p>{{ article.date }} <br> {{ article.headline | markdownify}}</p>
{% endfor %}
