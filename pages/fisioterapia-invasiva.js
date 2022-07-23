import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import InvasivaUno from '../components/invasiva/InvasivaUno'
import InvasivaDos from '../components/invasiva/InvasivaDos'
import InvasivaTres from '../components/invasiva/InvasivaTres'

const Invasiva = () => {
  return (
    <Layout
        pagina='Fisioterapia-Pediatrica'
        >
        <div className={styles.HeaderInvasiva}></div>
        <div className={styles.btnPedirCita}>
            <a>Pedir informes |</a>
            <a>Agendar cita</a>
        </div>
        <div className='separacion'></div>
        <InvasivaUno/>
        <div className='separacion'></div>
        <InvasivaDos/>
        <div className='separacion'></div>
        <InvasivaTres/>
        <div className='separacion'></div>
        </Layout>
  )
}

export default Invasiva