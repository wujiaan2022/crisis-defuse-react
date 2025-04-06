// src/components/CounterControl.jsx
import React from "react";

export default function CounterControl({ count, increase, decrease, reset }) {
  return (
    <div className="sticky bottom-0 w-full flex items-center justify-between bg-gray-100 px-8 py-1 shadow-inner">
      <button
        onClick={reset}
        className="text-sm font-semibold text-red-600 hover:underline"
      >
        Reset
      </button>

      <button onClick={decrease} className="px-5 py-1 bg-yellow-200 rounded">
        -
      </button>
      <span className="text-md font-semibold">{count}</span>
      <button onClick={increase} className="px-5 py-1 bg-green-200 rounded">
        +
      </button>
    </div>
  );
}
