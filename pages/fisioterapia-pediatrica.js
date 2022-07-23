import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import PediatricaUno from '../components/pediatrica/PediatricaUno'

const pediatrica = () => {
  return (
    <Layout
        pagina='Fisioterapia-Pediatrica'
        >
        <div className={styles.HeaderPediatrica}></div>
        <div className={styles.btnPedirCita}>
            <a>Pedir informes |</a>
            <a>Agendar cita</a>
        </div>
        <div className='separacion'></div>
        <PediatricaUno/>
        {/* <div className='separacion'></div>
        <NeurologicaDos/>
        <div className='separacion'></div>
        <NeurologicaTres/>
        <div className='separacion'></div> */}

        </Layout>
  )
}

export default pediatrica