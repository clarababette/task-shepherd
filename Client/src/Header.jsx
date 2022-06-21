import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import AppContext from './context/AppContext';
import Logo from './logo-lght-bgd.svg';
import ProjectContext from './context/ProjectContext'
  
export default function Header({ name, role }) {
  const { colors } = useContext(AppContext);
  const { projectID, setProjectID } = useContext(ProjectContext)


  const goBack = () => {
    if (projectID) {
      setProjectID()
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }} >
       <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: colors.blue.dark }}>
        <Toolbar>
          <img src={Logo} style={{width:'2rem', height:'2rem', marginRight:'1rem', cursor:'pointer'}} onClick={goBack} ></img>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor:'pointer' }} onClick={goBack}>
            Task Shepherd
          </Typography>
          <Typography variant="h6" component="div">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
