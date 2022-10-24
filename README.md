## Project pratima

### An icon library for all financial institutions in India.

View project website at http://yakshag.github.io/project-pratima/

---

## Pre-requisities

- `node`
- `yarn`
- `zip`

---

## Run locally

1. Clone the repository
2. Run `yarn` to install all packages
3. Run `yarn dev` to view on the site on `localhost:3000`

## Deployment
1. Configure `LINK_PREFIX`, `basePath` and `assetPrefix` in `next.config.js`. Change to blank value if the webpage is served directly from root of the domain.
2. Run `yarn zip` to generate the zip file for all icons
3. Run `yarn build && yarn export` to generate static HTML.
4. Static HTML is dumped to `out` directory of the project. Grab the files and host it on any server.
5. Optionally, automate these steps with a deployment script of your choice. See a sample deployment script for Github actions [here](.github/workflows/gh-pages.deploy.yml).




