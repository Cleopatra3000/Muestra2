import SiteFooter from '../../components/common/SiteFooter/SiteFooter'
import styles from './FooterSection.module.css'

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <SiteFooter />
      </div>
    </footer>
  )
}

export default FooterSection
