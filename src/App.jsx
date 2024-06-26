import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import { RegionSelectorModal } from "./components/Regions/RegionSelectUI";
import { regionBgs } from "./utils/importRegionsBG";
import { type } from "./utils/importTypeIcons";
import { PokemonSelectorModal } from "./components/Pokemons/PokemonSelector";
import { PokemonSearchModal } from "./components/Pokemons/PokemonSearch";
// import logo from "./assets/LogoBalls/logo.png";
import { dexes } from "./utils/importPokebolas";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/16/solid";
import RegionDetails from "./components/Regions/RegionDetails";
import PokemonDetails from "./components/Pokemons/PokemonDetails";

function App() {
  const language = "en";
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
  let possibleOptions = ["Regiondex", "Pokedex", "Typedex"];
  const [activeIndex, setActiveIndex] = useState(1);
  const [locationId, setLocationId] = useState();
  const [areaNames, setAreaNames] = useState([]);
  const [areaEncounters, setAreaEncounters] = useState([]);
  const [pokeEncounter, setPokeEncounter] = useState([]);
  const [pokeEncounterSprite, setPokeEncounterSprite] = useState([]);
  const [pokemon, setPokemon] = useState({
    id: null,
    name: "",
    weight: null,
    abilities: [],
    height: null,
    moves: [],
    sprite: "",
    spriteShiny: "",
    stats: [],
    types: [],
  });
  const [pokemonOrder, setPokemonOrder] = useState(0);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonTotal, setPokemonTotal] = useState([]);
  const [possiblePokemon, setPossiblePokemon] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [validSearch, setValidSearch] = useState(0);
  const [pokemonAbilitiesID, setPokemonAbilitiesID] = useState();
  const [pokemonAbilities, setPokemonAbilities] = useState({
    id: null,
    name: "",
    effect: "",
  });
  const [typeID, setTypeID] = useState();
  const [pokemonType, setPokemonType] = useState({
    id: null,
    name: "",
    noDamageTo: [],
    halfDamageTo: [],
    doubleDamageTo: [],
    noDamageFrom: [],
    halfDamageFrom: [],
    doubleDamageFrom: [],
  });
  const [pokemonMovesID, setPokemonMovesID] = useState();
  const [pokemonMoves, setPokemonMoves] = useState({
    id: null,
    name: "",
    accuracy: null,
    effectChance: null,
    pp: null,
    priority: null,
    power: null,
    damageClass: "",
    effect: "",
    type: "",
    category: "",
    ailment: "",
    ailmentChance: null,
    crit: null,
  });
  const typeIcons = {
    bug: type[0],
    dark: type[1],
    dragon: type[2],
    electric: type[3],
    fairy: type[4],
    fighting: type[5],
    fire: type[6],
    flying: type[7],
    ghost: type[8],
    grass: type[9],
    ground: type[10],
    ice: type[11],
    normal: type[12],
    poison: type[13],
    psychic: type[14],
    rock: type[15],
    steel: type[16],
    water: type[17],
  };
  const typeColorsText = {
    bug: "text-bug",
    dark: "text-dark",
    dragon: "text-dragon",
    electric: "text-electric",
    fairy: "text-fairy",
    fighting: "text-fighting",
    fire: "text-fire",
    flying: "text-flying",
    ghost: "text-ghost",
    grass: "text-grass",
    ground: "text-ground",
    ice: "text-ice",
    normal: "text-normal",
    poison: "text-poison",
    psychic: "text-psychic",
    rock: "text-rock",
    steel: "text-steel",
    water: "text-water",
  };
  const typeColorsBorder = {
    bug: "border-bug",
    dark: "border-dark",
    dragon: "border-dragon",
    electric: "border-electric",
    fairy: "border-fairy",
    fighting: "border-fighting",
    fire: "border-fire",
    flying: "border-flying",
    ghost: "border-ghost",
    grass: "border-grass",
    ground: "border-ground",
    ice: "border-ice",
    normal: "border-normal",
    poison: "border-poison",
    psychic: "border-psychic",
    rock: "border-rock",
    steel: "border-steel",
    water: "border-water",
  };
  const typeColorsBg = {
    bug: "bg-bug",
    dark: "bg-dark",
    dragon: "bg-dragon",
    electric: "bg-electric",
    fairy: "bg-fairy",
    fighting: "bg-fighting",
    fire: "bg-fire",
    flying: "bg-flying",
    ghost: "bg-ghost",
    grass: "bg-grass",
    ground: "bg-ground",
    ice: "bg-ice",
    normal: "bg-normal",
    poison: "bg-poison",
    psychic: "bg-psychic",
    rock: "bg-rock",
    steel: "bg-steel",
    water: "bg-water",
  };
  const typeColorsShadows = {
    bug: "shadow-[0_0px_10px_2px_#008000]",
    dark: "shadow-[0_0px_10px_2px_#666666]",
    dragon: "shadow-[0_0px_10px_2px_#00cccc]",
    electric: "shadow-[0_0px_10px_2px_#ffff33]",
    fairy: "shadow-[0_0px_10px_2px_#ff4dff]",
    fighting: "shadow-[0_0px_10px_2px_#ff9933]",
    fire: "shadow-[0_0px_10px_2px_#ff1a1a]",
    flying: "shadow-[0_0px_10px_2px_#a6a6a6]",
    ghost: "shadow-[0_0px_10px_2px_#9933ff]",
    grass: "shadow-[0_0px_10px_2px_#4dff4d]",
    ground: "shadow-[0_0px_10px_2px_#b38f00]",
    ice: "shadow-[0_0px_10px_2px_#80ffff]",
    normal: "shadow-[0_0px_10px_2px_#80002a]",
    poison: "shadow-[0_0px_10px_2px_#400080]",
    psychic: "shadow-[0_0px_10px_2px_#e600ac]",
    rock: "shadow-[0_0px_10px_2px_#993300]",
    steel: "shadow-[0_0px_10px_2px_#80ffbf]",
    water: "shadow-[0_0px_10px_2px_#1a75ff]",
  };

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1025")
      .then((response) => {
        setPokemonTotal(response.data.results);
      })
      .catch((error) => {
        console.error("https://pokeapi.co/api/v2/pokemon/?&limit=1302", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonOrder + 1}`)
      .then((response) => {
        const data = response.data;
        setPokemon({
          id: data.id,
          name: data.name,
          weight: data.weight,
          abilities: data.abilities,
          height: data.height,
          moves: data.moves,
          sprite: data.sprites.front_default,
          spriteShiny: data.sprites.front_shiny,
          stats: data.stats,
          types: data.types,
        });
      })
      .catch((error) => {
        console.error(
          `https://pokeapi.co/api/v2/pokemon/${pokemonOrder + 1}`,
          error
        );
      });
  }, [pokemonOrder]);

  useEffect(() => {
    if (pokemonName && pokemonName.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((response) => {
          const data = response.data;
          setPokemon({
            id: data.id,
            name: data.name,
            weight: data.weight,
            abilities: data.abilities,
            height: data.height,
            moves: data.moves,
            sprite: data.sprites.front_default,
            spriteShiny: data.sprites.front_shiny,
            stats: data.stats,
            types: data.types,
          });
        })
        .catch((error) => {
          console.error(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
            error
          );
        });
    }
  }, [pokemonName]);

  useEffect(() => {
    if (typeID && typeID.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/type/${typeID}`)
        .then((response) => {
          const data = response.data;
          setPokemonType({
            id: data.id,
            name: data.name,
            noDamageTo: data.damage_relations.no_damage_to,
            halfDamageTo: data.damage_relations.half_damage_to,
            doubleDamageTo: data.damage_relations.double_damage_to,
            noDamageFrom: data.damage_relations.no_damage_from,
            halfDamageFrom: data.damage_relations.half_damage_from,
            doubleDamageFrom: data.damage_relations.double_damage_from,
          });
        })
        .catch((error) => {
          console.error(`https://pokeapi.co/api/v2/type/${typeID}`, error);
        });
    }
  }, [typeID]);
  console.log(pokemonMoves.category);
  useEffect(() => {
    if (pokemonMovesID && pokemonMovesID.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/move/${pokemonMovesID}`)
        .then((response) => {
          const data = response.data;
          setPokemonMoves({
            id: data.id,
            name: data.name,
            accuracy: data.accuracy,
            effectChance: data.effect_chance,
            pp: data.pp,
            priority: data.priority,
            power: data.power,
            damageClass: data.damage_class.name,
            effect: data.effect_entries[0].effect,
            type: data.type.name,
            category: data.meta.category.name,
            ailment: data.meta.ailment.name,
            ailmentChance: data.meta.ailment_chance,
            crit: data.meta.crit_rate,
          });
          console.log(data);
        })
        .catch((error) => {
          console.error(
            `https://pokeapi.co/api/v2/move/${pokemonMovesID}`,
            error
          );
        });
    }
  }, [pokemonMovesID]);

  useEffect(() => {
    if (pokemonTotal.length > 0) {
      const newpossiblePokemon = pokemonTotal.map((pokemon) => pokemon.name);
      setPossiblePokemon(newpossiblePokemon);
    }
  }, [pokemonTotal]);

  useEffect(() => {
    if (pokemonAbilitiesID && pokemonAbilitiesID.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/ability/${pokemonAbilitiesID}`)
        .then((response) => {
          const data = response.data;
          for (let i = 0; data.effect_entries.length; i++) {
            if (data.effect_entries[i].language.name === language) {
              setPokemonAbilities({
                id: data.id,
                name: data.name,
                effect: data.effect_entries[i].short_effect,
              });
              break;
            }
          }
        })

        .catch((error) => {
          console.error(
            `https://pokeapi.co/api/v2/ability/${pokemonAbilitiesID}`,
            error
          );
        });
    }
  }, [pokemonAbilitiesID]);

  function CheckSearch() {
    if (possiblePokemon.includes(searchString.toLowerCase())) {
      setPokemonName(searchString.toLowerCase());
      setValidSearch(1);
    } else {
      setValidSearch(2);
    }
  }

  useEffect(() => {
    if (areaNames && areaNames.length > 0) {
      areaNames.forEach((area) => {
        axios
          .get(`https://pokeapi.co/api/v2/location-area/${area.name}`)
          .then((response) => {
            setAreaEncounters(response.data.pokemon_encounters);
          })
          .catch((error) => {
            console.error(
              `get(https://pokeapi.co/api/v2/location-area/${area.name})`,
              error
            );
          });
      });
    }
  }, [areaNames]);

  useEffect(() => {
    if (areaEncounters && areaEncounters.length > 0) {
      const fetchPokeEncounters = async () => {
        const promises = areaEncounters.map((encounter) =>
          axios.get(encounter.pokemon.url)
        );

        try {
          const responses = await Promise.all(promises);
          const regionEncounterNames = responses.map(
            (response) => response.data.name
          );
          const regionEncounterSprites = responses.map(
            (response) => response.data.sprites.front_default
          );
          setPokeEncounter(regionEncounterNames);
          setPokeEncounterSprite(regionEncounterSprites);
        } catch (error) {
          console.error(`$encounter.pokemon.url`, error);
        }
      };

      fetchPokeEncounters();
    }
  }, [areaEncounters]);

  useEffect(() => {
    if (locationId && locationId.length > 0) {
      axios
        .get(`https://pokeapi.co/api/v2/location/${locationId}`)
        .then((response) => {
          setAreaNames(response.data.areas);
        })
        .catch((error) => {
          console.error(
            `https://pokeapi.co/api/v2/location/${locationId}`,
            error
          );
        });
    }
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

  return (
    <div className="h-screen w-screen bg-gradient-to-b gap-y-12 flex items-center justify-center from-blue-950 to-sky-600">
      <div className="flex-row flex gap-x-4">
        <button
          id="options_back"
          disabled={activeIndex <= 0}
          className="bg-slate-900 rounded-full border-white border-2 shadow-regionDisplay flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
          onClick={() => {
            setActiveIndex((prevIndex) =>
              Math.min((prevIndex ?? -1) - 1, dexes.length - 1)
            );
          }}
        >
          <ChevronDoubleLeftIcon className="text-white" />
        </button>
        <div className="flex flex-row" id="dex_selector">
          {dexes.map((selectors, index) => (
            <div key={index}>
              <button
                className="flex flex-col gap-y-6 items-center justify-center"
                id="btn_start"
                disabled={index !== activeIndex}
                onClick={() => {
                  document
                    .getElementById(`main_modal_${activeIndex}`)
                    .showModal();
                  setPokemonOrder(0);
                }}
              >
                <img
                  src={selectors}
                  alt="dexes"
                  className={`size-32 transition-transform duration-500 drop-shadow-2xl shadow-black ${
                    index === activeIndex
                      ? "translate-y-12 scale-150 hoverCardContent"
                      : "-translate-y-10 opacity-80"
                  }`}
                />
                <h1
                  className={`border-8 px-4 pl-2 rounded-full bg-opacity-80 border-yellow-400 bg-slate-800 ${
                    index === activeIndex
                      ? "translate-y-12 scale-150 hoverCardContent"
                      : "-translate-y-10 opacity-0"
                  } transition-transform duration-500 text-2xl flex items-center justify-center px-4 py-2 font-bold font-serif text-yellow-400`}
                >
                  {possibleOptions[activeIndex]}
                </h1>
              </button>
            </div>
          ))}
        </div>
        <button
          id="options_next"
          disabled={activeIndex >= 2}
          className="bg-slate-900 rounded-full border-white border-2 shadow-regionDisplay flex items-center justify-center size-12 transition ease-in-out hover:scale-125 duration-75"
          onClick={() => {
            setActiveIndex((prevIndex) =>
              Math.min((prevIndex ?? -1) + 1, dexes.length)
            );
          }}
        >
          <ChevronDoubleRightIcon className="text-white" />
        </button>
      </div>
      <RegionSelectorModal
        activeIndex={activeIndex}
        pokeRegion={pokeRegion}
        RGB={RGB}
        regionColor={regionColor}
        regionURLIndex={regionURLIndex}
        setRegionURLIndex={setRegionURLIndex}
        regionLoc={regionLoc}
        setRegionLoc={setRegionLoc}
        possibleOptions={possibleOptions}
      />
      <RegionDetails
        setPokeEncounter={setPokeEncounter}
        pokemonName={pokemonName}
        setPokemonName={setPokemonName}
        locationId={locationId}
        pokeEncounterSprite={pokeEncounterSprite}
        pokeEncounter={pokeEncounter}
        areaNames={areaNames}
        setLocationId={setLocationId}
        pokeRegion={pokeRegion}
        regionURLIndex={regionURLIndex}
        regionLoc={regionLoc}
        regionColor={regionColor}
      />
      <PokemonSelectorModal
        pokemonTotal={pokemonTotal}
        typeColorsShadows={typeColorsShadows}
        typeColorsBg={typeColorsBg}
        typeColorsBorder={typeColorsBorder}
        typeColorsText={typeColorsText}
        typeIcons={typeIcons}
        pokemon={pokemon}
        pokemonOrder={pokemonOrder}
        setPokemonOrder={setPokemonOrder}
      />
      <PokemonDetails
        pokemonMoves={pokemonMoves}
        setPokemonMovesID={setPokemonMovesID}
        pokemonType={pokemonType}
        setTypeID={setTypeID}
        pokemonAbilities={pokemonAbilities}
        setPokemonAbilitiesID={setPokemonAbilitiesID}
        setSearchString={setSearchString}
        searchString={searchString}
        setPokeEncounter={setPokeEncounter}
        setPokemonOrder={setPokemonOrder}
        typeColorsBorder={typeColorsBorder}
        typeIcons={typeIcons}
        typeColorsShadows={typeColorsShadows}
        typeColorsBg={typeColorsBg}
        pokemon={pokemon}
        typeColorsText={typeColorsText}
      />
      <PokemonSearchModal
        pokemon={pokemon}
        setPokemonOrder={setPokemonOrder}
        setValidSearch={setValidSearch}
        validSearch={validSearch}
        CheckSearch={CheckSearch}
        searchString={searchString}
        setSearchString={setSearchString}
      />
    </div>
  );
}

export default App;
