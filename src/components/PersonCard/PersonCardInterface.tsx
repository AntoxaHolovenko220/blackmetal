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
	researchDirection?: string
	teachingSubjects?: string
	contacts?: Contact[]
}

export interface PersonCardLabels {
	contacts: string
	researchDirection: string
	biography: string
	teachingSubjects: string
}

export interface PersonCardData {
	title: string
	labels: PersonCardLabels
	data: PersonCardInterface[]
}
