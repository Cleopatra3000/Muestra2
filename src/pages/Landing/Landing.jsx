import FloatingWhatsApp from '../../components/common/FloatingWhatsApp/FloatingWhatsApp'
import FAQ from '../../sections/FAQ'
import FooterCTA from '../../sections/FooterCTA'
import Gallery from '../../sections/Gallery'
import Hero from '../../sections/Hero'
import Signature from '../../sections/Signature'
import styles from './Landing.module.css'

const Landing = () => {
  return (
    <div className={styles.page}>

      <section className={`${styles.section} ${styles.heroSection}`}>
        <Hero />
      </section>

      <section id="coleccion" className={styles.section}>
        <Gallery />
      </section>

      <section id="propuesta" className={`${styles.section} ${styles.featureSection}`}>
        <Signature />
      </section>

      <section id="esencial" className={styles.section}>
        <FAQ />
      </section>

      <section id="contacto" className={styles.section}>
        <FooterCTA />
      </section>

      <FloatingWhatsApp />
    </div>
  )
}

export default Landing
