import { useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "../data/baner.json";

// Estilos de flechas
const arrowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "#0A1A40",
  border: "3px solid #4BB6F0",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  zIndex: 10,
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  cursor: "pointer",
};

const iconStyle = {
  color: "#FFFFFF",
  fontSize: "1.5rem",
};

// Ocultar íconos por defecto de slick
const overrideSlickArrow = `
  .slick-prev::before,
  .slick-next::before {
    content: '' !important;
    display: none !important;
  }
`;

// Flecha izquierda
const PrevArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={className} style={{ ...arrowStyle, left: "-100px" }}>
    <FaChevronLeft style={iconStyle} />
  </div>
);

// Flecha derecha
const NextArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={className} style={{ ...arrowStyle, right: "-100px" }}>
    <FaChevronRight style={iconStyle} />
  </div>
);

export default function ImageCarousel() {
  // Inyectar CSS para ocultar ::before de slick
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = overrideSlickArrow;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000, // 10 segundos
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 0", position: "relative" }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || `imagen-${index}`}
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                playsInline
                loop
                style={{ width: "100%", height: "auto", borderRadius: "12px" }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
