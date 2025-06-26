import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	Box,
	Container,
	Typography,
	CircularProgress,
	Alert,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useTranslationData } from '@/hooks/useTranslationData'
import {
	NewsItem,
	TranslatedNewsData,
	NewsContentItem,
} from '@/pages/HomePage/components/News/NewsTypes'
import { ImageSlider } from '@/components'

const NewsPage: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const { t } = useTranslation()
	const {
		data: newsData,
		loading,
		error,
	} = useTranslationData<TranslatedNewsData>('news')
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null)

	useEffect(() => {
		if (newsData?.news && id) {
			const foundNews = newsData.news.find(item => item.id === parseInt(id))
			if (foundNews) {
				setNewsItem(foundNews)
			}
		}
	}, [newsData, id])

	console.log('newsItem', newsItem)

	if (loading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
				<CircularProgress />
			</Box>
		)
	}

	if (error || !newsItem) {
		return (
			<Container maxWidth='md' sx={{ py: 4 }}>
				<Alert severity='error'>{t('notFound.title')}</Alert>
			</Container>
		)
	}

	let images: string[] = []
	if (Array.isArray(newsItem.images) && newsItem.images.length > 0) {
		images = newsItem.images
	} else if (Array.isArray(newsItem.imageUrl)) {
		images = newsItem.imageUrl
	} else if (typeof newsItem.imageUrl === 'string') {
		images = [newsItem.imageUrl]
	}

	return (
		<Container
			maxWidth='lg'
			sx={{
				py: 4,
				px: { xs: 0, sm: 2 },
				pl: { xs: 0, sm: '50px' },
				maxWidth: '100vw !important',
				overflowX: 'hidden',
			}}
		>
			<Box
				sx={theme => ({
					display: { xs: 'flex', lg: 'flex' },
					flexDirection: { xs: 'column', lg: 'row' },
					alignItems: { xs: 'center', lg: 'center' },
					justifyContent: { lg: 'space-between' },
					mb: 3,
					[theme.breakpoints.down(480)]: {
						alignItems: 'center',
						'& .MuiTypography-h4, & .MuiTypography-caption': {
							width: '100%',
						},
					},
				})}
			>
				<Typography
					variant='h4'
					component='h1'
					sx={{
						fontWeight: 700,
						fontSize: { xxs: '28px', sm: '2rem', md: '2.25rem', lg: '36px' },
						color: '#142934',
						mb: { xs: 1, lg: 0 },
						wordBreak: 'break-word',
						lineHeight: 1.2,
						textAlign: 'left',
						width: { xs: '100%', lg: 'auto' },
						whiteSpace: 'normal',
					}}
				>
					{newsItem.title}
				</Typography>
				<Typography
					variant='caption'
					sx={{
						color: 'text.secondary',
						fontSize: { xs: '0.95rem', sm: '1rem', lg: '0.9rem' },
						whiteSpace: 'normal',
						flexShrink: 0,
						textAlign: { xs: 'center', sm: 'center', lg: 'left' },
						display: 'block',
						ml: { xs: 0, lg: 2 },
						mt: { xs: 0, lg: 0 },
						maxWidth: '100%',
						width: { xs: '100%', lg: 'auto' },
						wordBreak: 'break-word',
					}}
				>
					{newsItem.date}
				</Typography>
			</Box>

			{/* контент для новости с подробным содержимым */}
			{newsItem.content && Array.isArray(newsItem.content) && newsItem.content.length > 0 ? (
				<Box sx={{ mb: 3 }}>
					{newsItem.content.map((item: NewsContentItem, index: number) => (
						<Box key={index} sx={{ mb: 4 }}>
							{item.type === 'image' ? (
								<Box
									sx={{
										width: '100%',
										maxWidth: '600px',
										mx: 'auto',
										mb: 2,
									}}
								>
									<img
										src={item.value}
										alt={`${newsItem.title} - изображение ${index + 1}`}
										style={{
											width: '100%',
											height: '300px',
											objectFit: 'contain',
										}}
									/>
								</Box>
							) : (
								<Typography
									variant='body1'
									sx={{
										fontSize: '1.1rem',
										lineHeight: 1.7,
										color: '#333',
										mb: 2,
										textAlign: 'justify',
									}}
								>
									{item.value}
								</Typography>
							)}
						</Box>
					))}
				</Box>
			) : (
				<>
					{images.length > 0 && (
						<ImageSlider
							images={images}
							title={newsItem.title}
							alt={newsItem.title}
						/>
					)}

					<Typography
						variant='body1'
						sx={{
							fontSize: '1.1rem',
							lineHeight: 1.7,
							color: '#333',
							mb: 3,
						}}
					>
						{newsItem.text}
					</Typography>
				</>
			)}
		</Container>
	)
}

export default NewsPage
