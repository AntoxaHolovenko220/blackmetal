import { Box, Typography, Card, CardContent } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'
import TargetIcon from '@mui/icons-material/GpsFixed'

interface StrategyData {
  title: string
  pageTitle: string
  mainText: string
  strategicDirectionsTitle: string
  strategicDirections: string[]
}

const InstituteStrategyPage = () => {
  const { data } = useTranslationData<StrategyData>('strategy')

  if (!data) {
    return null
  }

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' }, pr: { xs: '20px', sm: '50px' } }}>
      <DocumentTitleSearch title={data.title} search={false} />

      <Typography
        sx={{
          fontSize: '1.2rem',
          lineHeight: 1.7,
          color: '#333',
          mb: '30px',
          // textAlign: 'justify'
        }}
      >
        {data.mainText}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <TargetIcon sx={{ color: '#2D7A84', fontSize: '1.8rem' }} />
        <Typography
          variant="h5"
          sx={{
            fontWeight: 600,
            color: '#2D7A84',
          }}
        >
          {data.strategicDirectionsTitle}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {data.strategicDirections.map((direction, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              borderRadius: 1,
              backgroundColor: 'rgba(45, 122, 132, 0.02)',
              border: '1px solid rgba(45, 122, 132, 0.1)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(45, 122, 132, 0.05)',
                borderColor: 'rgba(45, 122, 132, 0.2)',
                transform: 'translateX(4px)'
              }
            }}
          >
            <Box
              sx={{
                minWidth: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: '#2D7A84',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              {index + 1}
            </Box>
            <Typography
              sx={{
                fontSize: '1.2rem',
                lineHeight: 1.6,
                color: '#333',
                textAlign: 'justify',
                flex: 1
              }}
            >
              {direction}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default InstituteStrategyPage