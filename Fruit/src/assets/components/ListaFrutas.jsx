
import React, { useState, useEffect } from 'react';

const ListaFrutas = () => {
  const [Frutas, setFrutas] = useState([]);

  useEffect(() => {
    // Simular
    //  solicitud a la API aquí
    const datosSimulados = [
      { id: 1, nombre: 'Zanahoria' },
      { id: 2, nombre: 'Calabacín' },
    ];

    setFrutas(datosSimulados);
  }, []);

  return (
    <div>
      <h2>Lista de Frutas</h2>
      <ul>
        {frutas.map((fruta) => (
          <li key={fruta.id}>{fruta.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaVerduras;
