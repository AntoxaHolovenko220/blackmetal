import { Box, Typography } from '@mui/material'
import { DocumentTitleSearch, CustomTable } from '@/components'
import { useTranslationData } from '@/hooks/useTranslationData'

interface TechnicalCommitteeData {
  title: string
  subtitle: string
  description: string
  creationInfo: string
  functions: string
  scopeTitle: string
  table: {
    headers: {
      scope: string
      codes: string
    }
    data: {
      scopeDescription: string
      standardizationCodes: string
    }
  }
  contact: {
    title: string
    name: string
    position: string
    phone: string
    email: string
  }
}

const TechnicalCommittee = () => {
  const { data } = useTranslationData<TechnicalCommitteeData>('technical-committee')

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
    color: '#2D7A84',
    mb: '16px'
  }

  const contactStyle = {
    fontSize: '18px',
    color: '#333',
    lineHeight: 1.5,
    mt: '30px'
  }

  const tableHeaders = [
    data.table.headers.scope,
    data.table.headers.codes
  ]

  const tableRows = [
    {
      cells: [
        data.table.data.scopeDescription,
        data.table.data.standardizationCodes
      ]
    }
  ]

  return (
    <Box sx={{ pb: '30px', pl: { xs: '20px', sm: '50px' } }}>
      <DocumentTitleSearch title={data.title} search={false} />
      
      <Box>
        <Typography sx={titleStyle}>
          {data.subtitle}
        </Typography>
        
        <Typography sx={titleStyle}>
          {data.description}
        </Typography>

        <Typography sx={textStyle}>
          {data.creationInfo}
        </Typography>

        <Typography sx={textStyle}>
          {data.functions}
        </Typography>

        <Typography sx={textStyle}>
          {data.scopeTitle}
        </Typography>

        <CustomTable headers={tableHeaders} rows={tableRows} />

        <Box sx={contactStyle}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, mb: '5px' }}>
            {data.contact.title}
          </Typography>
          <Typography sx={{ fontSize: '18px', mb: '5px' }}>
            {data.contact.name}
          </Typography>
          <Typography sx={{ fontSize: '18px', mb: '5px' }}>
            {data.contact.position}
          </Typography>
          <Typography sx={{ fontSize: '18px', mb: '5px' }}>
            {data.contact.phone}
          </Typography>
          <Typography sx={{ fontSize: '18px' }}>
            {data.contact.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default TechnicalCommittee
