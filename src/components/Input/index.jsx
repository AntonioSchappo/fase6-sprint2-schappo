export function Input({ ...props }) {
  return (
    <>
      <label htmlFor={props.id} className="text-base mt-6 mb-2">
        {props.label}
      </label>
      <input
        name={props.id}
        id={props.id}
        placeholder={props.placeholder}
        className="h-14 w-auto p-4 border border-solid rounded-md"
        {...props}
      />
    </>
  );
}
