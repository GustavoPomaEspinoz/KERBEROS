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

  // Mostrar todas las categorías si no se ha seleccionado ningún tipo
  const categoriasFiltradas = selectedTipo
    ? categories.filter(cat => cat.tipo_servicio === selectedTipo)
    : categories;

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

      {/* Botones circulares de tipos */}
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
            style={{
              cursor: "pointer",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff",
              transition: "transform 0.3s",
            }}
          >
            <img
              src={cat.imagen}
              alt={cat.tipo_servicio}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
                opacity: 0.6,
              }}
            />
            <div
              style={{
                zIndex: 1,
                color: "#0A1A40",
                fontWeight: "bold",
                fontSize: "1rem",
                fontFamily: "'Oswald', sans-serif",
                backgroundColor: "rgba(255,255,255,0.85)",
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              {cat.tipo_servicio}
            </div>
          </div>
        ))}
      </div>

      {/* Título dinámico */}
      <h2
        style={{
          fontFamily: "'Oswald', sans-serif",
          color: "#0A1A40",
          textAlign: "center",
          marginTop: "3rem",
        }}
      >
        {selectedTipo ? `Categorías de ${selectedTipo}` : "Todas las Categorías"}
      </h2>

      {/* Lista de categorías filtradas */}
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
    </div>
  );
}
