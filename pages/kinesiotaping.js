import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import KinesiotapingUno from '../components/kinesiotaping/KinesiotapingUno'
import KinestapingDos from '../components/kinesiotaping/KinestapingDos'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const kinesiotaping = () => {
    return (
        <Layout
            pagina='Kinesiotaping'
            >
            <div className={styles.HeaderKinesiotaping}></div>
            <div className={styles.btnPedirCita}>
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
            </div>
            <div className='separacion'></div>
            <KinesiotapingUno/>
            <div className='separacion'></div>
            <KinestapingDos/>
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default kinesiotaping