import { Box, Typography } from '@mui/material'
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
    <Box sx={{ pt: '30px', pl: '50px' }}>
      <Typography
        variant='h3'
        fontWeight='bold'
        sx={{
          mb: { xxs: 2, xs: 3, sm: 4, md: 5 },
          fontSize: {
            xxs: '28px',
            sm: '2.2rem',
            md: '2.5rem',
          },
        }}
      >
        {data.title}
      </Typography>

      <PresentationPlayer />
    </Box>
  )
}

export default DevelopmentsPage