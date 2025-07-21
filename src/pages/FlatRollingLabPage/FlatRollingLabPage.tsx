import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'

interface LaboratoryData {
	title: string
}

const FlatRollingLabPage = () => {
	const { data } = useTranslationData<LaboratoryData>('flat-rolling')
	
	return (
		<Box sx={{ pl: { xxs: '0px', sm: '50px' }, pb: '30px' }}>
			<DocumentTitleSearch 
				title={data?.title || ""} 
				search={false} 
			/>
		</Box>
	)
}

export default FlatRollingLabPage 