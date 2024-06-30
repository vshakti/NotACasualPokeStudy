import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { LocationsDisplay } from "./LocationsDisplay";
import "../../index.css";
import {
  DexBG,
  DexHeader,
  DexLine,
  DexSelector,
  DexDisplay,
} from "../PokedexComponents";

export function RegionSelectorModal({
  pokeRegion,
  RGB,
  regionColor,
  regionURLIndex,
  setRegionURLIndex,
  regionLoc,
  pokebolaCount,
  possibleOptions,
}) {
  let scrollRegions = document.getElementById("region_selector");

  function RegionNext() {
    setRegionURLIndex((prevIndex) =>
      Math.min(prevIndex + 1, pokeRegion.length)
    );
    scrollRegions.style.scrollBehavior = "smooth";
    scrollRegions.scrollLeft += 144;
    document.getElementById("btn_region_next").disabled = true;
    setTimeout(function () {
      document.getElementById("btn_region_next").disabled = false;
    }, 250);
  }

  function RegionPrev() {
    setRegionURLIndex((prevIndex) => Math.max(prevIndex - 1, 1));
    scrollRegions.style.scrollBehavior = "smooth";
    scrollRegions.scrollLeft -= 144;
    document.getElementById("btn_region_back").disabled = true;
    setTimeout(function () {
      document.getElementById("btn_region_back").disabled = false;
    }, 250);
  }

  function RegionSelector({ pokeRegion, RGB }) {
    return pokeRegion && pokeRegion.length ? (
      pokeRegion.map((region, index) => (
        <div key={region + index} className="flex flex-col items-center">
          <div
            style={{ backgroundImage: `url(${RGB[index]})` }}
            className="animate-pulse shadow-regionSelectorRegion min-h-28 max-h-28 max-w-28 min-w-28 w-full flex bg-center notched-corner  transition ease-in-out hover:scale-150"
          />
        </div>
      ))
    ) : (
      <h1>Loading...</h1>
    );
  }

  function RegionName({ pokeRegion, regionURLIndex, regionNameStyle }) {
    return pokeRegion && pokeRegion.length ? (
      <h1
        className={`font-sans flex justify-center items-center font-bold text-3xl ${regionNameStyle}`}
      >
        {pokeRegion[regionURLIndex - 1].name.toUpperCase()}
      </h1>
    ) : (
      <h1>Loading...</h1>
    );
  }

  return (
    <dialog className="modal" id="main_modal_0">
      <DexBG bodyStyle="bg-gradient-to-t from-red-600 via-red-400 to-trasnparent space-y-6">
        <DexHeader
          closeStyle={`bg-red-600 shadow-[0_0px_8px_2px_red]`}
          blinkStyle1={`bg-green-500 shadow-[0_0px_8px_5px_green]`}
          blinkStyle2={`bg-yellow-300 shadow-[0_0px_8px_2px_yellow]`}
        >
          <XMarkIcon className="size-8" />
        </DexHeader>
        <div className="justify-center items-center flex flex-col relative">
          <DexLine bodyLinePlacement="flex place-items-center justify-between pt-4 space-x-44 w-72 h-16 py-4">
            <button
              id="btn_region_back"
              disabled={regionURLIndex <= 1}
              className="flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
              onClick={RegionPrev}
            >
              <ChevronDoubleLeftIcon className="text-white" />
            </button>
            <button
              id="btn_region_next"
              disabled={regionURLIndex >= pokeRegion.length}
              className="flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
              onClick={RegionNext}
              onKeyDown={() => {}}
            >
              <ChevronDoubleRightIcon className="text-white" />
            </button>
          </DexLine>
          <DexSelector
            possibleOptions={possibleOptions}
            pokebolaCount={pokebolaCount}
            pokeRegion={pokeRegion}
            regionURLIndex={regionURLIndex}
          >
            <div className="flex flex-row space-x-8">
              <RegionSelector pokeRegion={pokeRegion} RGB={RGB} />
            </div>
          </DexSelector>
          <DexDisplay displayStyle="h-8">
            <LocationsDisplay regionLoc={regionLoc} />
          </DexDisplay>

          <div
            className="w-full py-0.5 border-r-0 border-l-0 shadow-[0_0px_10px_2px_black] border-white border-4 m-8 items-center justify-center flex px-4 bg-slate-900 text-white"
            style={{ color: `${regionColor[regionURLIndex - 1]}` }}
          >
            <RegionName
              pokeRegion={pokeRegion}
              regionURLIndex={regionURLIndex}
              // regionNameStyle="animate-blink"
            />
          </div>
        </div>
      </DexBG>
    </dialog>
  );
}
