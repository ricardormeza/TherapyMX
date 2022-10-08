import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const BiomecanicaCuatro = () => {
    return (
        <>
            <section className={styles.bgGris}>
                <div className={`contenedor ${styles.contenidoGridSeccionCuatro}`}>
                    <div className={styles.ContenidoSeccCuatroText}>
                        <p className='contenedor'>
                            En estas sesión se abre el expediente de cada paciente, además de 
                            realizarse las pruebas ortopédicas necesarias para llegar a un diagnóstico 
                            preciso en fisioterapia. Se evalúa también, los patrones de movimiento 
                            normales y anormales del movimiento del paciente, además de la biomecánica 
                            de la condición actual.
                        </p>
                        <br/>
                        <p className='contenedor'>
                            Se realiza una evaluación postural del paciente para encontrar posibles desviaciones 
                            o malas alineaciones del sistema esquelético. Se miden amplitudes de movimiento con la 
                            finalidad de analizar la capacidad actual de movilidad de las articulaciones y crear un plan 
                            de acción que busque mejorar los patrones de movimiento anormal.
                        </p>
                    </div>
                    <div className={styles.imagenServiciosCuatro}></div>
                </div>
            </section>
            
            <div className={`contenedor ${styles.SeccionCuatroParrafo}`}>
            <p className='contenedor'>Finalmente, se analizan los ángulos principales del cuerpo para 
            valorar la alineación del cuerpo en su totalidad y de las extremidades de manera aislada.</p>
            </div>
        </>
    )
}

export default BiomecanicaCuatro