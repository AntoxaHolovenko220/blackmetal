import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'

interface LaboratoryData {
	title: string
}

const HeatTechLabPage = () => {
	const { data } = useTranslationData<LaboratoryData>('heat-tech')
	
	return (
		<Box sx={{ pl: { xxs: '0px', sm: '50px' }, pb: '30px' }}>
			<DocumentTitleSearch 
				title={data?.title || ""} 
				search={false} 
			/>
		</Box>
	)
}

export default HeatTechLabPage 