import React from 'react'
import styles from '../styles/BannerTres.module.css'

const BannerContacto = () => {
  return (
    <section className={styles.BannerContactosBg}>
            <div className={`contenedor ${styles.ContenidoBannerContacto}`}>
                <div></div>
                <div className={styles.BannerContactoTexto}>
                    <h5>Servicio de fisioterapia a domicilio</h5>
                    <p>Con <span>Up Therapy</span> no necesitas una instalación especial, 
                    nos adaptamos a tu espacio llevando todo el equipo necesario para tu tratamiento</p>
                    <div className={`contenedor ${styles.BtnContacto}`}>
                        <a className={styles.BtnContactoBtn}>Pedir Informes</a>
                        <a className={styles.BtnContactoBtn}>Agendar cita</a>
                    </div>
                </div>
            </div>
            
        </section>
  )
}

export default BannerContacto