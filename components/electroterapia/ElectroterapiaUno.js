import React from 'react'
import styles from '../../styles/Presoterapia.module.css'

const ElectroterapiaUno = () => {
  return (
    <main className={`contenedor ${styles.contenidoGrid}`}>
        <div className={styles.imagenServiciosUno}></div>
        <div className={`contenedor ${styles.contenidoGridTexto}`}>
            <h1>¿Que es la Electroterapia?</h1>
            <p>Efecto antiinflamatorio, analgésico y trófico.
            </p>
            <p>La electroterapia, es la parte de la fisioterapia que comprende el estudio de la aplicación 
              de la electricidad como agente terapéutico. Consiste, por tanto, en la aplicación de energía 
              electromagnética al organismo humano, con el objetivo principal de provocar sobre él reacciones 
              biológicas y fisiológicas.
            </p>
            <br/>
            <p>Dichas reacciones van a traer como consecuencia la recuperación o la mejoría del funcionamiento 
              normal de las células y de los tejidos que éstas componen, cuando estos se encuentran sometidos a 
              enfermedades o alteraciones metabólicas.
            </p>
            <br/>
            <p>Entre sus principales efectos, podemos destacar el anti-inflamatorio, analgésico, la mejora 
              trófica, la potenciación muscular y el efecto térmico.
            </p>
            <br/>
            <p>Dependiendo de la problemática del paciente, podremos aplicar uno u otro tipo de corriente 
              electroterapéutica entre una gran variedad.
            </p>
        </div>
    </main>
  )
}

export default ElectroterapiaUno