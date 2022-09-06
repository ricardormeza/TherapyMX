import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const InvasivaTres = () => {
    return (
        <section className='contenedor'>
            <div className={styles.NeurologicaTres}>
                <div className={styles.estetoscopio}></div>
                <div className={styles.NeurologicaTresContenido}>
                    <h3>Valoración en Fisioterapia Invasiva</h3>
                    <p>En <span>Up Therapy MX</span>, tras la evaluación, el fisioterapeuta trabaja con el 
                    paciente para establecer objetivos y desarrollar un plan de fisioterapia en donde se 
                    elegirá el tratamiento más adecuado básandose en la evolución inicial del paciente, la 
                    evidencia científica de los tratamientos para cada patología y en la propia experiencia 
                    clínica.</p>
                    {/* <br /> */}
                </div>
            </div>
            <div className='separacion'></div>
            <div className={styles.NeurologicaTresContenidoDos}>
                <div className={styles.NeurologicaTresContenidoCorazon}>
                    <h3>Técnicas de Fisioterapia Invasiva</h3>
                    <h4>Electrólisis Percutánea Terapéutica</h4>
                    <p>Es una técnica para el tratamiento de tendinopatías que consiste en la aplicación de 
                        corriente galvánica a través de una aguja de acupuntura directamente sobre el tejido 
                        dañado. Los beneficios de esta aplicación son aficaces ya que se obtienen recuperaciones 
                        rápidas e indoloras. En la clínica se cuenta con el certificado para la aplicación de la 
                        técnica ecoguiada y un dispositivo EPI.
                    </p>
                    <br />
                    <h4>Punción Seca</h4>
                    <p>Es una técnica para el tratamiento de los puntos gatillo miofasciales que consiste en utilizar una 
                        aguja similar a las de acupuntura. Se le denomina {"seca"} ya que no inyecta ninguna sustancia dentro 
                        de los músculos, sino que es la propia acción mecánica de la aguja la que genera los efectos terapéuticos. 
                        Esta técnica requiere ser aplicada en combinación con terapia manual para favorecer sus efectos. 
                    </p>
                    <p>Los resultados son inmediatos consiguiendo una importante reducción del dolor y mejora del movimiento.</p>
                    <br/>
                    <h4>Neuromodulación</h4>
                    <p>Esta técnica es reciente, consiste en la aplicación percutánea a través de una aguja con corriente tipo 
                        T.E.N.S. de baja frecuencia, con el objetivo de alcanzar mejores efectos terapéuticos de la corriente 
                        atravesando la barrera de la piel, lo que permite actuar de una forma más directa sobre el complejo 
                        neuromuscular.
                    </p>
                    <p>Esta técnica se realiza de forma ecoguiada sin atravesar la estructura nerviosa, pero se sitúa cercano al nervio 
                        y mediante éste tipo de corriente, se obtienen resultados como:
                    </p>
                    <ul className={styles.listadoAspectos}>
                        <li>{'>'} <span>Alivio del dolor</span> en procesos agudos.</li>
                        <li>{'>'} <span>Cambios a nivel del sistema nervioso</span> central y periférico en procesos de dolor crónico.</li>
                        <li>{'>'} <span>Estimulación muscular</span> para la recuperación del patrón de activación y la mejora del control motor.</li>
                    </ul>
                </div>
                <div className={styles.corazonSeccionImg}></div>
            </div>
        </section>
    )
}

export default InvasivaTres