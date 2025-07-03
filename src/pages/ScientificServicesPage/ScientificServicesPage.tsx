import { Box, Typography } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'

interface ScientificServicesData {
  title: string
  mainDescription: string
  services: string[]
  clientsDescription: string
  scientificServicesTitle: string
  scientificServices: string[]
  numberedServices: string[]
}

const ScientificServicesPage = () => {
  const { data } = useTranslationData<ScientificServicesData>('scientific-services')

  if (!data) {
    return null
  }

  const textStyle = {
    fontSize: '18px',
    color: '#333',
    mb: '24px',
    textAlign: 'justify' as const,
    lineHeight: 1.6
  }

  const titleStyle = {
    fontSize: '20px',
    fontWeight: 600,
    color: '#000',
    mb: '16px',
    mt: '32px'
  }

  return (
    <Box
      sx={{
        pb: '30px',
        pl: { xs: '20px', sm: '50px' },
      }}
    >
      <DocumentTitleSearch title={data.title} search={false} />
      
      <Typography sx={textStyle}>
        {data.mainDescription}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {data.services.map((service, index) => (
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
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#333',
                textAlign: 'justify',
                flex: 1
              }}
            >
              {service}
            </Typography>
          </Box>
        ))}
      </Box>

      <Typography sx={textStyle}>
        {data.clientsDescription}
      </Typography>

      <Typography sx={titleStyle}>
        {data.scientificServicesTitle}
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {data.scientificServices.map((service, index) => (
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
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#333',
                textAlign: 'justify',
                flex: 1
              }}
            >
              {service}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
        {data.numberedServices.map((service, index) => (
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
            <Typography
              sx={{
                fontSize: '18px',
                lineHeight: 1.6,
                color: '#333',
                textAlign: 'justify',
                flex: 1
              }}
            >
              {service}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ScientificServicesPage