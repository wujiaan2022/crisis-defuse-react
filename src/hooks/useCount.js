// src/hooks/useCount.js
import { useState } from "react";

export function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => Math.max(0, c - 1));
  const reset = () => setCount(initialValue);

  return { count, increase, decrease, reset };
}
