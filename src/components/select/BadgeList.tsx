import { Pokemon } from '../PokemonSlice/PokemonSlice';
import Badge, { AddProps } from '../badge/Badge';

interface Team extends Pokemon {
  showDot: boolean;
  showClose: boolean;
}

type Props = {
  team: Team[];
  dotShow: (id: number, _: string) => void;
  removePokemonFromTeam: (name: string) => void;
  modalOpen: (id: number) => void;
};

const badgeProps: AddProps = {
  border_radius: 'rounded-3xl',
  text_color: 'text-black',
  BG_color: 'bg-grey-100',
  dot_and_close_color: 'text-grey-500',
};

export default function BadgeList({ team, dotShow, removePokemonFromTeam, modalOpen }: Props) {
  return (
    <>
      {team.map((pokemon) => {
        return (
          <span
            onMouseEnter={() => dotShow(pokemon.idNumber, 'showDot')}
            onMouseLeave={() => dotShow(pokemon.idNumber, 'showDot')}
            onClick={() => dotShow(pokemon.idNumber, 'showClose')}
            className={`pr-[5px] h-[100%]`}
            key={pokemon.idNumber}
          >
            <Badge
              label={pokemon.name}
              pokemonId={pokemon.idNumber}
              removeItem={removePokemonFromTeam}
              dot={pokemon.showDot}
              close={pokemon.showClose}
              addProps={badgeProps}
              modalOpen={modalOpen}
            />
          </span>
        );
      })}
    </>
  );
}
