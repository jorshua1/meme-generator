import React from "react";

function Prueba() {
  const [cosasArray, setCosasArray] = React.useState(["Cosa 1", "Cosa 2"]);
  const cosasElementos = cosasArray.map((cosa) => {
    return <p key={cosa} className="my-2">{cosa}</p>;
  });

  function agregarElemento(){
    setCosasArray(prevCosasArray => {
      return [...prevCosasArray, `Cosa ${prevCosasArray.length + 1 }`]
    })
  }
  return (
    <div className="bg-green-600 text-white w-screen h-screen">
      <div className="flex flex-col items-center">
        <button
          onClick={agregarElemento}
          className="h-16 my-12 hover:bg-white hover:text-green-600 rounded-2xl border-2 w-56"
        >
          {" "}
          Agregar Elemento
        </button>
        {cosasElementos}
      </div>
    </div>
  );
}

export default Prueba;
