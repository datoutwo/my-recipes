# Recipe entry template

Copy this into `src/content/recipes/zh-TW/<category-slug>/<recipe-key>.md` for the Traditional Chinese source. Create matching files with the same category folder and recipe key under `src/content/recipes/en/` and `src/content/recipes/de/` for the translated versions. Category folder names are lowercase slugs, such as `taiwanese`, `japanese`, `soups`, and `appetizers`; keep the frontmatter category spelling exactly as shown.

```md
---
title: 涼拌小黃瓜
key: recipe-key
language: zh-TW
description: 清爽開胃的小菜，帶有蒜香與微酸滋味。
image: /my-recipes/images/recipes/recipe-slug.jpg
category: Appetizers
tags: [tag-one, tag-two]
prepTime: 15
cookTime: 30
servings: 4
difficulty: Easy
ingredients:
  - Ingredient and amount
  - Ingredient and amount
instructions:
  - First step.
  - Second step.
notes:
  - Optional cooking note.
references: []
updated: YYYY-MM-DD
---
```

Allowed categories: `Taiwanese`, `Japanese`, `Western`, `Soups`, `Appetizers`, `Others`. Allowed difficulty values: `Easy`, `Medium`, `Hard`. Time values are minutes. `servings` may be a number or a range such as `4-5`. Keep the recipe's source language and units unless asked to translate or convert them. Use an empty `notes: []` when there are no notes.

Save the finished-dish photo once in `public/images/recipes/` and use the same `image` path in all three Markdown files. The `/my-recipes/` prefix is needed for this site's GitHub Pages deployment. Keep the same `key` in every translation; translate the title, description, tags, ingredients, instructions and notes while preserving amounts, units and meaning. Add any sources the user supplies to `references` in all three files, preserving their URLs or citation text; leave it empty when none are provided.
