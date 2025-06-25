import { Box, Typography } from '@mui/material'
import { PersonCard } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import { PersonCardAdaptation, PersonCardWrapper } from '@/components/PersonCard/styles'

const MainCouncilPage = () => {
	const { data } = useTranslationData<PersonCardData>('maincouncil')

	if (!data) {
		return null
	}
	return (
		<Box sx={PersonCardWrapper}>
			<Box sx={{ py: '30px', display: 'flex', justifyContent: 'flex-start' }}>
				<Typography
					sx={{
						fontSize: { xxs: '28px', xs: '36px' },
						fontWeight: 600,
						lineHeight: 1,
					}}
				>
					{data.title}
				</Typography>
			</Box>
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
