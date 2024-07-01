import "../../../index.css";
import * as HoverCard from "@radix-ui/react-hover-card";

export function PokemonAbilities({
  pokemon,
  setPokemonAbilitiesID,
  pokemonAbilities,
}) {
  return pokemon.abilities && pokemon.abilities.length > 0 ? (
    pokemon.abilities.map((abilityObj, index) => (
      <HoverCard.Root
        key={abilityObj.ability.name + index}
        openDelay={250}
        closeDelay={0}
      >
        <HoverCard.Trigger>
          <span
            onMouseOver={() => {
              setPokemonAbilitiesID(abilityObj.ability.name);
            }}
            className="cursor-pointer py-0.5 px-1.5 flex items-center w-max justify-center text-white bg-slate-800 rounded-full text-xs font-semibold hover:scale-125 drop-shadow-2xl shadow-dark transition easy-in-out"
          >
            {abilityObj.ability.name.toUpperCase().replace(/-+/g, " ")}
          </span>
        </HoverCard.Trigger>
        <HoverCard.Content sideOffset={5} className="hoverCardContent">
          {pokemonAbilities ? (
            <div
              className={`shadow-regionSelectorLine w-52 rounded-xl flex-col py-2 px-4 flex justify-center items-center bg-slate-300 divide-y-2 divide-slate-400 antialiased border-8 border-slate-800`}
            >
              <h1 className="text-xl font-bold tracking-wider">
                {pokemonAbilities.name.toUpperCase()}
              </h1>
              <h2 className="flex w-content px-2 flex-wrap font-medium text-lg">
                {pokemonAbilities.effect}
              </h2>
            </div>
          ) : (
            <div className="size-24 bg-white">deu merda</div>
          )}
        </HoverCard.Content>
      </HoverCard.Root>
    ))
  ) : (
    <div>no abilities</div>
  );
}
