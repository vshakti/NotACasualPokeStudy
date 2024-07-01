import "../../../index.css";

export function PokemonMoves({ pokemon, typeColorsShadows }) {
  return pokemon.moves && pokemon.moves.length > 0 ? (
    pokemon.moves
      .sort((a, b) => a.move.name.localeCompare(b.move.name))
      .map((moveObj, index) => (
        <div
          key={moveObj + index}
          className={`${
            typeColorsShadows[pokemon.types[0]?.type.name]
          } hover:scale-110 cursor-pointer transition easy-in-out py-1.5 px-2 flex items-center w-max h-max justify-center rounded-2xl text-white font-semibold`}
        >
          {moveObj.move.name.toUpperCase().replace(/-+/g, " ")}
        </div>
      ))
  ) : (
    <div>no moves</div>
  );
}
