
import { GridParams } from "../hooks/useLiveData";

export default function LiveParametersCard({ params }: { params: GridParams }) {
  return (
    <div className="bg-slate-900/60 rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-4">Real-time Input Parameters</h3>

      <div className="space-y-3">
        <div>
          <div className="text-xs text-slate-400">REACTION TIME (τ)</div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <LabelVal label="τ1" val={`${params.tau1.toFixed(2)} s`} />
            <LabelVal label="τ2" val={`${params.tau2.toFixed(2)} s`} />
            <LabelVal label="τ3" val={`${params.tau3.toFixed(2)} s`} />
            <LabelVal label="τ4" val={`${params.tau4.toFixed(2)} s`} />
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400 mt-4">POWER (P)</div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <LabelVal label="p1" val={`${params.p1.toFixed(2)} MW`} />
            <LabelVal label="p2" val={`${params.p2.toFixed(2)} MW`} />
            <LabelVal label="p3" val={`${params.p3.toFixed(2)} MW`} />
            <LabelVal label="p4" val={`${params.p4.toFixed(2)} MW`} />
          </div>
        </div>

        <div>
          <div className="text-xs text-slate-400 mt-4">COEFFICIENT (G)</div>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <LabelVal label="g1" val={`${params.g1.toFixed(2)}`} />
            <LabelVal label="g2" val={`${params.g2.toFixed(2)}`} />
            <LabelVal label="g3" val={`${params.g3.toFixed(2)}`} />
            <LabelVal label="g4" val={`${params.g4.toFixed(2)}`} />
          </div>
        </div>
      </div>
    </div>
  );
}

const LabelVal = ({ label, val }: { label: string; val: string }) => (
  <div className="flex justify-between bg-slate-800/30 rounded-md px-3 py-2">
    <div className="text-sm text-slate-300">{label}</div>
    <div className="font-medium">{val}</div>
  </div>
);
