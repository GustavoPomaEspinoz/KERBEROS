export default function CategoryCard({ nombre, descripcion, imagen, marcas }) {
  // Si faltan datos, no renderizar nada
  if (!nombre || !descripcion || !imagen || !marcas) {
    return null;
  }

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1.5rem",
      borderRadius: "12px",
      textAlign: "center",
      width: "300px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    }}>
      <img
        src={imagen}
        alt={nombre}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3 style={{
        fontSize: "1.4rem",
        margin: "1rem 0 0.5rem 0",
        color: "#0A1A40",
        fontWeight: "bold"
      }}>{nombre}</h3>
      <p style={{ fontSize: "1rem", color: "#333" }}>{descripcion}</p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {marcas.map((marca, i) => (
          <li key={i} style={{ fontSize: "0.9rem", color: "#555" }}>{marca}</li>
        ))}
      </ul>
    </div>
  );
}
