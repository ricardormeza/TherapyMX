import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const PediatricaDos = () => {
  return (
    <section className={`contenedor ${styles.Patologias}`}>
        <div className={styles.seccionPatologias}>
            <div className={`contenedor ${styles.PatologiasTexto}`}>
                <h2>¿Qué patologías se trabajan?</h2>
                <p>Bebés, niños y adolescentes que precisan de tratamiento para solucionar
                  o minimizar las consecuencias de sus afecciones tales como:
                </p>
                <ul>
                    <li>{'>'} <span>Patologías o disfunciones neurológicas:</span> Parálisis Cerebral,
                    Espina Bífida, enfermedades neuromusculares, traumatismo craneoencefálico, Parálisis Braquial
                    Obstéticas o transtornos en la coordinación.</li>
                    <li>{'>'} <span>Patologías o alteraciones traumatológias:</span> Torticolis Congénita, dislocación de 
                    caderas, Artrogriposis.</li>
                    <li>{'>'} <span>Osteogénesis Imperfecta</span>, Pies Equino-varos, problemas posturales o Escoliosis.</li>
                    <li>{'>'} <span>Patologías reumatológicas:</span> Artritis Reumatológica Juvenil.</li>
                    <li>{'>'} <span>Patologías o disfunciones respiratorias:</span> Fibrosis Quística, Bronquiolitis o Asma.</li>
                    <li>{'>'} <span>Síndromes congénitos </span>que cursan con múltiples alteraciones o disfunciones: Síndrome 
                    de Down, síndrome de Prader-Willi, Síndrome de Apert, Síndrome de Rett o Síndrome de Angelman.</li>
                </ul>
            </div>
            <div className={styles.imagenCheck}></div>
        </div>
    </section>
  )
}

export default PediatricaDos