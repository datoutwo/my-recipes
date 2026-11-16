export const categories = [
	{ name: 'All recipes', slug: 'all', icon: '✦' },
	{ name: 'Taiwanese', slug: 'taiwanese', icon: '🍚' },
	{ name: 'Japanese', slug: 'japanese', icon: '🍙' },
	{ name: 'Western', slug: 'western', icon: '🍝' },
	{ name: 'Soups', slug: 'soups', icon: '🥣' },
	{ name: 'Appetizers', slug: 'appetizers', icon: '🥗' },
	{ name: 'Others', slug: 'others', icon: '🥗' },
] as const;

export const categorySlug = (name: string) => name.toLowerCase().replaceAll(' ', '-');
