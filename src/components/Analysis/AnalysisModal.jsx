import "../../index.css";
import { DexBG, DexLine } from "../PokedexComponents";
import { BtnAnalysis } from "./AddToTheListBtn";
import { AnalysisList } from "./AnalysisList";
import { GraphicSelect } from "./GraphicSelect";
import { RadarChart } from "./RadarGraphic";
import { useState } from "react";

export function AnalysisModal({
  pokemon,
  possiblePokemon,
  setPokemonName,
  RemoveFromAnalysis,
  AddToAnalysis,
  analysis,
  typeColorsBorder,
  typeColorsBg,
}) {
  //sNUbJytU9a9mJmw

  const [currentView, setCurrentView] = useState("INDIVIDUAL");
  const [currentGraphic, setCurrentGraphic] = useState("WEB");

  return (
    <dialog className="modal" id="main_modal_3">
      <DexBG bodyStyle="text-black">
        <DexLine bodyLineStyle=" border-slate-800 border-t-0 h-24">
          <div className="flex bg-slate-500 flex-row w-96 h-24">
            <div className="border-r-8 bg-slate-500 border-t-4 border-b-4 border-slate-800 rounded-r-full h-full w-1/4 flex items-center start px-3">
              <BtnAnalysis
                setPokemonName={setPokemonName}
                possiblePokemon={possiblePokemon}
                pokemon={pokemon}
                AddToAnalysis={AddToAnalysis}
                RemoveFromAnalysis={RemoveFromAnalysis}
                analysis={analysis}
              />
            </div>
            <div className="gap-1 p-2 hide-scrollbar rounded-left-xl flex flex-wrap items-center justify-center h-full w-3/4 overflow-y-scroll">
              <AnalysisList
                analysis={analysis}
                RemoveFromAnalysis={RemoveFromAnalysis}
              />
            </div>
          </div>
        </DexLine>
        <DexLine
          bodyLineStyle="bg-gray-300 border-slate-800 border-t-0 h-28 shadow-none"
          bodyLinePlacement="h-28 flex flex-row items-start w-full justify-center"
        >
          <GraphicSelect
            currentView={currentView}
            setCurrentView={setCurrentView}
            setCurrentGraphic={setCurrentGraphic}
          />
        </DexLine>

        <div className="flex bg-slate-400 py-1 items-center justify-center w-full h-content">
          {currentGraphic === "WEB" &&
            (analysis && analysis.length > 0 ? (
              <RadarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <div className="size-full items-center justify-center flex">
                SEM GRAFICO LOL
              </div>
            ))}
        </div>
      </DexBG>
    </dialog>
  );
}
