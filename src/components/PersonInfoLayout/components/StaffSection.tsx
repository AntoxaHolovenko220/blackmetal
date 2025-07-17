import { Box, Typography } from '@mui/material'
import { PersonCard } from '@/components'
import { PersonCardInterface } from '../../PersonCard/PersonCardInterface'
import { PersonCardAdaptation } from '../../PersonCard/styles'

interface StaffSectionProps {
  staffCards: PersonCardInterface[]
  staffTitle?: string
}

const StaffSection = ({ staffCards, staffTitle }: StaffSectionProps) => {
  if (!staffCards || staffCards.length === 0) {
    return null
  }

  return (
    <>
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
          {staffTitle || 'Department staff:'}
        </Typography>
      </Box>

      <Box sx={{ maxWidth: '1817px', mb: '30px' }}>
        <Box sx={PersonCardAdaptation}>
          {staffCards.map((card, index) => (
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

export default StaffSection 