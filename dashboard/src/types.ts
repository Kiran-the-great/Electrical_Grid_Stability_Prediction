// frontend/src/types.ts
export interface InputParameters {
    T1: number; T2: number; T3: number; T4: number;
    P1: number; P2: number; P3: number; P4: number;
    G1: number; G2: number;
}

export interface PredictionOutput {
    is_stable: boolean;
    confidence_level: number;
    status_indicator: string;
}

export interface Alert {
    timestamp: string;
    message: string;
    severity: string;
}

export interface LiveStabilityData {
    timestamp: string;
    stability_probability: number;
    T_node1_reaction_time: number;
    T_node2_reaction_time: number;
}

export interface DashboardData {
    inputs: InputParameters;
    prediction: PredictionOutput;
    alerts: Alert[];
}