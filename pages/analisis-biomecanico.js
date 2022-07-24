import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'

import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const biomecanico = () => {
    return (
        <Layout
            pagina='Electroterapia'
            >
            <div className={styles.HeaderBiomecanico}></div>
            <div className={styles.btnPedirCita}>
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
            </div>
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default biomecanico