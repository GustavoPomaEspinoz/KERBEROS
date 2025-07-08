import services from "../data/services.json";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Servicios</h1>
      <div style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap"
      }}>
        {services.map(services => (
          <ServiceCard
            key={services.id}
            name={services.name}
            description={services.description}
            image={services.image}
          />
        ))}
      </div>
    </div>
  );
}
