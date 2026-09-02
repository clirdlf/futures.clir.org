# Curated Futures Project

The source for [futures.clir.org](https://futures.clir.org/), a static, Markdown-driven edition of CLIR's Curated Futures Project. The collection brings together collaboratively produced works that imagine practical, decolonial futures for libraries, archives, museums, and communities.

The site is built with [Eleventy](https://www.11ty.dev/) and [Tailwind CSS](https://tailwindcss.com/), and is deployed to GitHub Pages.

## Requirements

- [Node.js](https://nodejs.org/) 22 (see `.nvmrc`)
- npm (included with Node.js)

If you use `nvm`, select the project's Node version before installing dependencies:

```sh
nvm use
```

## Local development

Install dependencies and start the development server:

```sh
npm ci
npm run dev
```

Eleventy watches the source files, rebuilds the site, and prints the local preview URL in the terminal. The default path prefix is `/futures.clir.org/`, matching the project's GitHub Pages location.

To preview the site at the domain root instead, set `ELEVENTY_PATH_PREFIX` to `/` before starting Eleventy:

```sh
# macOS or Linux
ELEVENTY_PATH_PREFIX=/ npm run dev

# PowerShell
$env:ELEVENTY_PATH_PREFIX = '/'; npm run dev
```

Generated files are written to `public/` and are not committed.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Build the CSS and start Eleventy's development server |
| `npm run build` | Create a production build in `public/` |
| `npm run check:html` | Validate generated HTML |
| `npm run check:site` | Check internal links, metadata, image alt text, JSON-LD, and article front matter |
| `npm run quality` | Build the site and run all checks |
| `npm test` | Run the full quality suite |

Run `npm run quality` before opening a pull request.

## Project structure

```text
.
|-- .github/workflows/   # Pull-request checks and GitHub Pages deployment
|-- scripts/             # Site-specific validation scripts
|-- src/
|   |-- _data/           # Global site and navigation data
|   |-- _includes/       # Nunjucks layouts and components
|   |-- assets/          # Images, video, logos, and illustrations
|   |-- content/         # Markdown contributions
|   |-- css/             # Site stylesheet and Tailwind source
|   |-- favicon/         # Favicons and web manifest
|   |-- js/              # Browser-side JavaScript
|   `-- *.njk            # Top-level pages and generated metadata files
|-- .eleventy.js         # Eleventy configuration
`-- postcss.config.js    # PostCSS/Tailwind configuration
```

## Adding a contribution

Create a Markdown file in `src/content/`. Contributions use Nunjucks as their Markdown template engine, so they may contain Nunjucks shortcodes and HTML alongside Markdown.

A typical contribution begins with:

```yaml
---
layout: article.njk
articleStyle: feature
title: Example contribution
author: Example Author
affiliation: Example Institution
date: 2026-09
order: 12
topics: [archives, libraries, digital scholarship]
excerpt: >-
  A short summary used on collection and metadata surfaces.
hero: /assets/example-card-image.jpg
articleHero: /assets/example-header-image.jpg
permalink: /example-contribution/
---
```

The site check requires `layout`, `title`, `date`, `order`, `excerpt`, and `permalink`. Each `order` value must be unique because it controls the contribution's position in the collection. If `hero` or `articleHero` is supplied, the referenced file must exist under `src/assets/`.

Use descriptive alternative text for content images:

```md
![A concise description of the image.](/assets/example-image.jpg)
```

After adding or editing content, run:

```sh
npm run quality
```

## Site configuration

- Edit `src/_data/site.json` for global metadata, social sharing, and licensing information.
- Edit `src/_data/navigation.json` to change the primary navigation.
- Edit `.eleventy.js` to change collections, Markdown rendering, image transforms, passthrough assets, or the default path prefix.
- Place static media in `src/assets/` and reference it with root-relative `/assets/...` URLs.

Eleventy Image generates responsive AVIF and WebP variants for images during the build.

## Deployment

Pull requests run the quality suite through `.github/workflows/quality.yml`. Pushes to `main` run the same checks and deploy the contents of `public/` to GitHub Pages through `.github/workflows/pages.yml`.

The Pages workflow obtains the deployment base path from GitHub and passes it to Eleventy as `ELEVENTY_PATH_PREFIX`, so internal URLs work whether the site is hosted at a project path or a custom domain.

## License

The published Curated Futures Project content is licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/), as declared in the site metadata. Individual media may include their own attribution or rights information in the relevant contribution.
