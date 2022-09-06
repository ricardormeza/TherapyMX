import React from 'react'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastosSeis = () => {
    return (
        <section className='contenedor'>
            <div className={`contenedor ${styles.PasosGastosContenedor}`}>
                <div className={styles.TituloCheck}>
                    <h3>Para validar tu reembolso</h3>
                    <div className={styles.imageCheck}></div>
                </div>
                <br/>
                <p className={styles.parrafos}>
                    Este paso queda totalmente excliuido de la participación de Up Therapy MX ya que 
                    nosotros no tenemos ninguna participación directa en ello.
                </p>
                <br/>
                <p className={styles.parrafos}>Es responsabilidad del interesado solicitar el reembolso y 
                entregar toda la documentación solicitada por su aseguradora.</p>
                <br/>
                <p className={styles.parrafos}> En caso de que tu aseguradora solicite otro requisito que deba ser expedido 
                por Up Therapy MX, por fabor no dudes en notificarlo a nuestro personal y con gusto lo solucionaremos contigo.</p>
                <br/>
            </div>
        </section>
    )
}

export default GastosSeis