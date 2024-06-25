function DexBG({ children, bodyStyle }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center">
      <div
        className={`flex-col space-y-6 rounded-3xl items-center overflow-hidden bg-gradient-to-r from-red-700 via-red-400 to-red-700 shadow-[0_0px_50px_5px_black] border-0.75 border-double border-slate-900 flex ${bodyStyle}`}
      >
        {children}
      </div>
    </div>
  );
}

function DexHeader({
  children,
  bgStyle,
  blinkStyle1,
  blinkStyle2,
  closeStyle,
}) {
  return (
    <div
      className={`bg-slate-900 flex-row mb-12 justify-evenly h-14 flex border-white border-8 w-60 border-t-0 rounded-b-3xl items-center shadow-regionSelectorClose ${bgStyle}`}
    >
      <div
        className={`rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green] ${blinkStyle1}`}
      >
        <div
          className={`animate-blink rounded-full size-4 bg-green-500 shadow-[0_0px_8px_5px_green] ${blinkStyle1}`}
        />
      </div>
      <div
        className={`rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow] ${blinkStyle2}`}
      >
        <div
          className={`animate-blink rounded-full size-4 bg-yellow-300 shadow-[0_0px_8px_2px_yellow] ${blinkStyle2}`}
        />
      </div>
      <div className="modal-action flex">
        <form method="dialog">
          <button
            id="region_selector_close"
            onClick={() => {
              history.replaceState(null, "remover region", "/");
            }}
          >
            <div
              className={`text-white rounded-full bg-red-600 h-8 w-14 flex items-center justify-center shadow-[0_0px_8px_2px_red] transition ease-in-out hover:scale-110 duration-75 ${closeStyle}`}
            >
              {children}
            </div>
          </button>
        </form>
      </div>
      <div
        className={`rounded-full size-4 bg-yellow-300 border-slate-900 border-1 shadow-[0_0px_8px_2px_yellow] ${blinkStyle2}`}
      >
        <div
          className={`animate-blink rounded-full size-4 bg-yellow-300 shadow-[0_0px_8px_2px_yellow] ${blinkStyle2}`}
        />
      </div>
      <div
        className={`rounded-full size-4 bg-green-500 border-slate-900 border-1 shadow-[0_0px_8px_5px_green] ${blinkStyle1}`}
      >
        <div
          className={`animate-blink rounded-full size-4 bg-green-500 shadow-[0_0px_8px_5px_green] ${blinkStyle1}`}
        />
      </div>
    </div>
  );
}

function DexLine({ children, bodyLineStyle }) {
  return (
    <div
      className={`shadow-regionSelectorLine relative border-white border-8 flex w-72 border-l-0 border-r-0 bg-slate-900 h-20 ${bodyLineStyle}`}
    >
      <div className="min-w-full min-h-full items-center justify-start overflow-hidden flex">
        <div className="flex place-items-center justify-evenly pt-4 space-x-44 w-72 h-16 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
function DexSelector({ children }) {
  return (
    <div
      className="flex border-8 shadow-regionSelector bottom-40 absolute bg-slate-900 border-white pr-10 pl-6 size-44 space-x-8 justify-start rounded-full pt-6 overflow-hidden"
      id="region_selector"
    >
      {children}
    </div>
  );
}

function DexDisplay({ children, displayStyle }) {
  return (
    <div
      className={`flex border-4 shadow-regionDisplay mt-16 items-center overflow-hidden justify-start border-r-0 border-l-0 bg-slate-900 border-white w-72 h-8 ${displayStyle}`}
    >
      <div className="flex space-x-8 text-base animate-scroll">{children}</div>
    </div>
  );
}

export { DexBG, DexHeader, DexLine, DexSelector, DexDisplay };
