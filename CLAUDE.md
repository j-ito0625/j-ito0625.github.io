# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **al-folio** academic website built with Jekyll. It's a clean, responsive theme designed for academics to showcase their portfolio, blog, publications, and projects.

## Common Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site for production
JEKYLL_ENV=production bundle exec jekyll build

# Deploy to GitHub Pages (interactive script)
./bin/deploy
```

### Code Quality
```bash
# Install npm dependencies for Prettier
npm install

# Check code formatting
npx prettier . --check

# Fix code formatting
npx prettier . --write
```

## Key Architecture

### Jekyll Collections
The site uses Jekyll collections to organize content:
- `_bibliography/`: BibTeX files for publications (processed by jekyll-scholar)
- `_news/`: News announcements displayed on homepage
- `_projects/`: Project showcases displayed in responsive grid
- `_posts/`: Blog posts with support for Distill-style formatting

### Configuration
- `_config.yml`: Main Jekyll configuration including site metadata, theme settings, and plugin configuration
- `Gemfile`: Ruby dependencies including Jekyll plugins for archives, feed, scholar citations, and more

### Deployment
The site can be deployed via:
- GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated deployment
- Manual deployment script (`bin/deploy`) that builds and pushes to `gh-pages` branch
- Docker containers for consistent development environment

### Key Plugins
- `jekyll-scholar`: Manages academic publications from BibTeX
- `jekyll-imagemagick`: Image processing and optimization
- `jekyll-minifier`/`jekyll-terser`: Asset minification for production
- `jekyll-feed`: RSS/Atom feed generation
- `jekyll-paginate-v2`: Advanced pagination support

## Important Notes

- The site URL is configured as `https://j-ito0625.github.io` with no baseurl
- Prettier is configured for code formatting with Liquid template support
- The theme supports both light and dark modes with automatic detection
- Publications are automatically generated from BibTeX files
- GitHub workflows handle code quality checks, broken links detection, and accessibility testing