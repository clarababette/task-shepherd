import { useContext } from 'react';
import ProjectContext from '../context/ProjectContext';
import Tasks from './Tasks';
import Project from './Project'
import ProjectNav from './ProjectNav';

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
      {!projectID && <Tasks />}
      {projectID && <Project></Project>}
      

        </div>
       </>
  );
}

export default MentorPage;
