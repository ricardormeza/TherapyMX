import React from 'react'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastosCuatro = () => {
    return (
        <div className={`contenedor ${styles.PasosGastosContenedor}`}>
            <div className={`contenedor ${styles.PasoUno}`}>
                <div className={styles.NumeroTres}></div>
                <div>
                    <h3 className={styles.subTitle}>Al Terminar tu primera cita</h3>
                    <p className={styles.parrafos}>
                        Se te entregará un formato de Bitácora de Firmas para que los firmes al término de cada sesión 
                        de fisioterapia, por lo que esta hoja se quedará con nosotros hasta que termines tu proceso o 
                        quieras utilizar tu reembolso.
                    </p>
                    <p className={styles.parrafos}>
                        Este formato te lo piden las aseguradoras como comprobante del número de sesiones de 
                        fisioterapia que tomaste y las fechas correspondientes a tu tratamiento.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GastosCuatro