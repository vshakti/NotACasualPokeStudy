import { LocationsDisplay } from "./LocationsDisplay";
import { ChevronDownIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";

import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { DexBG } from "../PokedexComponents";

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
  function AreaSprites() {
    return pokeEncounter &&
      pokeEncounter.length &&
      pokeEncounterSprite &&
      pokeEncounterSprite.length ? (
      pokeEncounter.map((encounter, index) => (
        <div
          key={encounter + index}
          className="font-sans rounded-sm w-fit flex-col h-fit border-slate-500 flex justify-center border-2 items-center font-bold text-base drop-shadow-2xl  transition ease-in-out hover:scale-105 duration-75"
        >
          <div className="bg-opacity-25 bg-slate-500 text-white w-full flex items-center justify-center">
            <img src={`${pokeEncounterSprite[index]}`} alt="" />
          </div>
          <div
            className="p-1 font-medium bg-slate-900 w-full flex items-center justify-center rounded-t-sm"
            style={{ color: `${regionColor[regionURLIndex - 1]}` }}
          >
            {encounter.toString().charAt(0).toUpperCase() +
              encounter.toString().slice(1).replace(/-+/g, " ")}
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
          className={`p-1 w-fit h-fit bg-slate-800 rounded-xl text-sm drop-shadow-1xl justify-center items-center font-normal ${areasStyle}`}
          style={{ color: `${areaStyleTextColor}` }}
        >
          {area.name.toUpperCase().replace(/-+/g, " ")}
        </div>
      ))
    ) : (
      <h1 className="font-semibold">
        There is no notable area in this location!
      </h1>
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
      <DexBG
        bodyGradient={regionColor[regionURLIndex - 1]}
        bodyStyle="space-y-0 size-content overflow-hidden max-h-3/4 max-w-96 px-3"
      >
        <div style={{ color: `${regionColor[regionURLIndex - 1]}` }}>
          <NavigationMenu.Root className="NavigationMenuRoot flex-col flex items-center justify-center">
            <NavigationMenu.List className="NavigationMenuList justify-center flex min-w-96 max-w-full">
              <NavigationMenu.Item className="flex border-slate-950 flex-row bg-slate-800 font-mono font-black items-center justify-between w-full border-b-2 h-12 px-4">
                <form
                  method="dialog"
                  className="flex modal-action items-center justify-center text-base"
                >
                  <button onClick={Reset} id="region_close">
                    <ArrowLeftIcon className="size-8 hover:scale-125" />
                  </button>
                </form>
                <h1 id="region_datils" className="flex flex-col text-3xl">
                  {pokeRegion[regionURLIndex - 1].name.charAt(0).toUpperCase() +
                    pokeRegion[regionURLIndex - 1].name.slice(1)}{" "}
                  locations
                </h1>
                <NavigationMenu.Trigger className="NavigationMenuTrigger flex items-center justify-center flex-row">
                  <ChevronDownIcon
                    className="CaretDown size-12 hover:scale-125"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ScrollArea.Root>
                    <ScrollArea.Viewport className="rounded-t-3xl">
                      <div className="w-content flex flex-wrap gap-2 items-center justify-center h-24">
                        <LocationsDisplay
                          setLocationId={setLocationId}
                          regionLoc={regionLoc}
                          locationDisplayStyle="border-b-2 border-opacity-40 border-t-2 border-slate-950 mt-2 bg-slate-600 rounded-b-sm rounded-t-sm px-1 hover:scale-110"
                          locationDysplayTextColor={
                            regionColor[regionURLIndex - 1]
                          }
                        />
                      </div>
                    </ScrollArea.Viewport>
                    <ScrollArea.Scrollbar orientation="horizontal">
                      <ScrollArea.Thumb />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Scrollbar orientation="vertical">
                      <ScrollArea.Thumb />
                    </ScrollArea.Scrollbar>
                    <ScrollArea.Corner />
                  </ScrollArea.Root>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition w-content">
              <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
          </NavigationMenu.Root>
        </div>

        <div
          className="flex flex-col items-center w-full h-4/5 border-slate-800 bg-slate-700 bg-opacity-45 border-8 rounded-2xl justify-center space-y-0"
          style={{ backgroundColor: `${regionColor[regionURLIndex - 1]}` }}
        >
          <div className="flex items-center justify-start flex-col max-h-3/5 min-h-fit w-full">
            <h1 className="w-full items-center py-4 flex justify-center text-2xl h-1/5 text-slate-900 font-bold">
              AREAS
            </h1>
            <div className="flex-wrap items-center flex justify-center gap-x-1 w-full h-4/5 px-1">
              <MapAreas areaStyleTextColor={regionColor[regionURLIndex - 1]} />
            </div>
          </div>

          <div className="flex hide-scrollbar flex-wrap p-2 items-start justify-center gap-1 h-3-4 w-full bg-gray-200 rounded-t-xl overflow-y-scroll border-t-2 border-slate-900">
            <AreaSprites />
          </div>
        </div>
      </DexBG>
    </dialog>
  ) : (
    <h1>Loading...</h1>
  );
}
export default RegionDetails;
