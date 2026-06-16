
import type { Prediction } from "../hooks/useLiveData";

export default function ModelPredictionCard({ prediction }: { prediction: Prediction }) {
  const isUnstable = prediction.prediction === "Unstable";
  return (
    <div className="bg-slate-900/60 rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Model Prediction</h3>
        <div className={`px-3 py-1 rounded-md ${isUnstable ? "bg-red-700" : "bg-emerald-700"}`}>
          {isUnstable ? "Unstable" : "Stable"}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-400">Confidence Level</div>
          <div className="text-xl font-bold">{prediction.confidence.toFixed(1)}%</div>
        </div>

        <div className="w-full h-3 bg-slate-800 rounded-full mt-3 overflow-hidden">
          <div
            style={{ width: `${clamp(prediction.confidence, 0, 100)}%` }}
            className={`h-full ${isUnstable ? "bg-red-500" : "bg-emerald-500"}`}
          />
        </div>

        <div className="mt-6 text-sm flex items-center justify-between">
          <div className="text-slate-400">Status Indicator</div>
          <div className={`font-medium ${isUnstable ? "text-red-400" : "text-emerald-300"}`}>
            {isUnstable ? "Risk Detected" : "Normal"}
          </div>
        </div>
      </div>
    </div>
  );
}

function clamp(v: number, a: number, b: number) {
  return Math.min(Math.max(v, a), b);
}
