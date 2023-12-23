import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPokemons, selectAll } from './components/PokemonSlice/PokemonSlice';

function App() {
  const filteredPokemons = useSelector(selectAll);
  console.log(filteredPokemons);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, []);
  return (
    <div>
      <p>Welcome to Luna Edge technical interview</p>
    </div>
  );
}

export default App;
