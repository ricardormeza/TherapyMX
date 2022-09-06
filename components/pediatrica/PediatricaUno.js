import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const PediatricaUno = () => {
  return (
    <main className='contenedor'>
        <div className={styles.NeurologicaSeccionUno}>
            <div className={styles.imagenPediatrica}></div>
            <div className={styles.QueNeurologia}>
                <h1>¿Qué es Fisioterapia Pediátrica?</h1>
                <p>La <span>Fisioterapia Pediátrica</span> es la disciplina que se encarga del asesoramiento,
                tratamiento y cuidado de aquellos bebés, niños y adolescentes que presentan un retraso en su 
                desarrollo, así como desórdenes en el movimiento (tanto congénitos como adquiridos) o que tienen 
                riesgo de padecerlos
                </p>
                <br/>
                <p>Los <span>fisioterapeutas pediátricos</span> podemos atender a una gran variedad de niños
                através de diferentes formas de invervención. Se debe destacar el hecho de que, aunque se atienden
                niños que presentan afecciones agudas, mayoritariamente la <span>Fisioterapia Pedriátrica</span> trata
                niños con enfermedades crónicas.</p>
            </div>
        </div>
    </main>
  )
}

export default PediatricaUno