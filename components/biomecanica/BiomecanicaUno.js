import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const BiomecanicaUno = () => {
    return (
        <main className={`contenedor ${styles.contenidoGrid}`}>
        <div className={styles.imagenServiciosUno}></div>
        <div className={`contenedor ${styles.contenidoGridTexto}`}>
            <h1>Valoración y Análisis biomecánico</h1>
            <p>Estas sesiones tiene la finalidad de ayudar al <span>deportista</span> a bajar 
            la carga muscular producida por el entrenamiento con el fin de evitar lesiones y 
            mantener en óptimas condiciones al deportista para seguir con su entrenamiento 
            durante temporadas de competencia o de preparación competitiva. Estas sesiones 
            también están recomendadas al finalizar temporadas de competencia.
            </p>
            <p>La evaluación física es donde se obtiene toda la información necesaria sobre la 
                condición o patología actual de cada paciente con el objetivo de llegar a un 
                diagnóstico y plantear la más adecuada alternativa de tratamiento en cada paciente.
            </p>
        </div>
    </main>
    )
}

export default BiomecanicaUno