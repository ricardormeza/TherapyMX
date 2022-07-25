import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const DescargaDos = () => {
    return (
        <>
            <section className={styles.bgGris}>
                <div className={`contenedor ${styles.contenidoGridSeccionCuatro}`}>
                    <div className={styles.ContenidoSeccCuatroText}>
                        <p className='contenedor'>
                            Los objetivos de una masaje muscular son:
                        </p>
                        <br/>
                        <ul className={`contenedor ${styles.DescargaMuscularListado}`}>
                            <li>{'>'} <span>Prevenir posibles lesiones en el deportista</span>.</li>
                            <li>{'>'} <span>Optimizar al máximo el rendimiento muscular y como consecuencia, 
                                mejorar el rendimiento deportivo</span>.</li>
                            <li>{'>'} <span>Acelerar la recuperación post entretamiento y/o post 
                                competencia para las futuras sesiones de trabajo.</span>.</li>
                            <li>{'>'} <span>Reducir la fatiga y los dolores musculares que aparecen 
                                tras el entrenamiento</span>.</li>
                        </ul>
                    </div>
                    <div className={styles.imagenServiciosCuatro}></div>
                </div>
            </section>
            <br/>
            <div className={`contenedor ${styles.SeccionCuatroParrafo}`}>
            <p className='contenedor'>Algunos de los efectos y beneficios que nos proporcionará el masaje son:</p>
            <ul className={`contenedor ${styles.DescargaMuscularListado}`}>
                            <li>{'>'} <span>Reducción de los espasmos, calambres e hipertono</span>.</li>
                            <li>{'>'} <span>Disminuir el exceso de tono y las contracturas musculares</span>.</li>
                            <li>{'>'} <span>Drenar los residuos catabólicos que producen la fatiga.</span>.</li>
                            <li>{'>'} <span>Aumentar el aporte sanguíneo para la vascularización de los músculos 
                                y vasodilatación aumentando el nivel de oxigeno de los tejidos</span>.</li>
                            <li>{'>'} <span>Aumentar la temperatura interna del músculo</span>.</li>
                            <li>{'>'} <span>Eliminación de dolores musculares, adherencias y fibrosis</span>.</li>
                            <li>{'>'} <span>Aceleración notable en el proceso de recuperación</span>.</li>
                            <li>{'>'} <span>Relajación a nivel general tanto física como mentalmente</span>.</li>
                        </ul>
            </div>
        </>
    )
}

export default DescargaDos