import { useEffect } from 'react';
import { Pokemon } from '../PokemonSlice/PokemonSlice';

type Props = {
  data: Pokemon[];
  handleChoise: (id: number) => void;
  searchPokemon: string;
  team: any[];
  hightlight: number;
  setHightlighted: (index: number) => void;
  setError: (_: boolean) => void;
  errorBol: boolean;
};

export default function PokemonsList({
  data,
  handleChoise,
  searchPokemon,
  team,
  hightlight,
  setError,
  setHightlighted,
  errorBol,
}: Props) {
  function pokemonList(data: Pokemon[]) {
    const matchedPokemons = data.filter((pokemon: Pokemon) => {
      return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase());
    });
    useEffect(() => {
      if (matchedPokemons.length === 0 && searchPokemon.length > 0) {
        return setError(true);
      }
      if (errorBol && matchedPokemons.length > 0) {
        setError(false);
      }
    }, [errorBol, searchPokemon]);

    return matchedPokemons.map((pokemon, index) => {
      let chosen = false;
      team.forEach((pok) => {
        if (Object.values(pok).includes(pokemon.idNumber)) {
          chosen = true;
        }
      });
      return (
        <li
          onClick={() => handleChoise(pokemon.idNumber)}
          key={pokemon.idNumber}
          onMouseEnter={() => setHightlighted(index)}
          className={`px-[10px] py-[5px] cursor-pointer text-grey-700 ${
            chosen && 'bg-grey-100 hover:bg-grey-100 hover:text-grey-700'
          } ${hightlight === index && 'bg-grey-500 text-white'} 
      `}
        >
          {pokemon.name}
        </li>
      );
    });
  }

  const elements = pokemonList(data);

  return <>{elements}</>;
}
