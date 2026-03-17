export const WHATSAPP_NUMBER = "15551234567"; // Replace with actual number

export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openWhatsApp = (message: string) => {
  window.open(getWhatsAppUrl(message), '_blank');
};
