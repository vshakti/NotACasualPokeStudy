import "../index.css";

export function LocationsDisplay({ regionLoc }) {
  return regionLoc && regionLoc.length ? (
    regionLoc.map((location, index) => (
      <div
        key={location + index}
        className="flex text-start justify-start text-cyan-200 min-w-fit max-w-fit text-base items-center"
      >
        {location.name
          .replace("-", " ")
          .replace("--", " ")
          .replace("-", " ")
          .replace("-", " ")
          .replace("-", " ")
          .replace("-", " ")
          .toUpperCase()}
      </div>
    ))
  ) : (
    <h1>Loading...</h1>
  );
}
