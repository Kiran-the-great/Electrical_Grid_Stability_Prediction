
//import { Button } from "@/components/ui/button"; // shadcn button - adapt import to your project

type Props = {
  running: boolean;
  toggleRunning: () => void;
};

export default function HeaderBar({ running, toggleRunning }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-slate-800/40">
          <span className="text-lg font-semibold">⚡ Electrical Grid Stability Monitoring System</span>
          <div className="text-sm text-slate-400">Real-time ML-Powered Prediction Dashboard</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-sm text-emerald-400">Live Monitoring</div>
        <button
          onClick={toggleRunning}
          className={`px-4 py-2 rounded-lg font-semibold ${running ? "bg-red-600" : "bg-green-600"}`}
        >
          {running ? "Pause" : "Resume"}
        </button>
      </div>
    </div>
  );
}
