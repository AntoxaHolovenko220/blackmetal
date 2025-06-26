export interface NewsContentItem {
	type: 'image' | 'text'
	value: string
}

export interface NewsItem {
	id: number
	title: string
	text: string
	imageUrl: string
	images?: string[]
	date: string
	content?: NewsContentItem[]

	onClick?: () => void
}
export interface TranslatedNewsData {
	newsTitle: string
	news: NewsItem[]
}
