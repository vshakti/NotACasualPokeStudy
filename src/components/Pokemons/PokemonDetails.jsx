import "../../index.css";
import { DexBG, DexLine } from "../PokedexComponents";
import { useState } from "react";
import { XMarkIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/16/solid";

export default function PokemonDetails({
  typeColorsBg,
  pokemon,
  typeColorsText,
  PokemonStats,
  PokemonType,
  PokemonAbilities,
  typeColorsBorder,
  typeColorsShadows,
  PokemonMoves,
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
          <h1
            className={`${
              typeColorsText[pokemon.types[0]?.type.name]
            } text-4xl`}
          >
            {pokemon.name.charAt(0).toUpperCase() +
              pokemon.name.slice(1).replace(/-+/g, " ")}
          </h1>

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
        <div className="w-full flex flex-col gap-y-2">
          <div className="flex h-content min-h-16 w-full justify-between flex-row">
            <span className="flex items-end justify-start w-24 -mb-1.5 font-semibold pl-2 text-sm">
              Weigth: {pokemon.weight}
            </span>
            <div className="flex flex-wrap w-64 justify-start py-1 px-1">
              <PokemonType />
            </div>
          </div>
          <div className="h-12 flex flex-wrap items-center justify-center gap-4 mt-2">
            <div
              onClick={() => handleView("STATS")}
              className={`${typeColorsShadows[pokemon.types[0]?.type.name]} ${
                typeColorsBorder[pokemon.types[0]?.type.name]
              } border-2 px-2 py-0.5 bg-slate-800 text-white rounded-2xl hover:scale-125 transition easy-in-out cursor-pointer`}
            >
              STATS
            </div>
            <div
              onClick={() => handleView("ABILITIES")}
              className={`${typeColorsShadows[pokemon.types[0]?.type.name]} ${
                typeColorsBorder[pokemon.types[0]?.type.name]
              } border-2 px-2 py-0.5 bg-slate-800 text-white rounded-2xl hover:scale-125 transition easy-in-out cursor-pointer`}
            >
              ABILITIES
            </div>
            <div
              onClick={() => handleView("MOVES")}
              className={`${typeColorsShadows[pokemon.types[0]?.type.name]} ${
                typeColorsBorder[pokemon.types[0]?.type.name]
              } border-2 px-2 py-0.5 bg-slate-800 text-white rounded-2xl hover:scale-125 transition easy-in-out cursor-pointer`}
            >
              MOVES
            </div>
          </div>
        </div>
        <DexLine
          bodyLineStyle="border-b-0 h-full mt-4 bg-slate-800"
          bodyLinePlacement="place-self-start w-96 pt-1"
        >
          {currentView === "STATS" && (
            <div className="min-h-64 w-full px-6 flex flex-col py-1 overflow-y-scroll hide-scrollbar">
              <PokemonStats />
            </div>
          )}
          {currentView === "ABILITIES" && (
            <div className="h-full w-full flex py-4 items-center flex-wrap gap-4 justify-center">
              <PokemonAbilities />
            </div>
          )}
          {currentView === "MOVES" && (
            <div className="min-h-32 max-h-96 w-full flex py-4 items-center px-1.5 flex-wrap gap-5 pb-4 justify-center hide-scrollbar overflow-y-scroll">
              <PokemonMoves />
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
              <EyeIcon
                className={`drop-shadow-2xl text-slate-200 opacity-80 rounded-full hover:scale-125 transition easy-in-out size-4 cursor-pointer`}
                onClick={() =>
                  currentSprite === "NORMAL"
                    ? setCurrentSprite("SHINY")
                    : setCurrentSprite("NORMAL")
                }
              />
            )}
            {currentSprite === "SHINY" && (
              <EyeSlashIcon
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
