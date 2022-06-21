import { useContext, useState } from "react";
import ProjectContext from "../context/ProjectContext";
import FocusTaskContext from '../context/FocusTaskContext';
import AppContext from '../context/AppContext'
import { DataGrid } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, DialogContent, Dialog, Accordion, AccordionSummary, AccordionDetails, Button } from "@mui/material";
import EditTask from "./EditTask";
import ReviewCard from "./ReviewCard";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TaskInfo from "./TaskInfo";

export default function Project() {
  const { project, coders, statusSummary } = useContext(ProjectContext);
  const [reviewCard, setReviewCard] = useState(false);
  const { setFocusTaskID, setSent } = useContext(FocusTaskContext);
  const { getStatusColor, colors } = useContext(AppContext)
  const [open, setOpen] = useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenReview = (id) => {
    setFocusTaskID(id);
    setReviewCard(true);
  };

  const handleCloseReview = () => {
    setReviewCard(false);
    setSent(false)
    setFocusTaskID();

  };

  
  if (!project || !coders) return null;

  const handleCellClick = (param, event) => {
  
  if (param.value && project.required_urls.includes(param.field)) {
    event.stopPropagation();
    window.open(param.value)
  }
};

  const handleRowClick = (param, event) => {
  setFocusTaskID(param.id);
  setReviewCard(true);
};

  const statuses = statusSummary()
  
const subLinks = !project.required_urls ? null : project.required_urls.map(link => {return { field: link, headerName: link,renderCell: (cellValues) => { return (
    <>
        {cellValues.row[link] && (<CheckIcon></CheckIcon>)}
  </>) } }})

  
  const rows = coders.map(coder => {

    const links = {};
    if (project.required_urls) {
      project.required_urls.forEach(link => links[link] = '')
    }
    if(coder.urls && project.required_urls) {
    coder.urls.forEach(url => {if(project.required_urls.includes(url.description)){links[url.description] = url.address}})}
    return { id: coder.id, name: `${coder.first_name} ${coder.last_name}`, 'status': coder.status, ...links, activity:`${coder.status} ${coder.status_timestamp}`, dateAssigned: coder.date_assigned }
  });

const fixedColumns1 = [
  { field: 'name', headerName: 'Name', width:200 },
  { field: 'status', headerName: 'Status', width: 200, cellClassName: (params) => (params.value.replace(' ','')) }
]
const fixedColumns2 = [
  { field: 'activity', headerName: 'Latest Activity', width: 250 }, { field:'dateAssigned', headerName: 'Date Assigned', width:150}
]

const columns = subLinks !== null ?  [...fixedColumns1, ...subLinks, ...fixedColumns2] : [...fixedColumns1, ...fixedColumns2];
  
  return (
    <div style={{ height: '500px', margin: '1rem 1rem 1rem 240px'}}>
            <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{flexDirection:'row-reverse'}}
        >
          <div style={{width:'100%', margin: '0rem 1rem'}}>
          <Typography variant="h6">{project.name}</Typography>
      <div style={{ width: '100%', height: '0.5rem', display: 'grid', gridTemplateColumns: `repeat(${statuses.total}, 1fr)` }}>
        { ['Assigned','Feedback requested','Feedback updated','Completed'].map((status, index) => {if (statuses[status]) { return (<div key={index} style={{gridColumn:`span ${statuses[status]}`, backgroundColor: getStatusColor(status)}}></div>)}})}
        </div>
      </div>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0'}}>
          <TaskInfo />
          <Button variant='contained' sx={{ gridColumn: 'span 4', width: 'fit-content', margin: '1em' }} onClick={handleClickOpen}>Edit task</Button>
        </AccordionDetails>
      </Accordion>
      
      <DataGrid columns={columns} onCellClick={handleCellClick} onRowDoubleClick={handleRowClick} rows={rows}  getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }  sx={{ margin: '1rem 4rem', '& .Assigned': {
          backgroundColor: getStatusColor('Assigned'),
        }, '& .Feedbackrequested': {
          backgroundColor: getStatusColor('Feedback requested'),
        },'& .Feedbackupdated': {
          backgroundColor: getStatusColor('Feedback updated'),
        },'& .Completed': {
          backgroundColor: getStatusColor('Completed'),
        },
        '& .odd': { backgroundColor: colors.blue.light }
        }} />
    <Dialog open={open} onClose={handleClose}>
        <DialogContent><EditTask close={handleClose} /></DialogContent>
      </Dialog>
      <Dialog  className='review-card' open={reviewCard} onClose={handleCloseReview}>
        <DialogContent ><ReviewCard close={handleCloseReview} /></DialogContent>
      </Dialog></div>
    
  )
}