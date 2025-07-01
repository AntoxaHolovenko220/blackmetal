import React, { useState, useEffect } from 'react'
import {
	Box,
	IconButton,
	Paper,
	Typography,
	useTheme,
	useMediaQuery
} from '@mui/material'
import {
	ChevronLeft as ChevronLeftIcon,
	ChevronRight as ChevronRightIcon
} from '@mui/icons-material'

interface ImageSliderProps {
	images: string[]
	title?: string
	alt?: string
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, title, alt }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const theme = useTheme()
	const isMobile = useMediaQuery(theme.breakpoints.down('md'))
	const isPhone = useMediaQuery(theme.breakpoints.down('sm'))

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		)
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => 
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		)
	}

	const handleDotClick = (index: number) => {
		setCurrentIndex(index)
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
	}, [images.length])

	if (!images || images.length === 0) {
		return null
	}

	if (images.length === 1) {
		return (
			<Box sx={{ mb: 4, maxWidth: '100%', mx: 'auto' }}>
				<Box 
					sx={{
						overflow: 'hidden',
						// height: '100vh',
						maxWidth: '100%',
						aspectRatio: '1 / 0.5',
						mx: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center'
					}}
				>
					<img 
						src={images[0]} 
						alt={alt || title || 'News image'}
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
					// height: '100vh',
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
						src={images[currentIndex]} 
						alt={`${alt || title || 'News image'} ${currentIndex + 1}`}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain',
							transition: 'transform 0.3s ease-in-out'
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

			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					gap: 1,
					mt: 2
				}}
			>
				{images.map((_, index) => (
					<Box
						key={index}
						onClick={() => handleDotClick(index)}
						sx={{
							width: 12,
							height: 12,
							borderRadius: '50%',
							backgroundColor: index === currentIndex 
								? 'primary.main' 
								: 'rgba(0, 0, 0, 0.3)',
							cursor: 'pointer',
							transition: 'all 0.3s ease',
							'&:hover': {
								backgroundColor: index === currentIndex 
									? 'primary.dark' 
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