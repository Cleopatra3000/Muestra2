import { useEffect, useMemo, useState } from 'react'
import { getWhatsAppHref } from '../config/siteConfig'
import poster1 from '../images/editorial/poster-1.jpg'
import poster2 from '../images/editorial/poster-2.jpg'
import poster3 from '../images/editorial/poster-3.jpg'
import poster4 from '../images/editorial/poster-4.jpg'
import poster5 from '../images/editorial/poster-5.jpg'
import poster6 from '../images/editorial/poster-6.jpg'
import styles from './Gallery.module.css'

const IMAGES = [
  { src: poster1, alt: 'Coleccion visual 1', tone: 'Ritmo urbano' },
  { src: poster2, alt: 'Coleccion visual 2', tone: 'Invierno suave' },
  { src: poster3, alt: 'Coleccion visual 3', tone: 'Aire libre' },
  { src: poster4, alt: 'Coleccion visual 4', tone: 'Editorial city' },
  { src: poster5, alt: 'Coleccion visual 5', tone: 'Escapada' },
  { src: poster6, alt: 'Coleccion visual 6', tone: 'Jardin abierto' },
]

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const selectedImage = useMemo(
    () => (selectedIndex === null ? null : IMAGES[selectedIndex]),
    [selectedIndex]
  )

  const closeLightbox = () => setSelectedIndex(null)

  const goPrev = () => {
    setSelectedIndex((prev) => (prev === null ? prev : (prev - 1 + IMAGES.length) % IMAGES.length))
  }

  const goNext = () => {
    setSelectedIndex((prev) => (prev === null ? prev : (prev + 1) % IMAGES.length))
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') goPrev()
      if (event.key === 'ArrowRight') goNext()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selectedIndex])

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <p className={styles.eyebrow}>Coleccion de imágenes</p>
          <h2 className={styles.title}>Instantes que combinan ciudad, calma y una presencia muy visual</h2>
          <p className={styles.description}>
            Una seleccion de imagenes para mostrar el tono de esta propuesta: mas luminosa, mas
            editorial y con una narrativa visual mucho mas cuidada.
          </p>
        </div>
      </header>

      <div className={styles.grid}>
        {IMAGES.map((image, index) => (
          <button
            key={image.alt}
            type="button"
            className={`${styles.card} ${index === 0 ? styles.featured : ''}`}
            onClick={() => setSelectedIndex(index)}
            aria-label={`Abrir ${image.alt} en grande`}
          >
            <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
            <span className={styles.caption}>{image.tone}</span>
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <a className={styles.cta} href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
          Hablar por WhatsApp
        </a>
      </div>

      {selectedImage && (
        <div className={styles.overlay} onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className={styles.modal} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Cerrar imagen"
            >
              {'x'}
            </button>

            <button
              type="button"
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={goPrev}
              aria-label="Imagen anterior"
            >
              {'<'}
            </button>

            <img
              className={styles.modalImage}
              src={selectedImage.src}
              alt={selectedImage.alt}
              loading="eager"
            />

            <button
              type="button"
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={goNext}
              aria-label="Imagen siguiente"
            >
              {'>'}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
