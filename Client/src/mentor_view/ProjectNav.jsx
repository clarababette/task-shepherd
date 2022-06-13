import { useContext } from 'react';
import MentorContext from '../context/MentorContext';
import ProjectContext from '../context/ProjectContext';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListSubheader from '@mui/material/ListSubheader';

const drawerWidth = 240;


export default function ProjectNav() {

const { tasks, open, handleClickOpen, handleClose, newTask } = useContext(MentorContext);
  const { projectID, setProjectID } = useContext(ProjectContext)
  
  if (!tasks) return null;
  const active = tasks.filter(task => task['Feedback requested'] || task['Assigned'] || task['Feedback updated']);
  const inactive = tasks.filter(task => !task['Feedback requested'] && !task['Assigned'] && !task['Feedback updated']);

  return (<Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
      },
        }}
        variant="permanent"
        anchor="left"
  >
    <Toolbar/>
        <Divider />
    <List dense>
      <ListSubheader>Active Projects</ListSubheader>
      {active.map(task => (
        <ListItem key={task.id} disablePadding>
              <ListItemButton selected={projectID == task.id} onClick={()=> {setProjectID(task.id)}}>
                <ListItemText primary={task.name} />
              </ListItemButton>
            </ListItem>
))}
        </List>
    <List dense>
       <ListSubheader>Inactive Projects</ListSubheader>
          {inactive.map(task => (
        <ListItem key={task.id} disablePadding>
              <ListItemButton selected={projectID == task.id} onClick={()=> {setProjectID(task.id)}}>
                <ListItemText primary={task.name} />
              </ListItemButton>
            </ListItem>
))}
        </List>
      </Drawer>)
}