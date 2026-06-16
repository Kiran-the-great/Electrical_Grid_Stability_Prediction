import { useEffect, useRef, useState } from "react";

type GridState = {
  tau1: number;
  tau2: number;
  tau3: number;
  tau4: number;
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  g1: number;
  g2: number;
  g3: number;
  g4: number;
  stab: number;
};

type AlertItem = {
  ts: string;
  level: "INFO" | "WARNING" | "CRITICAL";
  message: string;
};

function rand(min: number, max: number) {
  return Number((Math.random() * (max - min) + min).toFixed(6));
}

function generateStable(): GridState {
  return {
    tau1: rand(1, 6),
    tau2: rand(1, 6),
    tau3: rand(1, 6),
    tau4: rand(1, 6),
    p1: rand(-1.0, -0.3),
    p2: rand(-1.0, -0.3),
    p3: rand(-1.0, -0.3),
    p4: rand(-1.0, -0.3),
    g1: rand(0.1, 0.9),
    g2: rand(0.1, 0.9),
    g3: rand(0.1, 0.9),
    g4: rand(0.1, 0.9),
    stab: rand(-0.05, -0.005),
  };
}

function generateUnstable(): GridState {
  return {
    tau1: rand(6, 10),
    tau2: rand(6, 10),
    tau3: rand(6, 10),
    tau4: rand(6, 10),
    p1: rand(-2.0, -1.1),
    p2: rand(-2.0, -1.1),
    p3: rand(-2.0, -1.1),
    p4: rand(-2.0, -1.1),
    g1: rand(0.1, 0.9),
    g2: rand(0.1, 0.9),
    g3: rand(0.1, 0.9),
    g4: rand(0.1, 0.9),
    stab: rand(0.01, 0.07),
  };
}

function getNextState(prevState: "stable" | "unstable"): GridState {
  const r = Math.random();
  if (prevState === "stable") {
    return r < 0.7 ? generateStable() : generateUnstable();
  } else {
    return r < 0.4 ? generateStable() : generateUnstable();
  }
}

// ----------------------------
// MAIN HOOK
// ----------------------------
export function useLiveData(tickMs = 2000) {
  const [params, setParams] = useState<GridState>(generateStable());
  const [status, setStatus] = useState<"stable" | "unstable">("stable");
  const [history, setHistory] = useState<GridState[]>([]);
  const [alerts, setAlerts] = useState<AlertItem[]>([]);
  const [running, setRunning] = useState(true);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const toggleRunning = () => setRunning((r) => !r);

  const pushAlert = (level: AlertItem["level"], message: string) => {
    setAlerts((s) => [
      { ts: new Date().toLocaleTimeString(), level, message },
      ...s,
    ].slice(0, 200));
  };

  useEffect(() => {
    if (!running) return;

    intervalRef.current = setInterval(() => {
      const simulated = getNextState(status);

      // update main params
      setParams(simulated);

      // update status
      const newStatus = simulated.stab < 0 ? "stable" : "unstable";
      setStatus(newStatus);

      // update history (last 60 points)
      setHistory((h) => [...h.slice(-59), simulated]);

      // push random alerts occasionally
      if (Math.random() < 0.05) pushAlert("INFO", "Random system info");
      if (Math.random() < 0.03) pushAlert("WARNING", "Random warning generated");
      if (newStatus === "unstable" && Math.random() < 0.1)
        pushAlert("CRITICAL", "Grid unstable detected!");
    }, tickMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [status, running, tickMs]);

  return {
    params,
    prediction: { prediction: status === "stable" ? "Stable" : "Unstable", confidence: Math.random() * 50 + 50, status },
    history,
    alerts,
    running,
    toggleRunning,
    setParams,
    setHistory,
    setAlerts,
  };
}

