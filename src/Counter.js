import React, { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(0);

    function plusCounter(){
        setCount(prevCount => prevCount + 1)
    }

    function lessCounter(){
        setCount(prevcount => prevcount - 1 )
    }

  return (
    <div className="bg-neutral-900 text-white w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center h-96 w-96 text-center">
        <div className="relative">
          <button onClick={lessCounter} className="h-20 w-20 bg-slate-700 rounded-full text-4xl font-semibold absolute bottom-0 left-0">
            -
          </button>
          <div className="h-56 w-56 bg-slate-50 rounded-full flex items-center justify-center">
              <p className="text-neutral-900 text-6xl font-semibold">{count}</p>
          </div>
          <button onClick={plusCounter} className="h-20 w-20 bg-slate-700 rounded-full text-4xl font-semibold absolute bottom-0 right-0">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
