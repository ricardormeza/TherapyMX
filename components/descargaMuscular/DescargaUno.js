import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const DescargaUno = () => {
    return (
        <main className={`contenedor ${styles.contenidoGrid}`}>
            <div className={styles.imagenServiciosUno}></div>
            <div className={`contenedor ${styles.contenidoGridTexto}`}>
                <h1>Descarga Muscular</h1>
                <p>Descarga muscular es un tratamiento de fisioterapia que suele ser utilizado para tratar a 
                    deportistas, tanto a nivel profesional y como amateur, que practican deporte prácticamente a 
                    diario, con unos objetivos competitivos.
                </p>
                <br/>
                <p>Se trata de una terapia manual intensa en la cuál se aplican compresiones, fricciones y presiones 
                    en los músculos con la finalidad de producir un efecto analgésico. Se aplica en los músculos que tienen mayor 
                    tono muscular como causa de la carga de entrenamiento.
                </p>
                <br/>
                <p>Muchos deportistas piensan que el momento para realizar este tipo de tratamiento es después 
                    de la sesión de entrenamiento o una competencia. Cuando más efectivo y beneficioso será 
                    es durante los días de descanso antes de una competencia y/o entrenamiento. Si no hay ningún 
                    día de descanso o es incompatible poder realizar el tratamiento, lo mejor será hacerlo en el día 
                    de menos carga de actividad.
                </p>
                <br/>
                <p>En deportes como correr, que practicamente mucha gente a nivel amateur, sería importante 
                    realizar el tratamiento de masaje de descarga una vez al mes. Para aquellas personas que practican 
                    la actividad de forma regular, unas tres veces por semana.
                </p>
            </div>
        </main>
    )
}

export default DescargaUno