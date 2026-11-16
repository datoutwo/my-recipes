export const languages = [
	{ code: 'zh-TW', label: '繁中', html: 'zh-Hant' },
	{ code: 'en', label: 'EN', html: 'en' },
	{ code: 'de', label: 'DE', html: 'de' },
] as const;

export type Language = (typeof languages)[number]['code'];

export const ui = {
	'zh-TW': {
		brand: '家常食譜', tagline: '把喜歡的味道留在餐桌', navRecipes: '食譜', navCategories: '分類', navAbout: '關於', footer: '用心記下每一道家常味。', back: '← 所有食譜', browse: '依分類瀏覽', collection: '我的廚房', allRecipes: '所有食譜', search: '搜尋食譜…', searchLabel: '搜尋食譜名稱、食材、標籤或分類', empty: '找不到符合的食譜，試試其他食材或分類。', intro: '收藏來自不同餐桌的家常料理。', ingredients: '食材', method: '作法', notes: '料理筆記', noNotes: '尚無料理筆記。', references: '參考資料', total: '共', difficulty: { Easy: '簡單', Medium: '普通', Hard: '較難' }, prep: '準備', cook: '烹煮', minutes: '分鐘', servings: '人份', updated: '更新日期', homeEyebrow: '珍藏的家常食譜', headlineA: '好好吃飯，', headlineB: '回到餐桌。', welcome: '記下我常做、樂於分享，也希望你會喜歡的家常料理。', explore: '瀏覽食譜', fromKitchen: '我的廚房', sideNote: '把喜歡的味道，一道一道收進來。', categoryIntro: '依照料理分類，找到今天想做的味道。',
	},
	en: {
		brand: 'A Little Table', tagline: 'Recipes to come home to', navRecipes: 'Recipes', navCategories: 'Categories', navAbout: 'About', footer: 'Made with care, one meal at a time.', back: '← All recipes', browse: 'BROWSE BY', collection: 'FROM MY KITCHEN', allRecipes: 'All recipes', search: 'Search recipes…', searchLabel: 'Search recipes by title, ingredients, tags or category', empty: 'No recipes match. Try another ingredient or category.', intro: 'A collection of recipes gathered from many tables.', ingredients: 'Ingredients', method: 'Method', notes: 'Cooking notes', noNotes: 'No cooking notes yet.', references: 'References', total: 'Total', difficulty: { Easy: 'Easy', Medium: 'Medium', Hard: 'Hard' }, prep: 'Prep', cook: 'Cook', minutes: 'min', servings: 'Serves', updated: 'Updated', homeEyebrow: 'A WELL-LOVED COLLECTION', headlineA: 'Good food brings us', headlineB: 'back to the table.', welcome: 'Recipes I return to, share with people I love, and hope you enjoy too.', explore: 'Explore recipes', fromKitchen: 'FROM MY KITCHEN', sideNote: 'Recipes from my kitchen, gathered with love.', categoryIntro: 'Browse recipes gathered from the {category} table.',
	},
	de: {
		brand: 'Ein kleiner Tisch', tagline: 'Rezepte zum Wohlfühlen', navRecipes: 'Rezepte', navCategories: 'Kategorien', navAbout: 'Über uns', footer: 'Mit Liebe gekocht und aufgeschrieben.', back: '← Alle Rezepte', browse: 'NACH KATEGORIE', collection: 'AUS MEINER KÜCHE', allRecipes: 'Alle Rezepte', search: 'Rezepte suchen…', searchLabel: 'Rezepte nach Titel, Zutaten, Stichwort oder Kategorie suchen', empty: 'Keine passenden Rezepte. Versuche andere Zutaten oder Kategorien.', intro: 'Eine Sammlung von Rezepten aus vielen Küchen.', ingredients: 'Zutaten', method: 'Zubereitung', notes: 'Küchennotizen', noNotes: 'Noch keine Küchennotizen.', references: 'Quellen', total: 'Gesamt', difficulty: { Easy: 'Einfach', Medium: 'Mittel', Hard: 'Anspruchsvoll' }, prep: 'Vorbereitung', cook: 'Kochzeit', minutes: 'Min.', servings: 'Portionen', updated: 'Aktualisiert', homeEyebrow: 'EINE LIEBEVOLLE SAMMLUNG', headlineA: 'Gutes Essen bringt uns', headlineB: 'an einen Tisch.', welcome: 'Rezepte, die ich immer wieder koche und gern mit lieben Menschen teile.', explore: 'Rezepte entdecken', fromKitchen: 'AUS MEINER KÜCHE', sideNote: 'Rezepte aus meiner Küche, mit Liebe gesammelt.', categoryIntro: 'Rezepte aus der Kategorie {category}.',
	},
} as const;

export const categoryNames: Record<Language, Record<string, string>> = {
		'zh-TW': { 'All recipes': '所有食譜', Taiwanese: '台灣料理', Japanese: '日本料理', Western: '西式料理', Soups: '湯品', Appetizers: '前菜', Others: '其他' },
	en: { 'All recipes': 'All recipes', Taiwanese: 'Taiwanese', Japanese: 'Japanese', Western: 'Western', Soups: 'Soups', Appetizers: 'Appetizers', Others: 'Others' },
	de: { 'All recipes': 'Alle Rezepte', Taiwanese: 'Taiwanisch', Japanese: 'Japanisch', Western: 'Westlich', Soups: 'Suppen', Appetizers: 'Vorspeisen', Others: 'Sonstiges' },
};

export function localeCategory(language: Language, category: string) {
	return categoryNames[language][category] ?? category;
}
