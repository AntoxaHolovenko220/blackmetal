interface Contact {
	type: string
	value: string
}

export interface PersonCardInterface {
	id?: string
	photo?: string
	position: string
	name: string
	description?: string
	biography?: string
	contacts?: Contact[]
}

export interface PersonCardData {
	title: string
	data: PersonCardInterface[]
}
