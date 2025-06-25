import { Box, List, ListItem, Typography, Link as MUILink, Divider, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { SocialLinks, UniversalLogo } from '@/components'
import routes from '@/router/routes.json'
import { RouteConfig, RoutesConfig } from '@/router/types'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Modal } from '@components/Modal'
import { FeedbackForm } from '@components/FeedbackForm/FeedbackForm'
import { useTranslationData } from '@/hooks/useTranslationData'

interface ModalTranslation {
	title: string
}

const Footer = () => {
	const { t } = useTranslation()
	const { data: tt, loading } = useTranslationData<ModalTranslation>('modal')

	const listItemStyle = {
		width: 'fit-content',
		minWidth: 'unset',
		p: 0,
		display: 'flex',
		justifyContent: 'center',
		whiteSpace: 'nowrap',
		color: '#333333',
		textDecoration: 'none',
		transition: 'color 0.3s ease',
		'&:hover': {
			color: '#2D7A84',
		},
	}
	const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
	const listTypographyStyle = { fontSize: '15px', fontWeight: 400 }
	const titleStyles = { fontSize: '15px', fontWeight: 700, color: '#363636' }
	const boxStyles = {
		height: '54px',
		display: 'flex',
		alignItems: 'center',
		mb: '5px',
	}

	const footerLinks = Object.values(routes as RoutesConfig).filter(
		(route): route is RouteConfig & { showIn: string } => route.showIn === 'Footer'
	)

	const getTranslatedTitle = (routeKey: string) => {
		return t(`routes.${routeKey}`)
	}

	return (
		<Box
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				minHeight: '171px',
				// px: { xxs: '20px', xl: '190px' },
				// pb: '20px',
				bgcolor: '#ffffff',
			}}
		>
			<Box
				sx={{
					maxWidth: 'xxl',
					minWidth: 'xxs',
					width: '90%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						width: '95%',
						py: '25px',
						px: { xxs: '20px', lg: '0px' },
						display: 'flex',
						flexDirection: 'row-reverse',
						justifyContent: { xxs: 'center', lg: 'space-between' },
						columnGap: { xxs: '60px', lg: '0px' },
						rowGap: '15px',
						alignItems: 'center',
						flexWrap: 'wrap',
					}}
				>
					<Box
						sx={{
							pb: '11px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>{t('footer.socials')}</Typography>
						</Box>
						<SocialLinks />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>{t('footer.question')}</Typography>
						</Box>
						<Button
							variant='outlined'
							sx={{
								width: '186px',
								mb: '9.5px',
								borderRadius: 0,
								textTransform: 'none',
								borderColor: '#333333',
								fontSize: '14px',
								fontWeight: 400,
								color: '#333333',
							}}
							onClick={() => setIsFeedbackModalOpen(true)}
						>
							{t('footer.questionButton')}
						</Button>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>{t('footer.contacts')}</Typography>
						</Box>
						<Typography
							sx={{
								fontSize: '15px',
								fontWeight: 400,
								color: '#333333',
								textAlign: 'center',
							}}
						>
							+38 (056) 790 05 14 <br /> office.isi@nas.gov.ua
						</Typography>
					</Box>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<Box sx={boxStyles}>
							<Typography sx={titleStyles}>{t('footer.location')}</Typography>
						</Box>
						<Typography
							sx={{
								maxWidth: '178px',
								fontSize: '15px',
								fontWeight: 400,
								color: '#606060',
								textAlign: 'center',
							}}
						>
							{t('footer.address')}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
					>
						<UniversalLogo size={54} />
						<MUILink href='' target='_blank' rel='noopener noreferrer'>
							<Typography sx={{ fontSize: '12px' }}>{t('footer.map')}</Typography>
						</MUILink>

						<Typography sx={{ fontSize: '12px' }}>
							© 2006 – {new Date().getFullYear()} {t('footer.about')}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Modal
				open={isFeedbackModalOpen}
				onClose={() => setIsFeedbackModalOpen(false)}
				title={tt?.title} // Добавьте это поле в ваши JSON-файлы переводов
			>
				<FeedbackForm onClose={() => setIsFeedbackModalOpen(false)} />
			</Modal>
		</Box>
	)
}

export default Footer
