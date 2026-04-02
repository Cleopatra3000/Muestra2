import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const LegalNoticePage = () => {
  return (
    <LegalLayout title="Aviso legal" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Naturaleza de la pagina</h2>
        <p>
          Esta web funciona como landing personal e informativa para personas adultas. Su finalidad
          es mostrar contenido visual y permitir, si la persona usuaria lo desea, iniciar contacto
          voluntario por WhatsApp.
        </p>
        <p>
          La pagina no publica ofertas de servicios sexuales, no actua como intermediaria y no
          incorpora actividad de contratacion automatizada.
        </p>
      </section>

      <section>
        <h2>Sin contratacion online</h2>
        <p>
          La pagina no incorpora tienda, sistema de reservas, medios de pago ni contratacion
          automatizada de productos o servicios.
        </p>
      </section>

      <section>
        <h2>Uso permitido</h2>
        <p>
          El acceso esta reservado a mayores de edad. Queda prohibido el uso del sitio para fines
          ilicitos, invasivos o contrarios a la buena fe.
        </p>
      </section>

      <section>
        <h2>Imagenes y contenido</h2>
        <p>
          Las imagenes y textos mostrados forman parte de una presentacion personal. No esta
          permitida su reproduccion, distribucion o reutilizacion sin autorizacion expresa.
        </p>
      </section>

      <section>
        <h2>Canal de contacto</h2>
        <p>
          El unico canal previsto desde esta web es el acceso voluntario a WhatsApp mediante los
          enlaces visibles en la pagina.
        </p>
      </section>
    </LegalLayout>
  )
}

export default LegalNoticePage
