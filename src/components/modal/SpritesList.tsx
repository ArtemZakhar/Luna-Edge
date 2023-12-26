type Props = {
  listOfSprites: any[];
};

export default function SpritesList({ listOfSprites }: Props) {
  function viewSpirites(pokemonList: any[]) {
    return pokemonList.map((pokemon: any) => {
      const urls = Object.entries(pokemon.sprites).map(([key, url]) => {
        if (!key.split('_').includes('female')) return url;
      });
      return (
        <div
          key={pokemon.id}
          className={`flex justify-between gap-[5px] items-center w-[100%] h-[80px] rounded-lg border-2 border-dashed border-grey-300`}
        >
          {urls.map((url, i) => {
            if (!url) return;
            const style = { '--image-url': `url(${url})` } as React.CSSProperties;
            return (
              <div
                key={i}
                style={style}
                className={`h-[100%] w-[80px] bg-cover bg-[image:var(--image-url)]`}
              ></div>
            );
          })}
        </div>
      );
    });
  }

  const spirites = viewSpirites(listOfSprites);
  return <>{spirites}</>;
}
