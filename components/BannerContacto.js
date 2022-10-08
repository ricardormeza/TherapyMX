import React from 'react'
import styles from '../styles/BannerTres.module.css'
import Link from 'next/link'

const BannerContacto = () => {
  return (
    <section className={styles.BannerContactosBg}>
            <div className={`contenedor ${styles.ContenidoBannerContacto}`}>
                <div className={styles.BannerContactoVacio}></div>
                <div className={styles.BannerContactoTexto}>
                    <h5>Servicio de fisioterapia a domicilio</h5>
                    <p>Con <span>Up Therapy</span> no necesitas una instalación especial, 
                    nos adaptamos a tu espacio llevando todo el equipo necesario para tu tratamiento</p>
                    <div className={`contenedor ${styles.BtnContacto}`}>
                        <Link href='https://wa.me/525511775805'>
                            <a title='Enviar mensaje por Whatsapp'
                            target="_blank" 
                            className={styles.BtnContactoBtn}>Pedir Informes</a>
                        </Link>
                        <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
                            <a title='Agendar cita en Doctoralia'
                            target="_blank" 
                            className={styles.BtnContactoBtn}>Agendar cita</a>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
  )
}

export default BannerContacto