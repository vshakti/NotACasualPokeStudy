import React from "react";
import { LocationsDisplay } from "./LocationsDisplay";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
} from "@heroicons/react/16/solid";
import * as Collapsible from "@radix-ui/react-collapsible";

function RegionDetails({
  pokeRegion,
  regionURLIndex,
  regionLoc,
  regionColor,
  setLocationId,
  areaNames,
  pokeEncounter,
  pokeEncounterSprite,
}) {
  const [open, setOpen] = React.useState(false);

  function AreaSprites() {
    return pokeEncounter &&
      pokeEncounter.length &&
      pokeEncounterSprite &&
      pokeEncounterSprite.length ? (
      pokeEncounter.map((encounter, index) => (
        <div
          key={encounter + index}
          className="font-sans rounded-xl w-fit flex-col h-fit border-slate-900 bg-slate-900 flex justify-center border-4 items-center font-bold text-sm"
        >
          <div className="size-18 bg-slate-500  bg-opacity-25 text-white">
            <img src={`${pokeEncounterSprite[index]}`} alt="" />
          </div>
          <div
            className="p-1 font-medium"
            style={{ color: `${regionColor[regionURLIndex - 1]}` }}
          >
            {encounter}
          </div>
        </div>
      ))
    ) : (
      <h1>Loading...</h1>
    );
  }

  function MapAreas({ areasStyle, areaStyleTextColor }) {
    return areaNames && areaNames.length ? (
      areaNames.map((area, index) => (
        <div
          key={area + index}
          className={`p-1 rounded-md w-fit h-fit bg-opacity-90 drop-shadow-1xl bg-slate-700 flex justify-center px-3 items-center font-bold text-sm ${areasStyle}`}
          style={{ color: `${areaStyleTextColor}` }}
        >
          <div className="text-2xl">
            {area.name.charAt(0).toUpperCase() +
              area.name.slice(1).replace(/-+/g, " ")}
          </div>
        </div>
      ))
    ) : (
      <h1>Loading...</h1>
    );
  }

  function Reset() {
    areaNames.length = 0;
    pokeEncounterSprite.length = 0;
    pokeEncounter.length = 0;
    history.replaceState(null, "remover region", "/");
  }

  return pokeRegion && pokeRegion.length ? (
    <dialog className="modal" id="region_datils">
      <div className="flex bg-white flex-col w-screen h-screen antialiased">
        <div
          style={{ color: `${regionColor[regionURLIndex - 1]}` }}
          className="flex flex-row bg-slate-800 bg-opacity-85 font-mono font-black items-center justify-between px-4 w-content"
        >
          <form
            method="dialog"
            className="flex modal-action items-center justify-center text-4xl"
          >
            <button onClick={Reset} id="region_close">
              <ArrowLeftIcon className="size-8" />
            </button>
          </form>

          <h1
            id="region_datils"
            className="flex flex-col items-end self-end justify-center text-6xl"
          >
            {pokeRegion[regionURLIndex - 1].name.charAt(0).toUpperCase() +
              pokeRegion[regionURLIndex - 1].name.slice(1)}
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="py-2 px-2 space-y-2 w-1/6 font-semibold border-r-2 h-full">
            <h2>Generations</h2>

            <div className="flex px-2 flex-col justify-around">
              <Collapsible.Root
                className="CollapsibleRoot"
                open={open}
                onOpenChange={setOpen}
              >
                <div className="flex flex-row items-center justify-between px-4">
                  <div className="text-2xl">Locations</div>
                  <Collapsible.Trigger asChild>
                    <button className="IconButton size-4">
                      {open ? (
                        <ChevronUpIcon className="size-8" />
                      ) : (
                        <ChevronDownIcon className="size-8" />
                      )}
                    </button>
                  </Collapsible.Trigger>
                </div>

                <Collapsible.Content>
                  <div className="flex w-48 ml-8 mt-4 flex-col space-y-3 overflow-hidden">
                    <LocationsDisplay
                      setLocationId={setLocationId}
                      regionLoc={regionLoc}
                      locationDisplayStyle="text-slate-950 text-sm pl-2 border-b-2 border-t-2"
                    />
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
            </div>
          </div>
          <div className="flex flex-col h-content items-center w-5/6">
            <div className="flex justify-center items-center flex-col p-4">
              <h2 className="text-6xl flex items-center justify-center w-max p-2 border-b-2 border-t-2 border-slate-900">
                NOTABLE AREAS
              </h2>
              <div className="flex flex-wrap p-2 space gap-8 justify-center items-center mt-4 size-content">
                <MapAreas
                  areaStyleTextColor={regionColor[regionURLIndex - 1]}
                />
              </div>
            </div>
            <div>
              <h2 className="text-6xl flex items-center justify-center w-max p-2 border-b-2 border-t-2 border-slate-900">
                POKEMON ENCOUNTERS
              </h2>
              <div className="flex flex-wrap p-2 space gap-8 mt-6 items-center justify-center">
                <AreaSprites />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  ) : (
    <h1>Loading...</h1>
  );
}
export default RegionDetails;
