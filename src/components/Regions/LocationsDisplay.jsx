import "../../index.css";

export function LocationsDisplay({
  regionLoc,
  locationDisplayStyle,
  locationDysplayTextColor,
  setLocationId,
}) {
  return regionLoc && regionLoc.length ? (
    regionLoc
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((location, index) => (
        <button
          onClick={() => {
            setLocationId(location.name);
          }}
          key={location + index}
          className={`flex text-start justify-start text-cyan-200 min-w-fit max-w-fit text-base items-center ${locationDisplayStyle}`}
          style={{ color: `${locationDysplayTextColor}` }}
        >
          {location.name.replace(/-+/g, " ").toUpperCase()}
        </button>
      ))
  ) : (
    <h1>Loading...</h1>
  );
}
