import { useSearchParams } from 'react-router-dom';

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set('discount', value);
    setSearchParams(searchParams);
  }
  return (
    <div className="flex gap-1.5 rounded-md border border-gray-100 bg-gray-50 shadow-md">
      <button
        onClick={() => handleClick('all')}
        className="h-12 rounded-md border-0 px-2 text-sm font-medium transition-all duration-300 hover:bg-blue-500 hover:text-blue-100 focus:bg-blue-500 focus:text-blue-100"
      >
        All
      </button>
      <button
        onClick={() => handleClick('with-Discount')}
        className="h-12 rounded-md border-0 px-2 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-blue-500 hover:text-blue-100 focus:bg-blue-500 focus:text-blue-100"
      >
        With Discount
      </button>
      <button
        onClick={() => handleClick('no-Discount')}
        className="rounded-md border-0 px-2 text-sm font-medium outline-none transition-all duration-300 hover:bg-blue-500 hover:text-blue-100 focus:bg-blue-500 focus:text-blue-100"
      >
        No Discount
      </button>
    </div>
  );
}

export default Filter;
