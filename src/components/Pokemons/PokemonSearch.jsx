import { DexBG } from "../PokedexComponents";
import {
  XMarkIcon,
  ChevronRightIcon,
  ArrowPathIcon,
} from "@heroicons/react/16/solid";

export function PokemonSearchModal({
  searchString,
  setSearchString,
  CheckSearch,
  validSearch,
  setValidSearch,
  // pokemon,
  // setPokemonOrder,
}) {
  return (
    <dialog className="modal" id="search_modal">
      <DexBG bodyStyle="w-content pt-1 pb-2 h-44 gap-y-2 bg-slate-300">
        <div className="size-32 w-full h-24 flex flex-col items-center">
          <form method="dialog">
            <button
              className=""
              id="btn_quit_search"
              onClick={() => {
                setValidSearch(0);
                setSearchString("");
              }}
            >
              <XMarkIcon className="border-2 size-10 rounded-full text-white bg-slate-900 drop-shadow-2xl shadow-black transition hover:scale-110 easy-in-out" />
            </button>
          </form>

          {validSearch === 0 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl animate-pulse">
              <ArrowPathIcon className="animate-spin size-6" /> Searching for...
              {searchString}
            </span>
          )}
          {validSearch === 1 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl">
              {searchString.charAt(0).toUpperCase() + searchString.slice(1)} was
              found!
            </span>
          )}
          {validSearch === 2 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl">
              {searchString.charAt(0).toUpperCase() + searchString.slice(1)} is
              not here!
            </span>
          )}
        </div>
        <div className="w-5/6 flex flex-row items-center justify-between focus:outline-red-700 h-12 rounded-full border bg-white">
          <input
            type="text"
            onClick={() => {
              setValidSearch(0);
              setSearchString("");
            }}
            placeholder="Pokemon..."
            value={searchString}
            className="bg-none h-full w-full rounded-full pl-2 text-xl focus:outline-none"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button onClick={CheckSearch}>
            <ChevronRightIcon className="size-8 transition hover:scale-125 easy-in-out" />
          </button>
        </div>
      </DexBG>
    </dialog>
  );
}
