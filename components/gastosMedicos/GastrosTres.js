import React from 'react'
import styles from '../../styles/AvisoPrivacidad.module.css'

const GastrosTres = () => {
    return (
        <div className={styles.BackgroundGray}>
            {/* {`contenedor ${styles.PasosGastosContenedor}`} */}
            <div className={`contenedor ${styles.PasoUno}`}>
                <div className={`contenedor ${styles.PasoUno}`}>
                    <div className={styles.NumeroDos}></div>
                    <div>
                        <h3 className={styles.subTitle}>Al acudir a tu primera cita</h3>
                        <p className={styles.parrafos}>
                            Nuestro personal te pedirá que nos envíes a nuestro correo tufisio@uptherapy.com.mx todos tus 
                            datos fiscales para tenerlos en nuestra base de datos de facturación.
                        </p>
                        <br/>
                        <p className={styles.parrafos}>Estos datos son:</p>
                        <p></p>
                        <p className={styles.parrafos}>{'>'} RAZÓN SOCIAL.</p>
                        <p className={styles.parrafos}>{'>'} R.F.C.</p>
                        <p className={styles.parrafos}>{'>'} DOMICILIO FISCAL: CALLE, NÚMERO, COLONIA, CÓDIGO POSTAL, ESTADO Y MUNICIPIO.</p>
                        <p className={styles.parrafos}>{'>'} CORREO ELECTRÓNICO.</p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GastrosTres