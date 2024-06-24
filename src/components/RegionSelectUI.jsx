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

export function RegionSelectorModal({
  pokeRegion,
  RGB,
  regionColor,
  regionURLIndex,
  setRegionURLIndex,
  regionLoc,
  setRegionLoc,
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
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className="flex-col space-y-1 rounded-3xl items-center overflow-hidden bg-gradient-to-r from-red-700 via-red-400 to-red-700 shadow-[0_0px_50px_5px_black] border-0.75 border-double border-slate-900 flex">
          <div className=" flex align-center mb-8">
            <div className="bg-slate-900 flex-row mb-12 justify-evenly h-14 flex border-white border-8 w-60 border-t-0 rounded-b-3xl items-center shadow-regionSelectorClose">
              <div className="rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green]">
                <div className="animate-blink rounded-full size-4 bg-green-500 shadow-[0_0px_8px_5px_green]"></div>
              </div>
              <div className="rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow]">
                <div className="animate-blink rounded-full size-4 bg-yellow-300 shadow-[0_0px_8px_2px_yellow]"></div>
              </div>
              <div className="modal-action flex">
                <form method="dialog">
                  <button>
                    <div className="text-white rounded-full bg-red-600 h-8 w-14 flex items-center justify-center shadow-[0_0px_8px_2px_red] transition ease-in-out hover:scale-110 duration-75">
                      <XMarkIcon className="size-8" />
                    </div>
                  </button>
                </form>
              </div>
              <div className="rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow]">
                <div className="animate-blink rounded-full size-4 bg-yellow-300 shadow-[0_0px_8px_2px_yellow]"></div>
              </div>
              <div className="rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green]">
                <div className="animate-blink rounded-full size-4 bg-green-500 shadow-[0_0px_8px_5px_green]"></div>
              </div>
            </div>
          </div>
          <div className="justify-center items-center flex flex-col relative">
            <div className="shadow-regionSelectorLine static border-white border-8 flex w-72 border-l-0 border-r-0 bg-slate-900 h-20">
              <div className="min-w-full min-h-full items-center justify-start overflow-hidden flex">
                <div className="">
                  <div className="flex place-items-center justify-evenly pt-4 space-x-44 w-72  h-16 py-4">
                    <button
                      id="btn_region_back"
                      disabled={regionURLIndex <= 1}
                      className=" flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
                      onClick={RegionPrev}
                    >
                      <ChevronDoubleLeftIcon className="text-white" />
                    </button>
                    <button
                      id="btn_region_next"
                      disabled={regionURLIndex >= pokeRegion.length}
                      className=" flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
                      onClick={RegionNext}
                    >
                      <ChevronDoubleRightIcon className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex border-8 shadow-regionSelector absolute bg-slate-900 border-white pr-10 pl-6 size-44 space-x-8 justify-start rounded-full pt-6 overflow-hidden"
              id="region_selector"
            >
              <RegionSelector pokeRegion={pokeRegion} RGB={RGB} />
            </div>
          </div>
          <div>
            <div
              id="location_display"
              className="flex border-4 shadow-regionDisplay mt-14 items-center overflow-hidden justify-start border-r-0 border-l-0 bg-slate-900 border-white w-72 h-8"
            >
              <div className="flex space-x-8 text-base animate-scroll">
                <LocationsDisplay regionLoc={regionLoc} />
              </div>
            </div>
          </div>
          <div>
            <button
              className="transition ease-in-out hover:scale-110 duration-75 rounded-full shadow-[0_0px_10px_2px_black] border-white border-4 m-8 items-center justify-center flex pb-1 px-4 bg-slate-900 text-white"
              style={{ color: `${regionColor[regionURLIndex - 1]}` }}
            >
              <RegionName
                pokeRegion={pokeRegion}
                regionURLIndex={regionURLIndex}
              />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
