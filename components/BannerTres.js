import React from 'react'
import styles from '../styles/BannerTres.module.css'

const BannerTres = () => {
    return (
        
        <section className={styles.BannerTresBg}>
            <div className={`contenedor ${styles.ContenidoBanner}`}>
                <h5>¿Necesitas saber cuál es el mejor tratamiento para ti?</h5>
                <p>¡Agenda una consulta con un <span>fisioterapeuta especialista!</span></p>
            </div>
            <div className={`contenedor ${styles.BannerTresBtn}`}>
                <a>Agendar cita</a>
            </div>
        </section>
    )
}

export default BannerTres