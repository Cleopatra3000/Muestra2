import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const CookiesPage = () => {
  return (
    <LegalLayout title="Cookies" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Uso actual</h2>
        <p>
          Esta landing no utiliza paneles de analitica, publicidad comportamental ni formularios con
          seguimiento comercial.
        </p>
      </section>

      <section>
        <h2>Almacenamiento local</h2>
        <p>
          La pagina puede usar almacenamiento local del navegador para recordar la comprobacion de
          mayoria de edad y evitar repetirla en cada visita.
        </p>
      </section>

      <section>
        <h2>Gestion</h2>
        <p>
          Puedes borrar este almacenamiento desde la configuracion de tu navegador. Si lo haces, la
          web volvera a mostrar la verificacion de edad en una visita posterior.
        </p>
      </section>

      <section>
        <h2>Enlaces externos</h2>
        <p>
          Al abrir WhatsApp desde esta web, el tratamiento tecnico posterior depende de la politica
          y condiciones de esa plataforma.
        </p>
      </section>
    </LegalLayout>
  )
}

export default CookiesPage
