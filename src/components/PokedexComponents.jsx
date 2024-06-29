function DexBG({ children, bodyStyle, bodyGradient, bgStyle }) {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col justify-center items-center ${bgStyle}`}
    >
      <div
        className={`flex-col rounded-3xl items-center overflow-hidden shadow-[0_0px_50px_5px_black] border-0.75 border-double border-slate-900 flex ${bodyStyle}`}
        style={{
          backgroundImage: `linear-gradient(to right, ${bodyGradient} , white, ${bodyGradient})`,
        }}
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
  btnClick,
}) {
  return (
    <div
      className={`bg-slate-900 flex-row mb-12 justify-evenly h-14 flex border-white border-8 w-60 border-t-0 rounded-b-3xl items-center shadow-regionSelectorClose ${bgStyle}`}
    >
      <div
        className={`rounded-full size-4 border-slate-900 border-1 ${blinkStyle1}`}
      >
        <div className={`animate-blink rounded-full size-4 ${blinkStyle1}`} />
      </div>
      <div
        className={`rounded-full size-4 border-slate-900 border-1 ${blinkStyle2}`}
      >
        <div className={`animate-blink rounded-full size-4 ${blinkStyle2}`} />
      </div>
      <div className="modal-action flex">
        <form method="dialog">
          <button
            id="region_selector_close"
            onClick={() => {
              history.replaceState(null, "remover /", "/");
              {
                btnClick;
              }
            }}
          >
            <div
              className={`text-white rounded-full h-8 w-14 flex items-center justify-center transition ease-in-out hover:scale-110 duration-75 ${closeStyle}`}
            >
              {children}
            </div>
          </button>
        </form>
      </div>
      <div
        className={`rounded-full size-4 border-slate-900 border-1 ${blinkStyle2}`}
      >
        <div className={`animate-blink rounded-full size-4 ${blinkStyle2}`} />
      </div>
      <div
        className={`rounded-full size-4 border-slate-900 border-1 ${blinkStyle1}`}
      >
        <div className={`animate-blink rounded-full size-4 ${blinkStyle1}`} />
      </div>
    </div>
  );
}

function DexLine({ children, bodyLineStyle, bodyLinePlacement }) {
  return (
    <div
      className={`shadow-regionSelectorLine relative w-full border-8 flex border-l-0 border-r-0 bg-slate-900 h-20 ${bodyLineStyle}`}
    >
      <div className="min-w-full min-h-full items-center justify-start overflow-hidden flex">
        <div className={`${bodyLinePlacement}`}>{children}</div>
      </div>
    </div>
  );
}
function DexSelector({
  possibleOptions,
  pokebolaCount,
  pokeRegion,
  regionURLIndex,
  children,
  selectorStyle,
}) {
  return (
    <button
      onClick={() => {
        history.pushState(
          null,
          "pokedex",
          `/${possibleOptions[pokebolaCount].toLowerCase()}/${
            pokeRegion[regionURLIndex - 1].name
          }`
        );
        document.getElementById("region_datils").showModal();
      }}
      className={`flex border-8 shadow-regionSelector bottom-40 absolute bg-slate-900 border-white pr-10 pl-6 size-44 space-x-8 justify-start rounded-full pt-6 overflow-hidden ${selectorStyle}`}
      id="region_selector"
    >
      {children}
    </button>
  );
}

function DexDisplay({ children, displayStyle, displayAnimation }) {
  return (
    <div
      className={`flex border-4 shadow-regionDisplay mt-16 items-center overflow-hidden justify-start border-r-0 border-l-0 bg-slate-900 border-white w-72 ${displayStyle}`}
    >
      <div
        className={`flex space-x-8  animate-scroll text-base ${displayAnimation}`}
      >
        {children}
      </div>
    </div>
  );
}

export { DexBG, DexHeader, DexLine, DexSelector, DexDisplay };
