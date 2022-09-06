import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const EcograficaUno = () => {
    return (
        <main className='contenedor'>
            <div className={styles.NeurologicaSeccionUno}>
                <div className={styles.imagenDeportiva}></div>
                <div className={styles.QueNeurologia}>
                    <h1>¿Qué es Fisioterapia Ecográfica?</h1>
                    <p>La <span>ecografía muscoloesquelética</span> es un método de diagnóstico y valoración en tiempo 
                    real que nos permite evaluar de forma objetiva el estado del tejido blando (musculo, tendón, ligamento, etc.). 
                    Además de valorar el estado de las estructuras, permite al fisioterapeuta seguir la evolución de la lesión, 
                    programar el tratamiento y realizar técnicas de tratamiento ecoguiada.
                    </p>
                    
                    <p>Esta técnica ha adquirido gran importancia en los últimos años en el mundo de Fisioterapia por la 
                        incorporación de las técnicas invasivas en su arsenal terapéutico. Gracias a la ecografía 
                        musculo-esquelética, podemos visualizar de forma precisa el tejido diana y dirigir la técnica 
                        específicamente al lugar deseado.
                    </p>
                    <p>Alguna de estas técnicas son la <span>Electrolisis Percutánea</span>, la <span>Punción Seca</span> y 
                    la <span>Neuromodulación.</span></p>
                </div>
            </div>
        </main>
    )
}

export default EcograficaUno