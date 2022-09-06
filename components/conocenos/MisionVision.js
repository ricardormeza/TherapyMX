import React from 'react'
import styles from '../../styles/Home.module.css'

const MisionVision = () => {
    return (
        <section className='contenedor'>
            <div className={styles.MisionVision}>
                <div className={styles.MisionVisionTexto}>
                    <div className={styles.MisionTexto}>
                        <div className={styles.MisionTextoTitulo}>
                            <h2>Misión</h2>
                            <div className={styles.imagenMontana}></div>
                        </div>
                        <p>Dar <span>terapia</span> eficaz que sea adecuada a cada paciente para que
                            retome lo antes posible sus actividades diarias utilizando los métodos más innovadores
                        </p>
                    </div>
                    <div className={styles.MisionTexto}>
                        <div className={styles.VisionTextoTitulo}>
                            <h2>Visión</h2>
                            <div className={styles.imagenOjo}></div>
                        </div>
                        <p>Ser la <span>clínica de rehabilitación</span> más reconocida en <span>México </span> 
                            en 5 años.
                        </p>
                    </div>
                </div>
                <div className={styles.MisionVisionValores}>
                    <h3>Valores</h3>
                    <ul>
                        <li>{'>'} Calidad</li>
                        <li>{'>'} Respeto</li>
                        <li>{'>'} Innovación</li>
                        <li>{'>'} Equidad</li>
                        <li>{'>'} Honestidad</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default MisionVision