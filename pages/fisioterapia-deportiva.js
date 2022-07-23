import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'

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
       
        </Layout>
  )
}

export default Deportiva