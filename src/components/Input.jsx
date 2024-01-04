export default function Input({id, label, textarea, labelHidden = false, ...props}) {

  return (
    <div>
      <label htmlFor={id} className={labelHidden ? 'sr-only' : undefined}>{label}</label>

      {
        textarea
          ? <textarea id={id} {...props}></textarea>
          : <input id={id} {...props} />
      }
    </div>
  )

}