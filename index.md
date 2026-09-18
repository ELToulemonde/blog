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

Il écrit de nombreux [articles](https://eltoulemonde.fr/articles), intervient dans des [conférences](https://eltoulemonde.fr/conference) et a coécrit le [livre Culture MLOps](https://publication.octo.com/culture-mlops).

## À la une
{: .visually-hidden}

<div class="home-highlights">
  <div class="feature-card feature-card--book">
    <div class="feature-cover">
      <img src="/assets/photo/culture-mlops.png" alt="Couverture du livre Culture MLOps" width="1000" height="1037">
    </div>
    <div class="feature-copy">
      <p class="feature-kicker">Livre · téléchargement libre</p>
      <h3><a href="/livre-culture-mlops.html">Culture MLOps</a></h3>
      <p>Coécrit avec Sofia Calcagno, un livre pour traiter le Machine Learning comme un logiciel et mettre durablement les modèles en production.</p>
      <p class="feature-actions"><a class="feature-link" href="/livre-culture-mlops.html">Découvrir le livre <span aria-hidden="true">→</span></a> <a href="https://publication.octo.com/culture-mlops">Télécharger gratuitement</a></p>
    </div>
  </div>
  <div class="feature-card feature-card--conference">
    <div class="feature-copy">
      <p class="feature-kicker">Curation · depuis 2023</p>
      <h3>La Grosse Conf</h3>
      <p>Curateur de cette conférence conçue pour 300 professionnels de la data et de l’IA : choix des sujets, accompagnement des speakers et construction du programme.</p>
      <p class="feature-actions"><a class="feature-link" href="https://www.lagrosseconf.com/">Découvrir la conférence <span aria-hidden="true">→</span></a> <a href="https://www.youtube.com/@LaGrosseConf">Voir les vidéos</a></p>
    </div>
  </div>
</div>

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
