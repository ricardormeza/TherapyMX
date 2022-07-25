import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const KinesiotapingUno = () => {
    return (
        <main className={`contenedor ${styles.contenidoGrid}`}>
        <div className={styles.imagenServiciosUno}></div>
        <div className={`contenedor ${styles.contenidoGridTexto}`}>
            <h1>Kinesiotaping</h1>
            <p>La <span>Readaptación Física</span> tiene como objetivo principal el ayudar al 
            paciente/deportista a recuperar  un estado físico y funcional adecuado tras haber 
            sufrido un proceso lesivo, así como ayudar al paciente/deportista en la prevención 
            de lesiones, permitiendo de este modo poder realizar las actividades de la vida diaria 
            y la práctica deportiva con normalidad.
            </p>
            <br/>
            <p>Para ello, tras una exhaustiva valoración, se propondrá al paciente/deportista un 
                programa de jercicio físico terapéutico personalizado, en el que se desarrollen 
                estrategias que faciliten la recuperación de la lesión y permitan una incorporación 
                rápida y segura la actividad física, deportiva o laboral.
            </p>
            <br/>
            <p>Por otro lado, también puede realizarse dicho tipo de valoración en pacientes/deportistas 
                que deseen realizar un trabajo preventivo sin haber sufrido ninguna lesión en el pasado.
            </p>
        </div>
    </main>
    )
}

export default KinesiotapingUno