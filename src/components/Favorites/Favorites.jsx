import "../../index.css";
import { DexBG, DexHeader } from "../PokedexComponents";
import { HeartIcon, XMarkIcon } from "@heroicons/react/16/solid";

export function Favorites({
  favorites,
  typeColorsBorder,
  typeColorsText,
  AddToFavorites,
  RemoveFromFavorites,
  typeColorsShadows,
  setPokemonName,
}) {
  return (
    <dialog className="modal" id="main_modal_2">
      <DexBG
        bodyStyle={`bg-gradient-to-t gap-y-6 max-w-96 from-bg-slate-900 via-cyan-900 to-bg-slate-800 pb-1 min-w-80`}
      >
        <DexHeader bgStyle="w-full border-r-0 border-l-0 mb-0 rounded-b-none h-16">
          <div className="w-max gap-x-36 flex items-center justify-between">
            <span className="font semibold text-4xl">Favorites</span>
            <form method="dialog">
              <button className="size-10 text-white mt-3.5">
                <XMarkIcon className="hover:scale-150 transition easy-in-out" />
              </button>
            </form>
          </div>
        </DexHeader>
        <div className="flex flex-row w-2/3 border items-center justify-center rounded-3xl bg-white h-7">
          <div className="text-xs">O\</div>
          <input
            className="rounded-3xl flex items-center px-2 h-full"
            type="text"
            placeholder="Pesquisar..."
          />
          <div className="text-xs">GO</div>
        </div>

        <div className="size-full">
          <ul className="flex items-start max-h-96 hide-scrollbar pt-2 overflow-y-scroll justify-around w-full flex-wrap gap-3 px-2">
            {favorites && favorites.length > 0 ? (
              favorites
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((pokemon) => (
                  <li key={pokemon.id} className="w-1/4 rounded">
                    <div
                      className={`flex items-center hover:scale-110 transition duration-300 relative flex-col py-0.5 justify-center border-b-2 rounded-lg ${
                        typeColorsBorder[pokemon.types[0].type.name]
                      }`}
                      onClick={() => {
                        setPokemonName(pokemon.name);
                        document.getElementById("pokemon_details").showModal();
                      }}
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
                        src={pokemon.sprite}
                        alt={pokemon.name}
                        className={`${
                          typeColorsBorder[pokemon.types[0].type.name]
                        } size-20`}
                      />
                      <p
                        className={`${
                          typeColorsText[pokemon.types[0].type.name]
                        }  font-medium tracking-wide ${
                          typeColorsBorder[pokemon.types[0].type.name]
                        }`}
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
                  YOU HAVE NO FAVORITES
                </span>
              </div>
            )}
          </ul>
        </div>
      </DexBG>
    </dialog>
  );
}
