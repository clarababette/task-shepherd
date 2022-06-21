import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context/AppContext';
import { UserProvider } from './context/UserContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { TaskProvider } from './context/MentorContext';
import { ProjectProvider } from './context/ProjectContext';
import { FocusTaskProvider } from './context/FocusTaskContext';

const theme = createTheme({
  palette: {
    primary: {main:'#2973c7'},
  },
  shadows: Array(25).fill("none")
});

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
    <ThemeProvider theme={theme}>
      <UserProvider>
         <TaskProvider> 
    <ProjectProvider>
      <FocusTaskProvider>
      <App />
               </FocusTaskProvider>  
        </ProjectProvider>
      </TaskProvider>
      </UserProvider>
      </ThemeProvider>
              </AppProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
