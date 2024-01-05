import { useRef } from 'react';
import Alert from './Alert.jsx';
import Input from './Input.jsx';


const txtValid = (txt) => txt.trim().length === 0;

export default function NewProject({onHideForm, onCreateProject}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const dialog = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredUdDate = dueDate.current.value;

    if (txtValid(enteredTitle) || txtValid(enteredDescription) || txtValid(enteredUdDate)) {
      dialog.current.open();
      return;
    }

    onCreateProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredUdDate,
      tasks: []
    });
    onHideForm();
  }

  return (
    <>
      <Alert ref={dialog} message="All fields are required" buttonCaption="Okey :C">
        <p className="text-2xl font-bold text-stone-500 my-4">Invalid input</p>
        <p className="text-stone-500 mb-4">Oops... Looks like you forgot to enter a value.</p>
        <p className="text-stone-500 mb-4">Please make sure that you provide a valid value for every input field.</p>
      </Alert>
      <section className="w-2/5 pt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950"
                    onClick={onHideForm}
            >
              Cancel
            </button>
          </li>
          <li>
            <button className="py-2 px-6 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div> {/*A form is better than a div, but I need */}
          <Input ref={title} label="Title" id="title" type="text" name="title" />
          <Input ref={description} label="Description" id="description" name="description" textarea />
          <Input ref={udDate} label="Due date" id="date" type="date" name="date" />
        </div>
      </section>
    </>
  )
}