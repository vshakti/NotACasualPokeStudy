import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  ArrowPathIcon,
} from "@heroicons/react/16/solid";

import "../../index.css";
import { DexBG, DexHeader, DexLine } from "../PokedexComponents";

export function PokemonSelectorModal({
  setPokemonOrder,
  pokemonOrder,
  pokemon,
  typeColorsText,
  typeColorsBg,
  typeColorsShadows,
  pokemonTotal,
}) {
  function PokemonNext() {
    setPokemonOrder((prevIndex) =>
      Math.min(prevIndex + 1, pokemonTotal.length)
    );
  }

  function PokemonNext50() {
    setPokemonOrder((prevIndex) =>
      Math.min(prevIndex + 50, pokemonTotal.length)
    );
  }

  function PokemonPrev() {
    setPokemonOrder((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  function PokemonPrev50() {
    setPokemonOrder((prevIndex) => Math.max(prevIndex - 50, 0));
  }

  let blinkType;
  pokemon.types.length == 2
    ? (blinkType = `${typeColorsBg[pokemon.types[1]?.type.name]} ${
        typeColorsShadows[pokemon.types[1]?.type.name]
      }`)
    : (blinkType = `${typeColorsBg[pokemon.types[0]?.type.name]} ${
        typeColorsShadows[pokemon.types[0]?.type.name]
      }`);

  return (
    <dialog className="modal" id="main_modal_1">
      <DexBG
        bodyStyle={`bg-gradient-to-t from-grass via-cyan-700 to-transparent pb-12 min-w-80`}
      >
        <DexHeader
          closeStyle={`${
            typeColorsShadows[pokemon.types[0]?.type.name]
          } hover:${
            typeColorsBg[pokemon.types[0]?.type.name]
          } hover:shadow-none`}
          blinkStyle1={`${typeColorsBg[pokemon.types[0]?.type.name]} ${
            typeColorsShadows[pokemon.types[0]?.type.name]
          }
          `}
          blinkStyle2={blinkType}
        >
          <XMarkIcon className="size-8" />
        </DexHeader>
        <div className="justify-center via- items-center flex flex-col relative w-full space-y-16">
          <DexLine bodyLinePlacement="flex w-full flex-col justify-start gap-y-2 items-center">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-row items-center">
                <button
                  id="btn_pokemon_back"
                  disabled={pokemonOrder <= 0}
                  className="flex items-center justify-center size-8 transition ease-in-out hover:scale-125 duration-75"
                  onClick={PokemonPrev}
                >
                  <ChevronLeftIcon className="text-white" />
                </button>
                <button
                  id="btn_pokemon_back_50"
                  disabled={pokemonOrder <= 0 + 49}
                  className="flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
                  onClick={PokemonPrev50}
                >
                  <ChevronDoubleLeftIcon className="text-white" />
                </button>
              </div>
              <div className="flex flex-row items-center">
                <button
                  id="btn_pokemon_next_50"
                  disabled={pokemonOrder >= pokemonTotal.length - 49}
                  className="flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
                  onClick={PokemonNext50}
                >
                  <ChevronDoubleRightIcon className="text-white" />
                </button>
                <button
                  id="btn_pokemon_next"
                  disabled={pokemonOrder >= pokemonTotal.length}
                  className="flex items-center justify-center size-8 transition ease-in-out hover:scale-125 duration-75"
                  onClick={PokemonNext}
                >
                  <ChevronRightIcon className="text-white" />
                </button>
              </div>
            </div>
          </DexLine>
          <div className="size-content border-8 bg-gray-800 absolute rounded-full shadow-pokemonDetailsSprite -top-20 flex items-center justify-center">
            <button
              onClick={() => {
                document.getElementById("pokemon_details").showModal();
              }}
            >
              {pokemon.sprite ? (
                <img
                  src={pokemon.sprite}
                  alt=""
                  className="flex items-center rounded-full size-content justify-center hover:scale-125 animate-pulse"
                />
              ) : (
                <div className="flex items-center size-content justify-center hover:scale-125 animate-pulse">
                  <ArrowPathIcon className="animate-spin" />
                </div>
              )}
            </button>
          </div>

          <div className="w-full gap-2 font-semibold text-4xl py-0.5 border-r-0 border-l-0 shadow-regionSelectorLine border-white border-8 m-8 items-center justify-end flex px-0.5 bg-slate-900 text-white">
            <pre className="flex flex-row w-full justify-center items-center">
              {pokemon.name.length >= 13 && (
                <h1
                  className={`${
                    typeColorsText[pokemon.types[0]?.type.name]
                  } text-[1.2rem] flex flex-row`}
                >
                  <pre>{pokemon.id} </pre>
                  {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1).replace(/-+/g, " ")}
                </h1>
              )}
              {pokemon.name.length > 6 && pokemon.name.length <= 12 && (
                <h1
                  className={`${
                    typeColorsText[pokemon.types[0]?.type.name]
                  } text-3xl flex flex-row`}
                >
                  <pre>{pokemon.id} </pre>
                  {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1).replace(/-+/g, " ")}
                </h1>
              )}
              {pokemon.name.length <= 6 && (
                <h1
                  className={`${
                    typeColorsText[pokemon.types[0]?.type.name]
                  } text-4xl flex flex-row`}
                >
                  <pre>{pokemon.id} </pre>
                  {pokemon.name.charAt(0).toUpperCase() +
                    pokemon.name.slice(1).replace(/-+/g, " ")}
                </h1>
              )}

              <h1
                className={`${typeColorsText[pokemon.types[0]?.type.name]}`}
              ></h1>
            </pre>

            <MagnifyingGlassIcon
              className="size-4 transition easy-in-out opacity-30 hover:scale-150 fixed cursor-pointer"
              onClick={() => {
                document.getElementById("search_modal").showModal();
              }}
            />
          </div>
        </div>
      </DexBG>
    </dialog>
  );
}
