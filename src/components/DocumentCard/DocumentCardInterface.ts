export interface DocumentCardProps {
	title: string
	link: string
	date?: string
}

export interface DocumentCardData {
	title: string
	data: DocumentCardProps[]
}
