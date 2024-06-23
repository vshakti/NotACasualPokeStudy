import "../index.css";

export function RegionSelector({ pokeRegion, RGB }) {
  return pokeRegion && pokeRegion.length ? (
    pokeRegion.map((region, index) => (
      <div
        key={region + index}
        className="flex flex-col size-32 pt-1.5 pl-0.5 items-center"
      >
        <div
          style={{ backgroundImage: `url(${RGB[index]})` }}
          className="border-4 border-white min-h-24 max-h-24 max-w-24 min-w-24 w-full flex bg-center notched-corner"
        />
        <div className="absolute -top-7 flex items-center justify-center min-h-12 min-w-20 max-w-40 pipa-corner bg-white">
          <h1 className="font-extrabold flex text-slate-900 font-sans">
            {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
          </h1>
        </div>
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
}
