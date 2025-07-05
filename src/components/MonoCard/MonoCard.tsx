import { Box, Link as MUILink, Typography, Button } from '@mui/material'
import PlagiarismIcon from '@mui/icons-material/Plagiarism'
import { MonoCardProps } from './MonoCardInterface'
import { useTranslation } from 'react-i18next'

const MonoCard = ({ image, title, description, link }: MonoCardProps) => {
	const { t } = useTranslation()
	const getFileNameFromUrl = (url: string): string => {
		if (!url) return 'document'
		const parts = url.split('/')
		return parts[parts.length - 1] || 'document'
	}

	const getFileExtensionFromUrl = (url: string): string => {
		if (!url) return 'docx'
		const parts = url.split('.')
		return parts[parts.length - 1] || 'document'
	}

	const fileName = getFileNameFromUrl(link)
	const fileExtension = getFileExtensionFromUrl(fileName)
	const fileLink = `/blackmetal${link}`

	return (
		<Box
			sx={{
				width: '100%',
				m: '0 auto',
				maxWidth: '600px',
				display: 'flex',
				flexDirection: 'row',
				bgcolor: '#FFFFFF',
				'@media (max-width: 666px)': {
					flexDirection: 'column',
				},
			}}
		>
			<Box
				sx={{
					width: '40%',
					aspectRatio: '0.7505 / 1',
					bgcolor: '#FFFFFF',
					backgroundImage: image ? `url(/blackmetal${image})` : 'none',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'center',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					'@media (max-width: 666px)': {
						width: '100%',
						aspectRatio: '1 / 1',
					},
				}}
			>
				{!image && (
					<PlagiarismIcon
						sx={{
							fontSize: '120px',
							color: '#2D7A84',
						}}
					/>
				)}
			</Box>
			<Box
				sx={{
					width: '60%',
					p: '20px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: !description ? 'space-between' : 'flex-start',
					'@media (max-width: 666px)': {
						width: '100%',
					},
				}}
			>
				<Typography
					sx={{
						fontSize: '22px',
						fontWeight: 700,
						lineHeight: 1.2,
					}}
				>
					{title}
				</Typography>

				{description && (
					<Typography
						sx={{
							mt: '10px',
							fontSize: '13px',
							fontWeight: 400,
							color: '#707070',
							flex: 1,
						}}
					>
						{description}
					</Typography>
				)}

				<Box
					sx={{
						width: '100%',
						mt: '15px',
						display: 'flex',
						justifyContent: 'space-between',
						gap: '20px',
						flexWrap: 'wrap',
					}}
				>
					{['docx', 'doc', 'zip', 'rar'].includes(fileExtension) ? (
						<>
							<MUILink
								href={fileLink}
								rel='noopener noreferrer'
								sx={{ width: { xxs: '100%', xs: '150px' } }}
							>
								<Button
									variant='outlined'
									sx={{
										width: '100%',
										height: '42px',
										borderRadius: 0,
										textTransform: 'none',
										color: '#000000',
									}}
								>
									{t('components.document-card.download')}
								</Button>
							</MUILink>
						</>
					) : ['pdf', 'jpg', 'svg', 'jpeg', 'png', 'webp', 'jfif'].includes(
							fileExtension
					  ) ? (
						<>
							<MUILink
								target='_blank'
								href={fileLink}
								rel='noopener noreferrer'
								sx={{ width: { xxs: '100%', xs: '140px' } }}
							>
								<Button
									variant='contained'
									sx={{
										width: '100%',
										height: '42px',
										borderRadius: 0,
										boxShadow: 'none',
										textTransform: 'none',
									}}
								>
									{t('components.document-card.see')}
								</Button>
							</MUILink>
							<MUILink
								href={fileLink}
								rel='noopener noreferrer'
								download={fileName}
								sx={{ width: { xxs: '100%', xs: '140px' } }}
							>
								<Button
									variant='outlined'
									sx={{
										width: '100%',
										height: '42px',
										borderRadius: 0,
										textTransform: 'none',
										color: '#000000',
									}}
								>
									{t('components.document-card.download')}
								</Button>
							</MUILink>
						</>
					) : (
						<>
							<MUILink
								target='_blank'
								href={link}
								rel='noopener noreferrer'
								sx={{ width: { xxs: '100%', xs: '140px' } }}
							>
								<Button
									variant='contained'
									sx={{
										width: '100%',
										height: '42px',
										borderRadius: 0,
										boxShadow: 'none',
										textTransform: 'none',
									}}
								>
									{t('components.document-card.see')}
								</Button>
							</MUILink>
						</>
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default MonoCard
