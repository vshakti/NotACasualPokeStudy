import "../index.css";

export function RegionSelector({ pokeRegion, RGB }) {
  return pokeRegion && pokeRegion.length ? (
    pokeRegion.map((region, index) => (
      <div
        key={region + index}
        className="flex flex-col max-w-56 max-h-48 min-w-56 min-h-48 pt-0.5 items-center"
      >
        <div
          style={{ backgroundImage: `url(${RGB[index]})` }}
          className="border-8 border-slate-900 min-h-48 max-h-48 max-w-48 min-w-48 w-full flex bg-center notched-corner"
        />
        <div className="absolute -top-14 flex items-center justify-center min-h-24 min-w-40 max-w-40 pipa-corner bg-slate-900">
          <h1 className="font-extrabold text-4xl flex text-white font-sans underline underline-offset-8">
            {region.name.charAt(0).toUpperCase() + region.name.slice(1)}
          </h1>
        </div>
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
}
