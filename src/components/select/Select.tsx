import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  pokemonAdded,
  pokemonDeleted,
  pokemonDeletedMany,
  pokemonUpdated,
  pokemonUpdatedMany,
  selectAll,
} from '../slices/TeamSlice';
import { Pokemon } from '../slices/PokemonSlice';
import { requestForSinglePokemon } from '../../services/request';

import PokemonsList from './PokemonsList';
import BadgeList from './BadgeList';
import Modal from '../modal/Modal';

export type HelpText = {
  status: 'Team should include 4 pokemons. Remained:';
  full: 'Team is full. The Battle can begin.';
  error: 'Invalid pokemon name';
};

type Props = {
  pokemonData: Pokemon[];
  label: string;
  disabled: boolean;
  helpText: HelpText;
};

export default function Select({ pokemonData, label, helpText, disabled }: Props) {
  const [showList, setShowList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);
  const [errorStyle, setErrorStyle] = useState(false);
  const [fullTeam, setFullTeam] = useState(false);
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [hightlightedIndex, setHightlightedIndex] = useState(0);
  const [chosenTeam, setChosenTeam] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonOpenCloseRef = useRef<HTMLButtonElement>(null);

  const team = useSelector(selectAll);
  const dispatch = useDispatch();
  // interaction with Pokemon list

  function handleSelectDisplay(e: any): void {
    e.preventDefault();
    if (chosenTeam.length === 4) {
      setFullTeam(true);
      return;
    }
    setShowList((list: boolean) => !list);
    setInputFocused((prev) => !prev);
  }

  //interaction with input

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputFocused]);

  function searchValue(e: any): void {
    setSearchPokemonName(e.target.value);
  }

  //List of pokemons

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Space':
          setShowList(true);
          break;
        case 'Enter':
          handleChoise(hightlightedIndex);
          setShowList(false);
          setSearchPokemonName('');
          break;
        case 'Escape':
          setShowList(false);
          setSearchPokemonName('');
          break;
        case 'ArrowUp':
        case 'ArrowDown':
          if (!showList && chosenTeam.length < 4) {
            setShowList(true);
            break;
          }
          const newValue = hightlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < pokemonData.length) {
            setHightlightedIndex(newValue);
          }
          break;
      }
    }

    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [hightlightedIndex, showList, pokemonData]);

  // Team members handle

  function handleRemovePokemonFromTeam(id: number) {
    if (chosenTeam.length === 4) setFullTeam(false);
    setChosenTeam((prev) => prev.filter((pokemon) => pokemon.idNumber !== id));
    dispatch(pokemonDeleted(id));
  }
  async function handleChoise(id: number): Promise<void> {
    let check = false;
    chosenTeam.forEach((pokemon) => {
      if (Object.values(pokemon).includes(id)) {
        handleRemovePokemonFromTeam(id);
        check = true;
      }
    });
    if (check) {
      setShowList(false);
      return;
    }
    const chosenPokemon = pokemonData.filter((pokemon) => pokemon.idNumber === id);
    setChosenTeam((prev) => {
      return [
        ...prev,
        Object.assign({}, ...chosenPokemon, { showDot: false }, { showClose: false }),
      ];
    });
    setSearchPokemonName('');
    setShowList(false);

    const result = await requestForSinglePokemon(id);
    const newTeamPlayer = { ...result, show: false };
    if (team.length === 4) {
      return;
    }
    dispatch(pokemonAdded(newTeamPlayer));
  }

  function handleDotShow(id: number, element: string) {
    setChosenTeam((prev) => {
      const newList = prev.map((pokemon) => {
        if (pokemon.idNumber === id) {
          const prevBoolian = pokemon[element];
          const { [element]: _ } = pokemon;
          return { ...pokemon, [element]: !prevBoolian };
        }
        return pokemon;
      });
      return newList;
    });
  }

  function clearTheList() {
    setChosenTeam([]);
    setShowList(false);
    setSearchPokemonName('');
    const deletedTeam = team.map((item) => {
      const { id } = item;
      return id;
    });
    dispatch(pokemonDeletedMany(deletedTeam));
  }

  // Modal
  function handleModalOpen(id: number) {
    dispatch(
      pokemonUpdated({
        id,
        changes: { show: true },
      })
    );

    setShowModal(true);
  }

  function handleModalClose() {
    const showToFalse = { show: false };
    const updatedTeam = team.map((item) => {
      const { id } = item;
      return { id, changes: showToFalse };
    });
    dispatch(pokemonUpdatedMany(updatedTeam));

    setShowModal(false);
  }

  return (
    <div>
      <div
        onMouseLeave={() => {
          setShowList(false);
        }}
        className={`min-h-[100px] max-h-fit  w-[420px] px-[10px] flex flex-col bg-grey-200`}
      >
        <div className="flex items-end justify-between">
          <div className="flex w-fit flex-row mt-[5px]">
            <label className="text-[16px] pr-[5px] ">{label}</label>
            <span className="w-[20px] h-[20px]">
              <InformationCircleIcon />
            </span>
          </div>
          <span className="text-[15px] text-grey-500">Optional</span>
        </div>
        <div
          tabIndex={0}
          ref={containerRef}
          className={`h-[32px] w-[400px] mt-[5px] rounded-[4px] px-[12px] border 
        ${!errorStyle ? 'border-grey-300' : 'border-red-300'} 
          bg-white relative flex items-center gap-[4px] outline-none focus:border-blue-800 hover:border-blue-800
          ${
            disabled &&
            'border-transparent bg-blue-100 hover:border-transparent focus:border-transparent'
          }`}
        >
          <div className={`grow truncate relative flex row`}>
            <div className={`${false ? 'hidden' : 'flex'}`}>
              {chosenTeam && (
                <BadgeList
                  team={chosenTeam}
                  dotShow={handleDotShow}
                  removePokemonFromTeam={handleRemovePokemonFromTeam}
                  modalOpen={handleModalOpen}
                />
              )}
            </div>
            <input
              onChange={searchValue}
              type="text"
              value={searchPokemonName}
              tabIndex={0}
              className={`${
                showList ? 'block' : 'hidden'
              } grow outline-none bg-transparent outline-0 w-[90%]`}
              ref={inputRef}
            />
            <div
              onClick={handleSelectDisplay}
              className={`grow  w-[100%]${
                disabled
                  ? 'text-blue-300 opacity-55'
                  : chosenTeam.length === 0
                  ? 'text-[#000]'
                  : 'text-grey-500'
              }`}
            >
              {!showList && chosenTeam.length < 4 && 'Select'}
            </div>
          </div>

          <button
            onClick={() => clearTheList()}
            className={`cursor-pointer text-[25px] text-[#000] translate-y-[-5%] ${
              chosenTeam.length > 0 ? 'block' : 'hidden'
            }`}
          >
            &times;
          </button>
          <button
            ref={buttonOpenCloseRef}
            onClick={handleSelectDisplay}
            className={`border-[7px] border-solid border-transparent border-t-[#000] translate-y-[25%]
          ${disabled && 'border-t-blue-300 opacity-55'}`}
          ></button>
          <ul
            className={`${
              showList ? 'block' : 'hidden'
            } absolute w-[100%] h-[350px] top-[calc(100%+5px)] left-0 max-h-150px overflow-y-auto border border-grey-300 rounded-[4px] bg-white z-100`}
          >
            <PokemonsList
              setHightlighted={setHightlightedIndex}
              data={pokemonData}
              handleChoise={handleChoise}
              searchPokemon={searchPokemonName}
              team={chosenTeam}
              hightlight={hightlightedIndex}
              setError={setErrorStyle}
              errorBol={errorStyle}
            />
          </ul>
        </div>
        <span className={`text-[16px] my-[5px] ${!errorStyle ? 'text-grey-500' : 'text-red-300'}`}>
          {errorStyle
            ? helpText.error
            : fullTeam
            ? helpText.full
            : `${helpText.status} ${4 - chosenTeam.length}`}
        </span>
      </div>
      {showModal && (
        <Modal data={team} close={handleModalClose} showCoachName={false} showSaveButton={false} />
      )}
    </div>
  );
}
