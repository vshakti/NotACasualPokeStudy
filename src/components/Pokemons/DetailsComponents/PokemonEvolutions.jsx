import "../../../index.css";
import { ChevronDoubleRightIcon } from "@heroicons/react/16/solid";

export function PokemonEvolutions({
  evolutionsSet,
  typeColorsText,
  typeColorsBorder,
  typeColorsShadows,
  typeIcons,
}) {
  return evolutionsSet &&
    evolutionsSet.name &&
    evolutionsSet.sprites &&
    evolutionsSet.types ? (
    evolutionsSet.name.map((name, index) => (
      <div key={name} className="flex flex-rol items-center justify-center">
        {index < evolutionsSet.sprites.length - 1 ? (
          <div className="flex flex-row items-center gap-2 justify-center">
            <div className="flex items-center justify-center flex-col gap-2 transition easy-in-out hover:scale-110">
              <div
                className={`flex items-center flex-col py-0.5 justify-center border-b-2 rounded-lg ${
                  typeColorsBorder[evolutionsSet.types[index][0].type.name]
                }`}
              >
                <img
                  src={evolutionsSet.sprites[index]}
                  alt={name}
                  className={`${
                    typeColorsBorder[evolutionsSet.types[index][0].type.name]
                  } size-32`}
                />
                <p
                  className={`${
                    typeColorsText[evolutionsSet.types[index][0].type.name]
                  }  font-medium tracking-wide ${
                    typeColorsBorder[evolutionsSet.types[index][0].type.name]
                  }`}
                >
                  {name.charAt(0).toUpperCase() +
                    name.slice(1).replace(/-+/g, " ")}
                </p>
              </div>
              <div className="gap-1 flex flex-col">
                {evolutionsSet.types[index] &&
                evolutionsSet.types[index].length > 0 ? (
                  evolutionsSet.types[index].map((type, typeIndex) => (
                    <div key={typeIndex}>
                      <img
                        src={`${typeIcons[type.type.name]}`}
                        alt=""
                        className={`cursor-pointer w-20 rounded-lg ${
                          typeColorsShadows[type.type.name]
                        }`}
                      />
                    </div>
                  ))
                ) : (
                  <div>No types</div>
                )}
              </div>
            </div>
            <ChevronDoubleRightIcon className="text-white size-12" />
          </div>
        ) : (
          <div className="flex items-center justify-center flex-col gap-2 transition easy-in-out hover:scale-110">
            <div
              className={`flex items-center flex-col py-0.5 justify-center border-b-2 rounded-lg ${
                typeColorsBorder[evolutionsSet.types[index][0].type.name]
              }`}
            >
              <img
                src={evolutionsSet.sprites[index]}
                alt={name}
                className={`${
                  typeColorsBorder[evolutionsSet.types[index][0].type.name]
                } size-32`}
              />
              <p
                className={`${
                  typeColorsText[evolutionsSet.types[index][0].type.name]
                }  font-medium tracking-wide ${
                  typeColorsBorder[evolutionsSet.types[index][0].type.name]
                }`}
              >
                {name.charAt(0).toUpperCase() +
                  name.slice(1).replace(/-+/g, " ")}
              </p>
            </div>
            <div className="gap-1 flex flex-col">
              {evolutionsSet.types[index] &&
              evolutionsSet.types[index].length > 0 ? (
                evolutionsSet.types[index].map((type, typeIndex) => (
                  <div key={typeIndex}>
                    <img
                      src={`${typeIcons[type.type.name]}`}
                      alt=""
                      className={`cursor-pointer w-20 rounded-lg ${
                        typeColorsShadows[type.type.name]
                      }`}
                    />
                  </div>
                ))
              ) : (
                <div>No types</div>
              )}
            </div>
          </div>
        )}
      </div>
    ))
  ) : (
    <div>No evolutions found</div>
  );
}
