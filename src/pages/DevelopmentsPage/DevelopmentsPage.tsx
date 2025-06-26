import { Box } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { PresentationPlayer } from '../../components/PresentationPlayer'
import { useTranslationData } from '@/hooks/useTranslationData'

interface DevelopmentsData {
  title: string
}

interface NewsData {
  newsTitle: string
}

const DevelopmentsPage = () => {
  const { data } = useTranslationData<DevelopmentsData>('developments')
  const { data: newsData } = useTranslationData<NewsData>('news')

  if (!data) {
    return null
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' } }}>
      <DocumentTitleSearch title={`${data.title}`} search={false} />
      <PresentationPlayer />
    </Box>
  )
}

export default DevelopmentsPage