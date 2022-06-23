import React, { useContext, Suspense } from 'react';
import ProjectContext from '../context/ProjectContext';
import Project from './Project'
import ProjectNav from './ProjectNav';
import ScreenLoading from '../ScreenLoading';

const Tasks = React.lazy(() => import('./Tasks'));

function MentorPage() {
  const { projectID } = useContext(ProjectContext)
  return (
    <>
      {projectID && <ProjectNav></ProjectNav>}
    <div
      className="mentor-container"
      sx={{
        margin: '1rem', padding: '1rem', overflow: 'hidden',
      }}
      >
        <Suspense fallback={<ScreenLoading></ScreenLoading>}>
      {!projectID && <Tasks />}
        </Suspense>
      {projectID && <Project></Project>}
      

        </div>
       </>
  );
}

export default MentorPage;
