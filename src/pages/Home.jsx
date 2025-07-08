import ImageCarousel from "../components/ImageCarousel";
import ServiceCard from "../components/ServiceCard";
import services from "../data/services.json";

export default function Home() {
  return (
    <div style={{ padding: "2rem" }}>
      {/* Carrusel superior */}
      <ImageCarousel />

      {/* Sección de Servicios */}
      <h1 style={{
        fontFamily: "'Oswald', sans-serif",
        color: "#0A1A40",
        marginTop: "3rem",
        textAlign: "center"
      }}>
        Nuestros Servicios
      </h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        marginTop: "2rem"
      }}>
        {services.map(service => (
          <ServiceCard
            key={service.id}
            name={service.name}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
}
