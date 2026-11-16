# My Recipes

A personal recipe collection built with Astro, TypeScript and Markdown. Traditional Chinese is the default language; the site also has English and German pages. Recipe content lives in separate language folders under `src/content/recipes/` and is checked against the schema in `src/content.config.ts`.

## Development

```sh
npm install
npm run dev
```

The development server starts in Astro background mode. Use `npx astro dev status`, `npx astro dev logs` and `npx astro dev stop` to manage it.

## Adding a recipe

Create three Markdown files with the same recipe key inside matching category folders: `src/content/recipes/zh-TW/<category>/<key>.md`, `src/content/recipes/en/<category>/<key>.md` and `src/content/recipes/de/<category>/<key>.md`. Use lowercase category folder names such as `taiwanese`, `japanese`, `soups`, and `appetizers`; the frontmatter `category` still uses its canonical value. Start with the Traditional Chinese source and translate its title, description, tags, ingredients, instructions and notes into English and German. Keep amounts and steps aligned across translations. The site language switcher opens the matching version of the current recipe.

Categories are defined once in `src/data/categories.ts`: Taiwanese, Japanese, Western, Soups, Appetizers and Others. Translated category labels and interface text live in `src/data/locales.ts`.

## Build

```sh
npm run build
npm run preview
```

## Deployment

`.github/workflows/deploy.yml` builds and deploys `dist/` to GitHub Pages when `main` is updated, and supports manual runs. In the repository's Pages settings, select **GitHub Actions** as the build and deployment source.

The configured site URL is <https://datoutwo.github.io/my-recipes/>.
