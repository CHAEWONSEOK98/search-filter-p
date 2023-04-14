import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/usersSlice';

const Filter = () => {
  const userId = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const [filterItem, setFilterItem] = useState('');
  const [dropdown, setDropdown] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filterItem !== '') {
      dispatch(setFilter(filterItem));
    }
  }, [dispatch, filterItem]);

  const handleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <section>
      <button onClick={handleDropdown} className="">
        <input
          type="text"
          readOnly
          value={filterItem}
          placeholder="Filter by userId"
          className="w-36 cursor-pointer p-3 outline-none"
        />
      </button>
      {dropdown ? (
        <ul className="absolute w-36 space-y-2  bg-white shadow-lg ">
          {userId.map((item, index) => {
            return (
              <li
                className="cursor-pointer px-3"
                key={index}
                onClick={() => {
                  setFilterItem(item);
                  handleDropdown();
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      ) : null}
    </section>
  );
};

export default Filter;
