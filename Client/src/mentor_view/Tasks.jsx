import { useContext } from 'react';
import MentorContext from '../context/MentorContext';
import ProjectContext from '../context/ProjectContext';
import { Typography, Chip, Avatar, Box } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CreateTask from './CreateTask';
import AssignTask from './AssignTask';

export default function Tasks() {
  const { tasks, open, handleClickOpen, handleClose, newTask } = useContext(MentorContext);
  const { setProjectID } = useContext(ProjectContext)
  
  if (!tasks) return null;
  const requests = tasks.filter(task => task['Feedback requested']);
  const active = tasks.filter(task => !task['Feedback requested'] && (task['Assigned'] || task['Feedback updated']));
  const inactive = tasks.filter(task => !task['Feedback requested'] && !task['Assigned'] && !task['Feedback updated']);
  
  return (
    <Box>
      <Typography variant='h6'>All Projects</Typography>
      <Typography sx={{marginTop:'1em', marginLeft:'0.5em'}} variant='subtitle1'>Feedback requests</Typography>
      {requests.map(task => (
        <Chip key={task.id} variant="outlined" sx={{ marginTop: '0.5em', marginLeft: '0.5em' }} avatar={<Avatar>{task['Feedback requested'].length}</Avatar>} label={task.name} onClick={()=> {setProjectID(task.id)}}/>
))}
      <Typography sx={{marginTop:'1em', marginLeft:'0.5em'}} variant='subtitle1'>Active Projects</Typography>
      {active.map(task => (
        <Chip key={task.id} variant="outlined" sx={{marginTop:'0.5em', marginLeft:'0.5em'}} label={task.name} onClick={()=> {setProjectID(task.id)}}/>
))}
      <Typography sx={{marginTop:'1em', marginLeft:'0.5em'}} variant='subtitle1'>Inactive Projects</Typography>
      {inactive.map(task => (
        <Chip key={task.id} variant="outlined" sx={{marginTop:'0.5em', marginLeft:'0.5em'}} label={task.name} onClick={()=> {setProjectID(task.id)}}/>
      ))}
      
      <Fab
        onClick={handleClickOpen}
        sx={{ justifySelf: 'end', marginTop: '-80px', marginRight: '40px' }}
      >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          {!newTask ? <CreateTask/>
            : <AssignTask />}
        </DialogContent>
      </Dialog>
    </Box>
  )
}


