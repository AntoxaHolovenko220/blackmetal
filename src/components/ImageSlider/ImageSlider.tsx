import React, { useState, useEffect } from 'react'
import {
	Box,
	IconButton,
	Paper,
	Typography,
	useTheme,
	useMediaQuery,
	LinearProgress
} from '@mui/material'
import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon,
	Fullscreen
} from '@mui/icons-material'

interface ImageSliderProps {
	images?: string[]
	title?: string
	alt?: string
	useRegDocs?: boolean
}

const ImageSlider: React.FC<ImageSliderProps> = ({ 
	images = [], 
	title, 
	alt, 
	useRegDocs = false 
}) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))

	// Если useRegDocs = true, используем стандартные изображения документов
	const defaultImages = useRegDocs ? [
		'/blackmetal/reg_doc1.png',
		'/blackmetal/reg_doc2.png',
		'/blackmetal/reg_doc3.png',
		'/blackmetal/reg_doc4.png',
		'/blackmetal/reg_doc5.png'
	] : []

	const finalImages = images.length > 0 ? images : defaultImages

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? finalImages.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === finalImages.length - 1 ? 0 : prevIndex + 1
		)
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
	}

	const handleFullscreen = () => {
		const elem = document.documentElement
		if (elem.requestFullscreen) {
			elem.requestFullscreen()
		} else if ((elem as any).webkitRequestFullscreen) {
			(elem as any).webkitRequestFullscreen()
		} else if ((elem as any).msRequestFullscreen) {
			(elem as any).msRequestFullscreen()
		}
	}

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowLeft') {
				handlePrevious()
			} else if (event.key === 'ArrowRight') {
				handleNext()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [finalImages.length])

	if (!finalImages || finalImages.length === 0) {
		return (
			<Box sx={{ textAlign: 'center', padding: '20px' }}>
				<Typography>Немає зображень для відображення</Typography>
			</Box>
		)
	}

	if (finalImages.length === 1) {
		return (
			<Box sx={{ mb: 4, maxWidth: '100%', mx: 'auto' }}>
				<Box 
					sx={{
						overflow: 'hidden',
						maxWidth: '100%',
						aspectRatio: '1 / 0.5',
						mx: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<img 
						src={finalImages[0]} 
						alt={alt || title || 'Document image'}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							display: 'block'
						}}
					/>
				</Box>
			</Box>
		)
	}

	return (
		<Box sx={{ mb: 4, position: 'relative', maxWidth: '100%', mx: 'auto' }}>
			<Box 
				sx={{
					position: 'relative',
					overflow: 'hidden',
					maxWidth: '100%',
					aspectRatio: isMobile ? '1 / 0.85' : '1 / 0.5',
					mx: 'auto',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: isPhone ? 2 : 0,
				}}
			>
				{/* Левая стрелка для смартфонов - сбоку */}
				{isPhone && (
					<IconButton
						onClick={handlePrevious}
						sx={{
							backgroundColor: 'rgba(255, 255, 255, 0.9)',
							border: '1px solid #e0e0e0',
							'&:hover': {
								backgroundColor: 'rgba(255, 255, 255, 1)'
							},
						}}
					>
						<ChevronLeftIcon />
					</IconButton>
				)}

				{/* Контейнер с изображением */}
				<Box
					sx={{
						position: 'relative',
						width: '100%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						flex: isPhone ? '1' : 'none',
					}}
				>
					<img 
						src={finalImages[currentIndex]} 
						alt={`${alt || title || 'Document image'} ${currentIndex + 1}`}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							transition: 'transform 0.3s ease-in-out'
						}}
						onError={(e) => {
							console.error('Error loading image:', finalImages[currentIndex])
						}}
					/>

					{/* Стрелки для планшетов и ПК - на изображении */}
					{!isPhone && (
						<>
							<IconButton
								onClick={handlePrevious}
								sx={{
									position: 'absolute',
									left: 2,
									top: '50%',
									transform: 'translateY(-50%)',
									backgroundColor: 'rgba(255, 255, 255, 0.9)',
									'&:hover': {
										backgroundColor: 'rgba(255, 255, 255, 1)'
									},
									zIndex: 2
								}}
							>
								<ChevronLeftIcon />
							</IconButton>

							<IconButton
								onClick={handleNext}
								sx={{
									position: 'absolute',
									right: 4,
									top: '50%',
									transform: 'translateY(-50%)',
									backgroundColor: 'rgba(255, 255, 255, 0.9)',
									'&:hover': {
										backgroundColor: 'rgba(255, 255, 255, 1)'
									},
									zIndex: 2
								}}
							>
								<ChevronRightIcon />
							</IconButton>
						</>
					)}
				</Box>

				{/* Правая стрелка для смартфонов - сбоку */}
				{isPhone && (
					<IconButton
						onClick={handleNext}
						sx={{
							backgroundColor: 'rgba(255, 255, 255, 0.9)',
							border: '1px solid #e0e0e0',
							'&:hover': {
								backgroundColor: 'rgba(255, 255, 255, 1)'
							},
						}}
					>
						<ChevronRightIcon />
					</IconButton>
				)}
			</Box>

			{/* Прогресс-бар и счетчик */}
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2,
					mt: 2,
					px: 2
				}}
			>
				<Typography sx={{ color: '#2D7A84', fontWeight: 500, minWidth: 32 }}>
					{currentIndex + 1}
				</Typography>
				<LinearProgress 
					variant="determinate" 
					value={finalImages.length ? ((currentIndex + 1) / finalImages.length) * 100 : 0}
					sx={{
						flex: 1,
						height: 6,
						borderRadius: 3,
						background: '#e0e0e0',
						'& .MuiLinearProgress-bar': {
							background: '#2D7A84',
						},
					}}
				/>
				<Typography sx={{ color: '#2D7A84', fontWeight: 500, minWidth: 32 }}>
					{finalImages.length}
				</Typography>
				<IconButton 
					sx={{ color: '#2D7A84' }} 
					onClick={handleFullscreen}
				>
					<Fullscreen />
				</IconButton>
			</Box>

			{/* Точки навигации */}
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 1,
					mt: 2
				}}
			>
				{finalImages.map((_, index) => (
					<Box
						key={index}
						onClick={() => handleDotClick(index)}
						sx={{
							width: 12,
							height: 12,
							borderRadius: '50%',
							backgroundColor: index === currentIndex 
								? '#2D7A84' 
								: 'rgba(0, 0, 0, 0.3)',
							cursor: 'pointer',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: index === currentIndex 
									? '#1f5a60' 
									: 'rgba(0, 0, 0, 0.5)'
							}
						}}
					/>
				))}
			</Box>
		</Box>
	)
}

export default ImageSlider 