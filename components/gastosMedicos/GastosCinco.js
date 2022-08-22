import React from 'react'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastosCinco = () => {
    return (
        <div className={styles.BackgroundGray}>
            <br/>
            {/* {`contenedor ${styles.PasosGastosContenedor}`} */}
            <div className={`contenedor ${styles.PasoUno}`}>
                <div className={`contenedor ${styles.PasoUno}`}>
                    <div className={styles.NumeroCuatro}></div>
                    <div>
                        <h3 className={styles.subTitle}>Al finalizar tu proceso o cumplir con el número de sesiones</h3>
                        <p className={styles.parrafos}>
                            Informa a nuestro personal que ingresarás los papeles que te pide tu aseguradora para 
                            solicitar tu reembolso. Recuerda que para solicitarlo es necesario que te expidamos una 
                            factura.
                        </p>
                        <br/>
                        <p className={styles.parrafos}>Nosotros te entregaremos lo siguiente:</p>
                        <p></p>
                        <p className={styles.parrafos}>{'>'} BITÁCORA DE ASISTENCIA firmadas por ti y el fisioterapeuta responsable de Up Therapy MX.</p>
                        <p className={styles.parrafos}>{'>'} FACTURA por el total de sesiones transcurridas en el mes correspondiente.</p>
                        <p className={styles.parrafos}>{'>'} INFORME DE FISIOTERAPIA. No todas las aseguradoras lo solicitan, por lo que te 
                        recomendamos preguntar a tu asesor de seguro. Este informe corresponde a la información resumida de las técnicas y/o 
                        herramientas que se utilizarón en tu proceso de rehabilitación física.</p>
                        <p></p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GastosCinco