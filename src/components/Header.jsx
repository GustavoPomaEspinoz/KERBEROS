import { Link } from "react-router-dom";
import logo from "../assets/logo_kerberos.jpg";
import { FaSearch } from "react-icons/fa";

// 👉 Estilos independientes (puedes modificar estos)
const logoSize = "70px";
const brandFontSize = "2.2rem";
const navLinkFontSize = "1.2rem";
const searchInputWidth = "200px";
const searchFontSize = "1.1rem";

const linkStyle = {
  color: "#0A1A40",
  fontWeight: "bold",
  fontSize: navLinkFontSize,
  textDecoration: "none",
  fontFamily: "'Oswald', sans-serif",
};

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 2rem",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      {/* Logo y Marca */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img
          src={logo}
          alt="Logo Kerberos"
          style={{ height: logoSize, borderRadius: "4px" }}
        />
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontStyle: "italic",
            fontSize: brandFontSize,
            fontWeight: 700,
            color: "#0A1A40",
          }}
        >
          Kerberos
        </span>
      </div>

      {/* Menú y Búsqueda */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <nav style={{ display: "flex", gap: "1.2rem" }}>
          <Link to="/" style={linkStyle}>Inicio</Link>
          <Link to="/products" style={linkStyle}>Productos</Link>
          <Link to="/services" style={linkStyle}>Servicios</Link>
          <Link to="/about" style={linkStyle}>Nosotros</Link>
        </nav>

        {/* Barra de búsqueda con lupa */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f1f1f1",
            borderRadius: "20px",
            padding: "0.4rem 0.8rem",
          }}
        >
          <input
            type="text"
            placeholder="Buscar..."
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontFamily: "'Oswald', sans-serif",
              fontSize: searchFontSize,
              width: searchInputWidth,
              color: "#0A1A40",
            }}
          />
          <FaSearch style={{ color: "#0A1A40", fontSize: searchFontSize, marginLeft: "0.5rem" }} />
        </div>
      </div>
    </header>
  );
}
