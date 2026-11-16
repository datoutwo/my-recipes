import type { Language } from './locales';
const base = import.meta.env.BASE_URL;
export const siteBase = base.endsWith('/') ? base : `${base}/`;
export const sitePath = (path = '') => `${siteBase}${path.replace(/^\/+/, '')}`;
export const localePath = (language: Language, path = '') => sitePath(`${language === 'zh-TW' ? '' : `${language}/`}${path.replace(/^\/+/, '')}`);
