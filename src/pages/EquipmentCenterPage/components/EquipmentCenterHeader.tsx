import { Box, Button } from '@mui/material'
import { DocumentTitleSearch } from '@/components'
import { EquipmentCenterHeaderProps } from '../types'

const EquipmentCenterHeader = ({ 
  title, 
  viewRegulation, 
  onViewRegulation 
}: EquipmentCenterHeaderProps) => {
  return (
    <>
      <DocumentTitleSearch title={title} search={false} />

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Box
          component="img"
          src="/blackmetal/SREC_img1.png"
          alt={title}
          sx={{
            maxWidth: '100%',
            height: { xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: '800px' },
            objectFit: 'contain'
          }}
        />
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button
          variant="contained"
          onClick={onViewRegulation}
          sx={{
            backgroundColor: '#2D7A84',
            color: '#fff',
            borderRadius: 0,
            padding: '12px 32px',
            fontSize: '18px',
            textTransform: 'none',
            fontWeight: 500,
            minWidth: '250px',
            '&:hover': { backgroundColor: '#1f5a60' },
          }}
        >
          {viewRegulation}
        </Button>
      </Box>
    </>
  )
}

export default EquipmentCenterHeader 