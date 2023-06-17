import { Box, CircularProgress, Typography } from "@mui/material"

export const FullScreenLoading = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='calc(100vh - 200px)'
      margin='0 auto'
    >
      <Typography variant='h2' fontWeight={200} sx={{ mb: 3, fontSize: '2.4rem' }}>Cargando...</Typography>
      <CircularProgress thickness={2} />
    </Box>
  )
}
