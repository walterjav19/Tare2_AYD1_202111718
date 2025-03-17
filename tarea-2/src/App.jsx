import { useState } from "react";

function App() {
  const [info, setInfo] = useState(null);

  const handleClick = () => {
    setInfo({
      nombre: "Walter Javier Santizo Mazariegos",
      carnet: "202111718",
      curso: "Analisis y Diseño de Sistemas 1",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Tarea 2</h1>
      <button onClick={handleClick}>Mostrar Información</button>
      {info && (
        <div>
          <p>Nombre: {info.nombre}</p>
          <p>Carnet: {info.carnet}</p>
          <p>Curso: {info.curso}</p>
        </div>
      )}
    </div>
  );
}

export default App;
