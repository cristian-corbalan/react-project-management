import { useRef } from 'react';
import Input from './Input.jsx';
import TaskList from './TaskList.jsx';


export default function SelectedProject({project, onSaveTask, onDeleteProject}) {
  const input = useRef();

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  function handleAddTask() {
    const newTask = {
      content: input.current.value,
      id: Math.random()
    }

    onSaveTask(project.id, newTask);
  }

  return (
    <section className="w-2/3 pt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h2>
          <button className="text-stone-600 hover:text-stone-950"
                  onClick={() => onDeleteProject(project.id)}
          >Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>

      <h3>Tasks</h3>
      <div className="flex gap-4">
        <Input ref={input} label="New task" id="newTask" labelHidden type="text" name="new_task" />
        <button className="text-stone-600 hover:text-stone-950" onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList tasks={project.tasks} />
    </section>
  )
}