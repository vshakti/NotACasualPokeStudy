import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

import { RegionSelectorModal } from "./components/RegionSelectUI";
import { regionBgs } from "./utils/importRegionsBG";

function App() {
  const [pokeRegion, setPokeRegion] = useState([]);
  let RGB = [...regionBgs];

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

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-950 to-sky-600 flex justify-center items-center">
      <button
        id="btn_start"
        className="bg-white border-dashed rounded-full size-20 flex justify-center items-center"
        onClick={() => document.getElementById("main_region_modal").showModal()}
      ></button>
      <RegionSelectorModal pokeRegion={pokeRegion} RGB={RGB} />
    </div>
  );
}

export default App;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./index.css";
// import "./App.css";
// import { RegionSelectorModal } from "./components/RegionSelectUI";
// import { regionBgs } from "./utils/importRegionsBG";

// function App() {
//   const [pokeRegion, setPokeRegion] = useState([]);
//   const RGB = [...regionBgs];

//   useEffect(() => {
//     axios
//       .get("https://pokeapi.co/api/v2/region/")
//       .then((response) => {
//         setPokeRegion(response.data.results);
//       })
//       .catch((error) => {
//         console.error('get("https://pokeapi.co/api/v2/region/")', error);
//       });
//   }, []);

//   return (
//     <div className="h-screen w-screen bg-gradient-to-b from-blue-950 to-sky-600 flex justify-center items-center">
//       <button
//         id="btn_start"
//         className="bg-white border-dashed rounded-full size-20 flex justify-center items-center"
//         onClick={() => document.getElementById("main_region_modal").showModal()}
//       ></button>
//       <RegionSelectorModal pokeRegion={pokeRegion} RGB={RGB} />
//     </div>
//   );
// }

// export default App;
