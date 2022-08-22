import React from 'react'
import Link from 'next/link'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastosUno = () => {
  return (
    <section className='contenedor'>
        <div className={styles.botonCitasContenedor}>
            <div className={styles.botones}>
                <div className={styles.lineaBtn}>
                    <Link href='tel:+525547576392'>Pedir Informes</Link>
                </div>
                <div>
                    <Link href='https://wa.me/525511775805'>Agendar cita</Link>
                </div>
            </div>
        </div>
        <br/>
        <div className={styles.SeccionUno}>
            <h1>¿Cómo funciona el Seguro de Gastos Médicos en Up Therapy MX?</h1>
            <p className={styles.parrafos}>Trabajamos con todas las <span>aseguradoras</span> por medio de reembolso.</p>
            <br/>
            <p className={styles.parrafos}>Si tienes seguro de gastos médicos y quieres usarlo, te recomeiendo ponerte en contacto con tu 
                asesor personal de seguros para que te guíe durante el proceso.
            </p>
            <p className={styles.parrafos}>Por medio de reembolso significa que tú asistes a tus sesiones de fisioterapia y realizas tu 
                pago directamente con nosotros.
            </p>
            <p className={styles.parrafos}>Posteriormente, tu asesor de seguros te enviará algunos formatos que deben de ser llenados por 
                ti y Up Therapy Mx para el reembolso de dichos pagos.
            </p>
        </div>
    </section>
  )
}

export default GastosUno