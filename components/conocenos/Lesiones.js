import React from 'react'
import styles from '../../styles/Home.module.css'

const Lesiones = () => {
  return (
    <section className={styles.BgLesion}>
        <div className={`contenedor ${styles.seccionLesiones}`}>
            <div className={styles.LesionTitulo}>
                <h1>Lesiones <strong>más frecuentes</strong> que atendemos </h1>
            </div>
            <div className={styles.LesionListado}>
                <ul>
                    <li className={styles.LesionLista}>{'>'} <span> Dolor de espalda baja (lumbalgia). </span></li>
                    <li className={styles.LesionLista}>{'>'} <span> Dolor de cuello. </span></li>
                    <li className={styles.LesionLista}>{'>'} <span> Esguinces. </span></li>
                    <li className={styles.LesionLista}>{'>'} <span> Cirugías ortopédicas o traumatológicas. </span></li>
                    <li className={styles.LesionLista}>{'>'} <span> Preescripción del ejercicio. </span></li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Lesiones