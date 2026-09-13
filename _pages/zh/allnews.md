---
title: "PKU-EMBL 实验室 - 动态"
layout: textlay
excerpt: "PKU-EMBL 实验室动态。"
lang: zh
sitemap: false
permalink: /zh/allnews.html
---

# 实验室动态

PKU-EMBL 实验室的最新动态，包括科研进展、团队公告与网站新闻。

{% for article in site.data.news %}
<div class="news-item-page">
  <time>{{ article.date }}</time>
  <p>{% if article.headline_zh %}{{ article.headline_zh }}{% else %}{{ article.headline }}{% endif %}</p>
</div>
{% endfor %}
