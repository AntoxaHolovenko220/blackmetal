import { Box, Typography } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import { useParams } from 'react-router-dom'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonIcon from '@mui/icons-material/Person'

const PersonPage = () => {
	const { id } = useParams<{ id: string }>()
	const { data } = useTranslationData<PersonCardData>('directorate')

	if (!data) {
		return null
	}

	const person = data.data.find(item => item.id === id)

	if (!person) {
		return null
	}

	return (
		<Box
			sx={{
				pl: { xxs: '0px', sm: '50px' },
				pb: '30px',
				pt: { xxs: '30px', sm: '96px' },
			}}
		>
			<Box
				sx={{
					maxWidth: '968px',
					width: '100%',
					height: '100%',
					m: '0px auto',
					p: '40px',
					bgcolor: '#FFFFFF',
					display: 'flex',
					justifyContent: 'space-between',
					gap: '50px',
					'@media (max-width: 1400px)': {
						flexDirection: 'column-reverse',
					},
				}}
			>
				<Box
					sx={{
						maxWidth: '528px',
						width: '100%',
						'@media (max-width: 1400px)': {
							maxWidth: '100%',
						},
					}}
				>
					<Typography sx={{ fontSize: '14px' }}>{person.position}:</Typography>
					<Typography
						sx={{
							mt: '10px',
							fontSize: '30px',
							fontWeight: 700,
							lineHeight: 1.2,
							'@media (max-width: 1024px)': {
								fontSize: '26px',
							},
						}}
					>
						{person.name}
					</Typography>
					<Box
						sx={{
							width: '100%',
							mt: '40px',
							py: '10px',
							display: 'flex',
							justifyContent: 'space-around',
							border: '1px solid #DFDFDFDF',
							'@media (max-width: 1024px)': {
								flexDirection: 'column',
								gap: '10px',
								alignItems: 'center',
							},
						}}
					>
						{person.contacts?.map(contact => (
							<Box
								sx={{
									display: 'flex',
									gap: '8px',
									alignItems: 'center',
								}}
							>
								{contact.type === 'Phone' || contact.type === 'Телефон' ? (
									<PhoneOutlinedIcon sx={{ color: '#2D7A84' }} />
								) : (
									<EmailOutlinedIcon sx={{ color: '#2D7A84' }} />
								)}
								<Typography sx={{ fontSize: '15px', fontWeight: 600 }}>
									{contact.value}
								</Typography>
							</Box>
						))}
					</Box>
					<Typography sx={{ mt: '40px', fontSize: '14px', lineHeight: 1.7 }}>
						{person.biography}
					</Typography>
				</Box>
				<Box
					sx={{
						maxHeight: '374px',
						maxWidth: '290px',
						width: '100%',
						height: '100%',
						aspectRatio: '0.77543 / 1',
						bgcolor: '#FFFFFF',
						backgroundImage: person.photo
							? `url(/blackmetal${person.photo})`
							: 'none',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						// '@media (max-width: 1400px)': {
						// 	maxHeight: '340px',
						// 	maxWidth: '264px',
						// 	gap: '30px',
						// },
						'@media (max-width: 1400px)': {
							maxWidth: '100%',
							width: '100%',
							aspectRatio: '1 / 1',
							backgroundSize: 'contain',
						},
					}}
				>
					{!person.photo && (
						<PersonIcon
							sx={{
								fontSize: '120px',
								color: '#2D7A84',
							}}
						/>
					)}
				</Box>
			</Box>
		</Box>
	)
}

export default PersonPage
