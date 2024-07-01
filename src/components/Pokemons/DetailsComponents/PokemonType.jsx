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
            className="size-20 cursor-pointer hover:scale-125 transition easy-in-out"
          />
        </HoverCard.Trigger>
        <HoverCard.Content
          openDelay={250}
          closeDelay={0}
          sideOffset={-45}
          className={`hoverCardContent rounded-3xl w-screen h-screen flex items-start justify-center`}
        >
          {pokemonType ? (
            <div
              className={`${
                typeColorsShadows[type.type.name]
              } w-content max-w-96 rounded-3xl flex-col flex justify-start items-center bg-slate-600 antialiased border-8 ${
                typeColorsBorder[type.type.name]
              }`}
            >
              <div className="gap-y-1 flex flex-col items-center justify-center w-full text-lg font-medium tracking-tight">
                <h1
                  className={`${
                    typeColorsBorder[type.type.name]
                  } border-b-2 px-3 bg-slate-800 rounded-t-2xl text-white flex items-center justify-center w-full`}
                >
                  DEAL x0 DAMAGE
                </h1>
                {pokemonType.noDamageTo.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.noDamageTo.map((zeroDamageTo) => (
                      <div key={zeroDamageTo.name}>
                        <img
                          src={`${typeIcons[zeroDamageTo.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
              <div className="gap-y-1 flex flex-col items-center justify-center w-full py-1 space-y-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  DEALS 0.5x DAMAGE
                </h1>
                {pokemonType.halfDamageTo.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.halfDamageTo.map((halfDamageTo) => (
                      <div key={halfDamageTo.name}>
                        <img
                          src={`${typeIcons[halfDamageTo.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
              <div className="gap-y-1 flex flex-col items-center justify-center w-full py-1 space-y-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  DEALS 2x DAMAGE
                </h1>
                {pokemonType.doubleDamageTo.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.doubleDamageTo.map((doubleDamageTo) => (
                      <div key={doubleDamageTo.name}>
                        <img
                          src={`${typeIcons[doubleDamageTo.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
              <div className="gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  RECEIVES 0x DAMAGE
                </h1>
                {pokemonType.noDamageFrom.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.noDamageFrom.map((zeroDamageFrom) => (
                      <div key={zeroDamageFrom.name}>
                        <img
                          src={`${typeIcons[zeroDamageFrom.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
              <div className="gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  RECEIVES 0.5x DAMAGE
                </h1>
                {pokemonType.halfDamageFrom.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.halfDamageFrom.map((halfDamageFrom) => (
                      <div key={halfDamageFrom.name}>
                        <img
                          src={`${typeIcons[halfDamageFrom.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
              <div className="gap-y-1 flex flex-col items-center justify-center w-full py-1 text-lg font-medium tracking-tight">
                <h1
                  className={`border-t-2 border-b-2 px-3 bg-slate-800 text-white flex items-center justify-center w-full ${
                    typeColorsBorder[type.type.name]
                  }`}
                >
                  RECEIVES 2x DAMAGE
                </h1>
                {pokemonType.doubleDamageFrom.length > 0 ? (
                  <div className="flex flex-row">
                    {pokemonType.doubleDamageFrom.map((doubleDamageFrom) => (
                      <div key={doubleDamageFrom.name}>
                        <img
                          src={`${typeIcons[doubleDamageFrom.name]}`}
                          alt=""
                          className="size-16 hover:scale-125 transition easy-in-out"
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
