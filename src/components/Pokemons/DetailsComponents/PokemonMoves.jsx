import "../../../index.css";
import * as Popover from "@radix-ui/react-popover";

export function PokemonMoves({
  pokemon,
  typeColorsShadows,
  setPokemonMovesID,
  pokemonMoves,
  typeIcons,
  typeColorsBg,
  typeColorsBorder,
}) {
  return pokemon.moves && pokemon.moves.length > 0 ? (
    pokemon.moves
      .sort((a, b) => a.move.name.localeCompare(b.move.name))
      .map((moveObj, index) => (
        <Popover.Root key={moveObj + index}>
          <Popover.Trigger
            className={`${
              typeColorsBorder[pokemon.types[0]?.type.name]
            } hover:scale-110 cursor-pointer transition easy-in-out py-1.5 px-2 flex items-center w-max h-max justify-center border-b-2 border-t-2 rounded-md text-white font-semibold`}
            onClick={() => {
              setPokemonMovesID(moveObj.move.name);
            }}
          >
            {moveObj.move.name.toUpperCase().replace(/-+/g, " ")}
          </Popover.Trigger>
          <Popover.Content
            openDelay={250}
            closeDelay={0}
            sideOffset={-5}
            className={`hoverCardContent`}
          >
            {pokemonMoves ? (
              <div
                className={`w-content max-w-96 pb-3 rounded-3xl flex-col flex border-slate-950 justify-start items-center bg-slate-300 antialiased border-8 ${
                  typeColorsShadows[pokemonMoves.type]
                }`}
              >
                <div className="flex flex-row items-center border-b-8 border-slate-950 justify-between w-full h-content gap-x-6 py-1 px-3">
                  <h1 className="text-3xl font-semibold">
                    {pokemonMoves.name.charAt(0).toUpperCase() +
                      pokemonMoves.name.slice(1).replace(/-+/g, " ")}
                  </h1>
                  <img
                    src={`${typeIcons[pokemonMoves.type]}`}
                    alt=""
                    className={`${
                      typeColorsShadows[pokemonMoves.type]
                    } rounded-lg`}
                  />
                </div>
                <h2 className="px-2 py-1 max-h-64 w-full bg-slate-300 overflow-y-scroll hide-scrollbar border-slate-950 border-b-8 flex flex-wrap items-center justify-center font-medium text-sm">
                  {pokemonMoves.effect}
                </h2>
                <div className="flex flex-row w-full min-w-72">
                  <div className="flex flex-col w-1/2">
                    <div className="flex flex-col px-2 py-1 justify-center">
                      <div
                        className="flex flex-col hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_1"
                      >
                        <span className="font-bold pl-2">
                          PP: {pokemonMoves.pp}
                        </span>
                        <div
                          className={`border-2 rounded-full w-4/5 h-6 bg-white flex items-center justify-between ${
                            typeColorsShadows[pokemonMoves.type]
                          }`}
                        >
                          {pokemonMoves.pp === 0 || pokemonMoves.pp === null ? (
                            <div />
                          ) : (
                            <div
                              className={`border-2 h-full rounded-full ${
                                typeColorsBg[pokemonMoves.type]
                              }`}
                              style={{
                                width: `${pokemonMoves.pp}%`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className="flex flex-col hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_2"
                      >
                        <span className="font-bold pl-2">
                          POWER: {pokemonMoves.power}
                        </span>
                        <div
                          className={`border-2 rounded-full w-4/5 h-6 bg-white flex items-center justify-between ${
                            typeColorsShadows[pokemonMoves.type]
                          }`}
                        >
                          {pokemonMoves.power === 0 ||
                          pokemonMoves.power === null ? (
                            <div />
                          ) : (
                            <div
                              className={`border-2 h-full rounded-full ${
                                typeColorsBg[pokemonMoves.type]
                              }`}
                              style={{
                                width: `${pokemonMoves.power}%`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className="flex flex-col hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_3"
                      >
                        <span className="font-bold pl-2">
                          ACCURACY: {pokemonMoves.accuracy}
                        </span>
                        <div
                          className={`border-2 rounded-full w-4/5 h-6 bg-white flex items-center justify-between ${
                            typeColorsShadows[pokemonMoves.type]
                          }`}
                        >
                          {pokemonMoves.accuracy === 0 ||
                          pokemonMoves.accuracy === null ? (
                            <div />
                          ) : (
                            <div
                              className={`border-2 h-full rounded-full ${
                                typeColorsBg[pokemonMoves.type]
                              }`}
                              style={{
                                width: `${pokemonMoves.accuracy}%`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                      <div
                        className="flex flex-col hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_4"
                      >
                        <span className="font-bold pl-2">
                          CRIT {pokemonMoves.crit}%
                        </span>
                        <div
                          className={`border-2 rounded-full w-4/5 h-6 bg-white flex items-center justify-between ${
                            typeColorsShadows[pokemonMoves.type]
                          }`}
                        >
                          {pokemonMoves.crit === 0 ||
                          pokemonMoves.crit === null ? (
                            <div />
                          ) : (
                            <div
                              className={`border-2 h-full rounded-full ${
                                typeColorsBg[pokemonMoves.type]
                              }`}
                              style={{
                                width: `${pokemonMoves.crit}%`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-1/2 pr-2">
                    <div className="flex flex-col px-2 py-1 justify-center">
                      <div
                        className="flex flex-col items-end hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_5"
                      >
                        <span className="font-bold pr-2">CATEGORY</span>
                        <div className="bg-slate-800 border-1 rounded-xl px-2 h-6 text-white text-sm items-center justify-center">
                          {pokemonMoves.category.charAt(0).toUpperCase() +
                            pokemonMoves.category
                              .slice(1)
                              .replace("+", " and ")
                              .replace(/-+/g, " ")}
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-end hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_6"
                      >
                        <span className="font-bold pr-2">CLASS</span>
                        <div className="bg-slate-800 border-1 rounded-xl px-2 h-6 text-white">
                          {pokemonMoves.damageClass.charAt(0).toUpperCase() +
                            pokemonMoves.damageClass
                              .slice(1)
                              .replace(/-+/g, " ")}
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-end hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_7"
                      >
                        <span className="font-bold pr-2">AILMENT</span>
                        <div className="bg-slate-800 border-1 rounded-xl px-2 h-6 text-white">
                          {pokemonMoves.ailment.charAt(0).toUpperCase() +
                            pokemonMoves.ailment.slice(1).replace(/-+/g, " ")}
                        </div>
                      </div>
                      <div
                        className="flex flex-col items-end hover:scale-110 transition easy-in-out cursor-pointer"
                        id="divisoria_8"
                      >
                        <span className="font-bold pr-2">
                          AILMENT {pokemonMoves.ailmentChance}%
                        </span>
                        <div
                          className={`${
                            typeColorsShadows[pokemonMoves.type]
                          } border-2 rounded-full w-4/5 h-6 bg-white flex items-center justify-between`}
                        >
                          {pokemonMoves.ailmentChance === 0 ||
                          pokemonMoves.ailmentChance === null ? (
                            <div />
                          ) : (
                            <div
                              className={`border-2 h-full rounded-full ${
                                typeColorsBg[pokemonMoves.type]
                              }`}
                              style={{
                                width: `${pokemonMoves.ailmentChance}%`,
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="size-24 bg-white">loading</div>
            )}
          </Popover.Content>
        </Popover.Root>
      ))
  ) : (
    <div>no moves</div>
  );
}
