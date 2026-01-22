"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => setCount((prev) => prev + 1);
  return (
    <div>
      <h2>Counter</h2>
      Count: {count}
      <button type="button" onClick={handlePlus}>
        +1
      </button>
    </div>
  );
}
