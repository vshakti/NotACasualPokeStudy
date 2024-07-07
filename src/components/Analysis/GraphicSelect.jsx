import "../../index.css";

export function GraphicSelect({
  setCurrentView,
  currentView,
  setCurrentOverall,
  setCurrentIsolated,
}) {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex h-12 border-b-8 text-xs bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 border-slate-800 flex-row gap-x-2 PX-0.5 justify-center shadow-regionSelectorLine w-full items-center font-semibold">
        <div
          onClick={() => setCurrentView("OVERALL")}
          className={`shadow-md shadow-dark border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
        >
          OVERALL COMPARISSON
        </div>
        <div
          onClick={() => setCurrentView("ISOLATED")}
          className={`shadow-md shadow-dark border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
        >
          ISOLATED COMPARISSON
        </div>
      </div>
      <div className="flex h-12 flex-wrap bg-gradient-to-r from-slate-300 via-slate-100 to-slate-300 items-center justify-around">
        {currentView === "OVERALL" && (
          <>
            <div
              onClick={() => setCurrentOverall("RADAR")}
              className={`shadow-md shadow-dark border-slate-800 rounded-md px-1 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              RADAR DISTRIBUITION
            </div>
            <div
              onClick={() => setCurrentOverall("PIZZA")}
              className={`shadow-md shadow-dark border-slate-800 rounded-md px-1 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              OVERALL PORPORTIONS
            </div>
          </>
        )}
        {currentView === "ISOLATED" && (
          <div className="text-xs gap-x-1.5 flex px-1 font-medium flex-wrap w-full items-center justify-center">
            <span
              onClick={() => setCurrentIsolated("HP")}
              className={`text-pink-700 border-pink-700 shadow-md shadow-pink-700 rounded-md px-1 py-0.50 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              HP
            </span>
            <span
              onClick={() => setCurrentIsolated("ATK")}
              className={`text-cyan-700 border-cyan-700 shadow-md shadow-cyan-700 rounded-md px-1 py-0.5 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              ATTACK
            </span>
            <span
              onClick={() => setCurrentIsolated("DEF")}
              className={`text-blue-800 border-blue-800 shadow-md shadow-blue-800 rounded-md px-1 py-0.5 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              DEFENSE
            </span>
            <span
              onClick={() => setCurrentIsolated("SPATK")}
              className={`text-purple-600 border-purple-600 shadow-md shadow-purple-600 rounded-md px-1 py-0.5 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              SP. ATTACK
            </span>
            <span
              onClick={() => setCurrentIsolated("SPDEF")}
              className={`text-green-500 border-green-500 shadow-md shadow-green-500 rounded-md px-1 py-0.5 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              SP. DEFENSE
            </span>
            <span
              onClick={() => setCurrentIsolated("SPEED")}
              className={`text-yellow-600 border-yellow-600 shadow-md shadow-yellow-600 rounded-md px-1 py-0.5 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              SPEED
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
