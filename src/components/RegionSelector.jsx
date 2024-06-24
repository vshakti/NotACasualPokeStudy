import "../index.css";

export function RegionSelector({ pokeRegion, RGB }) {
  return pokeRegion && pokeRegion.length ? (
    pokeRegion.map((region, index) => (
      <div key={region + index} className="flex flex-col items-center">
        <div
          style={{ backgroundImage: `url(${RGB[index]})` }}
          className="shadow-regionSelectorRegion min-h-28 max-h-28 max-w-28 min-w-28 w-full flex bg-center notched-corner"
        />
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
}

export function RegionName({ pokeRegion, regionURLIndex }) {
  return pokeRegion && pokeRegion.length ? (
    <h1 className="font-sans flex justify-center items-center font-bold text-3xl">
      {pokeRegion[regionURLIndex - 1].name.toUpperCase()}
    </h1>
  ) : (
    <h1>Loading...</h1>
  );
}
