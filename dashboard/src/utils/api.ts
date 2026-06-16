/// <reference types="vite/client" />
export const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function predictGrid(data: Record<string, number>) {
  const res = await fetch(`${API_BASE}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`API error ${res.status}`);
  }
  return res.json();
}
