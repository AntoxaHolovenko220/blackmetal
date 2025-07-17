import { Box, Divider } from '@mui/material'
import { DocumentTitleSearch, PersonCard } from '@/components'
import { PersonCardInterface } from '../PersonCard/PersonCardInterface'
import { useTranslationData } from '@/hooks/useTranslationData'
import { 
  ActivitiesSection, 
  LaboratoryTestsSection, 
  StaffSection, 
  LaboratorySection 
} from './components'

interface DepartmentsData {
	common: {
		staffTitle: string
		activitiesTitle: string
	}
}

export interface PersonInfoLayoutProps {
	title: string
	searchEnabled?: boolean
	onSearchSubmit?: (query: string) => void
	onSearchChange?: (query: string) => void
	firstPersonCard: PersonCardInterface
	activities?: {
		items: string[]
	}
	laboratoryTests?: {
		title: string
		items: string[]
	}
	staffCards: PersonCardInterface[],
	showLaboratorySection?: boolean
	laboratoryStaff?: PersonCardInterface[]
}

const PersonInfoLayout = ({
	title,
	searchEnabled = true,
	onSearchSubmit = () => {},
	onSearchChange = () => {},
	firstPersonCard,
	activities,
	laboratoryTests,
	staffCards,
	showLaboratorySection = false,
	laboratoryStaff = [],
}: PersonInfoLayoutProps) => {
	const { data: departmentsData } =
		useTranslationData<DepartmentsData>('departments')

	return (
		<Box
			sx={{
				pl: { xxs: '0px', sm: '50px' },
				width: '100%',
			}}
		>
			<DocumentTitleSearch
				title={title}
				search={searchEnabled}
				onSearchSubmit={onSearchSubmit}
				onSearchChange={onSearchChange}
			/>

			<Box sx={{ pt: { xxs: '30px', xs: '20px', sm: '10px' }, mb: 3 }}>
				<PersonCard {...firstPersonCard} />
			</Box>

			<ActivitiesSection 
				activities={activities}
				activitiesTitle={departmentsData?.common?.activitiesTitle}
			/>

			<LaboratoryTestsSection laboratoryTests={laboratoryTests} />

			<Divider
				sx={{
					mb: 3,
					borderColor: '#e0e0e0',
				}}
			/>

			<StaffSection 
				staffCards={staffCards}
				staffTitle={departmentsData?.common?.staffTitle}
			/>

			{showLaboratorySection && (
				<LaboratorySection laboratoryStaff={laboratoryStaff} />
			)}
		</Box>
	)
}

export default PersonInfoLayout
