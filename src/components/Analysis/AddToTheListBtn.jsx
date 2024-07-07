import "../../index.css";
import * as Popover from "@radix-ui/react-popover";
import {
  PlusCircleIcon,
  CheckIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";

export function BtnAnalysis({
  pokemon,
  analysis,
  setPokemonName,
  possiblePokemon,
  RemoveFromAnalysis,
  AddToAnalysis,
}) {
  const [search, setSearch] = useState("");

  const filteredAnalysis = possiblePokemon.filter((pokemon) =>
    pokemon.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Popover.Root>
      <Popover.Trigger>
        <PlusCircleIcon className="bg-slate-800 size-14 shadow-lg shadow-dark text-white rounded-full" />
      </Popover.Trigger>
      <Popover.Content
        side="center"
        sideOffset={60}
        align="center"
        alignOffset={20}
        className="hoverCardContent"
      >
        <div className="w-48 h-content max-h-96 rounded-xl bg-white  flex flex-col p-1.5">
          <div className="flex flex-row w-full border-4 items-start justify-center rounded-3xl bg-white h-7 pr-2">
            <input
              className="rounded-xl w-full focus:outline-none flex items-center px-2 h-full"
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <MagnifyingGlassIcon className="size-5 oapcity-50 text-dark" />
          </div>
          <div className="overflow-y-scroll h-content hide-scrollbar">
            {possiblePokemon && possiblePokemon.length > 0 ? (
              <>
                {filteredAnalysis.length > 0 ? (
                  filteredAnalysis
                    .sort((a, b) => a.localeCompare(b))
                    .map((poke, index) => (
                      <div
                        key={poke + index}
                        className="flex parent rounded-lg px-1 font-medium w-full flex-row hover:bg-slate-800 hover:text-white cursor-pointer items-center justify-between text-lg"
                      >
                        {analysis.some((analysi) => analysi.name === poke) ? (
                          <>
                            <span
                              onMouseOver={() => {
                                setPokemonName(poke);
                              }}
                              onClick={() => {
                                RemoveFromAnalysis(pokemon);
                              }}
                              className="w-full"
                            >
                              {poke.charAt(0).toUpperCase() +
                                poke.slice(1).replace(/-+/g, " ")}
                            </span>
                            <CheckIcon className="size-4 border-2 border-slate-800 rounded-full child" />
                          </>
                        ) : (
                          <>
                            <span
                              onMouseOver={() => {
                                setPokemonName(poke);
                              }}
                              onClick={() => {
                                AddToAnalysis(pokemon);
                              }}
                              className="w-full"
                            >
                              {poke.charAt(0).toUpperCase() +
                                poke.slice(1).replace(/-+/g, " ")}
                            </span>
                            <span className="size-4 border-2 border-slate-800 rounded-full child hover:border-white"></span>
                          </>
                        )}
                      </div>
                    ))
                ) : (
                  <div>No matching Pokémon found.</div>
                )}
              </>
            ) : (
              <div>no pokemon lol</div>
            )}
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
