import Input from './Input.jsx';


export default function NewProject() {
  return (
    <section>
      <h2>Create a new project</h2>

      <menu>
        <li>
          <button>Cancel</button>
        </li>
        <li>
          <button>Save</button>
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