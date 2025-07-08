export default function ProductCard({ name, price, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "1rem",
      borderRadius: "8px",
      textAlign: "center",
      width: "200px"
    }}>
      <img src={image} alt={name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{name}</h3>
      <p>S/ {price}</p>
    </div>
  );
}
