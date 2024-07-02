import "../../../index.css";
import * as HoverCard from "@radix-ui/react-hover-card";

export function PokemonType({
  pokemon,
  typeIcons,
  setTypeID,
  pokemonType,
  typeColorsShadows,
  typeColorsBorder,
}) {
  return pokemon.types && pokemon.types.length > 0 ? (
    pokemon.types.map((type, index) => (
      <HoverCard.Root key={type.type + index}>
        <HoverCard.Trigger
          onMouseOver={() => {
            setTypeID(type.type.name);
          }}
        >
          <img
            src={`${typeIcons[type.type.name]}`}
            alt=""
            className={`cursor-pointer hover:scale-125 transition easy-in-out rounded-lg ${
              typeColorsShadows[type.type.name]
            }`}
          />
        </HoverCard.Trigger>
        <HoverCard.Content
          openDelay={250}
          closeDelay={0}
          sideOffset={-45}
          className={`hoverCardContent`}
        >
          {pokemonType ? (
            <div
              className={`${
                typeColorsShadows[type.type.name]
              } w-content max-w-96 overflow-y-scroll hide-scrollbar max-h-96 rounded-3xl flex-col flex justify-start items-center bg-slate-300 antialiased border-8 border-double border-slate-800`}
            >
              <div className="rounded-3xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full text-lg font-medium tracking-tight">
                <h1
                  className={`${
                    typeColorsBorder[type.type.name]
                  } border-b-2 px-3 bg-slate-800 rounded-t-2xl text-white flex items-center justify-center w-full`}
                >
                  INNEFECTIVE TO
                </h1>
                {pokemonType.noDamageTo.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.noDamageTo.map((zeroDamageTo) => (
                      <div key={zeroDamageTo.name}>
                        <img
                          src={`${typeIcons[zeroDamageTo.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[zeroDamageTo.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white"></span>
                )}
              </div>
              <div className="hover:rounded-xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full py-1 space-y-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  NOT VERY EFFECTIVE TO
                </h1>
                {pokemonType.halfDamageTo.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.halfDamageTo.map((halfDamageTo) => (
                      <div key={halfDamageTo.name}>
                        <img
                          src={`${typeIcons[halfDamageTo.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[halfDamageTo.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white">
                    X
                  </span>
                )}
              </div>
              <div className="hover:rounded-xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full py-1 space-y-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  VERY EFFECTIVE TO
                </h1>
                {pokemonType.doubleDamageTo.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.doubleDamageTo.map((doubleDamageTo) => (
                      <div key={doubleDamageTo.name}>
                        <img
                          src={`${typeIcons[doubleDamageTo.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[doubleDamageTo.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white">
                    X
                  </span>
                )}
              </div>
              <div className="hover:rounded-xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  IMMUNE TO
                </h1>
                {pokemonType.noDamageFrom.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.noDamageFrom.map((zeroDamageFrom) => (
                      <div key={zeroDamageFrom.name}>
                        <img
                          src={`${typeIcons[zeroDamageFrom.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[zeroDamageFrom.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white">
                    X
                  </span>
                )}
              </div>
              <div className="hover:rounded-xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  RESISTANT TO
                </h1>
                {pokemonType.halfDamageFrom.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.halfDamageFrom.map((halfDamageFrom) => (
                      <div key={halfDamageFrom.name}>
                        <img
                          src={`${typeIcons[halfDamageFrom.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[halfDamageFrom.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white">
                    X
                  </span>
                )}
              </div>
              <div className="rounded-b-3xl hover:rounded-xl bg-slate-300 gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  VERY WEAK TO
                </h1>
                {pokemonType.doubleDamageFrom.length > 0 ? (
                  <div className="flex flex-col gap-2.5">
                    {pokemonType.doubleDamageFrom.map((doubleDamageFrom) => (
                      <div key={doubleDamageFrom.name}>
                        <img
                          src={`${typeIcons[doubleDamageFrom.name]}`}
                          alt=""
                          className={`${
                            typeColorsShadows[doubleDamageFrom.name]
                          } hover:scale-110 transition easy-in-out rounded-lg`}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <span className="flex items-center jsutify-center text-2xl border-2 px-2 rounded-full bg-slate-800 text-white">
                    X
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="size-24 bg-white">loading</div>
          )}
        </HoverCard.Content>
      </HoverCard.Root>
    ))
  ) : (
    <div>no type</div>
  );
}
