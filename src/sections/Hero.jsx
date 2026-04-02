import { useState } from 'react'
import heroMain from '../images/editorial/hero-main.jpg'
import { SITE_CONFIG, getWhatsAppHref } from '../config/siteConfig'
import styles from './Hero.module.css'

const Hero = () => {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  const toggleImageSize = () => {
    setIsImageExpanded((current) => !current)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.topRow}>
        <div className={styles.headingBlock}>
          <h1 className={styles.name}>{SITE_CONFIG.displayName}</h1>
          <p className={styles.lead}>
            Una presencia visual directa, limpia y elegante desde el primer segundo.
          </p>
        </div>

        <nav className={styles.quickLinks} aria-label="Navegacion principal">
          <a href="#coleccion">Coleccion</a>
          <a href="#propuesta">Estilo</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.imageColumn}>
          <button
            type="button"
            className={styles.imageButton}
            onClick={toggleImageSize}
            aria-label={isImageExpanded ? 'Reducir imagen principal' : 'Ampliar imagen principal'}
            aria-pressed={isImageExpanded}
          >
            <div className={styles.imageFrame}>
              <img
                className={styles.image}
                src={heroMain}
                alt={`Imagen principal de ${SITE_CONFIG.displayName}`}
              />
            </div>
          </button>
        </div>

        <div className={styles.contentColumn}>
          <p className={styles.note}>
            Haz clic en la imagen para verla mas grande y vuelve a hacer clic para reducirla.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.button}
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      {isImageExpanded && (
        <div
          className={styles.lightbox}
          onClick={toggleImageSize}
          role="dialog"
          aria-modal="true"
          aria-label="Imagen principal ampliada"
        >
          <div className={styles.lightboxContent}>
            <img
              className={styles.lightboxImage}
              src={heroMain}
              alt={`Imagen principal ampliada de ${SITE_CONFIG.displayName}`}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero
