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
	secondPersonCard?: PersonInfoLayoutProps['firstPersonCard'] // for backward compatibility
	staffCards?: PersonInfoLayoutProps['staffCards']
}

const TechnicalDepartmentPage = () => {
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

	// Handle backward compatibility: if secondPersonCard exists, convert to staffCards array
	const staffCards = data.staffCards || (data.secondPersonCard ? [data.secondPersonCard] : [])

	return (
		<PersonInfoLayout
			title={data.title}
			searchEnabled={false}
			firstPersonCard={data.firstPersonCard}
			middleText={data.middleText}
			activities={data.activities}
			staffCards={staffCards}
		/>
	)
}

export default TechnicalDepartmentPage 