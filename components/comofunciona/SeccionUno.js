import React from 'react'
import styles from '../../styles/ComoFunciona.module.css'

const SeccionUno = () => {
    return (
        <main className='contenedor'>
            <div className={`contenedor ${styles.seccionUno}`}>
                <div className={styles.imagenCurita}></div>
                <p><span>Up Therapy Mx</span> busca realizar una rehabilitación de calidad en el menor número
                    de sesiones siendo efectiva para aquellas personas que han sufrido de una cirugía, traumatismo
                    o reactivación de una patología. Se realizan sesiones personalizadas con un tratamiento
                    individualizado el cual se combina con electroterapia, terapia manual, terapia invasiva y
                    técnicas más innovadoras en el área.
                </p>
            </div>
            
        </main>

    )
}

export default SeccionUno