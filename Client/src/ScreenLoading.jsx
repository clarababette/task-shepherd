import { CircularProgress, Box } from '@mui/material';

export default function ScreenLoading() {
  return (
    <Box sx={{ width: '100vw', height: '100vh', backgroundColor: 'hsl(212, 66%, 27%)' }}><CircularProgress size={100} sx={{ color: 'hsl(212, 66%, 67%)', margin: 'calc(50vh - 50px) calc(50vw - 50px)' }}></CircularProgress> </Box>
  )
}
