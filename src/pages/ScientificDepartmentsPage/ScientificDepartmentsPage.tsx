import { Box, Typography } from '@mui/material'
import DepartmentElement from '@/components/Departments/DepartmentElement'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DepartmentsData } from '@/components/Departments/interfaces'

const ScientificDepartmentsPage = () => {
	const { data } = useTranslationData<DepartmentsData>('departments')

	if (!data) {
		return null // Или загрузочный индикатор
	}
	return (
		<Box
			sx={{
				// width: '100%',
				display: 'flex',
				flexDirection: 'column',
				// alignItems: 'center',
				// px: { xl: '190px' },
				pl: { xxs: '0px', sm: '50px' },
			}}
		>
			<Typography
				variant='h3'
				fontWeight='bold'
				sx={{
					// textAlign: 'center',
					mt: 3,
					fontSize: {
						xxs: '28px',
						sm: '2.2rem',
						md: '2.5rem',
					},
				}}
			>
				{data.titles.scientific}
			</Typography>

			<Box
				sx={{
					width: '100%',
					mt: 3,
					mb: 3,
					display: 'grid',
					gridTemplateColumns: {
						xxs: '1fr',
						sm: 'repeat(2, 1fr)',
						md: 'repeat(2, 1fr)',
						lg: 'repeat(3, 1fr)',
					},
					gap: '20px',
					justifyItems: 'center',
					maxWidth: '1440px',
					mx: 'auto',
				}}
			>
				{data.ScientificDepartments.map(dep => (
					<Box
						key={dep.id}
						sx={{
							width: '100%',
							maxWidth: {
								xxl: '460px',
							},
						}}
					>
						<DepartmentElement
							shortName={dep.shortName}
							fullName={dep.fullName}
							img={dep.img}
							href={dep.href}
						/>
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default ScientificDepartmentsPage
