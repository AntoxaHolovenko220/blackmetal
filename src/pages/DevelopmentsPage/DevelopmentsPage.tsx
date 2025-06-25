import { Container, Box, Typography } from '@mui/material'
import { PresentationPlayer } from '../../components/PresentationPlayer'
import { useTranslationData } from '@/hooks/useTranslationData'

interface DevelopmentsData {
	title: string
}

interface NewsData {
	newsTitle: string
}

const DevelopmentsPage = () => {
	const { data } = useTranslationData<DevelopmentsData>('developments')
	const { data: newsData } = useTranslationData<NewsData>('news')

	if (!data) {
		return null
	}

	return (
		<Container maxWidth='lg' sx={{ py: 6 }}>
			<Box>
				<Typography
					variant='h3'
					fontWeight='bold'
					sx={{
						// textAlign: 'center',
						mb: { xxs: 2, xs: 3, sm: 4, md: 5 },
						fontSize: {
							xxs: '28px',
							sm: '2.2rem',
							md: '2.5rem',
						},
					}}
				>
					{data.title}
				</Typography>

				<PresentationPlayer />
			</Box>
		</Container>
	)
}

export default DevelopmentsPage
