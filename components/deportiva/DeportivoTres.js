import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const DeportivoTres = () => {
    return (
        <section className='contenedor'>
        <div className={styles.NeurologicaTres}>
            <div className={styles.estetoscopio}></div>
            <div className={styles.NeurologicaTresContenido}>
                <h3>Valoración Deportiva</h3>
                <p>La valoración deportiva busca guiarlo hacia un retorno efectivo y seguro 
                    a las activiades en el menor tiempo posible. Además, este tipo de evaluaciones 
                    suelen realizarse antes de la participación en eventos deportivos para evitar 
                    futuras lesiones. Finalmente es sugerir diferentes enfoques del tratamiento y 
                    soluciones para el paciente.
                </p>
            </div>
        </div>
        <div className='separacion'></div>
        <div className={styles.NeurologicaTresContenidoDos}>
            <div className={styles.NeurologicaTresContenidoCorazon}>
                <h3>Objetivos en Fisioterapia Deportiva</h3>
                <p>El fisioterapeuta del deporte debe manejar y dominar una gran variedad de técnicas de 
                    rehabilitación que ayuden a la pronta recuperación del paciente en el tratamiento de 
                    las lesiones deportivas.
                </p>
                <p>En nuestro centro, además de las técnicas mencionadas anteriormente, también utilizamos 
                    las últimas y más avanzadas técnicas fisioterapeúticas, especialmente indicadas para el 
                    tratamiento de las lesiones deportivas como:
                </p>
                <br/>
                <ul className={styles.listadoAspectos}>
                        <li>{'>'} <span>Electrolisis Percutánea Terapéutica (EPTE) ecoguiada.</span></li>
                        <li>{'>'} <span>Ecografía músculo-esquelética</span>.</li>
                        <li>{'>'} <span>Punción Seca</span>.</li>
                </ul>
            </div>
            <div className={styles.corazonSeccionImg}></div>
        </div>
    </section>
    )
}

export default DeportivoTres