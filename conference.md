---
layout: page
title: "Conférences"
---

## Sommaire

- [MLOps à l’échelle : Plateformiser le registre et l’inférence pour accélérer les déploiements](#mlops-à-léchelle--plateformiser-le-registre-et-linférence-pour-accélérer-les-déploiements)
- [Optimisation de performance : bénéfice ou sacrifice ?](#optimisation-de-performance-bénéfice-ou-sacrifice-)
- [La CI/CD à l'heure du Machine Learning](#la-cicd-à-lheure-du-machine-learning)
- [Dessine-moi une architecture de Data Science](#dessine-moi-une-architecture-de-Data-Science)
- [L'histoire d'une architecture émergente](#lhistoire-dune-architecture-émergente)
- [MLOps : Mise en production, et après](#mlops--mise-en-production-et-après-)
- [Interprétabilité des Systèmes de Data Science](#interprétabilité-des-systèmes-de-data-science)
- [Tutoriel sur la librairie dataPreparation](#tutoriel-sur-la-librairie-datapreparation)

## MLOps à l’échelle : Plateformiser le registre et l’inférence pour accélérer les déploiements

L’intelligence artificielle est désormais au cœur de toutes les organisations. Les plateformes de données facilitent la création de modèles performants, mais le déploiement reste souvent artisanal, nécessitant la recréation de registres, API et runners pour chaque projet.

Ce talk propose une approche innovante pour standardiser et automatiser ces étapes en quelques clics ou lignes de commande.

Ce talk prospectif, présente ce que je pense être l'avenir du MLOps : des models platforms qui intègrent registre de modèles, déploiement, A/B testing et production shadow en toute simplicité. D'ici 2-3 ans tous les clouds providers offriront cette capacité.

Une démonstration en live montrera comment, grâce à des technologies open source, un modèle peut être mis en production en moins de 5 minutes.

📍 Talk donné à :
- Data Days Lille, mars 2025, Lille : [slides](https://github.com/ELToulemonde/talks/blob/main/2025/Data%20Days%20Lille/MLOps_%20Model%20plateforme%20pour%20passer%20%C3%A0%20l'%C3%A9chelle.pdf)

Tags : 
- MLOps
- Architecture
- Prospective

* * *

## Optimisation de performance bénéfice ou sacrifice ?

⚡ Plus le code est rapide, plus le code est bon. 

Plutôt que d'ajouter des ressources de calculs, des technologies, réfléchissez à l'architecture, au code et au stockage des données pour économiser les dressources matériels.

🚀 Les premières optimisations relèvent des bonnes pratiques que tout le monde devrait savoir faire, les suivantes sont sacrificielles : elles dégradent la lisibilité, la maintenabilité du code. Pensé comme une déclinaise concrète de la loi de Eroom proposé par Tristan Nitot, ce talk, commencera avec un exemple de code bien mal codé comme nous l'avons tous déjà fait, puis au fil des optimisations, nous verrons bénéfices et sacrifices à faire pour aller toujours plus vite.

📍 Talk donné à :
- Touraine Tech, Février 2025, Tour
- Snow Camp, Janvier 2025, Grenoble : [slides](https://github.com/ELToulemonde/talks/blob/main/2025/Snow%20Camp/Optimisation%20de%20performance%20b%C3%A9n%C3%A9fice%20ou%20sacrifice.pdf)
- Breizh Camp, Juin 2024, Rennes : [slides](https://github.com/ELToulemonde/talks/blob/main/2024/Breizh%20Camp/Optimisation%20de%20performance%20b%C3%A9n%C3%A9fice%20ou%20sacrifice.pdf), [vidéo](https://www.youtube.com/watch?v=obKSKpPyaGo)

Tags : 
- Data
- Architecture
- Numérique responsable

* * * 
## La CI/CD à l'heure du Machine Learning

La CI/CD est un outil bien connu du logiciel pour construire et déployer des artefacts. En Machine Learning, c'est un peu particulier : 

🔢 En plus de devoir construire et déployer du code, il faut gérer l'artefact modèle.

🗓️ Le build du modèle correspond à son entraînement, il ne se fait pas que quand le code change, il peut également être déclenché par un changement dans les données.

🏋️‍♀️ Le code pèse généralement quelques Mo, le modèle peut lui peser jusqu'à plusieurs Go. 

Ces trois particularités font que le processus de construction et de déploiement doit être repensé.

📍 Talk donné à : 
- Pycon Lithuania, avril 2024, Vilnius : [slides en anglais](https://github.com/ELToulemonde/talks/blob/main/2024/PyCon%202024%20Lithuania/CI_CD%20at%20Machine%20Learning%20time.pdf), [vidéo](https://www.youtube.com/watch?v=093T744olQ4)
- Meetup Crafting Data Science #11, Novembre 2023, Paris avec [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno)

Tags : 
- MLOps
- Architecture

* * *

## Dessine-moi une architecture de Data Science

Un talk itératif durant lequel Sofia et Emmanuel-Lin dessine une architecture de Data Science au fil des évolutions des
besoins métiers.

📍 Talk donné à :
- La Duck Conf, Mars 2022, Paris, avec [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno) : [vidéo](https://www.youtube.com/watch?v=7jyyBaV8jjI)
- Meetup crafting Data Science #9, Novembre 2022, Paris, avec [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno) : [vidéo](https://www.youtube.com/watch?v=F7u3lCohVcQ)

Tags : 
- Architecture
- Data Science
- MlOps

* * *

## L'histoire d'une architecture émergente

Un modèle de Data Science en production au jour 1, une architecture émergente, des clients satisfaits, une équipe sereine. 

C'est l'histoire racontée dans ce talk, celle d’un projet d'architecture émergente qui a permis de gagner des centaines de milliers d’euros dès la première journée de développement. C’est l’histoire d’un MVP vraiment minimaliste.

📍 Talk donné à :
- La Duck Conf, février 2021, remote : [slides](https://github.com/ELToulemonde/talks/blob/main/2021/La%20Duck%20Conf/Histoire%20d'une%20architecture%20%C3%A9mergeante.pdf), [vidéo](https://www.youtube.com/watch?v=qj3lVoaAe3Q)
- Comptoir Octo, la même histoire sous l'angle métier, avec [Marc Frignet](https://fr.linkedin.com/in/marc-frignet-0582b09) : [vidéo](https://www.youtube.com/watch?v=2gTdE6HI12g)

Tags : 
- Architecture
- Data Science

* * *

## MLOps : Mise en production, et après ?

Une fois en production, il faut monitorer son système modèle, a part un drift de donnée dans tous les sens, comment choisir les bonnes métriques à suivre dans un système qui contient beaucoup d'incertitudes.

📍 Talk donné à :
- La Duck Conf, janvier 2020, Paris, avec [Mehdi Houacine](https://fr.linkedin.com/in/mehdihouacine) : [vidéo](https://www.youtube.com/watch?v=neZ4KnfHUtY)
- Meetup Crafting Data Science, février 2022, Paris, avec [Mehdi Houacine](https://fr.linkedin.com/in/mehdihouacine) : [slides](https://fr.slideshare.net/EmmanuelLinTOULEMOND/meetup-crafting-data-science-3-mars)

Tags : 
- MLOps
- Data Science
- Monitoring

* * *

## Interprétabilité des Systèmes de Data Science

Le besoin d'interprétabilité sur les systèmes de Data Science est clairement identifié mais pas toujours clairement défini. 

Ce talk, vise à reposer le pourquoi, pour qui, pour quoi et le comment de l'interprétabilité de ces systèmes.

📍 Talk donné à :
- L'[espace éthique d’Île de France](https://www.espace-ethique.org/), février 2020, Paris : [vidéo](https://www.youtube.com/watch?v=Pa5YeciG2-8)
- La matinale Ethical by Design d'Octo, novembre 2019, Paris : [vidéo](https://youtu.be/o_TBFPvUQ30?si=kDOehwTVNQ93HRAa&t=5753), [compte rendu dans la press](https://www.alliancy.fr/solution-ia-confiance-etait-ethical-by-design) écrit par Christophe Auffray

Tags : 
- Data Science
- Interprétabilité
- Numérique responsable

* * *

## Tutoriel sur la librairie dataPreparation

Présentation de la librairie R open source que j'ai développé et maintient depuis de nombreuses années pour faire de la préparation de données éfficiente.

📍 Talk donné à :
- [Data Science Conférence Europe](https://datasciconference.com), Novembre 2021, (remote)
- Meetup [R addicts Paris](https://www.meetup.com/fr-FR/rparis/), Aout 2018 (Paris) : [slides](https://fr.slideshare.net/EmmanuelLinTOULEMOND/presentation-of-datapreparation-at-mett-up-raddicts)

Tags : 
- Data Engineering
- R