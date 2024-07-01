import "../../index.css";
import { DexBG, DexLine } from "../PokedexComponents";
import { useState } from "react";
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";
import { PokemonAbilities } from "./DetailsComponents/PokemonAbilities";
import { PokemonType } from "./DetailsComponents/PokemonType";
import { PokemonMoves } from "./DetailsComponents/PokemonMoves";
import { PokemonStats } from "./DetailsComponents/PokemonStats";

export default function PokemonDetails({
  typeColorsBg,
  pokemon,
  typeColorsText,
  typeColorsBorder,
  typeColorsShadows,
  setPokemonAbilitiesID,
  typeIcons,
  pokemonAbilities,
  setTypeID,
  pokemonType,
  setPokemonMovesID,
  pokemonMoves,
}) {
  const [currentView, setCurrentView] = useState("STATS");
  const [currentSprite, setCurrentSprite] = useState("NORMAL");

  const handleView = (view) => {
    setCurrentView(view);
  };

  return (
    <dialog className="modal" id="pokemon_details">
      <DexBG
        bgStyle={`${typeColorsBg[[pokemon.types[0]?.type.name]]} py-20`}
        bodyStyle="bg-slate-300 h-content relative w-96 max-h-full overflow-hidden"
      >
        <div className="bg-slate-900 flex-row justify-between px-2 pl-4 font-bold h-16 flex place-self-end border-white border-b-8 w-64 items-center shadow-regionSelectorClose">
          {pokemon.name.length >= 13 && (
            <h1
              className={`${
                typeColorsText[pokemon.types[0]?.type.name]
              } text-[1.23rem]`}
            >
              {pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1).replace(/-+/g, " ")}
            </h1>
          )}
          {pokemon.name.length > 6 && pokemon.name.length <= 12 && (
            <h1
              className={`${
                typeColorsText[pokemon.types[0]?.type.name]
              } text-[1.65rem]`}
            >
              {pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1).replace(/-+/g, " ")}
            </h1>
          )}
          {pokemon.name.length <= 6 && (
            <h1
              className={`${
                typeColorsText[pokemon.types[0]?.type.name]
              } text-4xl`}
            >
              {pokemon.name.charAt(0).toUpperCase() +
                pokemon.name.slice(1).replace(/-+/g, " ")}
            </h1>
          )}

          <form method="dialog">
            <button
              className="size-8 text-white mt-3.5"
              onClick={() => {
                setCurrentView("STATS");
                setCurrentSprite("NORMAL");
              }}
            >
              <XMarkIcon className="hover:scale-150 transition easy-in-out" />
            </button>
          </form>
        </div>
        <div className="w-full flex flex-col ">
          <div className="flex h-content min-h-44 w-full justify-between flex-row">
            <div className="flex items-start justify-end w-24 h-40 font-semibold text-base flex-col">
              <span className="pl-1.5">WEIGTH</span>
              <span className="font-bold border-l-0 rounded-r-lg px-2 bg-slate-900 text-white border-2">
                {pokemon.weight}
              </span>
              <span className="pl-1.5">HEIGTH</span>
              <span className="font-bold border-l-0 rounded-r-lg px-2 bg-slate-900 text-white border-2">
                {pokemon.height}
              </span>
            </div>

            <div className="flex w-64 h-40 flex-col">
              <div className="h-content flex-wrap border-b-4 rounded-bl-md border-white shadow-regionDisplay w-full flex py-0.5 gap-x-1 gap-y-0.5 justify-center flex-row items-start">
                <PokemonAbilities
                  pokemonAbilities={pokemonAbilities}
                  pokemon={pokemon}
                  setPokemonAbilitiesID={setPokemonAbilitiesID}
                />
              </div>
              <div className="flex items-center w-full justify-center h-full">
                <div className="flex flex-wrap w-content justify-evenly py-2 px-4 gap-4 rounded-2xl border-4 shadow-regionDisplay bg-slate-800">
                  <PokemonType
                    typeColorsBorder={typeColorsBorder}
                    typeColorsShadows={typeColorsShadows}
                    pokemon={pokemon}
                    typeIcons={typeIcons}
                    setTypeID={setTypeID}
                    pokemonType={pokemonType}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="h-12 justify-center">
            <div className="flex flex-wrap gap-11 justify-center bg-slate-800 border-t-8 shadow-regionSelectorLine w-full items-center py-2.5 font-semibold text-xl">
              <div
                onClick={() => handleView("STATS")}
                className={`border-b-2 border-t-2 rounded-md px-2 py-0.5 text-white hover:scale-150 transition easy-in-out cursor-pointer`}
              >
                STATS
              </div>
              <div
                onClick={() => handleView("MOVES")}
                className={`border-b-2 border-t-2 rounded-md px-2 py-0.5 text-white hover:scale-150 transition easy-in-out cursor-pointer`}
              >
                MOVES
              </div>
            </div>
          </div>
        </div>
        <DexLine
          bodyLineStyle="border-b-0 h-full mt-4 bg-slate-800"
          bodyLinePlacement="place-self-start w-96 pt-1"
        >
          {currentView === "STATS" && (
            <div className="min-h-64 w-full px-6 flex flex-col py-1 overflow-y-scroll hide-scrollbar">
              <PokemonStats
                pokemon={pokemon}
                typeColorsBg={typeColorsBg}
                typeColorsShadows={typeColorsShadows}
              />
            </div>
          )}

          {currentView === "MOVES" && (
            <div className="min-h-32 max-h-96 w-full flex py-4 items-center px-1.5 flex-wrap gap-5 pb-4 justify-center hide-scrollbar overflow-y-scroll">
              <PokemonMoves
                typeColorsBorder={typeColorsBorder}
                typeColorsBg={typeColorsBg}
                typeIcons={typeIcons}
                pokemonMoves={pokemonMoves}
                setPokemonMovesID={setPokemonMovesID}
                pokemon={pokemon}
                typeColorsShadows={typeColorsShadows}
              />
            </div>
          )}
        </DexLine>
        <div
          className={`${
            typeColorsBg[pokemon.types[0]?.type.name]
          } size-28 flex-col absolute border-8 bg-opacity-70 shadow-regionSelectorLine -top-2 -left-2 rounded-lg flex items-center justify-center`}
        >
          <div className="flex flex-row absolute w-full justify-end px-1 top-20">
            {currentSprite === "NORMAL" && (
              <EyeSlashIcon
                className={`drop-shadow-2xl text-slate-200 opacity-80 rounded-full hover:scale-125 transition easy-in-out size-4 cursor-pointer`}
                onClick={() =>
                  currentSprite === "NORMAL"
                    ? setCurrentSprite("SHINY")
                    : setCurrentSprite("NORMAL")
                }
              />
            )}
            {currentSprite === "SHINY" && (
              <EyeIcon
                className={`drop-shadow-2xl text-slate-200 opacity-80 rounded-full hover:scale-125 transition easy-in-out size-4 cursor-pointer`}
                onClick={() =>
                  currentSprite === "NORMAL"
                    ? setCurrentSprite("SHINY")
                    : setCurrentSprite("NORMAL")
                }
              />
            )}
          </div>
          {currentSprite === "NORMAL" && (
            <img
              src={pokemon.sprite}
              alt=""
              className="flex shadow-pokemonDetailsSprite items-center size-content justify-center"
            />
          )}
          {currentSprite === "SHINY" && (
            <img
              src={pokemon.spriteShiny}
              alt=""
              className="flex shadow-pokemonDetailsSprite items-center size-content justify-center"
            />
          )}
        </div>
      </DexBG>
    </dialog>
  );
}
