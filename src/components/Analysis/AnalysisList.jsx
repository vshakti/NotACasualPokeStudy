import "../../index.css";

export function AnalysisList({ analysis, RemoveFromAnalysis }) {
  return analysis && analysis.length > 0 ? (
    analysis
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((analyze, index) => (
        <div key={analyze + index}>
          <div
            className={`flex flex-col items-center hover:scale-110 transition duration-300 relative justify-center`}
          >
            <img
              onClick={() => {
                RemoveFromAnalysis(analyze);
              }}
              src={analyze.sprite}
              alt={analyze.name}
              className={`cursor-pointer size-10 border-2 bg-slate-500 shadow-pokemonDetailsSprite rounded-full`}
            />
          </div>
        </div>
      ))
  ) : (
    <div className="flex items-center justify-center flex-col h-full w-full">
      <span className="text-white font-medium text-xl px-2 py-1 rounded-xl border-2 bg-slate-800">
        No pokemon in analysis
      </span>
    </div>
  );
}
