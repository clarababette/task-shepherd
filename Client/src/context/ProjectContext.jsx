import {createContext, useState, useEffect} from 'react';
import AxiosInstance from '../AxiosInstance';

const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const axios = AxiosInstance();
  const [projectID, setProjectID] = useState();
  const [project, setProject] = useState();
  const [coders, setCoders] = useState();

  useEffect(async () => {
    if(projectID){
      await axios.get(`project/${projectID}`).then((res) => {
        setProject({...res.data.details})
        setCoders([...res.data.coders])
      });
}
  }, [projectID]);

  const statusSummary = () => {
    if(coders) {
    return coders.reduce((statuses, coder) => {
      statuses[coder.status] = statuses[coder.status] ? statuses[coder.status] + 1 : 1;
      statuses.total++
      return statuses
    }, {total: 0})}
  }
  
  return (
    <ProjectContext.Provider
      value={{
        projectID, setProjectID, project, coders, statusSummary
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;