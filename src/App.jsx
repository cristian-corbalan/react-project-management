import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSideBar from './components/ProjectsSideBar.jsx';


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleShowForm() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    });
  }

  function handleHideForm() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    });
  }

  function handleCreateProject(newProject) {
    setProjectState(prevState => {
      const projectId = Math.random();
      newProject.id = projectId;

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let currentSection;

  if (projectState.selectedProjectId === null) {
    currentSection = <NewProject onCreateProject={handleCreateProject} onHideForm={handleHideForm} />
  } else if (projectState.selectedProjectId === undefined) {
    currentSection = <NoProjectSelected onShowForm={handleShowForm} />
  }

  console.log(projectState)

  return (
    <main className="h-screen pt-8 flex gap-8">
      <ProjectsSideBar onShowForm={handleShowForm} projects={projectState.projects} />

      {currentSection}
    </main>
  );
}

export default App;
