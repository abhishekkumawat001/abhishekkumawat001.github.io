---
layout: page
permalink: /repositories/
title: repositories
description: My coding profiles and GitHub repositories
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

## Coding Stats

### LeetCode Stats

![LeetCode Stats](https://leetcard.jacoblin.cool/abhishekkumawat001?theme=dark&font=Karma&ext=heatmap)

### GeeksForGeeks Stats

![GeeksForGeeks Stats](https://geeks-for-geeks-stats-api.vercel.app/?userName=kabhis9r84)

### TensorTonic Solutions

<div class="d-flex flex-wrap gap-2 mb-3">
  <img src="https://img.shields.io/github/commit-activity/m/abhishekkumawat001/TensorTonic-Solutions?style=for-the-badge&label=Monthly%20Commits&color=blue" alt="Monthly Commits">
  <img src="https://img.shields.io/github/last-commit/abhishekkumawat001/TensorTonic-Solutions?style=for-the-badge&label=Last%20Commit&color=green" alt="Last Commit">
  <img src="https://img.shields.io/github/languages/top/abhishekkumawat001/TensorTonic-Solutions?style=for-the-badge&color=yellow" alt="Top Language">
  <img src="https://img.shields.io/github/repo-size/abhishekkumawat001/TensorTonic-Solutions?style=for-the-badge&label=Repo%20Size&color=purple" alt="Repo Size">
</div>

<a href="https://github.com/abhishekkumawat001/TensorTonic-Solutions" target="_blank" class="btn btn-sm btn-outline-primary">
  View TensorTonic Solutions Repository →
</a>

---

## GitHub Users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## GitHub Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
