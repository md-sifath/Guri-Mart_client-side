import { check } from 'prettier';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Category() {
  const CategoryOption = [
    { name: 'all', label: 'All', checked: false },
    { name: 'cloth', label: 'Cloth', checked: false },
    { name: 'food', label: 'Food', checked: false },
    { name: 'watch', label: 'Watch', checked: false },
    { name: 'furniture', label: 'Furniture', checked: false },
    { name: 'shoe', label: 'Shoe', checked: false },
    { name: 'electronix', label: 'Electronix', checked: false },
  ];
  const [checkedOptions, setCheckedOptions] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  function hanldleCheck(name) {
    if (checkedOptions === name) {
      setCheckedOptions(null);
    } else {
      setCheckedOptions(name);
      searchParams.set('category', name);
      setSearchParams(searchParams);
    }
  }

  const Style = {
    label: 'mb-2 flex items-center gap-2 cursor-pointer ',
    sapn: 'text-[18px]',
    input: 'h-4 w-4 rounded-xl cursor-pointer',
  };

  return (
    <div className="ml-3 mt-5 lg:mt-20">
      <h2 className="text-2xl font-bold">Category</h2>
      <div className="mt-2 flex flex-col pl-6">
        {CategoryOption.map((option) => (
          <label className={Style.label} key={option.name}>
            <input
              className={Style.input}
              type="checkbox"
              name={option.name}
              checked={checkedOptions === option.name}
              onChange={() => hanldleCheck(option.name)}
            />
            <span className="text-[16px]">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Category;
