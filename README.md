# Collin Kinney — Personal Website

A responsive, static portfolio and résumé website built with plain HTML, CSS, and JavaScript. No build step, framework, package installation, or backend is required.

## Preview locally

Open `index.html` in a browser.

## Publish with GitHub Pages

The live site is https://Collinbu98.github.io/, served from the `Collinbu98/Collinbu98.github.io` repository.

Deployment is automated by the workflow in `.github/workflows/deploy-pages.yml`: every push to `main` publishes the contents of this folder to GitHub Pages.

1. Push your changes to `main`.
2. Open the **Actions** tab in the repository to follow the deploy run.
3. If Pages has not been enabled yet, open **Settings → Pages** and set **Source** to **GitHub Actions**.

Because the repository is named `Collinbu98.github.io` (matching the account name), GitHub serves it at the short personal-site URL rather than a `/repository-name/` path.

## Customize

- Edit the content in `index.html`.
- Adjust colors, spacing, and typography in `styles.css`.
- `script.js` only handles the mobile navigation and current year.
- Replace `resume.pdf` whenever your résumé changes.

## Before publishing

This page includes the phone number and email address from the supplied résumé. They will be publicly visible. Remove or replace the phone number if you prefer not to publish it.

The site currently uses Google Fonts when online and falls back to system fonts if they are unavailable. All page layout and styling are local.
