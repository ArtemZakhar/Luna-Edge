import AsyncSelect from 'react-select/async';
import { InformationCircleIcon } from '@heroicons/react/24/solid';

import { Pokemon } from '../PokemonSlice/PokemonSlice';
import Badge from '../badge/Badge';
import { useEffect, useRef, useState } from 'react';

type Props = {
  pokemonData: Pokemon[];
  onChange: (value: Pokemon | undefined) => void;
  label: string;
  clear: boolean;
  validation: boolean;
  disabled: boolean;
};

export default function Select({
  onChange,
  pokemonData,
  label,
  clear,
  validation,
  disabled,
}: Props) {
  const [showList, setShowList] = useState(false);
  const [searchPokemonName, setSearchPokemonName] = useState('');
  const [chosenTeam, setChosenTeam] = useState<any[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSelectDisplay(): void {
    setShowList((list: boolean) => !list);
  }

  useEffect(() => {
    inputRef.current?.focus();
    function handler(e: KeyboardEvent) {
      if (e.target !== inputRef.current) return;
      switch (e.code) {
        case 'Escape':
          setShowList(false);
          break;
      }
    }
    inputRef.current?.addEventListener('keydown', handler);
  }, [showList]);

  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Space':
        case 'Enter':
          setShowList((prev) => !prev);
          break;
        case 'Escape':
          setShowList(false);
          break;
      }
    }
    containerRef.current?.addEventListener('keydown', handler);

    return () => {
      containerRef.current?.removeEventListener('keydown', handler);
    };
  }, [showList]);

  function searchValue(e: any) {
    setSearchPokemonName(e.target.value);
  }

  function handleChoise(id: number): void {
    const chosenPokemon = pokemonData.filter((pokemon) => pokemon.idNumber === id);
    setChosenTeam((prev) => {
      return [...prev, Object.assign({}, ...chosenPokemon)];
    });
  }

  function pokemonList(data: Pokemon[]) {
    const matchedPokemons = data.filter((pokemon: Pokemon) => {
      return pokemon.name.toLowerCase().includes(searchPokemonName.toLowerCase());
    });

    return matchedPokemons.map((pokemon) => (
      <li
        onClick={() => handleChoise(pokemon.idNumber)}
        key={pokemon.idNumber}
        className={`px-[10px] py-[5px] cursor-pointer ${false && 'bg-grey-100'} 
          ${false && 'bg-grey-300 text-white'}`}
      >
        {pokemon.name}
      </li>
    ));
  }

  const elements = pokemonList(pokemonData);

  return (
    <div className={`min-h-[100px] max-h-fit  w-[420px] px-[10px] flex flex-col bg-grey-200`}>
      <div className="flex items-end justify-between">
        <div className="flex w-fit flex-row mt-[5px]">
          <div className="text-[16px] pr-[5px] ">{label}</div>
          <span className="w-[20px] h-[20px]">
            <InformationCircleIcon />
          </span>
        </div>
        <span className="text-[15px] text-grey-500">Optional</span>
      </div>
      <div
        tabIndex={0}
        ref={containerRef}
        className={`min-h-[32px] max-h-fit w-[400px] mt-[5px] rounded-[4px] px-[12px] border 
        ${validation ? 'border-grey-300' : 'border-red-300'} 
          bg-white relative flex items-center gap-[4px] outline-none focus:border-blue-800 hover:border-blue-800
          ${
            disabled &&
            'border-transparent bg-blue-100 hover:border-transparent focus:border-transparent'
          }`}
      >
        {/*      <div
          className={`grow min-h-[32px] max-h-fit  ${
            disabled ? 'text-blue-300 opacity-55' : value ? 'text-[#000]' : 'text-grey-500'
          }`}
        >
          <AsyncSelect
            loadOptions={loadOptions}
            defaultOptions
            isMulti
            unstyled
            closeMenuOnSelect={false}
            hideSelectedOptions={false}
            classNames={{
              placeholder: () => 'text-[14px] h-[24px]',
              control: () => `grow w-[100%] border-0 bg-transparent hover:text-[#000]`,
              input: () => ` h-[100%]`,
              valueContainer: () =>
                'p-1 gap-1 w-[80%] gap-[10px] items-start  whitespace-nowrap flex-nowrap truncate',
              // singleValue: () => '',
              multiValue: () =>
                'bg-gray-100 w-[85px] h-[25px]  rounded items-center py-0.5 pl-2 pr-1 gap-1.5',
              dropdownIndicator: () => 'h-[14px]',
            }}
          />
        </div> */}
        {/*         <input
          type="text"
          autoComplete="off"
          autoCorrect="off"
          id="pokemon"
          tabIndex={0}
          autoCapitalize="none"
          aria-autocomplete="list"
          aria-aria-expanded="false"
          aria-haspopup="true"
          role="combobox"
          className={`grow *:pl-[10px] outline-none bg-transparent outline-0 w-[90%] ${
            disabled && 'disabled:opacity-55 disabled:placeholder:text-blue-300'
          }`}
        /> */}
        <div className={`grow truncate relative`}>
          <div className={`${false ? 'hidden' : 'flex'}`}>
            {chosenTeam &&
              chosenTeam.map((pokemon) => {
                return (
                  <span key={pokemon.idNumber}>
                    <Badge
                      label={pokemon.name}
                      border_radius="rounded-3xl"
                      text_color="text-black"
                      dot={false}
                      close={false}
                      BG_color="bg-grey-100"
                      dot_and_close_color="text-grey-500"
                    />
                  </span>
                );
              })}
          </div>
          <input
            onChange={searchValue}
            type="text"
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
            {!showList && 'Select'}
          </div>
        </div>

        <button
          className={`cursor-pointer text-[25px] text-[#000] translate-y-[-5%] ${
            clear ? 'block' : 'hidden'
          }`}
        >
          &times;
        </button>
        <button
          onClick={handleSelectDisplay}
          className={`border-[7px] border-solid border-transparent border-t-[#000] translate-y-[25%]
          ${disabled && 'border-t-blue-300 opacity-55'}`}
        ></button>
        <ul
          className={`${
            showList ? 'block' : 'hidden'
          } absolute w-[100%] top-[calc(100%+5px)] left-0 max-h-150px overflow-y-auto border border-grey-300 rounded-[4px] bg-white z-100`}
        >
          {elements}
          {/*           {pokemonData.map((pokemon) => (
            <li
              key={pokemon.idNumber}
              className={`px-[10px] py-[5px] cursor-pointer ${false && 'bg-grey-100'} 
              ${false && 'bg-grey-300 text-white'}`}
            >
              {pokemon.name}
            </li>
          ))} */}
        </ul>
      </div>
      <span className={`text-[16px] my-[5px] ${validation ? 'text-grey-500' : 'text-red-300'}`}>
        {validation ? 'This is a help text.' : 'Please type a valid email.'}
      </span>
    </div>
  );
}
