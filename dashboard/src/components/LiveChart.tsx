
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function LiveChart({ data }: { data: any[] }) {
  return (
    <div className="bg-slate-900/60 rounded-xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Live Stability Monitoring</h3>
      </div>

      <div style={{ height: 320 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#0b1220" />
            <XAxis dataKey="ts" tick={{ fill: "#94a3b8" }} minTickGap={40} />
            <YAxis yAxisId="left" tick={{ fill: "#94a3b8" }} />
            <Tooltip />
            <Line yAxisId="left" type="monotone" dataKey="stability" stroke="#10b981" dot={false} strokeWidth={2} />
            <Line yAxisId="left" type="monotone" dataKey="tau1" stroke="#3b82f6" dot={false} strokeWidth={2} />
            <Line yAxisId="left" type="monotone" dataKey="tau2" stroke="#8b5cf6" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <LegendTile title="Probability" desc="Stability confidence metric" />
        <LegendTile title="τ1" desc="Node 1 reaction time" />
        <LegendTile title="τ2" desc="Node 2 reaction time" />
      </div>
    </div>
  );
}

const LegendTile = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-slate-800/30 rounded-md p-3">
    <div className="text-sm text-slate-300">{title}</div>
    <div className="text-xs text-slate-400">{desc}</div>
  </div>
);
