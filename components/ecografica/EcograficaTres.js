import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const EcograficaTres = () => {
    return (
        <section className='contenedor'>
            <div className={styles.NeurologicaTres}>
                <div className={styles.estetoscopio}></div>
                <div className={styles.NeurologicaTresContenido}>
                    <h3>Valoración Ecográfica</h3>
                    <p>Es una técnica <span>inocua</span>, no invasiva y barata. A diferencia de otras pruebas 
                    diagnósticas como la radiografía o la resonancia magnética, ésta no es una técnica ionizante 
                    la cual permite:
                    </p>
                    <br/>
                    <p>Una valoración en tiempo real de las estructuras.</p>
                    <p>Un examen en estático y dinámico, lo que nos permite comprobar la integridad de las 
                        estructuras en movimiento.
                    </p>
                    <p>Información diagnóstica de control evolutivo y de valor predictivo de la evolución de 
                        una lesión teniendo un carácter preventivo.
                    </p>
                    <p>Hacer estudios comparativos contralaterales, fundamental para detectar alteraciones 
                        estructurales respecto al lado sano.
                    </p>
                    <p>Dirigir intervenciones de forma precisa y segura.</p>
                </div>
            </div>
            <div className='separacion'></div>
            <div className={styles.NeurologicaTresContenidoDos}>
                <div className={styles.NeurologicaTresContenidoCorazon}>
                    <h3>Objetivos en Fisioterapia Ecográfica</h3>
                    <p>La ecografía músculoesquelética es una herramienta que permite un estudio comparativo, dinámico, 
                        rápido, eficaz, inocuo y en tiempo real.
                    </p>
                    <p>Puede ser realizada como método de confirmación del diagnóstico del fisioterapeuta para evaluar 
                        de forma objetiva el estado del denominado tejido blando (músculos, ligamentos y tendones) y 
                        programar un mejor tratamiento de Fisioterapia.
                    </p>
                    <br/>
                    <p>Por otro lado, uno de los mayores beneficios que otorga el uso de la <span>ecografía músculoesquelética</span> 
                    es que permite valorar la evolución de la lesión, así como validar las diferentes técnicas terapéuticas de 
                    Fisioterapia, mejorando así el éxito profesional.</p>
                    
                </div>
                <div className={styles.corazonSeccionImg}></div>
            </div>
        </section>
    )
}

export default EcograficaTres