import { useSelector } from 'react-redux';
import { Pokemon } from '../slices/TeamSlice';
import { selectAll } from '../slices/CoachSlice';
import SpritesList from './SpritesList';

type Props = {
  data: Pokemon[];
  close: () => void;
  showCoachName: boolean;
  showSaveButton: boolean;
};

export default function Modal({ data, close, showCoachName, showSaveButton }: Props) {
  const coach: any[] = useSelector(selectAll);

  const name = coach
    .map((item) => {
      return item.text;
    })
    .toString()
    .replace(/,/g, ' ');

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

  return (
    <div
      className={`absolute left-0 top-0 w-screen h-screen bg-grey-100 flex justify-center items-center`}
    >
      <div className={`flex justify-center items-center w-[700px] h-[550px] bg-grey-200`}>
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
            <div className={`h-[280px] flex flex-col justify-between`}>
              <SpritesList listOfSprites={listOfPokemons} />
            </div>
          </div>
          <div
            className={`w-[100%] h-[80px] flex justify-between items-center px-[30px] mt-6 border-t-2 border-blue-150`}
          >
            {showCoachName ? (
              <div
                className={`w-[70%] h-[40px] flex justify-center items-center rounded-lg border-2 border-dashed border-grey-300 text-sm text-grey-500`}
              >
                {`Coach name: ${name}`}
              </div>
            ) : null}
            {showSaveButton ? (
              <div className={`w-[30%] h-[40px%] flex justify-around items-center`}>
                <button
                  onClick={() => close()}
                  className="w-20 h-[100%] border-2  border-transparent text-black bg-transparent rounded-md focus:border-2 focus:text-red-900 focus:border-red-900"
                >
                  Cancel
                </button>
                <button
                  onClick={() => close()}
                  className="w-20 h-[100%] border-2  border-transparent text-white bg-blue-800 rounded-md  focus:bg-green-700"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className={`w-[100%] h-[40px%] flex justify-end items-center`}>
                <button
                  onClick={() => close()}
                  className="w-20 h-[100%] border-2  border-transparent text-white bg-blue-800 rounded-md  focus:bg-green-700"
                >
                  OK
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
