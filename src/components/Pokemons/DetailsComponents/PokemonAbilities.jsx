import "../../../index.css";
import * as Popover from "@radix-ui/react-popover";

export function PokemonAbilities({
  pokemon,
  setPokemonAbilitiesID,
  pokemonAbilities,
  typeColorsText,
}) {
  return pokemon.abilities && pokemon.abilities.length > 0 ? (
    pokemon.abilities.map((abilityObj, index) => (
      <Popover.Root
        key={abilityObj.ability.name + index}
        openDelay={250}
        closeDelay={0}
      >
        <Popover.Trigger>
          <span
            onClick={() => {
              setPokemonAbilitiesID(abilityObj.ability.name);
            }}
            className={`${
              typeColorsText[pokemon.types[0]?.type.name]
            } cursor-pointer flex items-center w-max justify-center rounded-lg text-xs font-medium hover:scale-110 drop-shadow-2xl shadow-dark transition easy-in-out`}
          >
            {abilityObj.ability.name.toUpperCase().replace(/-+/g, " ")}
          </span>
        </Popover.Trigger>
        <Popover.Content sideOffset={5} className="hoverCardContent">
          {pokemonAbilities ? (
            <div
              className={`shadow-regionSelectorLine w-52 rounded-xl flex-col py-2 px-4 flex justify-center items-center bg-slate-300 divide-y-2 divide-slate-400 antialiased border-8 border-slate-800`}
            >
              <h1 className="text-base font-bold tracking-wider">
                {pokemonAbilities.name.toUpperCase().replace(/-+/g, " ")}
              </h1>
              <h2 className="flex w-full px-2 flex-wrap font-medium text-base">
                {pokemonAbilities.effect}
              </h2>
            </div>
          ) : (
            <div className="size-24 bg-white">deu merda</div>
          )}
        </Popover.Content>
      </Popover.Root>
    ))
  ) : (
    <div>no abilities</div>
  );
}
