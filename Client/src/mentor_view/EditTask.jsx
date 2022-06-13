import { useState, useEffect, useContext } from 'react';
import MentorContext from '../context/MentorContext';
import AxiosInstance from '../AxiosInstance';
import ProjectContext from '../context/ProjectContext';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControlLabel, Button, Typography, FormGroup } from '@mui/material';

function EditTask({ taskID, close }) {
  const { setUpdate } = useContext(MentorContext);
  const { project } = useContext(ProjectContext);
  const { name: nme, required_urls, info_urls, description: descript } = project
  const subLinks = ['GitHub Repo', 'GitHub Pages', 'Heroku', 'Travis CI'];
  const standardURLs = [{url:'GitHub Repo', selected:false},{url:'GitHub Pages', selected:false},{url:'Heroku', selected:false},{url:'Travis CI', selected:false}]
  const [name, setName] = useState(nme);
  const [description, setDescription] = useState(descript);
  const [infoURLs, setInfoURLs] = useState(info_urls);
  const [coderURLs, setCoderURLs] = useState(standardURLs);
  const [otherURL, setOtherURL] = useState('');
  const axios = AxiosInstance();
  const [coders, setCoders] = useState();

useEffect(async () => {
  await axios.get(`/edit-task/${taskID}`).then((res) => {

    setCoders([...res.data.coders]);
  })}, []);

  if (!coders) return null;
  

  required_urls.forEach(link => {
    if (!subLinks.includes(link)) {
      subLinks.push(link);
    }
  });

      setCoderURLs(subLinks.map(link => { if (required_urls.includes(link)) { return { url: link, selected: true } } return { url: link, selected: false } }))

  


  
  const handleSubmitEditTask = async (e) => {
    e.preventDefault();
    if (name != '') {
      await axios
        .put(`/edit-task/${taskID}`, {
          details
        })
        .then(async (res) => {
          const assign = coders.filter(coder => !coder.assigned && coder.assign)
          await axios
            .post(`/assign/task/${taskID}`, { coders: assign })
            .then(() => {
              setUpdate(true)
              close()
            });
        });
    }
  };


  return (
    <div className="edit-task">
      <DialogTitle>Edit Task</DialogTitle>
      <Box  component="form" onSubmit={handleSubmitEditTask}>
        <div className="details">
            <TextField
            required
            sx={{ gridColumn: 'span 2' }}
          size="small"
          label="Task name"
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
           <TextField
          size="small" 
            label="Description"
            sx={{ gridColumn: 'span 2' }}
          defaultValue={description}
          multiline
          minRows={4}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          />
           <Typography>Additional Resources</Typography>
        {info_urls.map((url, index) => (
          <Box key={index} sx={{ gridColumn: '1 / 2', width: '30em' }}>
          <TextField
            size="small"      
            label="Description"
              type="text"
              defaultValue={url['description']}
            onChange={(e) => {
              url['description'] = e.target.value;
            }}
            />
          <TextField
            size="small"
            label="URL"
              type="text"
              defaultValue={url['address']}
            onChange={(e) => {
              url['address'] = e.target.value;
            }}
            />
            </Box>
        ))}
        <IconButton
          className="add-url"
            onClick={() => {
            info_urls = [...details.info_urls, {}]
          }}
        >
          <AddCircleIcon />
        </IconButton>
        {required_urls.map((url, index) => (
          <TextField
            size="small"
            sx={{ gridColumn: '1 / 2' }}
            label="URL required from coder"
            key={index}
            type="text"
            defaultValue={url}
            onChange={(e) => {
              required_urls[index] = e.target.value;
            }}
          />
        ))}
        <IconButton
          className="add-url"
            onClick={() => {
            required_urls = [...details.required_urls,'']
          }}
        >
          <AddCircleIcon />
          </IconButton>
          <Box sx={{gridColumn: 'span 2'}}>
          <Typography>Coder Submission Links</Typography>
          <FormGroup>
            
          {coderURLs.map((link, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox onChange={(e) => {coderURLs[index].selected = e.target.checked}}/>}
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
        </div>
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
        <Button variant="contained" type="submit" sx={{ width: 'fit-content'}}>Save</Button>
      </Box>
    </div>
  );
}

export default EditTask;
