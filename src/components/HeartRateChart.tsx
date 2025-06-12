import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MAX_POINTS = 20;

const HeartRateChart = () => {
  const [data, setData] = useState<
    {
      time: number;
      bpm?: number;
      temperature?: number;
      oxygenLevel?: number;
      hydration?: number;
      respiration?: number;
    }[]
  >([]);

  useEffect(() => {
    const socket = new WebSocket("ws://backend-vitalcare.onrender.com/");

    socket.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);

        if (
          payload.heartRate ||
          payload.temperature ||
          payload.oxygenLevel ||
          payload.hydration ||
          payload.respiration
        ) {
          setData((prev) => {
            const last = prev[prev.length - 1] || {};
            const next = [
              ...prev,
              {
                time: Date.now(),
                bpm: payload.heartRate ?? last.bpm,
                temperature: payload.temperature ?? last.temperature,
                oxygenLevel: payload.oxygenLevel ?? last.oxygenLevel,
                hydration: payload.hydration ?? last.hydration,
                respiration: payload.respiration ?? last.respiration,
              },
            ];
            return next.slice(-MAX_POINTS);
          });
        }
      } catch (err) {
        console.error("Erro ao processar dados do WebSocket:", err);
      }
    };

    socket.onerror = (err) => {
      console.error("WebSocket error:", err);
    };

    return () => {
      socket.close();
    };
  }, []);

  const latest = data[data.length - 1] || {};
  const currentBPM = latest.bpm ?? 0;
  const currentTemp = latest.temperature?.toFixed(1) ?? "—";
  const currentSpO2 = latest.oxygenLevel ?? "—";
  const currentHydration = latest.hydration ?? "—";
  const currentRespiration = latest.respiration ?? "—";

  const status =
    currentBPM < 60 ? "Baixo" : currentBPM > 100 ? "Alto" : "Normal";

  const tempStatus =
    typeof latest.temperature === "number"
      ? latest.temperature < 36
        ? "Baixa"
        : latest.temperature > 37.5
        ? "Alta"
        : "Normal"
      : "—";

  const oxygenStatus =
    typeof latest.oxygenLevel === "number"
      ? latest.oxygenLevel < 90
        ? "Crítica"
        : latest.oxygenLevel < 95
        ? "Baixa"
        : "Normal"
      : "—";

  const hydrationStatus =
    typeof latest.hydration === "number"
      ? latest.hydration < 30
        ? "Baixa"
        : latest.hydration > 70
        ? "Alta"
        : "Normal"
      : "—";

  const respirationStatus =
    typeof latest.respiration === "number"
      ? latest.respiration < 12
        ? "Baixa"
        : latest.respiration > 20
        ? "Alta"
        : "Normal"
      : "—";

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-center font-semibold text-xl">
        <span className="font-semibold">Horário:</span>{" "}
        {new Date().toLocaleTimeString()}
      </div>

      {/* Gráfico de Batimentos */}
      <div className="flex flex-col md:flex-row mt-6 gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-4">Monitor de Batimentos (BPM)</h2>
        <div className="md:w-3/4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tickFormatter={() => ""} />
              <YAxis domain={[0, 120]} />
              <Tooltip labelFormatter={() => ""} />
              <Line
                type="monotone"
                dataKey="bpm"
                stroke="#ef4444"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/4 w-full flex flex-col justify-center items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dados em Tempo Real</h3>
          <p className="text-gray-700">
            <span className="font-semibold">BPM atual:</span> {currentBPM}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {status}
          </p>
        </div>
      </div>

      {/* Gráfico de Temperatura */}
      <div className="flex flex-col md:flex-row mt-6 gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-4">Monitor de Temperatura (°C)</h2>
        <div className="md:w-3/4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tickFormatter={() => ""} />
              <YAxis domain={[20, 45]} />
              <Tooltip labelFormatter={() => ""} />
              <Line
                type="monotone"
                dataKey="temperature"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/4 w-full flex flex-col justify-center items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dados em Tempo Real</h3>
          <p className="text-gray-700">
            <span className="font-semibold">Temperatura atual:</span>{" "}
            {currentTemp} °C
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {tempStatus}
          </p>
        </div>
      </div>

      {/* Gráfico de Oxigenação */}
      <div className="flex flex-col md:flex-row mt-6 gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-4">Monitor de Oxigenação (SpO₂)</h2>
        <div className="md:w-3/4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tickFormatter={() => ""} />
              <YAxis domain={[85, 100]} />
              <Tooltip labelFormatter={() => ""} />
              <Line
                type="monotone"
                dataKey="oxygenLevel"
                stroke="#10b981"
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/4 w-full flex flex-col justify-center items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dados em Tempo Real</h3>
          <p className="text-gray-700">
            <span className="font-semibold">SpO₂ atual:</span> {currentSpO2} %
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {oxygenStatus}
          </p>
        </div>
      </div>

      {/* Gráfico de Hidratação */}
      <div className="flex flex-col md:flex-row mt-6 gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-4">Monitor de Hidratação (%)</h2>
        <div className="md:w-3/4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tickFormatter={() => ""} />
              <YAxis domain={[0, 100]} />
              <Tooltip labelFormatter={() => ""} />
              <Line
                type="monotone"
                dataKey="hydration"
                stroke="#f59e0b" // cor laranja
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/4 w-full flex flex-col justify-center items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dados em Tempo Real</h3>
          <p className="text-gray-700">
            <span className="font-semibold">Hidratação atual:</span>{" "}
            {currentHydration} %
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {hydrationStatus}
          </p>
        </div>
      </div>

      {/* Gráfico de Respiração */}
      <div className="flex flex-col md:flex-row mt-6 gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
        <h2 className="text-xl font-bold mb-4">
          Monitor de Respiração
        </h2>
        <div className="md:w-3/4 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" tickFormatter={() => ""} />
              <YAxis domain={[0, 40]} />
              <Tooltip labelFormatter={() => ""} />
              <Line
                type="monotone"
                dataKey="respiration"
                stroke="#8b5cf6" // cor roxa
                strokeWidth={2}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="md:w-1/4 w-full flex flex-col justify-center items-start bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h3 className="text-lg font-semibold mb-2">Dados em Tempo Real</h3>
          <p className="text-gray-700">
            <span className="font-semibold">Respiração atual:</span>{" "}
            {currentRespiration}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Status:</span> {respirationStatus}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeartRateChart;
