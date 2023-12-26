import axios from 'axios';

type Pokemon = { id: number; name: string; url: string };

export default async function request() {
  const data = await axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=300',
  });

  const dataForStore = data.data.results.map((item: Pokemon, i: number) => {
    return { idNumber: i + 1, ...item };
  });
  return dataForStore;
}

export async function requestForSinglePokemon(id: number) {
  const data = await axios({
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  });

  const dataForModal = {
    id: data.data.id,
    name: data.data.name,
    sprites: data.data.sprites,
  };

  return dataForModal;
}
