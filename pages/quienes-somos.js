import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import CompromisoPaciente from '../components/conocenos/CompromisoPaciente'
import MisionVision from '../components/conocenos/MisionVision'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'


const quienessomos = () => {
  return (
    <Layout
      pagina='Quienes somos'
    >
      <div className={styles.conocenosImage}>
        </div>
          <h3 className={`contenedor ${styles.quienes}`}>¿Quiénes somos?</h3>
        <main>
          <div className={`contenedor ${styles.seccionUno}`}>
            <div className={styles.imagenCurita}></div>
            <p><span>Up Therapy Mx</span>es una clínica que ha desarrollado su actividad en el sector de la salud
              ofreciendo servicios de rehabilitación y terapia física desde diciembre del 2017. La empresa busca una 
              constante innovación utilizando la tecnología más actualizada en los métodos aplicados para el bienestar
              de los pacientes generando una rápida recuperación.
            </p>
          </div>
        </main>
        <div className='separacion'></div>
        <div className={styles.filosofiaContenedor}>
          <div className={`contenedor ${styles.filosofia}`}>
            <p>La filosofía de <span>Up Therapy Mx</span>, se basa en realizar un razonamiento clínico personalizado
              para un tratamiento eficaz de acuerdo a cada lesión o patología. Cuenta con un equipo de trabajo <span>experto</span>,
              el cuál busca la mejor solución que se adapte a las necesidades de cada paciente.
            </p>
            <div className={styles.imagenLibreta}></div>
          </div>
        </div>
          <div className='separacion'></div>
          <CompromisoPaciente/>
          <div className='separacion'></div>
          <MisionVision/>
          <div className='separacion'></div>
          <Lesiones/>
          <div className='separacion'></div>
          <RedeSociales/>
          <div className='separacion'></div>

    </Layout>
  )
}

export default quienessomos