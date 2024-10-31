export function Select({ ...props }) {
  return (
    <>
      <label htmlFor={props.id} className="text-base mt-4 mb-2">
        {props.label}
      </label>
      <select
        className="w-full h-14 p-4 border border-solid rounded-md"
        {...props}
      />
    </>
  );
}