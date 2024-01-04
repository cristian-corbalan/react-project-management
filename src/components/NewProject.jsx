import { useRef } from 'react';
import Input from './Input.jsx';


export default function NewProject({onHideForm, onCreateProject}) {
  const title = useRef();
  const description = useRef();
  const udDate = useRef();

  function handleSave() {
    onCreateProject({
      title: title.current.value,
      description: description.current.value,
      udDate: udDate.current.value,
      task: []
    });

    onHideForm();
  }

  return (
    <section className="w-2/5 pt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950"
                  onClick={onHideForm}
          >Cancel
          </button>
        </li>
        <li>
          <button className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                  onClick={handleSave}
          >Save
          </button>
        </li>
      </menu>

      <div> {/*A form is better than a div, but I need */}
        <Input ref={title} label="Title" id="title" type="text" name="title" />
        <Input ref={description} label="Description" id="description" name="description" textarea />
        <Input ref={udDate} label="Due date" id="date" type="date" name="date" />


      </div>
    </section>
  )
}