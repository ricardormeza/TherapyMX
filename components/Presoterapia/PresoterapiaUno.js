import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const PresoterapiaUno = () => {
  return (
    <main className={`contenedor ${styles.contenidoGrid}`}>
        <div className={styles.imagenServiciosUno}></div>
        <div className={`contenedor ${styles.contenidoGridTexto}`}>
            <h1>¿Que es la presoterapia?</h1>
            <p>La presoterapia es un tratamiento que utiliza la presión del aire para ejercer una 
                comprensión que actúa de forma relajante y ayuda a nuestro sistema linfático.
            </p>
            <p>Además, este tratamiento promueve la recuperación de la elasticidad cutánea y 
                aumenta el oxígeno que reciben nuestros tejidos promoviendo así la reactivación 
                de nuestro sistema circulatorio. Esta presión que ejerce sobre nuestros músculos 
                contribuye a la eliminación de los líquidos acumulados en nuestro organismo, 
                a las toxinas que generan la celulitis y a las varices, entre otras.
            </p>
        </div>
    </main>
  )
}

export default PresoterapiaUno