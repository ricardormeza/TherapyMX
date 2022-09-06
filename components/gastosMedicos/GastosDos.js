import React from 'react'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastosDos = () => {
    return (
        <section className='contenedor'>
            <div className={`contenedor ${styles.PasosGastosContenedor}`}>
                <h2>Pasos para usar tu Seguro de Gastos Médicos por reembolso.</h2>
                <div className={styles.PasoUno}>
                    <div className={styles.NumeroUno}></div>
                    <div>
                        <h3 className={styles.subTitle}>Al hacer tu cita</h3>
                        <p className={styles.parrafos}>Cuando nos contactes para concretar tu cita de fisioterapia, debes informar que 
                            quieres utilizar tu Seguro de Gastos Médicos. Nuestro personal se encargará de 
                            darte toda la información sobre las dudas que tengas al respecto.
                        </p>
                    </div>
                </div>
                <br/>
            </div>
        </section>
    )
}

export default GastosDos