import React from "react";

export default function States() {
  //uso de Hooks, nos permite usar estados y otras cosas sin necesidad de escribir una clase
  //declaramos una variable de estado (cualquier nombre) y una funcion
  const [esImportante, setEsImportante] = React.useState("Yes");

  function handleClick(){
      //Se asigna el valor de la variable del estado, en el ejemplo es "esImportante"
      setEsImportante( "No")
  }

  return (
    <div className="bg-neutral-900 text-white w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center h-96 w-96 text-center">
        <h1 className="text-6xl font-semibold">
          ¿Son los estados de react importantes?
        </h1>
        <span onClick={handleClick} className="p-10 my-10 bg-slate-100 rounded-full text-neutral-900 text-6xl font-semibold tracking-tighter ">
          {esImportante}
        </span>
      </div>
    </div>
  );
}
