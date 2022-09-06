import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const invasivaUno = () => {
  return (
    <main className='contenedor'>
        <div className={styles.NeurologicaSeccionUno}>
            <div className={styles.imagenInvasiva}></div>
            <div className={styles.QueNeurologia}>
                <h1>¿Qué es Fisioterapia Invasiva?</h1>
                <p>La <span>Fisioterapia Invasiva</span> engloba a las técnias empleadas por fisioterapeutas 
                que requieren de una aguja para la aplicación local del tratamiento. Mediante esta aguja 
                especial se aplican agentes físicos como la electricidad o el calor para estimular de manera 
                directa el músculo o tendón. Hay que destacar que estos sofisticados procedimientos suelen 
                aplicarse con la ayuda de un ecógrafo, con el cuál se puede guiar a la aguja en su recorrido 
                para que consiga así una mayor efectividad y seguridad en su abordaje.
                </p>
                <br/>
            </div>
        </div>
    </main>
  )
}

export default invasivaUno