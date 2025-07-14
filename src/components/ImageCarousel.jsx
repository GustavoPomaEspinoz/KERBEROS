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
  width: "40px",
  height: "40px",
  zIndex: 10,
  boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
  cursor: "pointer",
};

const iconStyle = {
  color: "#FFFFFF",
  fontSize: "1.2rem",
};

// Estilos globales para centrar cada slide
const overrideSlickStyles = `
  .slick-prev::before,
  .slick-next::before {
    content: '' !important;
    display: none !important;
  }

  .slick-slide > div {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
  }
`;

const PrevArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={className} style={{ ...arrowStyle, left: "10px" }}>
    <FaChevronLeft style={iconStyle} />
  </div>
);

const NextArrow = ({ className, onClick }) => (
  <div onClick={onClick} className={className} style={{ ...arrowStyle, right: "10px" }}>
    <FaChevronRight style={iconStyle} />
  </div>
);

export default function ImageCarousel() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = overrideSlickStyles;
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
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div
      style={{
        maxWidth: "1700px", // ancho máximo del carrusel
        width: "100%",
        margin: "0 auto",
        overflow: "hidden",
        position: "relative",
        padding: "1rem 0 3rem 0",
      }}
    >
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={item.alt || `imagen-${index}`}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "550px", // alto maximo
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                playsInline
                loop
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "550px",// alto máximo
                  objectFit: "cover",
                  borderRadius: "12px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}
