import { Box, Typography, Link } from '@mui/material'
import { NewsContentItem } from '@/pages/HomePage/components/News/NewsTypes'

interface NewsContentProps {
	content: NewsContentItem[]
	title: string
}

const renderContent = (item: NewsContentItem, index: number) => {
	if (item.type === 'image') {
		return (
			<Box
				key={index}
				sx={{
					width: '100%',
					maxWidth: '600px',
					mx: 'auto',
					mb: 2,
				}}
			>
				<img
					src={item.value}
					alt={`Новость - изображение ${index + 1}`}
					style={{
						width: '100%',
						height: '300px',
						objectFit: 'contain',
					}}
				/>
			</Box>
		)
	}

	if (item.type === 'desc') {
		return (
			<Typography
				key={index}
				variant='body1'
				sx={{
					mt: -2,
					mb: 2,
					fontSize: '1rem',
					lineHeight: 1.7,
					color: '#333333',
					textAlign: 'center',
					fontStyle: 'italic',
				}}
			>
				{item.value}
			</Typography>
		)
	}

	if (item.type === 'link') {
		return (
			<Link
				key={index}
				href={item.href}
				target='_blank'
				rel='noopener noreferrer'
				sx={{ color: 'primary.main', textDecoration: 'underline' }}
			>
				{item.value}
			</Link>
		)
	}

	if (item.type === 'text') {
		if (item.children && item.children.length > 0) {
			return (
				<Typography
					key={index}
					variant='body1'
					sx={{
						fontSize: '1.1rem',
						lineHeight: 1.7,
						color: '#333333',
						mb: 2,
						textAlign: 'justify',
					}}
				>
					{item.children.map((child, idx) => renderContent(child, idx))}
				</Typography>
			)
		}

		return (
			<Typography
				key={index}
				variant='body1'
				sx={{
					fontSize: '1.1rem',
					lineHeight: 1.7,
					color: '#333333',
					mb: 2,
					textAlign: 'justify',
				}}
			>
				{item.value}
			</Typography>
		)
	}

	return null
}

const NewsContent = ({ content, title }: NewsContentProps) => {
	return (
		<Box sx={{ mb: 3 }}>
			{content.map((item, index) => renderContent(item, index))}
		</Box>
	)
}

export default NewsContent
