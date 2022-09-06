import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const PediatricaTres = () => {
  return (
    <section className='contenedor'>
        <div className={styles.NeurologicaTres}>
            <div className={styles.estetoscopio}></div>
            <div className={styles.NeurologicaTresContenido}>
                <h3>Valoración Pedriátrica</h3>
                <p>Las <span>sesiones de Fisioterapia Pediátrica</span> constan de una Valoración
                de la función del bebé o niño; el tratamiento del plano estructural y la integración
                de los receptores y órganos de los sentidos que dependen del sistema nervioso.</p>
                <br/>
                <p>La <span>Fisioterapia Pediátrica</span> requiere una evaluación previa de:</p>
                <ul className={styles.listadoAspectos}>
                  <li>{'>'} Movilidad espontánea.</li>
                  <li>{'>'} Desarrollo motor.</li>
                  <li>{'>'} Fuerza.</li>
                  <li>{'>'} Estado músculo-esquelético.</li>
                  <li>{'>'} Posturas funcionales.</li>
                  <li>{'>'} Equilibrio.</li>
                  <li>{'>'} Coordinación.</li>
                </ul>
                <br/>
                <p>Esto permitirá conocer el retraso psicomotor y las posibles desviaciones en el 
                  crecimiento músculo-esquelético y a partir de ahí, planificar un programa individualizado
                  que incluya diferentes estrategias terapéuticas.
                </p>
            </div>
        </div>
        <div className='separacion'></div>
        <div className={styles.NeurologicaTresContenidoDos}>
            <div className={styles.NeurologicaTresContenidoCorazon}>
                <h3>Objetivos de la Fisioterapia Pediátrica</h3>
                <p>En lo que se refiere a los problemas motores y de desarrollo, los objetivos de la 
                  <span>Fisioterapia infantil</span> se centran en los siguientes aspectos:
                </p>
                <br/>
                <ul className={styles.listadoAspectos}>
                  <li>{'>'} <span>Mejorar las habilidades motoras</span>, tanto básicas como especializadas.</li>
                  <li>{'>'} <span>Mejorar el equilibrio y la coordinación</span>, así como la fuerza y la resistencia.</li>
                  <li>{'>'} <span>Mejorar las funciones sensoriales y cognitivas</span>.</li>
                  <li>{'>'} <span>Estimulación del sistema nervioso central</span>.</li>
                  <li>{'>'} <span>Facilitar el desarrollo motor relacionado con la edad del niño</span>.</li>
                </ul>
            </div>
            <div className={styles.corazonSeccionImg}></div>
        </div>
    </section>
  )
}

export default PediatricaTres