import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../features/usersSlice';

const Search = () => {
  const { searchData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value.toLowerCase()));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search..."
        className="h-12 w-64 border-2 border-black p-3 outline-none"
        value={searchData}
        onChange={handleSearch}
      />
    </form>
  );
};

export default Search;
