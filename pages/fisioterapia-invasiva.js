import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'

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
        
        <div className='separacion'></div>
        </Layout>
  )
}

export default Invasiva