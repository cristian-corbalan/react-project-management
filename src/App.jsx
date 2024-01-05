import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectsSideBar from './components/ProjectsSideBar.jsx';
import SelectedProject from './components/SelectedProject.jsx';


function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [
      {
        id: 1,
        title: 'Project 01',
        description: 'This is a good description',
        dueDate: '2023-01-05',
        tasks: [
          {
            content: 'Task 01',
            id: 1
          },
          {
            content: 'Task 02',
            id: 2
          },
          {
            content: 'Task 03',
            id: 3
          },
        ]
      },
      {
        id: 2,
        title: 'Project 02',
        description: 'This is another good description',
        dueDate: '2023-02-05',
        tasks: [
          {
            content: 'Task 01',
            id: 1
          },
          {
            content: 'Task 02',
            id: 2
          },
          {
            content: 'Task 03',
            id: 3
          },
        ]
      },
      {
        id: 3,
        title: 'Project 03',
        description: 'This is a good description more',
        dueDate: '2023-03-05',
        tasks: []
      }
    ]
  })

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

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

  function onSaveTask(projectId, newTask) {
    console.log('I will save the next task:', newTask, 'In the project with the same ID at', projectId);
    setProjectState(prevState => {
      const projects = structuredClone(prevState.projects);
      projects.find(project => project.id === projectId).tasks.push(newTask);

      return {
        selectedProjectId: prevState.selectedProjectId,
        projects: projects
      }
    })
  }

  function onDeleteProject(id) {
    setProjectState(prevState => {
      const projects = structuredClone(prevState.projects);
      const projectIndex = projects.findIndex(project => project.id === id);
      projects.splice(projectIndex, 1);

      return {
        selectedProjectId: undefined,
        projects: projects
      }
    })
  }

  function onDeleteTask(projectId, taskId){
    setProjectState(prevState => {
      const projects = structuredClone(prevState.projects);
      const projectIndex = projects.findIndex(project => project.id === projectId);
      const TaskIndex = projects[projectIndex].tasks.findIndex(task => task.id === taskId);
      projects[projectIndex].tasks.splice(TaskIndex, 1);

      return {
        ...prevState,
        projects: projects
      }
    })
  }

  let currentSection;

  if (projectState.selectedProjectId === null) {
    currentSection = <NewProject onCreateProject={handleCreateProject} onHideForm={handleHideForm} />
  } else if (projectState.selectedProjectId === undefined) {
    currentSection = <NoProjectSelected onShowForm={handleShowForm} />
  } else {
    currentSection = <SelectedProject project={selectedProject}
                                      onSaveTask={onSaveTask}
                                      onDeleteProject={onDeleteProject}
                                      onDeleteTask={onDeleteTask}
    />
  }

  return (
    <main className="h-screen pt-8 flex gap-8">
      <ProjectsSideBar onShowForm={handleShowForm} onSelectProject={onSelectProject} projects={projectState.projects} />
      {currentSection}
    </main>
  );
}

export default App;
