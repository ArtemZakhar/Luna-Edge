export type ModalData = {
  id: number;
  name: string;
  sprites: any;
};

type Props = {
  data: ModalData[];
  close: () => void;
};

export default function Modal({ data, close }: Props) {
  function viewList(arr: any[]) {
    const shouldShown = arr.filter((pokemon) => {
      if (pokemon.show) {
        return pokemon;
      }
    });
    const titles = shouldShown.map((item) => item.name);
    return { titles, shouldShown };
  }

  const titles = viewList(data).titles;
  const listOfPokemons = viewList(data).shouldShown;

  function viewSpirites(pokemonList: any[]) {
    return pokemonList.map((pokemon: any) => {
      const urls = Object.entries(pokemon.sprites).map(([key, url]) => {
        if (!key.split('_').includes('female')) return url;
      });
      return (
        <>
          <div
            className={`flex justify-between gap-[5px] items-center w-[100%] h-[80px] rounded-lg border-2 border-dashed border-grey-300`}
          >
            {urls.map((url) => {
              if (!url) return;
              const style = { '--image-url': `url(${url})` } as React.CSSProperties;
              return (
                <div
                  style={style}
                  className={`h-[100%] w-[80px] bg-cover bg-[image:var(--image-url)]`}
                ></div>
              );
            })}
          </div>
        </>
      );
    });
  }

  const spirites = viewSpirites(listOfPokemons);

  return (
    <div className={`absolute left-0 top-0 w-screen h-screen bg-grey-100`}>
      <div
        className={`absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center w-[700px] h-[550px] bg-grey-200`}
      >
        <div
          className={`flex flex-col w-[600px] h-[450px] justify-between rounded-lg shadow-md bg-white shadow-grey-300`}
        >
          <div className="px-[30px] pt-[20px] text-sm text-grey-500">
            <div className={`w-[100%] h-[50px] flex justify-between`}>
              <span className="text-xl text-black font-bold">{`Chosen Pokemons: ${titles}`}</span>
              <div
                onClick={() => close()}
                className={`text-5xl font-light leading-[0.5] cursor-pointer`}
              >
                &times;
              </div>
            </div>
            <div className={`h-[280px] flex flex-col justify-between`}>{spirites}</div>
          </div>
          <div
            className={`w-[100%] h-[80px] flex justify-between items-center px-[30px] mt-6 border-t-2 border-blue-150`}
          >
            <div
              className={`w-[70%] h-[40px] flex justify-center items-center rounded-lg border-2 border-dashed border-grey-300 text-sm text-grey-500`}
            >
              Replace component
            </div>
            <div className={`w-[30%] h-[40px%] flex justify-around items-center`}>
              <button className="w-20 h-[100%] border-2  border-transparent text-black bg-transparent rounded-md focus:border-2 focus:text-red-900 focus:border-red-900">
                Cancel
              </button>
              <button className="w-20 h-[100%] border-2  border-transparent text-white bg-blue-800 rounded-md  focus:bg-green-700">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
