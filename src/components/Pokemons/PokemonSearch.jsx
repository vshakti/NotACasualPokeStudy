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
  // pokemon,
  // setPokemonOrder,
}) {
  const resultSearch = document.getElementById("search_drop");
  const inputSearch = document.getElementById("pokemon_search");

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
          `<li onClick="SelectInput(this)" style="border-radius: 10px; padding: 0px 0px; cursor: pointer;">` +
          list.charAt(0).toUpperCase() +
          list.slice(1).replace(/-+/g, " ") +
          "</li>"
        );
      });
    resultSearch.innerHTML =
      "<ul style='width: 100%; padding: 0px 0px ; heigth: 100%; list-style-type: none;'>" +
      content.join("") +
      "</ul>";
  }

  //troca o estado dos resultados com hover
  // const listItems = resultSearch.querySelectorAll("li");
  // listItems.forEach((item) => {
  //   item.addEventListener("mouseover", function () {
  //     this.style.backgroundColor = "darkgrey";
  //   });
  //   item.addEventListener("mouseout", function () {
  //     this.style.backgroundColor = "";
  //   });
  // });

  return (
    <dialog className="modal" id="search_modal">
      <DexBG bodyStyle="w-content h-content overflow-visible pb-2 h-32 gap-y-2 bg-slate-300">
        <div className="size-32 w-full h-24 flex flex-row justify-between items-center px-1">
          {validSearch === 0 && (
            <span className="flex items-center justify-center text-slate-900 text-2xl animate-pulse">
              <ArrowPathIcon className="animate-spin size-6" /> Searching for...
              {/* {searchString} */}
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
          <div className=" gap-y-1 flex flex-col items-center justify-between min-h-12 max-h-full rounded-lg border bg-white">
            <div className="flex h-full items-center justify-center flex-row">
              <input
                id="pokemon_search"
                type="text"
                onClick={() => {
                  setValidSearch(0);
                  setSearchString("");
                }}
                placeholder="Pokemon..."
                value={searchString}
                className="bg-none h-full w-full rounded-full pl-2 text-xl focus:outline-none"
                onChange={(e) => {
                  setSearchString(e.target.value);
                  let result = [];
                  if (searchString.length) {
                    result = possiblePokemon.filter((keyword) => {
                      return keyword
                        .toLowerCase()
                        .includes(searchString.toLowerCase());
                    });
                  }
                  DisplaySearch(result);
                  console.log(searchString);
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
