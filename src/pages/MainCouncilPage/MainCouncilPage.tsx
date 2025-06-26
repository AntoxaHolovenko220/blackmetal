import { Box, Typography } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DocumentTitleSearch, PersonCard } from '@/components'
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
			<DocumentTitleSearch title={`${data.title}`} search={false} />
			<Box sx={{ maxWidth: '1817px', m: '0px auto' }}>
				<Box sx={PersonCardAdaptation}>
					{data.data.map((item, index) => (
						<PersonCard
							key={index}
							photo={item.photo}
							position={item.position}
							name={item.name}
							description={item.description}
							contacts={item.contacts}
						/>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default MainCouncilPage
