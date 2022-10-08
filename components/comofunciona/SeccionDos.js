import React from 'react'
import styles from '../../styles/ComoFunciona.module.css'

const SeccionDos = () => {
    return (
        <div className={styles.filosofiaContenedor}>
            <div className={`contenedor ${styles.filosofia}`}>
                <p>La filosofía de <span>Up Therapy Mx</span>, se basa en realizar un razonamiento clínico personalizado
                    para un tratamiento eficaz de acuerdo a cada lesión o patología. Cuenta con un equipo de trabajo <span>experto</span>,
                    el cuál busca la mejor solución que se adapte a las necesidades de cada paciente.
                </p>
                <div className={styles.imagenLibreta}></div>
            </div>
        </div>
    )
}

export default SeccionDos