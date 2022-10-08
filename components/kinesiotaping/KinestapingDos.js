import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const KinestapingDos = () => {
    return (
        <>
            <section className={styles.bgGris}>
                <div className={`contenedor ${styles.KinesiotapingContenedor}`}>
                    <h2 className='contenedor'>¿Para qué Kinesiotaping?</h2>
                    <p className='contenedor'>El kinesiotaping se puede utilizar con diversos objetivos:</p>
                    <ul className={`contenedor ${styles.KinesiotapingListado}`}>
                        <li>{'>'} <span>Disminuir el dolor y el edema</span>.</li>
                        <li>{'>'} <span>Mejorar la circulación y el drenaje linfático</span>.</li>
                        <li>{'>'} <span>Mejorar la estabilidad y el equilibrio</span>.</li>
                        <li>{'>'} <span>Corregir alteraciones posturales</span>.</li>
                    </ul>
                </div>
            </section>
            <br/>
            <div className={`contenedor ${styles.KinesiotapingContenedor}`}>
                    <h2 className='contenedor'>¿Cómo usar Kinesiotaping?</h2>
                    <p className='contenedor'>
                        Tras una entrevista detalada del paciente, se realiza una valoración en la que se determina si 
                        el Kinesiotaping está indicado.
                    </p>
                    <p className='contenedor'>Se coloca el vendaje con una forma y tensión determinada, en función del tipo de lesión y 
                        objetivo deseado.
                    </p>
                    <br/>
                    <p className='contenedor'>Hay 8 técnicas cada una de ellas con unas características determinadas:</p>
                    <br/>
                    <div className={`contenedor ${styles.kinestapingListadoGrid}`}>
                        <ul className={`contenedor ${styles.KinesiotapingListado}`}>
                            <li>{'>'} <span>Muscular</span>.</li>
                            <li>{'>'} <span>Ligamento-tendón</span>.</li>
                            <li>{'>'} <span>Correción articular funcional.</span>.</li>
                            <li>{'>'} <span>Correción mecánica</span>.</li>
                            <li>{'>'} <span>Fascial</span>.</li>
                            <li>{'>'} <span>Aumento de espacio</span>.</li>
                            <li>{'>'} <span>Fatiga</span>.</li>
                            <li>{'>'} <span>Segmental</span>.</li>
                        </ul>
                        <div className={styles.kinestapingCorazon}></div>
                    </div>
                    
                </div>
        </>
    )
}

export default KinestapingDos