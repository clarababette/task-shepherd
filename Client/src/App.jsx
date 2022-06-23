
import React, { useState, useContext, Suspense } from 'react';
import AppContext from './context/AppContext';
import UserContext from './context/UserContext';
import './styles/mui-styles.scss';
import Header from './Header';
import { Box } from '@mui/material';
import ScreenLoading from './ScreenLoading';

const CoderPage = React.lazy(() => import('./coder_view/CoderPage'));
const MentorPage = React.lazy(() => import('./mentor_view/MentorPage'));

function App() {
  const { colors } = useContext(AppContext) 
  const { setEmail, user } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState();

  if (!user) {
    window.location.replace('/login/github');
  } else if (user.role == 'mentor') {
    return (
    <Suspense fallback={<ScreenLoading></ScreenLoading> }>
    <Box className="app"> 
      <Header name={`${user.first_name} ${user.last_name}`} role={ user.role}/>
      <MentorPage />
      </Box>
    </Suspense>)
  } else if (user.role == 'coder') {
    return(
    <Suspense fallback={<ScreenLoading></ScreenLoading>}>
    <Box className="app" sx={{height:'100vh', backgroundColor: colors.grey.light}}> 
      <Header name={`${user.first_name} ${user.last_name}`} role={ user.role}/>
      <CoderPage />
      </Box>
    </Suspense>)
  } else {
 		return <div> Invalid User </div>;
}

  }


export default App;
