import { Box } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import { useParams } from 'react-router-dom'
import { PersonSidebar, PersonContent } from './components'

const PersonPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data } = useTranslationData<PersonCardData>('directorate')

	if (!data) {
		return null
	}

	const person = data.data.find(item => item.id === id)

	if (!person) {
		return null
	}

	return (
		<Box
			sx={{
				pl: { xxs: '0px', sm: '50px' },
				pt: { xxs: '20px', sm: '96px' },
				pb: '30px',
			}}
		>
			<Box
				sx={{
					width: '100%',
					zIndex: 1,
				}}
			>
				<Box
					sx={{
						backgroundColor: 'white',
						padding: '0px',
						backdropFilter: 'blur(10px)',
						display: 'flex',
						gap: '0px',
						alignItems: 'stretch',
						'@media (max-width: 1024px)': {
							flexDirection: 'column',
							alignItems: 'center',
							padding: '0px',
						},
					}}
				>
					<PersonSidebar 
						photo={person.photo}
						contacts={person.contacts}
						contactsLabel={data.labels.contacts}
					/>

					<PersonContent 
						position={person.position || ''}
						name={person.name || ''}
						description={person.description || ''}
						researchDirection={person.researchDirection}
						teachingSubjects={person.teachingSubjects}
						biography={person.biography}
						labels={data.labels}
					/>
				</Box>
			</Box>
		</Box>
	)
}

export default PersonPage