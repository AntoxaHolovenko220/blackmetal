export interface Department {
	id: number
	shortName: string
	fullName: string
	img: string
	href: string
}

export interface DepartmentsData {
	titles: {
		scientific: string
		technical: string
	}
	ScientificDepartments: Department[]
	TechnicalDepartments: Department[]
}
