import {createContext, useState, useEffect} from 'react';
import AxiosInstance from '../AxiosInstance';

const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
  const axios = AxiosInstance();
  const [projectID, setProjectID] = useState();
  const [project, setProject] = useState();
  const [coders, setCoders] = useState();
  const [updateProject, setUpdateProject] = useState(false)

  useEffect(async () => {
    if(projectID || updateProject){
      await axios.get(`project/${projectID}`).then((res) => {
        setProject({...res.data.details})
        setCoders([...res.data.coders])
        setUpdateProject(false)
      });

}
  }, [projectID, updateProject]);

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
        projectID, setProjectID, project, coders, statusSummary, setUpdateProject
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;