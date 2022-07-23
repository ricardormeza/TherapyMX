import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import DeportivaUno from '../components/deportiva/DeportivaUno'
import DeportivoDos from '../components/deportiva/DeportivoDos'
import DeportivoTres from '../components/deportiva/DeportivoTres'

const Deportiva = () => {
  return (
    <Layout
        pagina='Fisioterapia-Deportiva'
        >
        <div className={styles.HeaderDeportiva}></div>
        <div className={styles.btnPedirCita}>
            <a>Pedir informes |</a>
            <a>Agendar cita</a>
        </div>
        <div className='separacion'></div>
        <DeportivaUno/>
        <div className='separacion'></div>
        <DeportivoDos/>
        <div className='separacion'></div>
        <DeportivoTres/>
        <div className='separacion'></div>
        </Layout>
  )
}

export default Deportiva