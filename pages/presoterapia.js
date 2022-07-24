import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import PresoterapiaUno from '../components/Presoterapia/PresoterapiaUno'
import PresoterapiaDos from '../components/Presoterapia/PresoterapiaDos'
import PresoterapiaTres from '../components/Presoterapia/PresoterapiaTres'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'
const Presoterapia = () => {
    return (
        <Layout
            pagina='Fisioterapia-Pediatrica'
            >
            <div className={styles.HeaderPresoterapia}></div>
            <div className={styles.btnPedirCita}>
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
            </div>
            <div className='separacion'></div>
            <PresoterapiaUno/>
            <div className='separacion'></div>
            <PresoterapiaDos/>
            <div className='separacion'></div>
            <PresoterapiaTres/>
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default Presoterapia