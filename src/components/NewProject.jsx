import Input from './Input.jsx';


export default function NewProject() {
  return (
    <section className="w-2/5 pt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">Cancel</button>
        </li>
        <li>
          <button className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button>
        </li>
      </menu>

      <div> {/*A form is better than a div, but I need */}
        <Input label="Title" id="title" type="text" name="title" />
        <Input label="Description" id="description" name="description" textarea />
        <Input label="Due date" id="date" type="date" name="date" />


      </div>
    </section>
  )
}