import React from "react";

function SegmentedProgress({ completed, total }) {
  const safeTotal = total === 0 ? 1 : total;

  return (
    <div className="w-full flex gap-1">
      {Array.from({ length: safeTotal }).map((_, i) => (
        <div
          key={i}
          className={`h-2 flex-1 rounded transition-all duration-300 ${
            i < completed
              ? "bg-indigo-500"
              : "bg-zinc-800"
          }`}
        />
      ))}
    </div>
  );
}

export default SegmentedProgress;