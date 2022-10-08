import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const NeurologicaTres = () => {
  return (
    <section className='contenedor'>
        <div className={styles.NeurologicaTres}>
            <div className={styles.estetoscopio}></div>
            <div className={styles.NeurologicaTresContenido}>
                <h3>Valoración Neurológica</h3>
                <p>En <span>Up Therapy MX</span> tras una valoración inicial, el <span>fisioterapeuta</span> 
                 determina los problemas susceptibles de tratamiento para continuar de manera consensuada con 
                el paciente y/o familiares para plantear los objetivos terapéuticos. Cada lesión y cada 
                paciente son diferentes. Por este motivo, la mejor opción es un tratamiento de rehabilitación
                específico e individualizado.</p>
                <br/>
                <p>El <span>fisioterapeuta neurológico</span> irá aplicando una serie de técnicas durante las
                diferentes sesiones con la intención de mejorar las capacidades físicas, rehabilitar o 
                mejorar la calidad de los movimientos y la postura del paciente. </p>
            </div>
        </div>
        <div className='separacion'></div>
        <div className={styles.NeurologicaTresContenidoDos}>
            <div className={styles.NeurologicaTresContenidoCorazon}>
                <h3>Objetivos de la Fisioterapia Nerológica</h3>
                <p>El sistema nervioso es una estructura muy compleja de la que todavía nos quedan cosas por 
                    descubrir. Lo que sí se ha demostrado es que es muy importante estimular y corregir lo antes
                    posible.
                </p>
                <br/>
                <p>Las técnicas empleadas están orientadas a la repetición constante de los movimientos básicos, 
                    como {"gatear"}, andar, levantarse, sentarse, la orientación del tiempo y la orientación en 
                    el espacio. En pocas palabras, todos los movimientos que solíamos ejecutar de forma espontánea
                    desde una edad muy temprana.
                </p>
                <br/>
                <p>En este caso el fisioterapeuta empleará una rehabilitación intensiva y constante, que servirá 
                para estimular las áreas corticales que controlan las funciones motoras, neurológicas y sensitivas 
                del paciente, con el fin de readaptar nuevas áreas del cerebro que se encargarán de ejecutar nuevos 
                patrones de movimientos.
                </p>
            </div>
            <div className={styles.corazonSeccionImg}></div>
        </div>
    </section>
  )
}

export default NeurologicaTres