

export default function AlertsPanel({ alerts }: { alerts: any[] }) {
  return (
    <div className="bg-slate-900/60 rounded-xl p-4 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">System Alerts & Notifications</h3>
        <div className="text-sm text-slate-400 rounded-full px-3 py-1 bg-slate-800/20"> {alerts.length} Alerts</div>
      </div>

      <div className="space-y-3 max-h-64 overflow-auto pr-2">
        {alerts.length === 0 && <div className="text-slate-400">No alerts yet</div>}
        {alerts.map((a, i) => (
          <div key={i} className="p-3 rounded-md border border-yellow-700/30 bg-slate-800/40">
            <div className="flex justify-between items-center">
              <div className="text-sm text-yellow-300">[{a.ts}]</div>
              <div className="text-sm font-semibold text-yellow-400">{a.level}</div>
            </div>
            <div className="mt-2 text-sm text-slate-200">{a.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
