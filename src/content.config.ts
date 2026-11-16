import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const recipes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/recipes' }),
	schema: z.object({
		title: z.string(),
	key: z.string(),
	language: z.enum(['zh-TW', 'en', 'de']),
		description: z.string(),
		image: z.string(),
		category: z.enum(['Taiwanese', 'Japanese', 'Western', 'Soups', 'Appetizers', 'Others']),
		tags: z.array(z.string()).default([]),
		prepTime: z.number().nonnegative(),
		cookTime: z.number().nonnegative(),
		servings: z.union([z.number().positive(), z.string().min(1)]),
		difficulty: z.enum(['Easy', 'Medium', 'Hard']),
		ingredients: z.array(z.string()).min(1),
		instructions: z.array(z.string()).min(1),
		notes: z.array(z.string()).default([]),
		references: z.array(z.string()).default([]),
		updated: z.coerce.date(),
	}),
});

export const collections = { recipes };
