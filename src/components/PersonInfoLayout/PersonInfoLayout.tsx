import { Box, Typography, Divider } from '@mui/material'
import { DocumentTitleSearch, PersonCard } from '@/components'
import { PersonCardInterface } from '../PersonCard/PersonCardInterface'
import { useTranslationData } from '@/hooks/useTranslationData'
import { PersonCardAdaptation } from '../PersonCard/styles'

interface DepartmentsData {
	common: {
		staffTitle: string
		activitiesTitle: string
	}
}

export interface PersonInfoLayoutProps {
	title: string
	searchEnabled?: boolean
	onSearchSubmit?: (query: string) => void
	onSearchChange?: (query: string) => void
	firstPersonCard: PersonCardInterface
	activities?: {
		items: string[]
	}
	laboratoryTests?: {
		title: string
		items: string[]
	}
	staffCards: PersonCardInterface[]
}

const PersonInfoLayout = ({
	title,
	searchEnabled = true,
	onSearchSubmit = () => {},
	onSearchChange = () => {},
	firstPersonCard,
	activities,
	laboratoryTests,
	staffCards,
}: PersonInfoLayoutProps) => {
	const { data: departmentsData } = useTranslationData<DepartmentsData>('departments')
	
	return (
		<Box
			sx={{
				pl: { xxs: '0px', sm: '50px' },
				width: '100%',
			}}
		>
			<DocumentTitleSearch
				title={title}
				search={searchEnabled}
				onSearchSubmit={onSearchSubmit}
				onSearchChange={onSearchChange}
			/>

			<Box sx={{ mb: 3 }}>
				<PersonCard {...firstPersonCard} />
			</Box>
			
			<Box sx={{ mb: 3 }}>
				<Typography
					sx={{
						fontSize: '18px',
						fontWeight: 700,
						lineHeight: 1.4,
						color: '#333333',
						textAlign: 'center',
					}}
				>
					{departmentsData?.common?.activitiesTitle || 'Main activity directions:'}
				</Typography>
			</Box>

			{activities && activities.items && activities.items.length > 0 && (
				<Box sx={{ mb: 3 }}>
					<Box
						component="ol"
						sx={{
							pl: 2,
							'& li': {
								fontSize: '16px',
								fontWeight: 400,
								lineHeight: 1.6,
								color: '#333333',
								mb: 1,
							},
							'& li.sub-item': {
								listStyleType: 'none',
								ml: 3,
								position: 'relative',
								'&::before': {
									content: '"• "',
									position: 'absolute',
									left: '-15px',
								},
							},
						}}
					>
						{activities.items.map((item, index) => {
							const isSubItem = item.length > 0 && item[0] === item[0].toLowerCase() && /[а-яё]/.test(item[0])
							
							return (
								<Typography 
									component="li" 
									key={index}
									className={isSubItem ? 'sub-item' : ''}
								>
									{item}
								</Typography>
							)
						})}
					</Box>
				</Box>
			)}

			{laboratoryTests && laboratoryTests.items && laboratoryTests.items.length > 0 && (
				<Box sx={{ mb: 3 }}>
					<Box sx={{ mb: 2 }}>
						<Typography
							sx={{
								fontSize: '18px',
								fontWeight: 700,
								lineHeight: 1.4,
								color: '#333333',
								textAlign: 'center',
							}}
						>
							{laboratoryTests.title}
						</Typography>
					</Box>
					<Box
						component="ul"
						sx={{
							pl: 2,
							'& li': {
								fontSize: '16px',
								fontWeight: 400,
								lineHeight: 1.6,
								color: '#333333',
								mb: 1,
							},
						}}
					>
						{laboratoryTests.items.map((item, index) => (
							<Typography component="li" key={index}>
								{item}
							</Typography>
						))}
					</Box>
				</Box>
			)}
			
			<Divider
				sx={{
					mb: 3,
					borderColor: '#e0e0e0',
				}}
			/>

			<Box sx={{ mb: 3 }}>
				<Typography
					sx={{
						fontSize: '18px',
						fontWeight: 700,
						lineHeight: 1.4,
						color: '#333333',
						textAlign: 'center',
					}}
				>
					{departmentsData?.common?.staffTitle || 'Department staff:'}
				</Typography>
			</Box>

			{staffCards && staffCards.length > 0 && (
				<Box sx={{ maxWidth: '1817px', mb: '30px' }}>
					<Box sx={PersonCardAdaptation}>
						{staffCards.map((card, index) => (
							<PersonCard
								key={card.id || index}
								id={card.id}
								photo={card.photo}
								position={card.position}
								name={card.name}
								description={card.description}
								contacts={card.contacts}
							/>
						))}
					</Box>
				</Box>
			)}
		</Box>
	)
}

export default PersonInfoLayout 