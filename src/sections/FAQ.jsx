import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    q: 'Como definirias tu estilo?',
    a: 'Cercano, elegante y tranquilo. Me gusta transmitir una presencia cuidada sin caer en excesos.',
  },
  {
    q: 'Que tipo de planes te gustan?',
    a: 'Me atraen las cenas con encanto, las escapadas urbanas, las conversaciones largas y los lugares bonitos.',
  },
  {
    q: 'Donde estas?',
    a: 'Estoy en Madrid y me gusta moverme por entornos agradables, cuidados y con buena energia.',
  },
  {
    q: 'Como puedo escribirte?',
    a: 'El contacto es voluntario y se realiza unicamente por WhatsApp a traves de los accesos visibles en la landing.',
  },
  {
    q: 'La web ofrece algo ilegal?',
    a: 'No. Sigue siendo una presentacion informativa para adultos dentro de un marco legal y respetuoso.',
  },
  {
    q: 'La pagina esta dirigida a menores?',
    a: 'No. El acceso esta limitado a personas mayores de edad.',
  },
]

const FAQ = () => {
  return (
    <section className={styles.section}>
      <p className={styles.eyebrow}>Lo esencial</p>
      <h2 className={styles.title}>Lo que conviene saber antes de dar el siguiente paso</h2>

      <div className={styles.list}>
        {FAQ_ITEMS.map((item) => (
          <details key={item.q} className={styles.item}>
            <summary className={styles.summary}>
              <span className={styles.question}>{item.q}</span>
              <span className={styles.icon} aria-hidden="true">
                +
              </span>
            </summary>
            <p className={styles.answer}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQ
