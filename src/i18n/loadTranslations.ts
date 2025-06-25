// src/i18n/loadTranslations.ts
import i18n from './i18n.config'

export const loadTranslationData = async <T>(fileName: string): Promise<T> => {
	const language = i18n.language
	try {
		// Динамический импорт файла на основе текущего языка
		const translationData = await import(`./locales/${language}/${fileName}.json`)
		
		// Если это файл новостей, объединяем с общими данными
		if (fileName === 'news') {
			const commonData = await import('@/data/newsData.json')
			
			// Объединяем общие данные с переводами
			const mergedNews = commonData.default.news.map((commonItem: any) => {
				const translationItem = translationData.default.news.find((item: any) => item.id === commonItem.id)
				return {
					...commonItem,
					title: translationItem?.title || '',
					text: translationItem?.text || ''
				}
			})
			
			return {
				...translationData.default,
				news: mergedNews
			} as T
		}
		
		return translationData.default as T
	} catch (error) {
		console.error(`Error loading ${fileName} for language ${language}:`, error)
		// Fallback на английский, если файл для текущего языка не найден
		const fallbackData = await import(`./locales/en/${fileName}.json`)
		
		// Если это файл новостей, объединяем с общими данными
		if (fileName === 'news') {
			const commonData = await import('@/data/newsData.json')
			
			// Объединяем общие данные с переводами
			const mergedNews = commonData.default.news.map((commonItem: any) => {
				const translationItem = fallbackData.default.news.find((item: any) => item.id === commonItem.id)
				return {
					...commonItem,
					title: translationItem?.title || '',
					text: translationItem?.text || ''
				}
			})
			
			return {
				...fallbackData.default,
				news: mergedNews
			} as T
		}
		
		return fallbackData.default as T
	}
}
