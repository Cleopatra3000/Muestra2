import styles from './Signature.module.css'

const PILLARS = [
  {
    title: 'Ritmo sereno',
    text: 'Una presencia cercana, elegante y sin prisa, pensada para disfrutar de conversaciones y momentos con buena sintonia.',
  },
  {
    title: 'Escenarios cuidados',
    text: 'Planes con gusto por los detalles, ambientes agradables y una energia mas sutil que intensa.',
  },
  {
    title: 'Conexion real',
    text: 'Una landing pensada para presentarse con claridad y abrir un contacto voluntario, directo y natural.',
  },
]

const Signature = () => {
  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Esencia</p>
        <h2 className={styles.title}>Una propuesta mas limpia, sofisticada y con una energia completamente distinta</h2>
      </div>

      <div className={styles.grid}>
        {PILLARS.map((pillar, index) => (
          <article key={pillar.title} className={styles.card}>
            <span className={styles.index}>0{index + 1}</span>
            <h3 className={styles.cardTitle}>{pillar.title}</h3>
            <p className={styles.cardText}>{pillar.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Signature
