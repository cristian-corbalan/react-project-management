import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSideBar from './components/ProjectsSideBar.jsx';
import SelectedProject from './components/SelectedProject.jsx';


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

  function onSelectProject(id) {
    setProjectState(prevState => ({
      ...prevState,
      selectedProjectId: id
    }))
  }

  let currentSection;

  if (projectState.selectedProjectId === null) {
    currentSection = <NewProject onCreateProject={handleCreateProject} onHideForm={handleHideForm} />
  } else if (projectState.selectedProjectId === undefined) {
    currentSection = <NoProjectSelected onShowForm={handleShowForm} />
  } else {
    currentSection =
      <SelectedProject project={projectState.projects.find(project => project.id === projectState.selectedProjectId)} />
  }

  console.log(projectState)

  return (
    <main className="h-screen pt-8 flex gap-8">
      <ProjectsSideBar onShowForm={handleShowForm} onSelectProject={onSelectProject} projects={projectState.projects} />
      {currentSection}
    </main>
  );
}

export default App;
