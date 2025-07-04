import { Box, Typography } from '@mui/material'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardData } from '@/components/PersonCard/PersonCardInterface'
import { useParams } from 'react-router-dom'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import PublicIcon from '@mui/icons-material/Public'
import { DocumentTitleSearch } from '@/components'

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
				pl: '50px',
			}}
		>
			<DocumentTitleSearch title={`${person.position}`} search={false} />
			<Box
				sx={{
					// maxWidth: '1200px',
					width: '100%',
					zIndex: 1,
				}}
			>
				<Box
					sx={{
						backgroundColor: 'white',
						padding: '0px',
						backdropFilter: 'blur(10px)',
						display: 'flex',
						gap: '0px',
						alignItems: 'stretch',
						'@media (max-width: 1024px)': {
							flexDirection: 'column',
							alignItems: 'center',
							padding: '0px',
						},
					}}
				>
					<Box
						sx={{
							minWidth: '300px',
							maxWidth: '300px',
							backgroundColor: '#2D7A84',
							padding: '40px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'flex-start',
							'@media (max-width: 1024px)': {
								minWidth: '100%',
								maxWidth: '100%',
								padding: '30px',
							},
						}}
					>
						<Box
							sx={{
								width: '100%',
								aspectRatio: '0.75 / 1',
								overflow: 'hidden',
								backgroundColor: '#2D7A84',
								backgroundImage: person.photo
									? `url(/blackmetal${person.photo})`
									: 'none',
								backgroundRepeat: 'no-repeat',
								backgroundPosition: 'center',
								backgroundSize: 'cover',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginBottom: '30px',
							}}
						>
							{!person.photo && (
								<PersonIcon
									sx={{
										fontSize: '120px',
										color: 'white',
									}}
								/>
							)}
						</Box>

						<Box sx={{ width: '100%' }}>
							<Typography
								sx={{
									fontSize: '18px',
									fontWeight: 600,
									color: 'white',
									marginBottom: '15px',
									textAlign: 'center',
								}}
							>
								{data.labels.contacts}
							</Typography>

							<Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

								{person.contacts?.map((contact, index) => (
									<Box
										key={index}
										sx={{
											display: 'flex',
											alignItems: 'center',
											gap: '15px',
										}}
									>
										<Box
											sx={{
												width: '35px',
												height: '35px',
												backgroundColor: 'white',
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'center',
											}}
										>
											{contact.type === 'Phone' || contact.type === 'Телефон' ? (
												<PhoneOutlinedIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
											) : (
												<EmailOutlinedIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
											)}
										</Box>
										<Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>
											{contact.value}
										</Typography>
									</Box>
								))}

								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: '15px',
									}}
								>
									<Box
										sx={{
											width: '35px',
											height: '35px',
											backgroundColor: 'white',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<SchoolIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
									</Box>
									<Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>
										Google Scholar
									</Typography>
								</Box>

								<Box
									sx={{
										display: 'flex',
										alignItems: 'center',
										gap: '15px',
									}}
								>
									<Box
										sx={{
											width: '35px',
											height: '35px',
											backgroundColor: 'white',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
										}}
									>
										<PublicIcon sx={{ color: '#2D7A84', fontSize: '20px' }} />
									</Box>
									<Typography sx={{ fontSize: '16px', fontWeight: 600, color: 'white' }}>
										ORCID iD
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>

					<Box
						sx={{
							flex: 1,
							backgroundColor: 'white',
							padding: '40px',
							'@media (max-width: 1024px)': {
								padding: '30px',
							},
						}}
					>

						<Typography
							sx={{
								fontSize: '28px',
								fontWeight: 700,
								color: '#1a1a1a',
								marginBottom: '20px',
								lineHeight: 1.2,
								'@media (max-width: 768px)': {
									fontSize: '24px',
								},
							}}
						>
							{person.name}
						</Typography>

						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: 600,
								color: '#555',
								marginBottom: '25px',
								lineHeight: 1.4,
							}}
						>
							{person.description}
						</Typography>

						{person.researchDirection && (
							<>
								<Typography
									sx={{
										fontSize: '18px',
										fontWeight: 600,
										color: '#2D7A84',
										marginBottom: '15px',
									}}
								>
									{data.labels.researchDirection}
								</Typography>

								<Typography
									sx={{
										fontSize: '18px',
										color: '#333',
										lineHeight: 1.6,
										marginBottom: '25px',
										textAlign: 'justify',
									}}
								>
									{person.researchDirection}
								</Typography>
							</>
						)}

						{person.teachingSubjects && (
							<>
								<Typography
									sx={{
										fontSize: '18px',
										fontWeight: 600,
										color: '#2D7A84',
										marginBottom: '15px',
									}}
								>
									{data.labels.teachingSubjects}
								</Typography>

								<Typography
									sx={{
										fontSize: '18px',
										color: '#333',
										lineHeight: 1.6,
										marginBottom: '25px',
										textAlign: 'justify',
									}}
								>
									{person.teachingSubjects}
								</Typography>
							</>
						)}

						{person.biography && (
							<>
								<Typography
									sx={{
										fontSize: '18px',
										fontWeight: 600,
										color: '#2D7A84',
										marginBottom: '15px',
									}}
								>
									{data.labels.biography}
								</Typography>
								<Typography
									sx={{
										fontSize: '18px',
										color: '#333',
										lineHeight: 1.6,
										marginBottom: '25px',
										textAlign: 'justify',
									}}
								>
									{person.biography}
								</Typography>
							</>
						)}
					</Box>
				</Box>
			</Box>
		</Box>
	)
}

export default PersonPage