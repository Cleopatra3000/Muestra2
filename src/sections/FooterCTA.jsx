import { getWhatsAppHref } from '../config/siteConfig'
import styles from './FooterCTA.module.css'

const FooterCTA = () => {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Cierre</p>
      <h2 className={styles.title}>Si te atrae esta energia, podemos empezar a hablar con calma</h2>
      <p className={styles.subtitle}>
        Estoy en Madrid y me gusta que todo empiece de forma sencilla: una primera conversacion,
        sin prisa y con buena sintonia desde el principio.
      </p>

      <div className={styles.features}>
        <span className={styles.feature}>Madrid</span>
        <span className={styles.feature}>Contacto directo</span>
        <span className={styles.feature}>Solo adultos</span>
      </div>

      <a className={styles.cta} href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
        Contacto por WhatsApp
      </a>
    </section>
  )
}

export default FooterCTA
