"use client";
import { useCounterStore } from "@/stores/useCounterStore";

const CounterDisplay = () => {
  const count = useCounterStore((s) => s.count);
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-gray-400">
        Count{" "}
      </p>
      <p className="mt-2 text-6xl font-bold text-blue-600">{count}</p>
      <p className="mt-3 text-xs text-gray-400">
        This component only read state - it has no buttons
      </p>
    </div>
  );
};

export default CounterDisplay;
