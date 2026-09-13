---
title: "PKU-EMBL 实验室 - 团队成员"
layout: gridlay
excerpt: "PKU-EMBL 实验室：团队成员"
lang: zh
sitemap: false
permalink: /zh/team/
---

# 团队成员

{% assign alumni_count = site.data.alumni_members | size %}
{% assign former_visiting_count = site.data.alumni_visitors | size %}
{% assign former_degree_count = site.data.alumni_msc | size %}
{% assign former_postdoc_count = site.data.alumni_bsc | size %}
{% assign former_total_count = former_visiting_count | plus: former_degree_count | plus: former_postdoc_count %}

<p class="team-lead">PKU-EMBL 实验室汇聚了来自**环境微生物学、生物信息学、人工智能与生物技术**等领域的研究人员，团队成员背景涵盖生物学、环境工程、计算机科学与定量学科。</p>

<p class="team-lead">我们长期招收**博士研究生、硕士研究生、博士后、联合培养学生、访问学生与科研实习生**，请查看<a href="{{ "/zh/vacancies/" | relative_url }}">招生信息</a>了解最新岗位。</p>

<nav class="team-jump" aria-label="团队页面导航">
  <span>跳转到</span>
  <a href="#faculty-and-research-staff">教师与研究人员</a>
  <a href="#graduate-students">研究生</a>{% if alumni_count > 0 %}
  <a href="#alumni">毕业生</a>{% endif %}{% if former_total_count > 0 %}
  <a href="#former-trainees">访问学生</a>{% endif %}
</nav>

<h2 id="faculty-and-research-staff">教师与研究人员</h2>

{% include people.html members=site.data.team_members_zh photodir="staff" %}

<h2 id="graduate-students">研究生</h2>

{% include people.html members=site.data.students_zh photodir="student" %}

{% if alumni_count > 0 %}
<h2 id="alumni">毕业生</h2>

{% assign postdoc_alumni = site.data.alumni_members | where: "degree", "postdoc" %}
{% assign phd_alumni = site.data.alumni_members | where: "degree", "phd" %}
{% assign mphil_alumni = site.data.alumni_members | where: "degree", "mphil" %}

<div class="row alumni-columns">
{% if postdoc_alumni.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>已出站博士后</h4>
<ul class="former-trainee-list">
{% for member in postdoc_alumni %}
<li>{{ member.name }}{% if member.info_zh %}，{{ member.info_zh }}{% elsif member.info %}，{{ member.info }}{% endif %}{% if member.duration %}，{{ member.duration }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if phd_alumni.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>博士毕业生</h4>
<ul class="former-trainee-list">
{% for member in phd_alumni %}
<li>{{ member.name }}{% if member.info_zh %}，{{ member.info_zh }}{% elsif member.info %}，{{ member.info }}{% endif %}{% if member.duration %}，{{ member.duration }}{% endif %}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if mphil_alumni.size > 0 %}
<div class="col-sm-12 clearfix">
<h4>硕士毕业生</h4>
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
<h2 id="former-trainees">访问学生</h2>

{% assign intern_students = site.data.alumni_visitors | where: "info", "Intern Student" %}
{% assign exchange_students = site.data.alumni_visitors | where: "info", "Exchange Student" %}

<div class="row">

{% if exchange_students.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>交换学生</h4>
<ul class="former-trainee-list single-line-list">
{% for member in exchange_students %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if intern_students.size > 0 %}
<div class="col-sm-6 clearfix">
<h4>实习学生</h4>
<ul class="former-trainee-list single-line-list">
{% for member in intern_students %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if former_degree_count > 0 %}
<div class="col-sm-4 clearfix">
<h4>往届学位学生</h4>
<ul class="former-trainee-list">
{% for member in site.data.alumni_msc %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if former_postdoc_count > 0 %}
<div class="col-sm-4 clearfix">
<h4>往届博士后</h4>
<ul class="former-trainee-list">
{% for member in site.data.alumni_bsc %}
<li>{{ member.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}

</div>
{% endif %}
