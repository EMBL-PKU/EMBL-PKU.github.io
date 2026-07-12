---
title: "PKU-EMBL Lab - Team"
layout: gridlay
excerpt: "PKU-EMBL Lab: Team members"
sitemap: false
permalink: /team/
---

# Team

{% assign alumni_count = site.data.alumni_members | size %}
{% assign former_visiting_count = site.data.alumni_visitors | size %}
{% assign former_degree_count = site.data.alumni_msc | size %}
{% assign former_postdoc_count = site.data.alumni_bsc | size %}
{% assign former_total_count = former_visiting_count | plus: former_degree_count | plus: former_postdoc_count %}

The PKU-EMBL Lab brings together researchers working across **environmental microbiology, bioinformatics, artificial intelligence, and biotechnology**. Our team includes faculty, research staff, and graduate students with backgrounds spanning biology, environmental engineering, computer science, and quantitative disciplines.

We welcome inquiries from prospective **M.Phil. students, Ph.D. students, postdoctoral researchers, visiting students, and research interns**. Please see our <a href="{{ "/vacancies/" | relative_url }}">Openings page</a> for current opportunities.

<nav class="team-jump">
  Jump to
  <a href="#faculty-and-research-staff">faculty and research staff</a>,
  <a href="#graduate-students">graduate students</a>{% if alumni_count > 0 %},
  <a href="#alumni">alumni</a>{% endif %}{% if former_total_count > 0 %},
  <a href="#former-trainees">visiting students</a>{% endif %}.
</nav>

<h2 id="faculty-and-research-staff">Faculty and Research Staff</h2>

{% assign number_printed = 0 %}
{% for member in site.data.team_members %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  {% if member.photo %}
  <img src="{{ "/images/teampic/staff/" | append: member.photo | relative_url }}" class="img-responsive" width="25%" style="float: left" />
  {% endif %}
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!-- <br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

{% if member.number_educ == 1 %}

  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}

  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

{% if member.number_educ == 3 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}

<h2 id="graduate-students">Graduate Students</h2>

{% assign number_printed = 0 %}
{% for member in site.data.students %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ "/images/teampic/student/" | append: member.photo | relative_url }}" class="img-responsive" width="25%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }} <!--<br>email: <{{ member.email }}></i> -->
  <ul style="overflow: hidden">

{% if member.number_educ == 1 %}

  <li> {{ member.education1 }} </li>
  {% endif %}

{% if member.number_educ == 2 %}

  <li> {{ member.education1 | markdownify}} </li>
  <li> {{ member.education2 | markdownify}} </li>
  {% endif %}

{% if member.number_educ == 3 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  {% endif %}

{% if member.number_educ == 4 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  {% endif %}

{% if member.number_educ == 5 %}

  <li> {{ member.education1 }} </li>
  <li> {{ member.education2 }} </li>
  <li> {{ member.education3 }} </li>
  <li> {{ member.education4 }} </li>
  <li> {{ member.education5 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}

{% if alumni_count > 0 %}
<h2 id="alumni">Alumni</h2>

{% assign postdoc_alumni = site.data.alumni_members | where: "degree", "postdoc" %}
{% assign phd_alumni = site.data.alumni_members | where: "degree", "phd" %}
{% assign mphil_alumni = site.data.alumni_members | where: "degree", "mphil" %}

<div class="row alumni-columns">
{% if postdoc_alumni.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>Postdoctoral Alumni</h4>
<ul class="former-trainee-list">
{% for member in postdoc_alumni %}
<li>{{ member.name }}{% if member.info %}, {{ member.info }}{% endif %}{% if member.duration %}, {{ member.duration }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if phd_alumni.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>Ph.D. Alumni</h4>
<ul class="former-trainee-list">
{% for member in phd_alumni %}
<li>{{ member.name }}{% if member.info %}, {{ member.info }}{% endif %}{% if member.duration %}, {{ member.duration }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if mphil_alumni.size > 0 %}
<div class="col-sm-12 clearfix">
<h4>M.Phil. Alumni</h4>
{% assign mphil_split = mphil_alumni.size | plus: 1 | divided_by: 2 %}
<div class="row mphil-alumni-columns">
<div class="col-sm-6 clearfix">
<ul class="former-trainee-list">
{% for member in mphil_alumni %}
{% if forloop.index0 < mphil_split %}
<li>{{ member.name }}</li>
{% endif %}
{% endfor %}
</ul>
</div>
<div class="col-sm-6 clearfix">
<ul class="former-trainee-list">
{% for member in mphil_alumni %}
{% unless forloop.index0 < mphil_split %}
<li>{{ member.name }}</li>
{% endunless %}
{% endfor %}
</ul>
</div>
</div>
</div>
{% endif %}
</div>
{% endif %}

{% if former_total_count > 0 %}
<h2 id="former-trainees">Visiting Students</h2>

{% assign intern_students = site.data.alumni_visitors | where: "info", "Intern Student" %}
{% assign exchange_students = site.data.alumni_visitors | where: "info", "Exchange Student" %}

<div class="row">

{% if exchange_students.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>Exchange Students</h4>
<ul class="former-trainee-list single-line-list">
{% for member in exchange_students %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if intern_students.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>Intern Students</h4>
<ul class="former-trainee-list single-line-list">
{% for member in intern_students %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if former_degree_count > 0 %}
<div class="col-sm-4 clearfix">
<h4>Former Degree Students</h4>
<ul class="former-trainee-list">
{% for member in site.data.alumni_msc %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if former_postdoc_count > 0 %}
<div class="col-sm-4 clearfix">
<h4>Former Postdoctoral Researchers</h4>
<ul class="former-trainee-list">
{% for member in site.data.alumni_bsc %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

</div>
{% endif %}

<!-- ## Administrative Support
<a href="mailto:Rijsewijk@Physics.LeidenUniv.nl">Ellie van Rijsewijk</a> is helping us (and other groups) with administration. -->
