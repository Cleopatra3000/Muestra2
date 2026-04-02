import LegalLayout from '../../components/legal/LegalLayout'
import { SITE_CONFIG } from '../../config/siteConfig'

const PrivacyPage = () => {
  return (
    <LegalLayout title="Privacidad" updatedAt={SITE_CONFIG.legalLastUpdated}>
      <section>
        <h2>Datos recogidos en la web</h2>
        <p>
          Esta landing no incluye formularios de registro, compra ni suscripcion. Tampoco solicita
          datos personales de forma directa dentro de la propia pagina.
        </p>
        <p>
          La pagina no realiza perfiles publicitarios, seguimiento comercial ni tratamiento masivo
          de datos personales.
        </p>
      </section>

      <section>
        <h2>Verificacion de mayoria de edad</h2>
        <p>
          La web puede guardar en el navegador la respuesta dada en la comprobacion de mayoria de
          edad con una finalidad exclusivamente tecnica de control de acceso.
        </p>
      </section>

      <section>
        <h2>Contacto por WhatsApp</h2>
        <p>
          Si una persona decide escribir por WhatsApp, ese contacto se produce de forma voluntaria y
          bajo las condiciones de privacidad de dicha plataforma, ajena a esta web.
        </p>
      </section>

      <section>
        <h2>Finalidad</h2>
        <p>
          El unico objetivo de esta pagina es mostrar contenido personal y facilitar un canal de
          contacto voluntario desde el que pueda iniciarse una conversacion.
        </p>
      </section>

      <section>
        <h2>Conservacion y control</h2>
        <p>
          La informacion tecnica almacenada en el navegador puede eliminarse desde la configuracion
          del propio navegador en cualquier momento.
        </p>
      </section>
    </LegalLayout>
  )
}

export default PrivacyPage
