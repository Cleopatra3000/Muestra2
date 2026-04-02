import whatsappIcon from '../../../assets/icons/whatsapp.svg'
import { getWhatsAppHref } from '../../../config/siteConfig'
import styles from './FloatingWhatsApp.module.css'

const FloatingWhatsApp = () => {
  return (
    <a
      className={styles.floating}
      href={getWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar por WhatsApp"
    >
      <img className={styles.icon} src={whatsappIcon} alt="" aria-hidden="true" />
      <span className={styles.label}>WhatsApp</span>
    </a>
  )
}

export default FloatingWhatsApp
