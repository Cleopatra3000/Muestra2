import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from './contactConfig'

export const SITE_CONFIG = {
  displayName: 'CHLOE',
  city: 'Madrid',
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappMessage: WHATSAPP_MESSAGE,
  legalLastUpdated: '2 de abril de 2026',
  footerCopy:
    'Landing visual para adultos con acceso voluntario a contacto por WhatsApp.',
}

export const getWhatsAppHref = () => {
  const message = encodeURIComponent(SITE_CONFIG.whatsappMessage)
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${message}`
}
