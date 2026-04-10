---
layout: page
title: "Conferences"
lang: en
lang_alternate: /conference
---

## Table of contents

- [Agents & GenAI: How we boosted a data engineering project at the scale of 150 microservices](#agents--genai-how-we-boosted-a-data-engineering-project-at-the-scale-of-150-microservices)
- [MLOps at scale: Platforming the registry and inference to accelerate deployments](#mlops-at-scale-platforming-the-registry-and-inference-to-accelerate-deployments)
- [Performance optimization: benefit or sacrifice?](#performance-optimization-benefit-or-sacrifice)
- [CI/CD in the age of Machine Learning](#cicd-in-the-age-of-machine-learning)
- [Draw me a Data Science architecture](#draw-me-a-data-science-architecture)
- [The story of an emergent architecture](#the-story-of-an-emergent-architecture)
- [MLOps: Production deployment, and then?](#mlops-production-deployment-and-then)
- [Interpretability of Data Science Systems](#interpretability-of-data-science-systems)
- [Tutorial on the dataPreparation library](#tutorial-on-the-datapreparation-library)

## Agents & GenAI: How we boosted a data engineering project at the scale of 150 microservices

For 2.5 years, our team has been delivering a large-scale data engineering project: more than 150 microservices, complex pipelines, and high quality requirements.
For the past year, we have integrated GenAI and agents to transform how we work.

In this talk, we share how AI has accelerated certain critical tasks:

Code refactoring: industrializing prototype code 4x faster to meet all our standards.
Data contracts: writing this documentation 10x faster, with a precision rivaling human expertise.
Architecture tests: automating checks on architecture standards and cloud provider requirements to reduce bugs.
But AI is not a magic solution. We will also address:

What still resists it: implementing things we have never done before in the project, complex refactorings.
Our best practices: documentation as code & AI-optimized documentation, mono-repository to centralize context, and MCP servers to give the LLM secure and controlled access.
With many live demonstrations, this raw feedback includes successes, failures, and concrete lessons for integrating AI into your projects without losing control.

📍 Talk given at:
- Data Days Lille, March 2026, Lille: [slides](https://github.com/ELToulemonde/talks/blob/main/2026/Data%20Days%20Lille/Conf%C3%A9rence%20%20Agents%20%26%20GenAI%20_%20Comment%20nous%20avons%20boost%C3%A9%20un%20projet%20de%20data%20engineering%20%C3%A0%20l%E2%80%99%C3%A9chelle%20de%20150%20microservices.pdf)

Tags:
- Data Engineering
- GenAI
- Agents

* * *

## MLOps at scale: Platforming the registry and inference to accelerate deployments

AI is now at the heart of all organizations. Data platforms facilitate the creation of high-performing models, but **deployment often remains artisanal**, requiring the recreation of registries, APIs and runners **for each project**. **Governance at scale** of models, required by **the AI Act**, is tedious.

This forward-looking presentation proposes a concept to standardize and automate these steps in a few clicks or command lines: the **model platform**.

This talk explores what I believe to be **the future of MLOps**: model platforms integrating model registries, deployment, A/B testing and shadow production seamlessly. Within 2-3 years, all cloud providers will offer this capability.

A **live demonstration** of a platform based on **open source technologies** (MLflow, Kubernetes) will show how a model can be put into production in less than 5 minutes.

After this presentation, you will understand the value of a model platform, identify its main features, and discover a proposed implementation.

📍 Talk given at:
- Data Days Lille, March 2025, Lille: [slides](https://github.com/ELToulemonde/talks/blob/main/2025/Data%20Days%20Lille/MLOps_%20Model%20plateforme%20pour%20passer%20%C3%A0%20l'%C3%A9chelle.pdf)

Tags:
- MLOps
- Architecture
- Prospective

* * *

## Performance optimization: benefit or sacrifice?

⚡ The faster the code, the better the code.

Rather than adding computing resources and technologies, think about architecture, code and data storage to save hardware resources.

🚀 The first optimizations are best practices that everyone should know; the following ones are sacrificial: they degrade code readability and maintainability. Conceived as a concrete declension of Eroom's law proposed by Tristan Nitot, this talk starts with an example of poorly written code as we have all done before, then through successive optimizations, we will see the benefits and sacrifices to make to go ever faster.

📍 Talk given at:
- Touraine Tech, February 2025, Tours
- Snow Camp, January 2025, Grenoble: [slides](https://github.com/ELToulemonde/talks/blob/main/2025/Snow%20Camp/Optimisation%20de%20performance%20b%C3%A9n%C3%A9fice%20ou%20sacrifice.pdf)
- Breizh Camp, June 2024, Rennes: [slides](https://github.com/ELToulemonde/talks/blob/main/2024/Breizh%20Camp/Optimisation%20de%20performance%20b%C3%A9n%C3%A9fice%20ou%20sacrifice.pdf), [video](https://www.youtube.com/watch?v=obKSKpPyaGo)

Tags:
- Data
- Architecture
- Sustainable IT

* * *

## CI/CD in the age of Machine Learning

CI/CD is a well-known software tool for building and deploying artifacts. In Machine Learning, it is a bit particular:

🔢 In addition to building and deploying code, you need to manage the model artifact.

🗓️ Building the model corresponds to its training; it doesn't only happen when the code changes, it can also be triggered by a change in the data.

🏋️‍♀️ Code typically weighs a few MB, while the model can weigh up to several GB.

These three particularities mean the build and deployment process must be rethought.

📍 Talk given at:
- Pycon Lithuania, April 2024, Vilnius: [slides (in English)](https://github.com/ELToulemonde/talks/blob/main/2024/PyCon%202024%20Lithuania/CI_CD%20at%20Machine%20Learning%20time.pdf), [video](https://www.youtube.com/watch?v=093T744olQ4)
- Meetup Crafting Data Science #11, November 2023, Paris with [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno)

Tags:
- MLOps
- Architecture

* * *

## Draw me a Data Science architecture

An iterative talk during which Sofia and Emmanuel-Lin draw a Data Science architecture following the evolution of business needs.

📍 Talk given at:
- La Duck Conf, March 2022, Paris, with [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno): [video](https://www.youtube.com/watch?v=7jyyBaV8jjI)
- Meetup crafting Data Science #9, November 2022, Paris, with [Sofia Calcagno](https://fr.linkedin.com/in/sof%C3%ADa-calcagno): [video](https://www.youtube.com/watch?v=F7u3lCohVcQ)

Tags:
- Architecture
- Data Science
- MLOps

* * *

## The story of an emergent architecture

A Data Science model in production on day 1, an emergent architecture, satisfied clients, a serene team.

This is the story told in this talk — that of an emergent architecture project that generated hundreds of thousands of euros from the very first day of development. It is the story of a truly minimalist MVP.

📍 Talk given at:
- La Duck Conf, February 2021, remote: [slides](https://github.com/ELToulemonde/talks/blob/main/2021/La%20Duck%20Conf/Histoire%20d'une%20architecture%20%C3%A9mergeante.pdf), [video](https://www.youtube.com/watch?v=qj3lVoaAe3Q)
- Comptoir Octo, the same story from a business perspective, with [Marc Frignet](https://fr.linkedin.com/in/marc-frignet-0582b09): [video](https://www.youtube.com/watch?v=2gTdE6HI12g)

Tags:
- Architecture
- Data Science

* * *

## MLOps: Production deployment, and then?

Once in production, you need to monitor your model system. Beyond data drift in all directions, how do you choose the right metrics to track in a system that contains many uncertainties?

📍 Talk given at:
- La Duck Conf, January 2020, Paris, with [Mehdi Houacine](https://fr.linkedin.com/in/mehdihouacine): [video](https://www.youtube.com/watch?v=neZ4KnfHUtY)
- Meetup Crafting Data Science, February 2022, Paris, with [Mehdi Houacine](https://fr.linkedin.com/in/mehdihouacine): [slides](https://fr.slideshare.net/EmmanuelLinTOULEMOND/meetup-crafting-data-science-3-mars)

Tags:
- MLOps
- Data Science
- Monitoring

* * *

## Interpretability of Data Science Systems

The need for interpretability in Data Science systems is clearly identified but not always clearly defined.

This talk aims to reframe the why, for whom, for what, and the how of interpretability of these systems.

📍 Talk given at:
- [Espace éthique d'Île de France](https://www.espace-ethique.org/), February 2020, Paris: [video](https://www.youtube.com/watch?v=Pa5YeciG2-8)
- Octo's Ethical by Design morning event, November 2019, Paris: [video](https://youtu.be/o_TBFPvUQ30?si=kDOehwTVNQ93HRAa&t=5753), [press coverage](https://www.alliancy.fr/solution-ia-confiance-etait-ethical-by-design) by Christophe Auffray

Tags:
- Data Science
- Interpretability
- Sustainable IT

* * *

## Tutorial on the dataPreparation library

Presentation of the open source R library that I have developed and maintained for many years to perform efficient tabular data preparation.

📍 Talk given at:
- [Data Science Conference Europe](https://datasciconference.com), November 2021, (remote)
- Meetup [R addicts Paris](https://www.meetup.com/fr-FR/rparis/), August 2018, Paris: [slides](https://fr.slideshare.net/EmmanuelLinTOULEMOND/presentation-of-datapreparation-at-mett-up-raddicts)

Tags:
- Data Engineering
- R

