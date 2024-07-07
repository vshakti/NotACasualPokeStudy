import "../../index.css";

export function GraphicSelect({
  setCurrentView,
  currentView,
  setCurrentGraphic,
}) {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex border-b-8 bg-slate-500 border-slate-800 flex-row gap-x-10 justify-center shadow-regionSelectorLine w-full items-center py-2.5 font-semibold text-xl">
        <div
          onClick={() => setCurrentView("INDIVIDUAL")}
          className={`border-b-2 border-t-2 border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
        >
          INDIVIDUAL
        </div>
        <div
          onClick={() => setCurrentView("ALL")}
          className={`border-b-2 border-t-2 border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
        >
          COMPARISSON
        </div>
      </div>
      <div className="flex flex-wrap bg-slate-500 items-center h-10 justify-around">
        {currentView === "INDIVIDUAL" && (
          <>
            <div
              onClick={() => setCurrentGraphic("WEB")}
              className={`border-b-2 border-t-2 border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              WEB
            </div>
            <div
              onClick={() => setCurrentGraphic("PIZZA")}
              className={`border-b-2 border-t-2 border-slate-800 rounded-md px-2 py-0.5 text-slate-800 hover:scale-110 transition easy-in-out cursor-pointer`}
            >
              PIZZA
            </div>
          </>
        )}
        {currentView === "ALL" && (
          <>
            <div>HP</div>
            <div>ATTACK</div>
            <div>DEFENSE</div>
            <div>SPECIAL ATTACK</div>
            <div>SPECIAL DEFENSE</div>
            <div>SPEED</div>
          </>
        )}
      </div>
    </div>
  );
}
