
import { useLiveData } from "../hooks/useLiveData"
import HeaderBar from "../components/HeaderBar";
import LiveParametersCard from "../components/LiveParametersCard";
import ModelPredictionCard from "../components/ModelPredictionCard";
import LiveChart from "../components/LiveChart";
import AlertsPanel from "../components/AlertsPanel";
import AIAssistant from "../components/AIAssistant";

export default function Dashboard() {
  const live = useLiveData(3000);

  return (
    <div className="min-h-screen bg-[#071025] text-slate-200 p-6">
      <HeaderBar running={live.running} toggleRunning={live.toggleRunning} />
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-4">
          <LiveParametersCard params={live.params} />
        </div>

        <div className="col-span-4">
          <ModelPredictionCard prediction={live.prediction} />
          <div className="mt-6">
            <AlertsPanel alerts={live.alerts} />
          </div>
        </div>

        <div className="col-span-4">
          <AIAssistant />
        </div>

        <div className="col-span-12 mt-6">
          <LiveChart data={live.history} />
        </div>
      </div>
    </div>
  );
}
