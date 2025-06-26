import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import DepartmentElement from '@/components/Departments/DepartmentElement'
import { useTranslationData } from '@/hooks/useTranslationData'
import { DepartmentsData } from '@/components/Departments/interfaces'

const ScientificDepartmentsPage = () => {
	const { data } = useTranslationData<DepartmentsData>('departments')

	if (!data) {
		return null 
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
			<DocumentTitleSearch title={`${data.titles.scientific}`} search={false} />
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
