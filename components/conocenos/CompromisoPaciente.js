import React from 'react'
import styles from '../../styles/Home.module.css'

const CompromisoPaciente = () => {
  return (
    <section className='contenedor'>
        <div className={styles.corazon}>
            <div className={styles.imagenCorazon}></div>
            <div className={styles.corazonTexto}>
                <h3>Compromisos con el paciente</h3>
                <ul>
                    <li> {'>'} <span>Tratamiento de alta calidad centrado en el paciente</span>. </li>
                    <li> {'>'} <span>Tratamiento personalizado e individualizado en el paciente</span>. </li>
                    <li> {'>'} <span>Trato digno, amable y servicial</span> </li>
                    <li> {'>'} <span>Facturación de los servicios y documentación para su aseguradora</span>. </li>
                    <li> {'>'} <span>Costo justo por el tratamiento, precios accesibles y pago solo por lo que necesitas</span>. </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default CompromisoPaciente