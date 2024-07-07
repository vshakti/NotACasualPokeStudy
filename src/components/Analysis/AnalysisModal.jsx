import "../../index.css";
import { DexBG, DexLine } from "../PokedexComponents";
import { BtnAnalysis } from "./AddToTheListBtn";
import { AnalysisList } from "./AnalysisList";
import { GraphicSelect } from "./GraphicSelect";
import { RadarChart } from "./Graphics/RadarGraphic";
import { PieChart } from "./Graphics/PieChart";
import { HpBarChart } from "./Graphics/HpBarChart";
import { AtkBarChart } from "./Graphics/AtkBarChart";
import { DefBarChart } from "./Graphics/DefBarChart";
import { SpAtkBarChart } from "./Graphics/SpAtkBarChart";
import { SpDefBarChart } from "./Graphics/SpDefBarChart";
import { SpeedBarChart } from "./Graphics/SpeedBarChart";
import { useState } from "react";
import { XMarkIcon, BackspaceIcon } from "@heroicons/react/16/solid";

export function AnalysisModal({
  pokemon,
  possiblePokemon,
  setPokemonName,
  RemoveFromAnalysis,
  AddToAnalysis,
  analysis,
  typeColorsBorder,
  typeColorsBg,
  setAnalysis,
}) {
  //sNUbJytU9a9mJmw

  const [currentView, setCurrentView] = useState("OVERALL");
  const [currentOverall, setCurrentOverall] = useState("RADAR");
  const [currentIsolated, setCurrentIsolated] = useState("HP");

  return (
    <dialog className="modal" id="main_modal_3">
      <DexBG bodyStyle="text-black bg-gradient-to-r w-96 from-slate-300 via-slate-100 to-slate-300">
        <DexLine bodyLineStyle=" border-slate-800 border-t-0 h-24">
          <div className="flex bg-gray-200 flex-row w-96 h-24">
            <div className="border-r-8 bg-gray-300 border-t-4 border-b-4 border-slate-800 rounded-r-full h-full w-1/4 flex items-center justify-center px-3">
              <BtnAnalysis
                setPokemonName={setPokemonName}
                possiblePokemon={possiblePokemon}
                pokemon={pokemon}
                AddToAnalysis={AddToAnalysis}
                RemoveFromAnalysis={RemoveFromAnalysis}
                analysis={analysis}
              />
            </div>
            <div className="gap-1 bg-gradient-to-r from-slate-200 via-slate-200 to-slate-300 p-1.5 hide-scrollbar  flex flex-wrap items-center justify-center h-full w-full overflow-y-scroll">
              <AnalysisList
                analysis={analysis}
                RemoveFromAnalysis={RemoveFromAnalysis}
              />
            </div>
            <div className="h-full w-24 bg-slate-300 flex gap-y-4 pt-2 flex-col mr-2 items-start justify-center">
              <form method="dialog">
                <button className="size-8 hover:scale-125 transition easy-in-out text-slate-800 border-slate-800 border-2 rounded-full">
                  <XMarkIcon className="shadow-md shadow-dark rounded-full" />
                </button>
              </form>
              <button
                onClick={() => {
                  setAnalysis([]);
                }}
                className="size-8 text-slate-800"
              >
                <BackspaceIcon className="hover:scale-125 transition easy-in-out" />
              </button>
            </div>
          </div>
        </DexLine>
        <DexLine
          bodyLineStyle="border-slate-800 border-b-0 border-t-0 h-28"
          bodyLinePlacement="h-28 flex flex-row items-start w-full justify-center"
        >
          <GraphicSelect
            currentView={currentView}
            setCurrentView={setCurrentView}
            setCurrentOverall={setCurrentOverall}
            setCurrentIsolated={setCurrentIsolated}
          />
        </DexLine>

        <div className="flex py-1.5 items-center justify-center w-full h-content">
          {currentOverall === "RADAR" &&
            currentView === "OVERALL" &&
            (analysis && analysis.length > 0 ? (
              <RadarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentOverall === "PIZZA" &&
            currentView === "OVERALL" &&
            (analysis && analysis.length > 0 ? (
              <PieChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "HP" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <HpBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "ATK" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <AtkBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "DEF" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <DefBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "SPATK" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <SpAtkBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "SPDEF" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <SpDefBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
          {currentIsolated === "SPEED" &&
            currentView === "ISOLATED" &&
            (analysis && analysis.length > 0 ? (
              <SpeedBarChart
                typeColorsBg={typeColorsBg}
                pokemon={pokemon}
                analysis={analysis}
                typeColorsBorder={typeColorsBorder}
              />
            ) : (
              <span className="font-medium opacity-70 animate-pulse text-xl text-slate-800">
                No pokemon in analysis
              </span>
            ))}
        </div>
      </DexBG>
    </dialog>
  );
}
