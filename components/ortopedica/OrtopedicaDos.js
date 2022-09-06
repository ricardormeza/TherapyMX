import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const OrtopedicaDos = () => {
    return (
        <section className={`contenedor ${styles.Patologias}`}>
        <div className={styles.seccionPatologias}>
            <div className={`contenedor ${styles.PatologiasTexto}`}>
                <h2>¿Qué patologías se trabajan?</h2>
                <p>Algunas patologías tratadas en la Fisioterapia Traumatológica son:</p>
                
                <ul className={styles.listadoAspectos}>
                    <li>{'>'} <span>Lesiones de ligamento</span>(esguinces, roturas).</li>
                    <li>{'>'} <span>Lesiones musculares</span>.</li>
                    <li>{'>'} <span>Lesiones de cartílagos</span>.</li>
                    <li>{'>'} <span>Luxaciones</span>.</li>
                    <li>{'>'} <span>Fracturas</span>.</li>
                    <li>{'>'} <span>Degeneración articular</span> (artritis, artrosis).</li>
                    <li>{'>'} <span>Patologías de espalda</span>.</li>
                    <li>{'>'} <span>Lesiones que requieren cirugía</span> (preoperatorio y postoperatorio).</li>
                </ul>
            </div>
            <div className={styles.imagenCheck}></div>
        </div>
    </section>
    )
}

export default OrtopedicaDos