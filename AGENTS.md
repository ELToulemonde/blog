# AGENTS.md — blog eltoulemonde.fr

## Stack
- Jekyll + thème `minima`, hébergé sur GitHub Pages (build natif GH Pages, pas de Gemfile/Gemfile.lock dans le repo).
- Domaine custom via `CNAME` (eltoulemonde.fr). Le déploiement se fait automatiquement par GitHub au push sur la branche par défaut — pas de CI/CD custom.
- FR par défaut à la racine, EN dans `/en/` (pages dupliquées manuellement, pas de collection i18n).

## Structure
- `_posts/` : billets courts annonçant des articles publiés ailleurs (blog.octo.com...). Convention obligatoire : `YYYY-MM-DD-titre.md` (tiret après la date, sinon Jekyll ignore silencieusement le fichier).
- Toujours mettre un front matter explicite sur les posts : `layout: post`, `title`, `date`, et `permalink:` explicite (évite les soucis de slug avec accents/apostrophes dans le nom de fichier).
- `articles.md` / `conference.md` / `cv.md` / `contribution_open_source.md` : pages listant le contenu externe (et leurs équivalents `en/*.md`).
- `_includes/` et `_layouts/` : personnalisations par-dessus le thème minima (header, sharelinks, navlinks, lang_switcher, layouts post/page).
- `css/override.css` : CSS custom en plus du thème minima par défaut.

## Règles pour l'agent
- **Ne jamais lancer de build Jekyll** (ni en local, ni via Docker/`jekyll/jekyll`, ni `bundle exec jekyll build`). Le rendu doit être vérifié uniquement en regardant le site déployé (https://eltoulemonde.fr) après un push, jamais localement.
- **Ne jamais committer, ni push.** Faire uniquement les modifications de fichiers ; c'est à l'utilisateur de relire (`git status`/`git diff`) et de committer lui-même.
- Ne pas ajouter de Gemfile/CI custom sans demande explicite (le site reste sur le build natif GitHub Pages).
