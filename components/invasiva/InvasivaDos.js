import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const InvasivaDos = () => {
  return (
    <section className={`contenedor ${styles.Patologias}`}>
        <div className={styles.seccionPatologias}>
            <div className={`contenedor ${styles.PatologiasTexto}`}>
                <h2>¿Cómo funciona la Fisioterapia Invasiva?</h2>
                <p>Estas técnicas han demostrado sorprendentes resultados en las tendinitis crónicas, así 
                    como en lesiones de supraespinoso, pubalgias, tendinitis aquíleas, la epicondilitis y 
                    el <span>Síndrome de Túnel Carpiano</span>. Los resultados obtenidos de utilizar esta 
                    técnica ha cambiado el modelo de atender a los pacientes ya que sus resultados son 
                    evidentes desde la primera sesión, además de que las agujas de Fisioterapia Invasiva 
                    resultan prácticamente indoloras. Se requiere de 4 o 5 sesiones para obtener una recuperación
                    funcional óptima.
                </p>
                <br/>
                <p>Este conjunto de técnicas se diferencian de la fisioterapia convencional en la que se 
                    dirigen de forma concreta y directa sobre el origen del tejido lesionado. De este modo, 
                    la aguja estimula una lesión controlada y, eventualmente, activa el proceso fisiológico de 
                    reparación y regeneración del tejido afectado.
                </p>
            </div>
            <div className={styles.imagenCheck}></div>
        </div>
    </section>
  )
}

export default InvasivaDos