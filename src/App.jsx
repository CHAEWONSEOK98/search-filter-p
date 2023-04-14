import Filter from './components/Filter';
import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  return (
    <div>
      <header className="flex justify-between px-24 py-10">
        <Search />
        <Filter />
      </header>
      <Users />
    </div>
  );
};

export default App;
