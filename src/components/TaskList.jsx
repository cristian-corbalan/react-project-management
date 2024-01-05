export default function TaskList({tasks}) {
  return (
    <ul className="flex flex-col mt-8">
      {tasks.map(task => (
        <li className="py-4 px-8 bg-stone-200 border-b-2 border-stone-500  flex justify-between" key={task.id}>
          <span className="text-lg">{task.content}</span>
          <button className="text-stone-700 hover:text-stone-950">Clear</button>
        </li>
      ))}
    </ul>
  )
}