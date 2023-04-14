import Filter from './components/Filter';
import Search from './components/Search';
import Users from './components/Users';

const App = () => {
  return (
    <div>
      <header className="flex justify-between">
        <Search />
        <Filter />
      </header>
      <Users />
    </div>
  );
};

export default App;
