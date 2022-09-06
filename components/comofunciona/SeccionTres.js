import React from 'react'
import styles from '../../styles/ComoFunciona.module.css'

const SeccionTres = () => {
    return (
        <section className={`contenedor ${styles.seccionTresContenedor}`}>
            {/* VALORACION */}
            <div className={`contenedor ${styles.seccionTres}`}>
                <div className={styles.imagenValoracion}></div>
                <div className={styles.SeccionTresValores}>
                    <h3>Valoración</h3>
                    <p>Dentro de la <span>terapia física</span> es fundamental realizar una valoración completa
                    con el objetivo de poder detectar la razón de la lesión y sus consecuencias en alteraciones
                    de la vida diaria. Lo más importante es la personalización de las terapias.
                </p>
                </div>
            </div>
            <div className='separacion'></div>
            {/* RAZONAMIENTO CLINICO */}
            <div className={`contenedor ${styles.seccionTres}`}>
                <div className={styles.imagenRazon}></div>
                <div className={styles.SeccionTresValores}>
                    <h3>Razonamiento clínico</h3>
                    <p>Después de la valoración clínica y el <span>razonamiento clínico</span>, se establece
                    un plan de tratamiento e informe en el que se indica el número de sesiones necesarias
                    para el tratamiento.
                </p>
                </div>
            </div>
            <div className='separacion'></div>
            {/* CONTACTO CON TU DOCTOR */}
            <div className={`contenedor ${styles.seccionTres}`}>
                <div className={styles.imagenContacto}></div>
                <div className={styles.SeccionTresValores}>
                    <h3>Contacto con tu doctor</h3>
                    <p>Este plan se hace llegar al doctor que previamente ha tratado al paciente con la finalidad
                        de ser un equipo multidisciplinario en el progreso de la rehabilitación.
                </p>
                </div>
            </div>
            <div className='separacion'></div>
            {/* TERAPIA FISICA */}
            <div className={`contenedor ${styles.seccionTres}`}>
                <div className={styles.imagenTerapia}></div>
                <div className={styles.SeccionTresValores}>
                    <h3>Terapia física</h3>
                    <p>Se realiza la <span>terapia física a domicilio</span> o en la <span>clínica</span> en
                    donde se explica el objetivo y la aplicación de cada herramienta terapeútica, además de incluir
                    los ejercicios especificos para la mejoría del paciente.
                </p>
                </div>
            </div>
            <div className='separacion'></div>
        </section>
    )
}

export default SeccionTres