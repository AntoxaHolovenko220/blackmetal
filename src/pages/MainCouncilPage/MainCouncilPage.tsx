import { Box } from '@mui/material'
import { PersonCard, DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import {
	PersonCardAdaptation,
	PersonCardWrapper,
} from '@/components/PersonCard/styles'

const MainCouncilPage = () => {
	const { data } = useTranslationData<PersonCardData>('maincouncil')

	if (!data) {
		return null
	}
	return (
		<Box sx={PersonCardWrapper}>
			<Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
				<DocumentTitleSearch title={`${data.title}`} search={false} />
			</Box>
			<Box sx={{ maxWidth: '1817px', m: '0px auto' }}>
				<Box sx={PersonCardAdaptation}>
					{data.data.map((item, index) => (
						<PersonCard
							key={index}
							id={item.id}
							photo={item.photo}
							position={item.position}
							name={item.name}
							description={item.description}
							biography={item.biography}
							researchDirection={item.researchDirection}
							teachingSubjects={item.teachingSubjects}
							contacts={item.contacts}
						/>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default MainCouncilPage
