export default function WhatsAppButton() {
  const phoneNumber = "994826394"; // Cambia al tuyo

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      Chatea con nosotros por WhatsApp
    </a>
  );
}
