
import React, { useState, useContext, Suspense, useEffect } from 'react';
import AppContext from './context/AppContext';
import UserContext from './context/UserContext';
import './styles/mui-styles.scss';
import Header from './Header';
import { Box } from '@mui/material';
import ScreenLoading from './ScreenLoading';
import AxiosInstance from './AxiosInstance';

const CoderPage = React.lazy(() => import('./coder_view/CoderPage'));
const MentorPage = React.lazy(() => import('./mentor_view/MentorPage'));

function App() {
  const axios = AxiosInstance();
  const { colors } = useContext(AppContext) 
  const { setEmail, user, setUser } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState();

  useEffect(async () => {  
    await axios.get(`/login/auth`).then((res) => {
        console.log(res.data)
        setUser(res.data)
        setLoading(false)
      });
  },);

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
