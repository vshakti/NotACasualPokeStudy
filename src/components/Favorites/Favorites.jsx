import "../../index.css";
import { useState } from "react";
import { DexBG, DexLine } from "../PokedexComponents";
import { HeartIcon, XMarkIcon, MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export function Favorites({
  favorites,
  typeColorsBorder,
  typeColorsText,
  AddToFavorites,
  RemoveFromFavorites,
  typeColorsShadows,
  setPokemonName,
}) {
  const [search, setSearch] = useState('');

  const filteredFavorites = favorites.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <dialog className="modal" id="main_modal_2">
      <DexBG
        bodyStyle={`bg-gradient-to-t gap-y-6 max-w-96 from-bg-slate-900 via-cyan-900 to-bg-slate-800 pb-1 min-w-80`}
      >
        <DexLine bodyLineStyle="border-t-0" bodyLinePlacement="w-full border-r-0 border-l-0 mb-0 rounded-b-none h-16">
          <div className="flex items-center justify-between w-full px-2">
            <span className="font semibold text-5xl text-white">Favorites</span>
            <form method="dialog">
              <button className="size-10 text-white mt-3.5">
                <XMarkIcon onClick={()=> {setSearch('')}} className="hover:scale-150 transition easy-in-out" />
              </button>
            </form>
          </div>
        </DexLine>
        <div className="flex flex-row w-2/3 border items-center justify-center rounded-3xl bg-white h-7 pr-2">
          <input
            className="rounded-3xl focus:outline-none flex items-center px-2 h-full"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <MagnifyingGlassIcon className="size-32 oapcity-50 text-dark"/>
        </div>

        <div className="size-full">
          <ul className="flex items-start max-h-96 hide-scrollbar pt-2 pb-1 overflow-y-scroll justify-around w-full flex-wrap gap-3 px-2">
         {favorites && favorites.length > 0 ? (
          <> {filteredFavorites.length > 0 ? (
              filteredFavorites
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((pokemon) => (
                  <li key={pokemon.id} className="w-1/4 rounded">
                    <div
                      className={`flex items-center hover:scale-110 transition duration-300 relative flex-col py-0.5 justify-center border-b-2 rounded-lg ${
                        typeColorsBorder[pokemon.types[0].type.name]
                      }`}
                      
                    >
                      {!favorites.some((fav) => fav.id === pokemon.id) ? (
                        <button
                          onClick={() => AddToFavorites(pokemon)}
                          className="absolute -right-0 -top-0"
                        >
                          <HeartIcon className="size-6 text-gray-400 shadow-gray-600 shadow-2xl" />
                        </button>
                      ) : (
                        <button
                          onClick={() => RemoveFromFavorites(pokemon)}
                          className="absolute -right-0 -top-0"
                        >
                          <HeartIcon
                            className={`size-6 rounded-full ${
                              typeColorsShadows[pokemon.types[0].type.name]
                            } ${typeColorsText[pokemon.types[0].type.name]}`}
                          />
                        </button>
                      )}
                      <img
                        onClick={() => {
                          setPokemonName(pokemon.name);
                          document.getElementById("pokemon_details").showModal();
                        }}
                        src={pokemon.sprite}
                        alt={pokemon.name}
                        className={`${
                          typeColorsBorder[pokemon.types[0].type.name]
                        } cursor-pointer size-20`}
                      />
                      <p
                        onClick={() => {
                          setPokemonName(pokemon.name);
                          document.getElementById("pokemon_details").showModal();
                        }}
                        className={`${
                          typeColorsText[pokemon.types[0].type.name]
                        }  font-medium tracking-wide ${
                          typeColorsBorder[pokemon.types[0].type.name]
                        } cursor-pointer`}
                      >
                        {pokemon.name.charAt(0).toUpperCase() +
                          pokemon.name.slice(1).replace(/-+/g, " ")}
                      </p>
                    </div>
                  </li>
                ))
            ) : (
              <div className="pb-6">
                <span className="text-white font-medium text-xl px-2 py-1 rounded-xl border-2 bg-slate-800">
                  No pokemon with this name
                </span>
              </div>
            )}</>) : ( <div className="pb-6">
              <span className="text-white font-medium text-xl px-2 py-1 rounded-xl border-2 bg-slate-800">
                You have no favorites
              </span>
            </div>)}
          
          </ul>
        </div>
      </DexBG>
    </dialog>
  );
}
