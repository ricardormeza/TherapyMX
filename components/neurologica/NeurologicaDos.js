import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const NeurologicaDos = () => {
  return (
    <section className={`contenedor ${styles.Patologias}`}>
        <div className={styles.seccionPatologias}>
            <div className={`contenedor ${styles.PatologiasTexto}`}>
                <h2>¿Qué patologías se trabajan?</h2>
                <p>Los <span>fisioterapeutas</span> especializados en neurología atiende las siguientes
                patologías:</p>
                <ul>
                    <li>{'>'} <span>Lesión de la médula espinal.</span></li>
                    <li>{'>'} <span>Lesión cerebral</span> que resulta de un trauma o de condiciones
                    tales como el derrame cerebral o tumores.</li>
                    <li>{'>'} La <span>esclerosis múltiple</span>.</li>
                    <li>{'>'} <span>Enfermedad de Parkinson</span>.</li>
                    <li>{'>'} <span>Esclerosis Lateral Amiotrófica</span> (ELA).</li>
                    <li>{'>'} <span>Polineuropatías</span> como un <span>síndrome de Guillain-Barré </span>
                    o <span>polineuropatía inflamatoria crónica</span>.</li>
                    <li>{'>'} <span>Neurinoma</span> del acústico u otras condiciones que causan mareos
                    y pérdida del equilibrio.</li>
                    <li>{'>'} Condiciones <span>pedíatricas</span>, como la espina <span>bífida</span> o
                    <span> parálisis cerebral</span>.</li>
                </ul>
            </div>
            <div className={styles.imagenCheck}></div>
        </div>
    </section>
  )
}

export default NeurologicaDos