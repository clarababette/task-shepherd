import {createContext, useState, useEffect} from 'react';
import AxiosInstance from '../AxiosInstance';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const axios = AxiosInstance();
  const [user, setUser] = useState();
  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);

   useEffect( async () => {
    await axios.get('/user').then((res) => {
      console.log(res.data)
    });
  },[])
  
  return (
    <UserContext.Provider
      value={{
        setEmail, user, loading, setLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;