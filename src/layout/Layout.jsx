import FooterSection from './footer/FooterSection'
import MainContent from './main/MainContent'
import styles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.appShell}>
      <MainContent>{children}</MainContent>

      <FooterSection />
    </div>
  )
}

export default Layout
