import { useParams } from 'react-router-dom'
import { PersonInfoLayout } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonInfoLayoutProps } from '@/components/PersonInfoLayout/PersonInfoLayout'
import { Box } from '@mui/material'

interface DepartmentData {
	title: string
	firstPersonCard: PersonInfoLayoutProps['firstPersonCard']
	middleText?: string
	activities?: {
		items: string[]
	}
	laboratoryTests?: {
		title: string
		items: string[]
	}
	secondPersonCard?: PersonInfoLayoutProps['firstPersonCard'] 
	staffCards?: PersonInfoLayoutProps['staffCards']
}

const ScientificDepartmentPage = () => {
	const { departmentId } = useParams<{ departmentId: string }>()
	
	const { data } = useTranslationData<DepartmentData>(departmentId || '')

	if (!data || !departmentId) {
		return (
			<Box sx={{ 
				pl: { xxs: '0px', sm: '50px' },
				pt: 4,
				fontSize: '18px',
				color: '#666'
			}}>
				Відділ не знайдено
			</Box>
		)
	}

	const staffCards = data.staffCards || (data.secondPersonCard ? [data.secondPersonCard] : [])
	
	return (
		<PersonInfoLayout
			title={data.title}
			searchEnabled={false}
			firstPersonCard={data.firstPersonCard}
			activities={data.activities}
			laboratoryTests={data.laboratoryTests}
			staffCards={staffCards}
		/>
	)
}

export default ScientificDepartmentPage 