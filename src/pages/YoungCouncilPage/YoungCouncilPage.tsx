import { Box } from '@mui/material'
import { PersonCard, DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import {
	PersonCardAdaptation,
	PersonCardWrapper,
} from '@/components/PersonCard/styles'

const YoungCouncilPage = () => {
	const { data } = useTranslationData<PersonCardData>('youngcouncil')

	if (!data) {
		return null
	}
	return (
		<Box sx={PersonCardWrapper}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'flex-start' }}>
				<DocumentTitleSearch title={`${data.title}`} search={false} />
			</Box>
			<Box sx={{ maxWidth: '1817px', m: '0px auto' }}>
				<Box sx={PersonCardAdaptation}>
					{data.data.map((item, index) => (
						<PersonCard
							key={index}
							photo={item.photo}
							position={item.position}
							name={item.name}
						/>
					))}
				</Box>
			</Box>
		</Box>
	)
}

export default YoungCouncilPage
