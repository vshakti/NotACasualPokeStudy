import "../../index.css";
import { DexBG, DexLine } from "../PokedexComponents";

export function AnalysisModal() {
  //sNUbJytU9a9mJmw

  return (
    <dialog className="modal" id="main_modal_3">
      <DexBG>
        <DexLine bodyLineStyle="border-t-0">
          <div className="flex flex-row w-96 h-16">
            <div className="border h-full w-1/4 flex items-center start px-3">
              botão
            </div>
            <div className="border py-1 px-2 rounded-left-xl flex h-full w-3/4">
              LISTA
            </div>
          </div>
        </DexLine>
      </DexBG>
    </dialog>
  );
}
