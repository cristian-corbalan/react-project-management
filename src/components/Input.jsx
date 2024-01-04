export default function Input({id, label, textarea, labelHidden = false, ...props}) {

  let labelClass = 'text-sm font-bold uppercase text-stone-500';
  if (labelHidden) {
    labelClass += ' sr-only';
  }

  let inputClass = 'w-full p-1 border-2 rounded-sm border-stone-300 bg-stone-200 text-stone-700 focus:outline-none focus:border-stone-600'

  return (
    <div className="flex flex-col gap-1 my-4">
      <label htmlFor={id}
             className={labelClass}
      >
        {label}
      </label>

      {
        textarea
          ? <textarea className={inputClass} id={id} {...props}></textarea>
          : <input className={inputClass} id={id} {...props} />
      }
    </div>
  )

}