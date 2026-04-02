import { Link } from 'react-router-dom'
import styles from './LegalLayout.module.css'

const LegalLayout = ({ title, updatedAt, children }) => {
  return (
    <section className={styles.page}>
      <Link className={styles.backLink} to="/">
        Volver a la portada
      </Link>

      <header className={styles.header}>
        <p className={styles.eyebrow}>Marco legal</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.updated}>Ultima actualizacion: {updatedAt}</p>
      </header>

      <div className={styles.content}>{children}</div>
    </section>
  )
}

export default LegalLayout
