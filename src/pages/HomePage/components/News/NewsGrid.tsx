import { FC, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	Grid,
	CircularProgress,
	Alert,
	Box,
	Typography,
	useTheme,
	useMediaQuery,
} from '@mui/material'
import { NewsCard } from './NewsCard'
import { NewsItem, TranslatedNewsData } from './NewsTypes'
import { Pagination } from '@/components/Pagination/Pagination'
import { useTranslationData } from '@/hooks/useTranslationData'

export const NewsGrid: FC = () => {
	const navigate = useNavigate()
	const { data: translationData, loading, error } = useTranslationData<TranslatedNewsData>('news')

	const [news, setNews] = useState<NewsItem[]>([])
	const [currentPage, setCurrentPage] = useState(1)

	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
	const isTablet = useMediaQuery(theme.breakpoints.down('md'))

	const ITEMS_PER_PAGE = isMobile ? 4 : isTablet ? 4 : 6

	useEffect(() => {
		if (translationData?.news) {
			const loadedNews = translationData.news.map(item => ({
				...item,
				imageUrl: Array.isArray(item.imageUrl) ? item.imageUrl[0] : item.imageUrl,
				onClick: () => navigate(`/news/${item.id}`),
			}))
			setNews(loadedNews)
		}
	}, [translationData, navigate])

	const handlePageChange = (page: number) => {
		setCurrentPage(page)
	}

	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
	const displayedNews = news.slice(startIndex, startIndex + ITEMS_PER_PAGE)

	if (loading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', py: 4, width: '100%' }}>
				<CircularProgress />
			</Box>
		)
	}

	return (
		<Box sx={{ width: '100%' }}>
			<Typography
				variant='h3'
				fontWeight='bold'
				sx={{
					textAlign: 'left',
					mb: { xs: 3, xxs: 3, sm: 4, md: 5 },
					fontSize: {
						xxs: '28px',
						sm: '2.2rem',
						md: '2.5rem',
					},
				}}
			>
				{translationData?.newsTitle}
			</Typography>

			<Grid container spacing={{ xs: 3, sm: 4, md: 5 }} sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
				{displayedNews.map((item, idx) => (
					<Grid
						item
						key={item.id}
						xs={12}
						sm={6}
						sx={{
							mb: {
								xxs: 2,
								xs: 0,
							},
						}}
						component={'div' as React.ElementType}
					>
						<NewsCard {...item} />
					</Grid>
				))}
			</Grid>

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					mt: { xs: 2, sm: 3, md: 4 },
				}}
			>
				<Pagination
					totalItems={news.length}
					itemsPerPage={ITEMS_PER_PAGE}
					currentPage={currentPage}
					onPageChange={handlePageChange}
					siblingCount={isMobile ? 0 : 1}
				/>
			</Box>
		</Box>
	)
}