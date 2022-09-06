import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const ElectroterapiaDos = () => {
    return (
        <section>
            <div className={`contenedor ${styles.SeccionDos}`}>
                <h2 className='contenedor'>¿Qué podemos tratar con Bio-electroterapia?</h2>
                <p className='contenedor'>Reducción de dolor.</p>
                <p className='contenedor'>Efecto antiinflamación.</p>
                <p className='contenedor'>Mejora trófica (circulación sanguínea y linfática).</p>
                <p className='contenedor'>Potenciación muscular.</p>
                <p className='contenedor'>Aceleración y potenciación del propio proceso de recuperación y regeneración 
                    fisiológicas del organismo.</p>
                <br/>
                <h2 className='contenedor'>¿Cómo empleamos Bio-electroterapia?</h2>
                <p className='contenedor'>Tras la elección del tipo de Electroterapia más 
                conveniente para la patología que el paciente presente, se explicará qué 
                tipo de sensación deberá notar durante la aplicación de la técnica. A 
                continuación, se programan los parámetros que permitan obtener un mayor 
                beneficio terapéutico.</p>
                <p className='contenedor'>En todo momento, la base en la que nos centraremos será la sensación que el 
                    paciente experimente, no resultando nunca doloroso el tratamiento.
                </p>
                <br/>
                <p className='contenedor'>El tratamiento se aplica a través de unas botas y mangas que 
                cubren la totalidad de las piernas, abdomen y brazos. Éstas contienen cámaras de aire, 
                las cuáles se van hinchando ejerciendo sobre la zona una presión positiva ascendente. </p>
            </div>
        </section>
    )
}

export default ElectroterapiaDos