import {Typography, Box, IconButton, Button, Card} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import URL from './URL';
import {useState, useContext} from 'react';
import AxiosInstance from '../AxiosInstance';
import CancelIcon from '@mui/icons-material/Cancel';
import FocusTaskContext from '../context/FocusTaskContext';
import AppContext from '../context/AppContext';
import GitHub from '../octocat.svg'
import { BsGithub } from 'react-icons/bs';
import { DiHeroku } from 'react-icons/di';
import { SiTravisci } from 'react-icons/si';
import { HiLink } from 'react-icons/hi';

function URLs() {
  const axios = AxiosInstance();
  const { focusTask, setUpdate, urlEdit: edit, setUrlEdit: setEdit } = useContext(FocusTaskContext);
  const { colors, getStatusColor, btn } = useContext(AppContext);
  const [urls, setURLs] = useState(focusTask.urls.map((url) => {return {...url}}));

  const handleEditURL = async () => {
    if (urls) {
      await axios.post(`/task/${focusTask.id}/url_update`, { urls }).then((res) => {
        setUpdate(true);
        setEdit(false);
      });
    }
  };

  const handleURLChange = (address, description) => {
   
    setURLs(
      urls.map((url) => {
        const newUrl = {...url}
        if (newUrl['description'] == description) {
          newUrl['address'] = address;
        } return newUrl
      }),
    );
  };



  const icon = (link) => {
    const style = {
      margin: '0.5rem'
    };
    const size = 30
    switch (link) {
      case 'GitHub Pages':
      case 'GitHub Repo':
        return <BsGithub size={size} style={style} />;
      case 'Heroku':
        return <DiHeroku size={size} style={style} />;
      case 'Travis CI':
        return <SiTravisci size={size} style={style} />;
      default:
        return <HiLink size={size} style={style} />;
    }
  }

  if(!focusTask) return null

  return (
    <Card sx={{padding:'1rem', display:'flex', flexDirection:'column', rowGap:'1rem', minWidth: '15rem', overflow:'scroll', justifyContent: edit ? 'space-between' : 'flex-start', marginTop:'0.5rem'}}>
      
      <Typography variant='h6'>
        Your Links
     
        {!edit && (
          <IconButton sx={{color: getStatusColor(focusTask.status), marginLeft:'1rem'}} size='small' onClick={() => setEdit(true)}>
            <EditIcon />
          </IconButton>
        )}
        {edit && (
          <IconButton
            
            sx={{color: colors.blue.light, marginLeft:'1rem'}}
            size='small'
            onClick={() => {
              setEdit(false);
            }}
          >
            <CancelIcon />
          </IconButton>
        )}
      </Typography>
      
      {!edit &&
        (<div style={{display:'flex', flexWrap:'wrap', columnGap:'0.5rem', rowGap:'0.5rem'}}>

        {focusTask.urls.map((url, index) => (
          <Button
            variant='contained'
            disabled={url.address ? false : true}
            size='small'
            sx={{backgroundColor: 'hsl(149, 81%, 41%)', flexDirection:'column', width:'min-content'}}
            key={index}
            onClick={() => {
              window.open(url.address);
            }}
            >
            {icon(url.description)}
            <Typography variant='overline' sx={{lineHeight:'1.5'}}>
            {url.description}
            </Typography>
          </Button>))}
            </div>
          
        )}

      {edit &&
        focusTask.urls.map((url) => (
          <URL
            update={handleURLChange}
            url={url}
            key={url.description}
          ></URL>
        ))}
      {edit && <Button variant={btn.variant} sx={{ width: btn.width }} onClick={handleEditURL}>Save</Button>}
    </Card>
  );
}

export default URLs;