export interface NewsItem {
	id: number
	title: string
	text: string
	imageUrl: string
	images?: string[]
	date: string

	onClick?: () => void
}
export interface TranslatedNewsData {
	newsTitle: string
	news: NewsItem[]
}
