import logoImg from '../assets/no-projects.png';
import Button from './Button.jsx';


export default function NoProjectSelected({onShowForm}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto"
           src={logoImg}
           alt="An empty task list"
      />
      <p className="text-xl font-bold text-stone-500 my-4">No project selected</p>
      <p className="text-stone-400 mb-4">Select a project o get started with a new one</p>
      <div className="mt-8">
        <Button onClick={onShowForm}>
          Create a new project
        </Button>
      </div>
    </div>
  )
}