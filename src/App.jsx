import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { RegionSelectorModal } from "./components/RegionSelectUI";
import { regionBgs } from "./utils/importRegionsBG";
import logo from "./assets/LogoBalls/logo.png";
import { pokebola } from "./utils/importPokebolas";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
import { RegionDetails } from "./components/RegionDetails";

function App() {
  const [pokeRegion, setPokeRegion] = useState([]);
  let RGB = [...regionBgs];
  const [regionURLIndex, setRegionURLIndex] = useState(1);
  const [regionLoc, setRegionLoc] = useState([]);
  const regionColor = [
    "rgba(255, 102, 102, 0.8)",
    "rgba(255, 178, 102, 0.8)",
    "rgba(255, 255, 102, 0.8)",
    "rgba(178, 255, 102, 0.8)",
    "rgba(102, 255, 102, 0.8)",
    "rgba(102, 255, 178, 0.8)",
    "rgba(102, 255, 255, 0.8)",
    "rgba(153, 153, 255, 0.8)",
    "rgba(255, 153, 255, 0.8)",
    "rgba(255, 255, 255, 0.8)",
  ];
  let possibleOptions = ["Regions", "Pokemons", "Elements"];
  const [pokebolaCount, setPokebolaCount] = useState(0);
  const [locationId, setLocationId] = useState();
  const [areaNames, setAreaNames] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/location/${locationId}`)
      .then((response) => {
        setAreaNames(response.data.areas);
        console.log(areaNames[0].name);
      })
      .catch((error) => {
        console.error('get("https://pokeapi.co/api/v2/region/")', error);
      });
  }, [locationId, setAreaNames]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/region/")
      .then((response) => {
        setPokeRegion(response.data.results);
      })
      .catch((error) => {
        console.error('get("https://pokeapi.co/api/v2/region/")', error);
      });
  }, []);

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

  function OptionsNext() {
    setPokebolaCount((prevIndex) =>
      Math.min(prevIndex + 1, possibleOptions.length - 1)
    );
  }
  function OptionsBack() {
    setPokebolaCount((prevIndex) => Math.max(prevIndex - 1, 0));
  }

  return (
    <div className="h-screen overflow-hidden w-screen flex-col bg-gradient-to-b flex items-center justify-center from-blue-950 to-sky-600">
      <div className="size-3/4 flex items-center flex-col justify-center relative">
        <img src={logo} alt="Pokemon API logo" className="size-72" />
        <div className="mt-64 flex-col mr-28 bg-cover size-64 absolute flex justify-center items-center">
          <img
            src={pokebola[pokebolaCount]}
            alt="Pokebola"
            className="absolute animate-bounce"
          />
          <div
            onClick={() => {
              history.pushState(
                null,
                "pokedex",
                `/${possibleOptions[pokebolaCount].toLowerCase()}`
              );
            }}
          >
            <button
              id="btn_start"
              className="size-36 mb-16 rounded-full mt-1 animate-bounce"
              onClick={() =>
                document
                  .getElementById(`main_modal_${pokebolaCount}`)
                  .showModal()
              }
            />
          </div>
        </div>
      </div>
      <div className="py- flex items-center justify-evenly space-x-0">
        <button
          id="options_next"
          className="bg-slate-900 rounded-full border-white border-2 shadow-regionDisplay flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
          onClick={OptionsBack}
        >
          <ChevronDoubleLeftIcon className="text-white" />
        </button>
        <h1 className="text-4xl flex items-center justify-center px-4 py-2 font-bold text-white ">
          {possibleOptions[pokebolaCount].toUpperCase()}
        </h1>
        <button
          id="options_back"
          className="bg-slate-900 rounded-full border-white border-2 shadow-regionDisplay flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
          onClick={OptionsNext}
        >
          <ChevronDoubleRightIcon className="text-white" />
        </button>
      </div>

      <RegionSelectorModal
        pokeRegion={pokeRegion}
        RGB={RGB}
        regionColor={regionColor}
        regionURLIndex={regionURLIndex}
        setRegionURLIndex={setRegionURLIndex}
        regionLoc={regionLoc}
        setRegionLoc={setRegionLoc}
        possibleOptions={possibleOptions}
        pokebolaCount={pokebolaCount}
      />
      <RegionDetails
        areaNames={areaNames}
        setLocationId={setLocationId}
        pokeRegion={pokeRegion}
        regionURLIndex={regionURLIndex}
        regionLoc={regionLoc}
        regionColor={regionColor}
      />
    </div>
  );
}

export default App;
