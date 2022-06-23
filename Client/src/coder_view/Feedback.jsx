import {Box, Card, Typography} from '@mui/material'
import FeedbackMsg from "./FeedbackMsg";
import { useContext } from 'react';
import FocusTaskContext from '../context/FocusTaskContext';

function Feedback() {
  const { comments: feedback, viewAllFeedback: view, setViewAllFeedback: setView, infoHeight, latestFBHeight } = useContext(FocusTaskContext);

  return (
    <Card sx={{ boxSizing:'border-box' , display: view ? 'grid' : 'none', gridTemplateRows: 'auto 1fr' , marginTop: '0.5rem', padding: '1rem', height: 'auto', maxHeight: `calc(${(infoHeight + latestFBHeight)}px + 1.5rem)`, gridRow: 'span 2'}}>
      <Typography variant='h6'>Feedback History</Typography>
      <Box sx={{display:'grid', gridTemplateColumns: '3rem 1fr 3rem', rowGap:'1rem', padding: '0.5rem', height: 'auto', overflow: 'scroll', alignContent:'start'  }}>
        {feedback.map((thisFeedback, index) => <FeedbackMsg key={index} feedback={thisFeedback} />)}
        </Box>
      </Card>
  )
}

export default Feedback