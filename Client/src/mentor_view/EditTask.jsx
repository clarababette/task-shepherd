import { useState, useContext, useEffect } from 'react';
import AxiosInstance from '../AxiosInstance';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ProjectContext from '../context/ProjectContext';
import MentorContext from '../context/MentorContext';
import {
  Typography,
  Box,
  IconButton,
  DialogTitle,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

function EditTask({ close }) {
  const axios = AxiosInstance();
  const { project, setUpdateProject } = useContext(ProjectContext)
  const subLinks = ['GitHub Repo', 'GitHub Pages', 'Heroku', 'Travis CI'];
   project.required_urls.forEach(link => {
    if (!subLinks.includes(link)) {
      subLinks.push(link);
    }
  });
  const [name, setName] = useState(project.name);
  const [description, setDescription] = useState(project.description);
  const [infoURLs, setInfoURLs] = useState(project.info_urls);
  const [coderURLs, setCoderURLs] = useState(subLinks.map(link => { if (project.required_urls.includes(link)) { return { url: link, selected: true } } return { url: link, selected: false } }));
  const [otherURL, setOtherURL] = useState('');
  const [coders, setCoders] = useState();
  const { setUpdate } = useContext(MentorContext);

  useEffect(async () => {
  await axios.get(`/edit-task/${project.id}`).then((res) => {
    setCoders([...res.data.coders]);
  })}, []);

  if (!coders) return null;


  const handleSubmitEditTask = async (e) => { 
    e.preventDefault();
    if (name != '') {
      await axios
        .put(`/edit-task/${project.id}`, {
          name, description, required_urls: coderURLs.reduce((urls,url) => {if(url.selected == true){urls = [...urls, url.url]} return urls}, []), info_urls: infoURLs,
        })
        .then(async (res) => {
          console.log('edited')
          const assign = coders.filter(coder => !coder.assigned && coder.assign)
          await axios
            .post(`/assign/task/${project.id}`, { coders: assign })
            .then(() => {
              setUpdate(true);
              setUpdateProject(true);
              close()
            });
        });
    }
  };


  return (
  <div className='create-task'>
    <DialogTitle>Create Task</DialogTitle>
    <Box component='form' className='new-task' onSubmit={handleSubmitEditTask}>
      <TextField
        required
        size='small'
        sx={{gridColumn: 'span 2'}}
        label='Task name'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <TextField
        size='small'
        sx={{gridColumn: 'span 2'}}
        label='Description'
        value={description}
        multiline
        minRows={4}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <Box sx={{gridColumn: 'span 2'}}>
        <Typography>Additional Resources</Typography>
        {infoURLs.map((url, index) => (
          <Box key={index} sx={{gridColumn: '1 / 2', width: '30em'}}>
            <TextField
              size='small'
              label='Description'
              type='text'
              onChange={(e) => {
                const urls = [...infoURLs];
                urls[index]['description'] = e.target.value;
                setInfoURLs(urls);
              }}
            />
            <TextField
              size='small'
              label='URL'
              type='text'
              onChange={(e) => {
                const urls = [...infoURLs];
                urls[index]['address'] = e.target.value;
                setInfoURLs(urls);
              }}
            />
          </Box>
        ))}
        <IconButton
          className='add-url'
          onClick={() => {
            setInfoURLs([...infoURLs, {}]);
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </Box>
      <Box sx={{gridColumn: 'span 2'}}>
        <Typography>Coder Submission Links</Typography>
        <FormGroup>
          
        {coderURLs.map((link, index) => (
          <FormControlLabel
            key={index}
            control={<Checkbox defaultChecked={link.selected} onChange={(e) => {coderURLs[index].selected = e.target.checked}}/>}
            label={link.url}
          />
                    ))}
        </FormGroup>
          <TextField
            size='small'
            sx={{gridColumn: '1 / 2'}}
            label='other'
            type='text'
            onChange={(e) => {
              setOtherURL(e.target.value);
            }}
          />
        <IconButton
          className='add-url'
          onClick={() => {
            setCoderURLs([...coderURLs, { url: otherURL, selected: false }]);
            setOtherURL('');
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </Box>
      
    
      <div>
        <Typography sx={{ marginTop: '1em' }} >Assign to:</Typography>
        {coders.map((coder) => (
        <div key={coder.id}>
          {coder.assigned && (
            <FormControlLabel
              control={(
                <Checkbox checked readOnly />)}
              label={coder.name}
            />
          )}
          {!coder.assigned && (
            <FormControlLabel
              control={(
                <Checkbox
                  value={coder.id}
                    onChange={(e) => {
                      coder.assign = e.target.checked;
                  }}
                />
)}
              label={coder.name}
            />

          )}
        </div>
      ))}
      </div>
      <div>
    <Button
        variant='contained'
        type='submit'
        sx={{
          gridColumn: 'span 2',
          width: 'fit-content',
          justifySelf: 'center',
        }}
      >
        Save Task
      </Button>
  </div>
    </Box>
    </div>
  );
}

export default EditTask;
