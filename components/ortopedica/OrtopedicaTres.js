import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const OrtopedicaTres = () => {
    return (
        <section className='contenedor'>
            <div className={styles.NeurologicaTres}>
                <div className={styles.estetoscopio}></div>
                <div className={styles.NeurologicaTresContenido}>
                    <h3>Valoración Ortopédica</h3>
                    <p>En <span>Up Therapy MX</span>, tras la evaluación, el fisioterapeuta trabaja con el paciente 
                    para establecer objetivos y desarrollar un plan de fisioterapia en donde eligirá el tratamiento 
                    más adecuado basándose en la evaluación inicial del paciente, la evidencia científica de los tratamientos 
                    para cada patología y en la propia experiencia clínica.
                    </p>
                </div>
            </div>
            <div className='separacion'></div>
            <div className={styles.NeurologicaTresContenidoDos}>
                <div className={styles.NeurologicaTresContenidoCorazon}>
                    <h3>Objetivos en Fisioterapia Ortopédica</h3>
                    <p>El tratamiento tiene como objetivos principales:
                    </p>
                    <ul className={styles.listadoAspectos}>
                        <li>{'>'} <span>Optimizar el proceso de curación de la lesión.</span></li>
                        <li>{'>'} <span>Disminuir el dolor</span>.</li>
                        <li>{'>'} <span>Disminuir la inflamación</span>.</li>
                        <li>{'>'} <span>Restaurar la movilidad</span>.</li>
                        <li>{'>'} <span>Aumentar la fuerza</span>.</li>
                        <li>{'>'} <span>Restaurar el movimiento normal</span>.</li>
                        <li>{'>'} <span>Aumentar la autonomía del paciente</span>.</li>
                        <li>{'>'} <span>Prevenir recaídas</span>.</li>
                    </ul>
                </div>
                <div className={styles.corazonSeccionImg}></div>
            </div>
        </section>
    )
}

export default OrtopedicaTres