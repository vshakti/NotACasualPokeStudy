import { useState, useEffect } from "react";
import axios from "axios";
import { RegionSelector } from "../components/RegionSelector";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { LocationsDisplay } from "./LocationsDisplay";
import "../index.css";

export function RegionSelectorModal({ pokeRegion, RGB }) {
  const [regionLoc, setRegionLoc] = useState([]);
  const [regionURLIndex, setRegionURLIndex] = useState(1);
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
  }, [regionURLIndex, pokeRegion.length]);

  function RegionNext() {
    setRegionURLIndex((prevIndex) =>
      Math.min(prevIndex + 1, pokeRegion.length)
    );
    scrollRegions.style.scrollBehavior = "smooth";
    scrollRegions.scrollLeft += 130;
  }

  function RegionPrev() {
    setRegionURLIndex((prevIndex) => Math.max(prevIndex - 1, 1));
    scrollRegions.style.scrollBehavior = "smooth";
    scrollRegions.scrollLeft -= 130;
  }

  return (
    <dialog className="modal" id="main_region_modal">
      <div className="pt-4 px-0 pb- fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className="flex-col space-y-1 rounded-3xl items-center overflow-hidden bg-gradient-to-r from-orange-700 via-orange-600 to-orange-700 shadow-[0_0px_50px_5px_black] border-8 border-slate-900 flex">
          <div className=" flex align-center mb-8">
            <div className="bg-slate-900 flex-row mb-12 justify-evenly h-14 flex border-white border-8 w-60 border-t-0 rounded-b-3xl items-center">
              <div className="rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green]"></div>
              <div className="rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow]"></div>
              <div className="modal-action flex">
                <form method="dialog">
                  <button>
                    <div className="text-white rounded-full bg-red-600 h-8 w-14 flex items-center justify-center shadow-[0_0px_8px_2px_red]">
                      <XMarkIcon className="size-8" />
                    </div>
                  </button>
                </form>
              </div>
              <div className="rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow]"></div>
              <div className="rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green]"></div>
            </div>
          </div>
          <div className="justify-center items-center flex flex-col static">
            <div className="border-white border-8 flex w-72 border-l-0 border-r-0 bg-slate-900 h-20">
              <div className="min-w-full min-h-full items-center justify-start overflow-hidden flex">
                <div className="">
                  <div className="flex place-items-center justify-evenly pt-4 space-x-44 w-72  h-16 py-4">
                    <button
                      id="btn_region_back"
                      className=" flex items-center justify-center size-12 "
                      onClick={RegionPrev}
                    >
                      <ChevronDoubleLeftIcon className="text-white pr-1" />
                    </button>

                    <button
                      id="btn_region_next"
                      className=" flex items-center justify-center size-12 "
                      onClick={RegionNext}
                    >
                      <ChevronDoubleRightIcon className="text-white pl-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex border-8 absolute bg-slate-900 border-white pb-8 pr-8 pl-7 size-44 space-x-8 justify-start rounded-full pt-6 overflow-hidden shadow-[0_0px_40px_4px_black_inset]"
              id="region_selector"
            >
              <RegionSelector pokeRegion={pokeRegion} RGB={RGB} />
            </div>
          </div>
          <div>
            <div
              id="location_display"
              className="flex border-4 shadow-[0_0px_15px_1px_cyan_inset] mt-14 items-center overflow-hidden justify-start border-r-0 border-l-0 bg-slate-900 border-white w-72 h-8"
            >
              <div className="flex space-x-8 text-base animate-scroll">
                <LocationsDisplay regionLoc={regionLoc} />
              </div>
            </div>
          </div>
          <div>
            <button className="rounded-full shadow-[0_0px_10px_2px_black] border-white border-4 m-4 items-center justify-center flex size-20 bg-slate-900 text-white  te">
              SELECT
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
