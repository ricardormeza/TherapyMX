import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const OrtopedicaUno = () => {
    return (
        <main className='contenedor'>
                <div className={styles.NeurologicaSeccionUno}>
                    <div className={styles.imagenDeportiva}></div>
                    <div className={styles.QueNeurologia}>
                        <h1>¿Qué es Fisioterapia Ortopédica?</h1>
                        <p>La <span>Fisioterapia Ortopédica y Traumatológica</span> es un área especializada 
                        dentro de la fisioterapia que se centra en una precisa evaluación, diagnóstico y tratamiento 
                        de lesiones músculo-esqueléticas.
                        </p>
                        <br/>
                        <p>Las lesiones <span>musculo-esqueléticas</span> son lesiones en articulaciones, músculos, 
                        huesos, tejidos blandos y/o de los nervios.
                        </p>
                    </div>
                </div>
            </main>
    )
}

export default OrtopedicaUno