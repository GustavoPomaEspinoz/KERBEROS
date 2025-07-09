import { useState } from "react";
import categories from "../data/category.json";
import CategoryCard from "../components/CategoryCard";

export default function Services() {
  const [selectedTipo, setSelectedTipo] = useState(null);

  // Obtener tipos únicos de servicio
  const tiposUnicos = [...new Set(categories.map(cat => cat.tipo_servicio))];

  // Agrupar por tipo y tomar solo una categoría representativa de cada uno
  const categoriasReducidas = tiposUnicos.map(tipo => {
    const primeraCategoria = categories.find(cat => cat.tipo_servicio === tipo);
    return {
      ...primeraCategoria,
      tipo_servicio: tipo,
    };
  });

  // Si se selecciona un tipo, filtrar todas sus categorías
  const categoriasFiltradas = selectedTipo
    ? categories.filter(cat => cat.tipo_servicio === selectedTipo)
    : [];

  return (
    <div style={{ padding: "2rem" }}>
      <h1
        style={{
          fontFamily: "'Oswald', sans-serif",
          color: "#0A1A40",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        Nuestros Servicios
      </h1>

      {/* Mostrar botones de tipo de servicio con una imagen de referencia */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        {categoriasReducidas.map(cat => (
          <div
            key={cat.id}
            onClick={() => setSelectedTipo(cat.tipo_servicio)}
            style={{ cursor: "pointer" }}
          >
            <CategoryCard
              nombre={cat.tipo_servicio}
              descripcion={cat.descripcion}
              imagen={cat.imagen}
              marcas={[]} // No mostrar marcas en la vista de tipo
            />
          </div>
        ))}
      </div>

      {/* Si se seleccionó un tipo, mostrar todas sus categorías */}
      {selectedTipo && (
        <>
          <h2
            style={{
              fontFamily: "'Oswald', sans-serif",
              color: "#0A1A40",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            Categorías de: {selectedTipo}
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "2rem",
              marginTop: "1.5rem",
            }}
          >
            {categoriasFiltradas.map(cat => (
              <CategoryCard
                key={cat.id}
                nombre={cat.nombre}
                descripcion={cat.descripcion}
                imagen={cat.imagen}
                marcas={cat.marcas_recomendadas}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
