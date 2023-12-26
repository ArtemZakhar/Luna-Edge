import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAll as fullTeam, pokemonUpdatedMany } from '../slices/TeamSlice';
import { fetchAllPokemons, selectAll } from '../slices/PokemonSlice';
import Select, { HelpText } from '../select/Select';
import Input from '../input/Input';
import Modal from '../modal/Modal';

export default function Form() {
  const [show, setShow] = useState(false);
  const filteredPokemons = useSelector(selectAll);
  const team = useSelector(fullTeam);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchAllPokemons());
  }, []);

  const helpText: HelpText = {
    status: 'Team should include 4 pokemons. Remained:',
    full: 'Team is full. The Battle can begin.',
    error: 'Invalid pokemon name',
  };

  function handleSubmit(e: any) {
    e.preventDefault();
    if (team.length < 4) {
      return;
    }
    const showToTrue = { show: true };
    const updatedTeam = team.map((item) => {
      const { id } = item;
      return { id, changes: showToTrue };
    });
    dispatch(pokemonUpdatedMany(updatedTeam));
    setShow(true);
  }

  function handleModalClose() {
    const showToFalse = { show: false };
    const updatedTeam = team.map((item) => {
      const { id } = item;
      return { id, changes: showToFalse };
    });
    dispatch(pokemonUpdatedMany(updatedTeam));

    setShow(false);
  }

  const inputProps = {
    border_hover: 'border-[2px] hover:border-blue-700',
    border_focus: 'border-[2px] focus-within:border-blue-700',
    disabled: false,
  };

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className={`flex justify-center items-center w-[700px] h-[550px] bg-grey-200`}>
        <form onSubmit={handleSubmit}>
          <Select
            pokemonData={filteredPokemons}
            label="Choose your team"
            helpText={helpText}
            disabled={false}
          />
          <Input label="Coach name" placeholder="First Name" id={1} style={inputProps} />
          <Input label="Coach surname" placeholder="Surname" id={2} style={inputProps} />
          <div className="flex justify-end items-center px-[20px]">
            <button
              type="submit"
              className="w-20 h-[100%] border-2  border-transparent text-white bg-blue-800 rounded-md  focus:bg-green-700"
            >
              Save
            </button>
          </div>
        </form>
        {show && (
          <Modal data={team} close={handleModalClose} showCoachName={true} showSaveButton={true} />
        )}
      </div>
    </div>
  );
}
