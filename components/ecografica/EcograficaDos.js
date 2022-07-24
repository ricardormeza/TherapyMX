import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const EcograficaDos = () => {
    return (
        <section className={`contenedor ${styles.Patologias}`}>
            <div className={styles.seccionPatologias}>
                <div className={`contenedor ${styles.PatologiasTexto}`}>
                    <h2>¿Qué patologías se trabajan?</h2>
                    <p>Es el área de Fisioterapia que utiliza un ecógrafo con el fin de visualizar el 
                        estado de los tejidos blandos para obtener un mejor análisis y plan de tratamiento 
                        de acuerdo a la lesión del paciente. Al aplicar este estudio se busca una visión objetiva 
                        y dinámica en tiempo real de afecciones en el tejido musculoesquelético, tendones y ligamentos 
                        como:
                    </p>
                    <br/>
                    <ul className={styles.listadoAspectos}>
                        <li>{'>'} <span>Contracciones del músculo</span>.</li>
                        <li>{'>'} <span>Rotura muscular</span>.</li>
                        <li>{'>'} <span>Deslizamiento de un tendón</span>.</li>
                        <li>{'>'} Visualización de la existencia de una <span>rotura o esguince</span> en un ligamento.</li>
                        <li>{'>'} Desplazamiento de una forma determinada de una articulación y la existencia de <span>bursitis o sinovitis</span>.</li>
                    </ul>
                    <br/>
                    <p>Este método se adapta a cualquier lesión con el propósito de abordar la patología del paciente para 
                        poder observar su progreso continuo así los casos de reincidencia.
                    </p>
                </div>
                <div className={styles.imagenCheck}></div>
            </div>
        </section>
    )
}

export default EcograficaDos