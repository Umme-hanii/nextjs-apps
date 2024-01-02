"use client";

import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="max-w-6xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCount((currState) => currState + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};
export default ClientPage;
