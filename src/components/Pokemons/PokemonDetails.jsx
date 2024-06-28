export default function PokemonDetails({ typeColorsBg, pokemon }) {
  return (
    <dialog className="modal" id="pokemon_details">
      <div
        className={`inset-0 fixed w-screen h-screen ${
          typeColorsBg[[pokemon.types[0]?.type.name]]
        } bg-opacity-20 flex items-center justify-center text-white`}
      >
        <form method="dialog">
          <button className="size-48 bg-white">oi</button>
        </form>
      </div>
    </dialog>
  );
}
