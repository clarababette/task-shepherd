import { useContext, Suspense } from 'react';
import ProjectContext from '../context/ProjectContext';
import Project from './Project'
import ProjectNav from './ProjectNav';
import { CircularProgress, Box } from '@mui/material';

const Tasks = React.lazy(() => import('./Tasks'));

 const loading = <Box sx={{width:'100vw', height: '100vh', backgroundColor: 'blue'}}><CircularProgress size={100} sx={{color: 'white', margin:'calc(50vh - 50px) calc(50vw - 50px)'}}></CircularProgress> </Box>

function MentorPage() {
  const { projectID } = useContext(ProjectContext)
  return (
    <>
      <ProjectNav></ProjectNav>
    <div
      className="mentor-container"
      sx={{
        margin: '1rem', padding: '1rem', overflow: 'hidden',
      }}
      >
        <Suspense fallback={loading}>

        </Suspense>
      {!projectID && <Tasks />}
      {projectID && <Project></Project>}
      

        </div>
       </>
  );
}

export default MentorPage;
