export default function Footer() {
  return (
    <footer
      style={{
        padding: "1rem",
        backgroundColor: "#0A1A40", // Azul oscuro
        color: "#ffffff",           // Texto blanco
        marginTop: "2rem",
        textAlign: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} Mi Landing Page. Todos los derechos reservados.</p>
    </footer>
  );
}
