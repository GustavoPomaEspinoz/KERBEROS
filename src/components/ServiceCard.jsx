export default function ServiceCard({ name, description, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1.5rem",
      borderRadius: "12px",
      textAlign: "center",
      width: "300px", // más ancho
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    }}>
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px", // más alto
          objectFit: "cover",
          borderRadius: "8px"
        }}
      />
      <h3 style={{
        fontSize: "1.4rem",
        margin: "1rem 0 0.5rem 0",
        color: "#0A1A40",
        fontWeight: "bold"
      }}>
        {name}
      </h3>
      <p style={{ fontSize: "1rem", color: "#333" }}>
        {description}
      </p>
    </div>
  );
}