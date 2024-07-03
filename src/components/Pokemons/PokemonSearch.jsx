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
  possiblePokemon,
  setPokemonName,
}) {
  const resultSearch = document.getElementById("search_drop");
  const inputSearch = document.getElementById("pokemon_search");

  function StringDiferentiation(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    var matrix = [];

    for (var i = 0; i <= b.length; i++) {
      matrix[i] = [i];
    }

    for (var j = 0; j <= a.length; j++) {
      matrix[0][j] = j;
    }

    for (i = 1; i <= b.length; i++) {
      for (j = 1; j <= a.length; j++) {
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }

    return matrix[b.length][a.length];
  }

  //função ir até o pokemon clicando na lista de resultados
  function SelectInput(list) {
    inputSearch.value = list.innerHTML;
    resultSearch.innerHTML = "";
    setSearchString("");
    setPokemonName(inputSearch.value.toLowerCase().replace(" ", "-"));
    document.getElementById("search_modal").close();
    setValidSearch(0);
  }

  window.SelectInput = SelectInput;

  //função para preencher com os possiveis resultados
  function DisplaySearch(result) {
    const content = result
      .sort((a, b) => a.localeCompare(b))
      .map((list) => {
        return (
          `<li onClick="SelectInput(this)" class="hover:bg-slate-800 hover:text-white rounded-lg p-2 cursor-pointer">` +
          list.charAt(0).toUpperCase() +
          list.slice(1).replace(/-+/g, " ") +
          "</li>"
        );
      });
    resultSearch.innerHTML =
      `<ul class="w-full hide-scrollbar h-content max-h-96 list-none overflow-y-scroll">` +
      content.join("") +
      "</ul>";
  }

  return (
    <dialog className="modal" id="search_modal">
      <DexBG bodyStyle="w-content h-content overflow-visible pb-2 h-32 gap-y-2 bg-slate-300">
        <div className="size-32 w-full h-24 flex flex-row justify-between items-center px-1">
          {validSearch === 0 && (
            <div className="flex flex-row items-center justify-between px-2 w-2/3">
              <ArrowPathIcon className="animate-spin size-6" />
              <span className="flex items-center justify-center text-slate-900 text-2xl animate-pulse">
                Searching
                {/* {searchString} */}
              </span>
            </div>
          )}
          {validSearch === 1 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl">
              {searchString.charAt(0).toUpperCase() + searchString.slice(1)} was
              found!
            </span>
          )}
          {validSearch === 2 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl">
              {searchString.charAt(0).toUpperCase() + searchString.slice(1)} was
              not found!
            </span>
          )}
          <form method="dialog" className="flex items-center justify-center">
            <button
              id="btn_quit_search"
              onClick={() => {
                setValidSearch(0);
                setSearchString("");
              }}
            >
              <XMarkIcon className="size-10 text-slate-900 place-self-end drop-shadow-2xl shadow-black transition hover:scale-110 easy-in-out" />
            </button>
          </form>
        </div>
        <div className="flex w-5/6 flex-row items-start justify-center">
          <div className="flex flex-col items-center justify-between min-h-12 max-h-full rounded-lg border bg-white">
            <div className="flex h-full items-end justify-center flex-row">
              <input
                id="pokemon_search"
                type="text"
                onClick={() => {
                  setValidSearch(0);
                  setSearchString("");
                }}
                placeholder="Pokemon..."
                value={searchString}
                className="bg-none h-8 w-full rounded-full pl-2 text-xl focus:outline-none"
                onChange={(e) => {
                  setSearchString(e.target.value);
                  let result = [];
                  if (searchString.length) {
                    // result = possiblePokemon.filter((keyword) => {
                    //   return keyword
                    //     .toLowerCase()
                    //     .includes(searchString.toLowerCase());
                    // });
                    result = possiblePokemon.filter((pokemonName) => {
                      return (
                        StringDiferentiation(
                          searchString,
                          pokemonName.toLowerCase()
                        ) <= 3.5
                      );
                    });
                  }
                  DisplaySearch(result);
                  if (!result.length) {
                    document.getElementById("search_drop").innerHTML =
                      "No results";
                  }
                }}
              />
              <button onClick={CheckSearch}>
                <ChevronRightIcon className="size-8 transition hover:scale-125 easy-in-out" />
              </button>
            </div>
            <div
              id="search_drop"
              className={`w-full hoverCardContent py-1 items-start ${
                !searchString ? "opacity-0 h-0" : "h-content"
              } border-t-2 flex rounded-b-lg bg-white px-2 overflow-scroll hide-scrollbar text-xl font-medium justify-start`}
            ></div>
          </div>
        </div>
      </DexBG>
    </dialog>
  );
}
