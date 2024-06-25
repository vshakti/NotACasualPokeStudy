import { useEffect } from "react";
import axios from "axios";
import { RegionName, RegionSelector } from "../components/RegionSelector";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { LocationsDisplay } from "./LocationsDisplay";
import "../index.css";
import {
  DexBG,
  DexHeader,
  DexLine,
  DexSelector,
  DexDisplay,
} from "./PokedexComponents";

export function RegionSelectorModal({
  pokeRegion,
  RGB,
  regionColor,
  regionURLIndex,
  setRegionURLIndex,
  regionLoc,
  setRegionLoc,
  pokebolaCount,
  possibleOptions,
}) {
  let scrollRegions = document.getElementById("region_selector");

  useEffect(() => {
    if (regionURLIndex > 0 && regionURLIndex <= pokeRegion.length) {
      axios
        .get(`https://pokeapi.co/api/v2/region/${regionURLIndex}`)
        .then((response) => {
          setRegionLoc(response.data.locations);
        })
        .catch((error) => {
          console.error(
            ".get(`https://pokeapi.co/api/v2/region/${regionURLIndex}`)",
            error
          );
        });
    }
  }, [regionURLIndex, pokeRegion.length, setRegionLoc]);

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
    console.log(pokebolaCount, possibleOptions[pokebolaCount]);
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

  return (
    <dialog className="modal" id="main_modal_0">
      <DexBG>
        <DexHeader>
          <XMarkIcon className="size-8" />
        </DexHeader>
        <div className="justify-center items-center flex flex-col relative">
          <DexLine>
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
            >
              <ChevronDoubleRightIcon className="text-white" />
            </button>
          </DexLine>
          <DexSelector>
            <RegionSelector pokeRegion={pokeRegion} RGB={RGB} />
          </DexSelector>
          <DexDisplay>
            <LocationsDisplay regionLoc={regionLoc} />
          </DexDisplay>
          <div>
            <button
              className="transition ease-in-out hover:scale-110 duration-75 rounded-full shadow-[0_0px_10px_2px_black] border-white border-4 m-8 items-center justify-center flex pb-1 px-4 bg-slate-900 text-white"
              style={{ color: `${regionColor[regionURLIndex - 1]}` }}
              onClick={() => {
                history.pushState(
                  null,
                  "pokedex",
                  `/${possibleOptions[pokebolaCount].toLowerCase()}/${
                    pokeRegion[regionURLIndex - 1].name
                  }`
                );
              }}
            >
              <RegionName
                pokeRegion={pokeRegion}
                regionURLIndex={regionURLIndex}
              />
            </button>
          </div>
        </div>
      </DexBG>
    </dialog>
  );
}
