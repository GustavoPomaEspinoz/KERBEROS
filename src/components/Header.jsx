import { NavLink } from "react-router-dom";
import logo from "../assets/logo_kerberos.jpg";
import { FaSearch } from "react-icons/fa";

// Estilos base
const logoSize = "70px";
const brandFontSize = "2.2rem";
const navLinkFontSize = "1.2rem";
const searchInputWidth = "200px";
const searchFontSize = "1.1rem";

// Colores
const primaryColor = "#0A1A40";
const hoverStyle = {
  backgroundColor: primaryColor,
  color: "#fff",
  border: `2px solid ${primaryColor}`,
};
const defaultStyle = {
  color: primaryColor,
  backgroundColor: "transparent",
  border: "2px solid transparent",
};
const baseLinkStyle = {
  fontWeight: "bold",
  fontSize: navLinkFontSize,
  fontFamily: "'Oswald', sans-serif",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
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

      {/* Navegación */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <nav style={{ display: "flex", gap: "1rem" }}>
          {/* Inicio con end */}
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              ...baseLinkStyle,
              ...(isActive ? hoverStyle : defaultStyle),
            })}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = primaryColor;
              e.target.style.color = "#fff";
              e.target.style.border = `2px solid ${primaryColor}`;
            }}
            onMouseLeave={(e) => {
              if (!e.target.classList.contains("active")) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = primaryColor;
                e.target.style.border = "2px solid transparent";
              }
            }}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>

          {/* Otros enlaces */}
          {[
            { to: "/services", label: "Servicios" },
            { to: "/products", label: "Productos" },
            { to: "/about", label: "Nosotros" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                ...baseLinkStyle,
                ...(isActive ? hoverStyle : defaultStyle),
              })}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = primaryColor;
                e.target.style.color = "#fff";
                e.target.style.border = `2px solid ${primaryColor}`;
              }}
              onMouseLeave={(e) => {
                if (!e.target.classList.contains("active")) {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = primaryColor;
                  e.target.style.border = "2px solid transparent";
                }
              }}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Buscador */}
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
          <FaSearch
            style={{
              color: "#0A1A40",
              fontSize: searchFontSize,
              marginLeft: "0.5rem",
            }}
          />
        </div>
      </div>
    </header>
  );
}
