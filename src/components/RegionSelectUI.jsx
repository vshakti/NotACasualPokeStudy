import { useState, useEffect } from "react";
import axios from "axios";
import { RegionSelector } from "../components/RegionSelector";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  XCircleIcon,
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
    scrollRegions.scrollLeft += 248;
  }

  function RegionPrev() {
    setRegionURLIndex((prevIndex) => Math.max(prevIndex - 1, 1));
    scrollRegions.style.scrollBehavior = "smooth";
    scrollRegions.scrollLeft -= 248;
  }

  return (
    <dialog className="modal" id="main_region_modal">
      <div className="pt-4 px-0 pb-0 fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
        <div className="modal-action flex place-self-center pb-4">
          <form method="dialog">
            <button>
              <div className="text-orange-400 bv bg-slate-900 rounded-full size-14 flex items-center justify-center shadow-[0_0px_10px_1px_black]">
                <XCircleIcon />
              </div>
            </button>
          </form>
        </div>

        <div className="flex-col space-y-4 rounded-3xl items-center bg-gradient-to-r from-red-900 via-red-400 to-red-900 shadow-[0_0px_50px_5px_black] border-4 border-slate-900 flex w-4/5 h-3/4">
          <div className=" flex mt-8 align-center mb-4">
            <div className="bg-slate-900 flex-row px-1 h-14 flex border-slate-500 border-4 w-60  rounded-full items-center shadow-[0_0px_10px_1px_black]"></div>
          </div>
          <div
            className="flex border-4 bg-slate-900 border-slate-500 pb-8 pr-1 pl-1 size-60 space-x-6 justify-start items-center pt-1.5 overflow-hidden shadow-[0_0px_10px_1px_black]"
            id="region_selector"
          >
            <RegionSelector pokeRegion={pokeRegion} RGB={RGB} />
          </div>
          <div
            id="location_display"
            className="flex border-4 overflow-hidden items-center justify-start bg-slate-900 rounded-lg border-slate-500 w-48 h-8"
          >
            <div className="flex flex-nowrap animate-scroll">
              <LocationsDisplay regionLoc={regionLoc} />
            </div>
          </div>
          <div className="flex items-center mt-6">
            <button
              id="btn_region_back"
              className="bg-slate-900 rounded-full flex items-center justify-center size-14 border-slate-500 border-4 shadow-[0_0px_10px_1px_black]"
              onClick={RegionPrev}
            >
              <ChevronDoubleLeftIcon className="text-white pr-1" />
            </button>
            <button>
              <div className="flex items-center flex-row h-12 w-32 ">
                <div className="absolute h-10 w-32 bg-slate-900 left-pointer  border-2 border-slate-500" />
                <div className="absolute h-10 w-32 bg-slate-900 right-pointer  border-2 border-slate-500" />
                <div className="absolute left-36 h-9 w-20 bg-slate-900 pt-1 pr-2 text-white ">
                  SELECT
                </div>
              </div>
            </button>
            <button
              id="btn_region_next"
              className="bg-slate-900 rounded-full flex items-center justify-center size-14 border-slate-500 border-4 shadow-[0_0px_10px_1px_black]"
              onClick={RegionNext}
            >
              <ChevronDoubleRightIcon className="text-white pl-1" />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
