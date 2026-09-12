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

<p class="team-lead">The PKU-EMBL Lab brings together researchers working across **environmental microbiology, bioinformatics, artificial intelligence, and biotechnology**. Our team includes faculty, research staff, and graduate students with backgrounds spanning biology, environmental engineering, computer science, and quantitative disciplines.</p>

<p class="team-lead">We welcome inquiries from prospective **M.Phil. students, Ph.D. students, postdoctoral researchers, visiting students, and research interns**. Please see our <a href="{{ "/vacancies/" | relative_url }}">Openings page</a> for current opportunities.</p>

<nav class="team-jump" aria-label="Team page sections">
  <span>Jump to</span>
  <a href="#faculty-and-research-staff">Faculty &amp; Research Staff</a>
  <a href="#graduate-students">Graduate Students</a>{% if alumni_count > 0 %}
  <a href="#alumni">Alumni</a>{% endif %}{% if former_total_count > 0 %}
  <a href="#former-trainees">Visiting Students</a>{% endif %}
</nav>

<h2 id="faculty-and-research-staff">Faculty and Research Staff</h2>

{% include people.html members=site.data.team_members photodir="staff" %}

<h2 id="graduate-students">Graduate Students</h2>

{% include people.html members=site.data.students photodir="student" %}

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
