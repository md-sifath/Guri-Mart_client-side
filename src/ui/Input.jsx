function Input({ type, id, onchange, value }) {
  return (
    <input
      value={value}
      onChange={onchange}
      className="block w-60 rounded-md border-0 py-1.5 pl-4 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6 md:w-72"
      type={type}
      id={id}
      required
    />
  );
}

export default Input;
