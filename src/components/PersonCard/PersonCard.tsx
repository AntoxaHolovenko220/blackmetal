import { Box, Link as MUILink, Typography, Button } from '@mui/material'
import { PersonCardInterface } from './PersonCardInterface'
import PersonIcon from '@mui/icons-material/Person'
import { useNavigate } from 'react-router-dom'

const PersonCard = ({
	id,
	photo,
	position,
	name,
	description = '',
	contacts = [],
}: PersonCardInterface) => {
	const navigate = useNavigate()

	const handleDetailsClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		navigate(`/person/${id}`)
	}

	return (
		<Box
			sx={{
				maxWidth: '589px',
				textDecoration: 'none',
				color: '#000000',
				cursor: 'pointer',
				position: 'relative',
			}}
			onClick={() => navigate(`/person/${id}`)}
		>
			<Box
				sx={{
					width: '100%',
					m: '0 auto',
					maxWidth: '589px',
					display: 'flex',
					flexDirection: 'row',
					bgcolor: '#FFFFFF',
					'@media (max-width: 600px)': {
						flexDirection: 'column',
					},
				}}
			>
				<Box
					sx={{
						width: '43%',
						aspectRatio: '0.7505 / 1',
						bgcolor: '#FFFFFF',
						backgroundImage: photo ? `url(/blackmetal${photo})` : 'none',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						'@media (max-width: 600px)': {
							width: '100%',
							aspectRatio: '1 / 1',
							backgroundSize: 'contain',
						},
					}}
				>
					{!photo && (
						<PersonIcon
							sx={{
								fontSize: '120px',
								color: '#2D7A84',
							}}
						/>
					)}
				</Box>
				<Box
					sx={{
						width: '57%',
						px: '30px',
						pt: '30px',
						pr: '30px',
						pb: '30px',
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						'@media (max-width: 600px)': {
							width: '100%',
							pl: 0,
						},
					}}
				>
					{position && (
						<Typography
							sx={{ fontSize: '14px', fontWeight: 400, color: '#8A8A8A' }}
						>
							{position}
						</Typography>
					)}

					<Typography
						sx={{
							mt: '10px',
							fontSize: '22px',
							fontWeight: 700,
							lineHeight: 1,
						}}
					>
						{name}
					</Typography>

					{description && (
						<Typography
							sx={{
								mt: '10px',
								fontSize: '13px',
								fontWeight: 400,
								color: '#707070',
								flex: 1,
								mb: '15px',
							}}
						>
							{description}
						</Typography>
					)}

					{contacts?.length > 0 && (
						<Box sx={{ mt: '10px' }}>
							{contacts.slice(0, 2).map((contact, index) => (
								<Box
									key={index}
									sx={{
										mt: index === 0 ? '0px' : '10px',
										display: 'flex',
										gap: '10px',
									}}
								>
									{contact.type && (
										<Typography
											sx={{
												fontSize: '13px',
												fontWeight: 400,
												color: '#8A8A8A',
											}}
										>
											{contact.type}:
										</Typography>
									)}
									<Typography sx={{ fontSize: '13px', fontWeight: 400 }}>
										{contact.value}
									</Typography>
								</Box>
							))}
						</Box>
					)}
				</Box>
			</Box>

			<Button
				variant='contained'
				onClick={handleDetailsClick}
				sx={{
					backgroundColor: '#2D7A84',
					color: '#fff',
					fontSize: '12px',
					fontWeight: 500,
					textTransform: 'none',
					borderRadius: 0,
					position: 'absolute',
					bottom: '30px',
					right: '30px',
					'&:hover': {
						backgroundColor: '#1f5a60',
					},
					'@media (max-width: 600px)': {
						fontSize: '11px',
						padding: '5px 10px',
						bottom: '15px',
						right: '15px',
					},
				}}
			>
				Детальніше
			</Button>
		</Box>
	)
}

export default PersonCard
