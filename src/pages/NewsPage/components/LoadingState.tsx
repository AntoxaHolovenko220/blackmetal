import { Box, CircularProgress } from '@mui/material'

const LoadingState = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
      <CircularProgress />
    </Box>
  )
}

export default LoadingState 