import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const NeurologicaUno = () => {
  return (
    <main className='contenedor'>
        <div className={styles.NeurologicaSeccionUno}>
            <div className={styles.imagenNeurologica}></div>
            <div className={styles.QueNeurologia}>
                <h1>¿Qué es Fisioterapia Neurológica?</h1>
                <p>La <span>Fisioterapia Nerólogica</span> es la especialidad que se centra
                en la evolución y el tratamiento de personas con problemas de movimiento,
                postura y/o equilibrio debido a una enfermedad o lesión del sistema nervioso.
                </p>
            </div>
        </div>
    </main>
  )
}

export default NeurologicaUno