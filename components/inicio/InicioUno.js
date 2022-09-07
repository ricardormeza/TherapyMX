import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const InicioUno = () => {
    return (
        <section className='contenedor'>
            {/* <div className={styles.inicioUnobtns}>
                <div className={styles.bordeBtnInicio}>
                <a className={styles.btninicio}>¿Quénes somos? /</a> 
                <a className={styles.btninicio}>¿Cómo funciona?</a>
                </div>
            </div> */}
            <div className='separacion'></div>
            <div className={styles.InicioSeccionUno}>
                <div className={styles.QuienesSomosContenedor}>
                    <div className={styles.QuieneSomosImagen}>
                        <div className={styles.QuienesSomosImg}></div>
                    </div>
                    <div className={styles.QuienesSomosTexto}>
                        <h3>¿Quiénes somos?</h3>
                        <p>Up Therapy MX es una clínica de rehabilitación y terapia física que 
                            busca la innovación en los tratamientos y técnicas para una <strong>rápida
                                recuperación
                            </strong> del paciente.
                        </p>
                        <br/>
                        <p>La filosofía de Up Therapy MX, se basa en realizar un razonamiento clínico 
                            personalizado para un tratamiento eficaz de acuerdo a cada lesión o patología. 
                            Cuenta con un equipo de trabajo experto, el cuál busca la mejor solución que se 
                            adapte a las necesidades de cada paciente.
                        </p>
                        <br/>
                        <Link href='/quienes-somos'>
                            <a className={styles.enlace}>Leer más</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='separacion'></div>
        </section>
    )
}

export default InicioUno