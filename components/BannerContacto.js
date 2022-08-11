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
                        <Link href='tel:+525547576392' target="_blank">
                            <a className={styles.BtnContactoBtn}>Pedir Informes</a>
                        </Link>
                        <Link href='https://wa.me/525511775805' target="_blank">
                            <a className={styles.BtnContactoBtn}>Agendar cita</a>
                        </Link>
                    </div>
                </div>
            </div>
            
        </section>
  )
}

export default BannerContacto