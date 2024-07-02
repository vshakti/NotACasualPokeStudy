import "../../../index.css";

export function PokemonStats({ pokemon, typeColorsBg, typeColorsShadows }) {
  return pokemon.stats && pokemon.stats.length > 0 ? (
    pokemon.stats.map((stats, index) => (
      <div key={stats + index}>
        <div className="flex flex-col h-14 w-full px-2 justify-center gap-y-0.5 items-start antialiased hover:scale-110 transition easy-in-out">
          <div className="text-base text-white font-semibold pl-2">
            {stats.stat.name.toUpperCase().replace(/-+/g, " ")}
          </div>
          <div
            className={`w-full h-5 bg-gray-200 ${
              typeColorsShadows[pokemon.types[0]?.type.name]
            } rounded-full flex items-center justify-between pr-2 border space-x-1`}
          >
            <div
              className={`h-full flex items-center rounded-full pl-2 ${
                typeColorsBg[pokemon.types[0]?.type.name]
              } `}
              style={{ width: `${stats.base_stat * 0.5}%` }}
            ></div>
            <span className="text-slate-800 flex font-bold text-base">
              {stats.base_stat}
            </span>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div>no stats</div>
  );
}
