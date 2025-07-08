import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Productos</h1>
      <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap"
      }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
