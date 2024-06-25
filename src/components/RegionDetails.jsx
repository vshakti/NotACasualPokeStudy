import React from "react";
import { LocationsDisplay } from "./LocationsDisplay";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import * as Collapsible from "@radix-ui/react-collapsible";

export function RegionDetails({
  pokeRegion,
  regionURLIndex,
  regionLoc,
  regionColor,
  setLocationId,
  areaNames,
}) {
  const [open, setOpen] = React.useState(false);

  function MapAreas({ areasStyle }) {
    return areaNames && areaNames.length ? (
      areaNames.map((area) => (
        <div
          key={area}
          className={`font-sans rounded-xl w-fit h-fit py-2 border bg-slate-700 flex justify-center px-2 items-center font-bold text-sm ${areasStyle}`}
        >
          {area.name.charAt(0).toUpperCase() +
            area.name
              .slice(1)
              .replace("-", " ")
              .replace("--", " ")
              .replace("-", " ")
              .replace("-", " ")
              .replace("-", " ")
              .replace("-", " ")}
        </div>
      ))
    ) : (
      <h1>Loading...</h1>
    );
  }

  return pokeRegion && pokeRegion.length ? (
    <dialog className="modal" id="region_datils">
      <div className="flex bg-white flex-col w-96 h-content antialiased">
        <div
          style={{ color: `${regionColor[regionURLIndex - 1]}` }}
          className="flex flex-row bg-slate-500 font-serif items-center justify-between px-4 w-96 h-content"
        >
          <div className="flex modal-action items-center justify-center text-4xl">
            <form method="dialog">
              <button>X</button>
            </form>
          </div>
          <h1
            id="region_datils"
            className="flex flex-col items-end self-end justify-center text-6xl font-semibold"
          >
            {pokeRegion[regionURLIndex - 1].name.charAt(0).toUpperCase() +
              pokeRegion[regionURLIndex - 1].name.slice(1)}
          </h1>
        </div>
        <div className="flex flex-row">
          <div className="py-2 px-2 space-y-2 w-2/5 h-96 font-semibold">
            <h2>Generations</h2>

            <div className="flex px-2 flex-col space-y-2">
              <Collapsible.Root
                className="CollapsibleRoot"
                open={open}
                onOpenChange={setOpen}
              >
                <div className="flex flex-row items-center justify-between">
                  <div>Locations</div>
                  <Collapsible.Trigger asChild>
                    <button className="IconButton size-4">
                      {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </button>
                  </Collapsible.Trigger>
                </div>

                <Collapsible.Content>
                  <div className="flex w-32 flex-col space-y-1 overflow-hidden">
                    <LocationsDisplay
                      setLocationId={setLocationId}
                      regionLoc={regionLoc}
                      locationDisplayStyle="text-slate-950 text-sm pl-2"
                    />
                  </div>
                </Collapsible.Content>
              </Collapsible.Root>
              <div className="flex flex-row items-center justify-between">
                <div>Pokedexes</div>
                <div>
                  <ChevronDownIcon className="text-black size-4 flex" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid-flow-row-dense border w-3/5 h-96">
            <MapAreas areasStyle="" />
          </div>
        </div>
      </div>
    </dialog>
  ) : (
    <h1>Loading...</h1>
  );
}
