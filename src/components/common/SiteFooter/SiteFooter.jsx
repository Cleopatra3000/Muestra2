import { Link } from 'react-router-dom'
import { SITE_CONFIG } from '../../../config/siteConfig'
import styles from './SiteFooter.module.css'

const SiteFooter = () => {
  return (
    <div className={styles.inner}>
      <p className={styles.copy}>{SITE_CONFIG.footerCopy}</p>

      <nav className={styles.links} aria-label="Enlaces informativos">
        <Link className={styles.link} to="/aviso-legal">
          Aviso legal
        </Link>
        <Link className={styles.link} to="/privacidad">
          Privacidad
        </Link>
        <Link className={styles.link} to="/cookies">
          Cookies
        </Link>
      </nav>

      <p className={styles.meta}>
        {SITE_CONFIG.displayName} - {SITE_CONFIG.city}
      </p>
    </div>
  )
}

export default SiteFooter
