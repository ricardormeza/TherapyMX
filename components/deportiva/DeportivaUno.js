import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const DeportivaUno = () => {
    return (
        <main className='contenedor'>
            <div className={styles.NeurologicaSeccionUno}>
                <div className={styles.imagenDeportiva}></div>
                <div className={styles.QueNeurologia}>
                    <h1>¿Qué es Fisioterapia Deportiva?</h1>
                    <p>La <span>rehabilitación deportiva</span> es la que está más particularmente 
                    interesada en las lesiones <span>neuro-musculoesqueléticas</span> relacionadas con la 
                    práctica de actividades físicas.
                    </p>
                    <p>El conocimiento de la fisiología del ejercicio, el diagnóstico neuro-musculoesquelético 
                        y el tratamiento fisioterapeútico asociado permiten un manejo óptimo de cualquier lesión 
                        relacionada con el ejercicio.
                    </p>
                    <br/>
                    <p>Cuando pensamos en fisioterapia aplicada al deporte siempre pensamos en los deportistas de 
                        élite, pero en la sociedad actual es común la práctica del deporte a todos los niveles. Siempre 
                        que se practica algún tipo de actividad física, desde caminar o <span>hacer footing</span>, hasta la práctica 
                        profesional o de <span>deportes de riesgo</span>, se puede producir lesiones de mayor o menor gravedad.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default DeportivaUno