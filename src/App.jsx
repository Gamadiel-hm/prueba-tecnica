/* eslint-disable indent */
import { useState, useRef, useMemo } from 'react';
import './App.css';
import './users.css';
import responseUsers from './mocks/user.json';
import ListUsers from './components/ListUsers';

function App() {
  const [users, setUsers] = useState(responseUsers.results);
  const [color, setColor] = useState(false);
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState('');
  const resetRef = useRef(responseUsers.results);

  const handleColor = () => {
    const changeboolean = !color;
    setColor(changeboolean);
  };

  const handleSortboolena = () => {
    setSort(!sort);
  };

  const handleResetState = () => {
    setUsers(resetRef.current);
  };

  const handleDelete = ref => {
    const newUsers = users.filter(user => user.name.first !== ref);
    setUsers(newUsers);
  };

  const filterUsers = () => {
    console.log('filter');
    return search.length > 0
      ? users.filter(user =>
          user.location.country.toLowerCase().includes(search.toLowerCase())
        )
      : users;
  };

  const usersSort = useMemo(() => {
    console.log('sort');
    const users1 = filterUsers();
    return sort
      ? [...users1].sort((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      : users1;
  }, [sort, users, search]);

  return (
    <>
      <header className='App'>
        <h1>App users</h1>
      </header>
      <main>
        <section className='flex'>
          <button
            type='button'
            onClick={handleColor}>
            Color sebra
          </button>
          <button
            type='button'
            onClick={handleSortboolena}>
            {!sort ? 'sort by country' : 'disorder'}
          </button>
          <button
            type='button'
            onClick={handleResetState}>
            Reset State
          </button>
          <input
            type='text'
            placeholder='Filter for country'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </section>
        <ListUsers
          users={usersSort}
          color={color}
          handleDelete={handleDelete}
        />
      </main>
    </>
  );
}

export default App;
