import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const PresoterapiaTres = () => {
    return (
        <section className={styles.bgGris}>
            <div className={`contenedor ${styles.contenidoGridSeccionTres}`}>
                <div className={styles.imagenServiciosTres}></div>
                <div className={styles.ContenidoSeccTresText}>
                    <h2>Beneficios de la presoterapia:</h2>
                    <ul>
                        <li>{'>'} <span>Activa nuestro sistema linfático.</span> </li>
                        <li>{'>'} <span>Aumenta el oxígeno de nuestro cuerpo.</span> </li>
                        <li>{'>'} <span>Elimina grasas y toxinas.</span> </li>
                        <li>{'>'} <span>Tonifica músculos.</span> </li>
                        <li>{'>'} <span>Reduce el cansancio de piernas.</span> </li>
                        <li>{'>'} <span>Reduce y previene la celulitis.</span> </li>
                        <li>{'>'} <span>Reduce las hinchazones.</span> </li>
                        <li>{'>'} <span>Reduce la retención de líquidos.</span> </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default PresoterapiaTres