import { DocumentTitleSearch } from '@/components'
import { Box } from '@mui/material'

const ProcurementPage = () => {
	return (
		<Box sx={{ width: '100%', height: '100%' }}>
			<DocumentTitleSearch title='To be or not to be?...' search={false} />
		</Box>
	)
}

export default ProcurementPage
