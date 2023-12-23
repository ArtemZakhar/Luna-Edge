import axios from 'axios';

type Pokemon = { id: number; name: string; url: string };

export default async function request() {
  const data = await axios({
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=300',
  });
  const dataForStore = data.data.results.map((item: Pokemon, i: number) => {
    return { idNumber: i, ...item };
  });
  return dataForStore;
}
