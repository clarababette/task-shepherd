
import React, { useState, useContext, Suspense } from 'react';
import AppContext from './context/AppContext';
import UserContext from './context/UserContext';
import './styles/mui-styles.scss';
import Header from './Header';
import { CircularProgress, Box } from '@mui/material';

const CoderPage = React.lazy(() => import('./coder_view/CoderPage'));
const MentorPage = React.lazy(() => import('./mentor_view/MentorPage'));

function App() {
  const { colors } = useContext(AppContext) 
  const { setEmail, user } = useContext(UserContext);
  const [emailInput, setEmailInput] = useState();

  const loading = <Box sx={{width:'100vw', height: '100vh', backgroundColor: 'blue'}}><CircularProgress size={100} sx={{color: 'white', margin:'calc(50vh - 50px) calc(50vw - 50px)'}}></CircularProgress> </Box>

  if (!user) {
    return (<form onSubmit={(e) => {
          e.preventDefault();
          setEmail(emailInput);
      }}>
        <h2>Enter email</h2>
        <input type='text' onChange={(e) => { setEmailInput(e.target.value) }} />
        <input type='submit'></input>
      </form>)
  } else if (user.role == 'mentor') {
    return (
    <Suspense fallback={loading}>
    <Box className="app"> 
      <Header name={`${user.first_name} ${user.last_name}`} role={ user.role}/>
      <MentorPage />
      </Box>
    </Suspense>)
  } else if (user.role == 'coder') {
    return(
    <Suspense fallback={loading}>
    <Box className="app"> 
      <Header name={`${user.first_name} ${user.last_name}`} role={ user.role}/>
      <CoderPage />
      </Box>
    </Suspense>)
  } else {
 		return <div> Invalid User </div>;
}

  }


export default App;
