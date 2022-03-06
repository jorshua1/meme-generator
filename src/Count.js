import React from "react";

export default function Count(props) {
  return (
    <div className="h-56 w-56 bg-slate-50 rounded-full flex items-center justify-center">
      <p className="text-neutral-900 text-6xl font-semibold">{props.number}</p>
    </div>
  );
}
