import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

import "../../index.css";
import {
  DexBG,
  DexHeader,
  DexLine,
  DexSelector,
  DexDisplay,
} from "../PokedexComponents";

export function PokemonSelectorModal({
  pokemonQuantity,
  setPokemonOrder,
  pokemonOrder,
  pokemon,
  typeIcons,
  typeColors,
}) {
  function PokemonNext() {
    setPokemonOrder((prevIndex) => Math.min(prevIndex + 1, pokemonQuantity));
  }

  function PokemonPrev() {
    setPokemonOrder((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function PokemonType() {
    return pokemon.types && pokemon.types.length > 0 ? (
      pokemon.types.map((type, index) => (
        <div key={type.type + index}>
          <div>{typeColors[typeColors.indexOf(type.type.name)].toString()}</div>
          <img
            src={`${typeIcons[type.type.name]}`}
            alt=""
            className={`border bg-${
              typeColors[typeColors.indexOf(type.type.name)]
            } size-16`}
          />
        </div>
      ))
    ) : (
      <div>no type</div>
    );
  }

  function PokemonStats() {
    return pokemon.stats && pokemon.stats.length > 0 ? (
      pokemon.stats.map((stats, index) => (
        <div key={stats + index}>
          <div className="flex flex-col h-16 w-full">
            <div className="text-sm">{stats.stat.name}</div>
            <div className="w-3/4 h-8 bg-blue-400 rounded-full flex items-center">
              <div
                className="h-full flex items-center bg-blue-800 rounded-full"
                style={{ width: `${stats.base_stat}%` }}
              >
                {stats.base_stat}
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div>no stats</div>
    );
  }

  console.log(pokemon.name);

  return (
    <dialog className="modal" id="main_modal_1">
      <DexBG
        bodyStyle={`bg-gradient-to-r from-sky-600 via-bug to-sky-600 pb-12 min-w-80`}
      >
        <DexHeader>
          <XMarkIcon className="size-8" />
        </DexHeader>
        <div className="justify-center items-center flex flex-col relative w-full space-y-16">
          <DexLine bodyLinePlacement="flex w-full flex-col justify-start gap-y-2 items-center">
            <div className="flex justify-between w-full p-2">
              <button
                id="btn_pokemon_back"
                disabled={pokemonOrder <= 0}
                className="flex items-center justify-center size-16 transition ease-in-out hover:scale-125 duration-75"
                onClick={PokemonPrev}
              >
                <ChevronDoubleLeftIcon className="text-white" />
              </button>
              <button
                id="btn_pokemon_next"
                disabled={pokemonOrder >= pokemonQuantity}
                className="flex items-center justify-center size-16 transition ease-in-out hover:scale-125 duration-75"
                onClick={PokemonNext}
              >
                <ChevronDoubleRightIcon className="text-white" />
              </button>
            </div>
          </DexLine>
          <div className="size-content border-8 bg-gray-800 absolute rounded-full p-3 -top-24 flex items-center justify-center">
            <button>
              <img
                src={pokemon.sprite}
                alt=""
                className="flex items-center size-content justify-center hover:scale-125 animate-pulse"
              />
            </button>
          </div>
          <PokemonType />

          <div className="w-full gap-2 font-semibold text-4xl py-0.5 border-r-0 border-l-0 shadow-[0_0px_10px_2px_black] border-white border-4 m-8 items-center justify-center flex px-4 bg-slate-900 text-white">
            <h1>{pokemon.id}.</h1>

            <div>
              {pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1).replace(/-+/g, " ")}
            </div>
          </div>
        </div>
      </DexBG>
    </dialog>
  );
}
