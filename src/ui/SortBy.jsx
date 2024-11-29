import { FaUpDown } from 'react-icons/fa6';
import { HiAcademicCap } from 'react-icons/hi';
import { useSearchParams } from 'react-router-dom';

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || '';

  function onChangeSelect(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <>
      <select
        className="block h-12 rounded-md border border-gray-300 px-4 py-2 text-sm shadow-md focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        value={sortBy}
        onChange={onChangeSelect}
      >
        <option>
          <span>Sort By</span>
        </option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SortBy;
