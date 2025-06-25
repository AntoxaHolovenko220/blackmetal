import { Box, Typography } from '@mui/material'
import { UniversalSearch } from '@/components'
import { useTranslation } from 'react-i18next'

interface DocumentTitleSearchProps {
	title: string
	onSearchSubmit: (query: string) => void
	onSearchChange: (query: string) => void
}

export const DocumentTitleSearch = ({
	title,
	onSearchSubmit,
	onSearchChange,
}: DocumentTitleSearchProps) => {
	const { t } = useTranslation()
	return (
		<Box
			sx={{
				py: '30px',
				display: 'flex',
				justifyContent: 'space-between',
				gap: '25px',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Typography
				sx={{
					fontSize: { xxs: '28px', xs: '36px' },
					fontWeight: 600,
					lineHeight: 1,
					whiteSpace: 'nowrap',
				}}
			>
				{title}
			</Typography>
			<UniversalSearch
				onSearch={onSearchSubmit}
				onChange={onSearchChange}
				placeholderKey={t('components.search')}
				sx={{
					width: { xxs: '100%', xs: '250px' },
					p: '5px',
					border: '1px solid #DFDFDF',
					bgcolor: '#FFFFFF ',
				}}
			/>
		</Box>
	)
}

export default DocumentTitleSearch
