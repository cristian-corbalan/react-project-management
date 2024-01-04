import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSideBar from './components/ProjectsSideBar.jsx';


function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleShowForm() {
    setShowCreateForm(true);
  }

  function handleHideForm() {
    setShowCreateForm(false);
  }

  function handleCreateProject(newProject) {
    setProjects(oldProjects => {
      const updatedProjects = [
        ...oldProjects.map((project) => ({...project})),
        newProject
      ]

      setProjects(updatedProjects);
    })
  }

  return (
    <main className="h-screen pt-8 flex gap-8">
      <ProjectsSideBar onShowForm={handleShowForm} projects={projects} />

      {!showCreateForm && <NoProjectSelected onShowForm={handleShowForm} />}
      {showCreateForm && <NewProject onCreateProject={handleCreateProject} onHideForm={handleHideForm} />}
    </main>
  );
}

export default App;
