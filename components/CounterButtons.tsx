"use client";
import { useCounterStore } from "@/stores/useCounterStore";

const CounterButtons = () => {
  const increment = useCounterStore((s) => s.increment);
  const decrement = useCounterStore((s) => s.decrement);
  const reset = useCounterStore((s) => s.reset);

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className="h-12 rounded-lg bg-gray-200 text-2xl font-bold text-gray-700 hover:bg-gray-300 w-20"
        onClick={decrement}
      >
        -
      </button>
      <button
        className="h-12 rounded-lg bg-gray-100 px-5 font-medium text-gray-600 hover:bg-gray-200"
        onClick={reset}
      >
        Reset
      </button>
      <button
        className="h-12 rounded-lg bg-blue-600 text-2xl font-bold text-gray-700 hover:bg-blue-700 w-20"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

export default CounterButtons;
