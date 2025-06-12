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
  const [data, setData] = useState<{ time: number; bpm: number }[]>([]);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");

    socket.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        console.log(payload);

        if (payload.heartRate) {
          setData((prev) => {
            const next = [
              ...prev,
              { time: Date.now(), bpm: payload.heartRate },
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

  const currentBPM = data.length > 0 ? data[data.length - 1].bpm : 0;
  const status =
    currentBPM < 60 ? "Baixo" : currentBPM > 100 ? "Alto" : "Normal";

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-slate-50 rounded-xl shadow p-4 w-full justify-center items-center">
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
        <p className="text-gray-700">
          <span className="font-semibold">Horário:</span>{" "}
          {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default HeartRateChart;
