from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from catboost import CatBoostClassifier
import numpy as np
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load CatBoost Model
model = CatBoostClassifier()
model.load_model("catboost_grid_stability_final.cbm")

class GridInput(BaseModel):
    tau1: float
    tau2: float
    tau3: float
    tau4: float
    p1: float
    p2: float
    p3: float
    p4: float
    g1: float
    g2: float
    g3: float
    g4: float

@app.post("/predict")
def predict_stability(data: GridInput):
    X = np.array([
        data.tau1, data.tau2, data.tau3, data.tau4,
        data.p1, data.p2, data.p3, data.p4,
        data.g1, data.g2, data.g3, data.g4
    ]).reshape(1, -1)

    pred = model.predict(X)[0]
    prob = float(model.predict_proba(X)[0][1])

    return {
        "prediction": "Unstable" if pred == 1 else "Stable",
        "confidence": round(prob * 100, 2),
        "status": "Risk Detected" if pred == 1 else "Normal"
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
