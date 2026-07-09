import CounterDisplay from "@/components/CounterDisplay";
import CounterButtons from "@/components/CounterButtons";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12">
      <h2 className="mb-2 text-2xl font-bold text-gray-900">
        Global State in one screen
      </h2>
      <p className="mb-8 text-gray-500">
        {" "}
        The display and the buttons are separate components. No props pass
        between them — they share the counter through the store.
      </p>
      <div className="space-y-6">
        <CounterDisplay />
        <CounterButtons/>
      </div>
    </main>
  );
}
