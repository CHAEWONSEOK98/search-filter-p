import { useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { allUsers } from '../features/usersAction';
import { setFilter, setSearch } from '../features/usersSlice';

const Users = () => {
  const { error, success, usersData, searchData, filterData } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allUsers());

    if (error) {
      console.log(error);
    }
  }, [dispatch, error]);

  // const filteredData = usersData.filter((item) =>
  //   item.userId.toString().includes(filterData)
  // );

  const filteredData = usersData.filter(
    (item) => item.userId.toString() === filterData
  );

  const searchedData = usersData.filter((item) =>
    item.title.toLowerCase().includes(searchData)
  );

  return (
    <ul className="mt-10  grid w-full grid-cols-1 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filterData !== '' && filterData !== 'all'
        ? filteredData.map((item, index) => (
            <li
              key={index}
              className="mx-auto h-[300px] w-[270px] rounded-xl border border-black p-10"
            >
              <h2 className="p-2">id : {item.id}</h2>
              <h2 className="p-2">userId : {item.userId}</h2>
              <p className="p-2">title : {item.title.substr(0, 30)}</p>
              <p className="p-2">body : {item.body.substr(0, 20)}</p>
            </li>
          ))
        : searchedData.map((item, index) => (
            <li
              key={index}
              className="mx-auto h-[300px] w-[270px] rounded-xl border border-black p-10"
            >
              <h2 className="p-2">id : {item.id}</h2>
              <h2 className="p-2">userId : {item.userId}</h2>
              <p className="p-2">title : {item.title.substr(0, 30)}</p>
              <p className="p-2">body : {item.body.substr(0, 20)}</p>
            </li>
          ))}
    </ul>
  );
};

export default Users;
