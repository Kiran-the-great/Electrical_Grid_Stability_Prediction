

export default function AIAssistant() {
  return (
    <div className="bg-slate-900/60 rounded-xl p-6 shadow-md">
      <h3 className="text-lg font-semibold mb-3">AI Assistant</h3>
      <div className="bg-slate-800/30 rounded-md p-4 text-slate-200">
        Hello! I'm your Grid Stability Assistant. I can help explain predictions, analyze parameters, and provide recommendations.
      </div>

      <div className="mt-4 space-y-2">
        <button className="w-full text-left px-4 py-2 rounded-md bg-slate-800/20">Why is the grid unstable?</button>
        <button className="w-full text-left px-4 py-2 rounded-md bg-slate-800/20">What actions should I take?</button>
        <button className="w-full text-left px-4 py-2 rounded-md bg-slate-800/20">Show current parameters</button>
      </div>
    </div>
  );
}
