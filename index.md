---
layout: page
presentation: home
title: Accueil
lang: fr
lang_alternate: /en/
---

Bienvenue sur ce site qui rassemble les articles, les conférences, les contributions open source qu'Emmanuel-Lin
Toulemonde a été amené à faire.

## Mini bio

Emmanuel-Lin Toulemonde recherche deux choses : apprendre et partager.

Il travaille dans le domaine de la _Data Science_ depuis 2014 et du développement logiciel depuis 2017. Il est
actuellement consultant chez OCTO Technology et formateur chez OCTO Academy.

Il aime construire des projets de bout en bout, du besoin métier à la production. Il cherche à construire des
environnements efficaces et où il fait bon travailler.

Ses sujets d'intérêt sont : la _data science_, le _MLEng_, le _MLOps_, le monitoring de systèmes de _data science_,
l'interprétabilité des systèmes de _data science_, le développement logiciel, l'architecture émergente, l'agilité, etc.

Il écrit de nombreux [articles](https://eltoulemonde.fr/articles), parle dans des [conférences](https://eltoulemonde.fr/conference) et a coécrit le [livre Culture MLOps](https://blog.octo.com/culture-mlops--le-machine-learning-est-un-logiciel-qui-se-delivre-comme-les-autres-1).

## Derniers billets

<ul class="recent-posts">
{% for post in site.posts limit: 3 %}
  <li>
    <a href="{{ post.url | relative_url }}">
      <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d/%m/%Y" }}</time>
      <span class="recent-post-title">{{ post.title | escape }}</span>
      <span class="card-arrow" aria-hidden="true">↗</span>
    </a>
  </li>
{% endfor %}
</ul>

[Voir tous les articles →](/articles.html)
