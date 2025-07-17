import { Box, Typography, Divider } from '@mui/material'
import { PersonCard } from '@/components'
import { PersonCardInterface } from '../../PersonCard/PersonCardInterface'
import { PersonCardAdaptation } from '../../PersonCard/styles'

interface LaboratorySectionProps {
  laboratoryStaff: PersonCardInterface[]
}

const LaboratorySection = ({ laboratoryStaff }: LaboratorySectionProps) => {
  if (!laboratoryStaff || laboratoryStaff.length === 0) {
    return null
  }

  return (
    <>
      <Divider
        sx={{
          mb: 3,
          borderColor: '#e0e0e0',
        }}
      />

      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.4,
            color: '#333333',
            textAlign: 'center',
          }}
        >
          ЛАБОРАТОРІЯ ТЕПЛОТЕХНІКИ ТА ЕНЕРГОЗБЕРІГАЮЧИХ ТЕХНОЛОГІЙ ДОМЕННОЇ ПЛАВКИ
        </Typography>
      </Box>
      
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: 1.4,
            color: '#333333',
            textAlign: 'center',
          }}
        >
          Наукові співробітники лабораторії:
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1817px', mb: '30px' }}>
        <Box sx={PersonCardAdaptation}>
          {laboratoryStaff.map((card, index) => (
            <PersonCard
              key={card.id || index}
              id={card.id}
              photo={card.photo}
              position={card.position}
              name={card.name}
              description={card.description}
              contacts={card.contacts}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}

export default LaboratorySection 