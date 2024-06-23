import "../index.css";

export function LocationsDisplay({ regionLoc }) {
  return regionLoc && regionLoc.length ? (
    regionLoc.map((location, index) => (
      <div
        key={location + index}
        className="flex flex-row text-start justify-start text-cyan-200 min-w-72 text-base"
      >
        {location.name.replace("-", " ").replace("--", " ").toUpperCase()}
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
}
