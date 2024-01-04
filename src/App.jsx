import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSideBar from './components/ProjectsSideBar.jsx';


function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  function handleShowForm() {
    setShowCreateForm(true);
  }

  function handleHideForm() {
    setShowCreateForm(false);
  }

  return (
    <main className="h-screen pt-8 flex gap-8">
      <ProjectsSideBar onShowForm={handleShowForm} />

      {!showCreateForm && <NoProjectSelected onShowForm={handleShowForm} />}
      {showCreateForm && <NewProject onHideForm={handleHideForm} />}
    </main>
  );
}

export default App;
