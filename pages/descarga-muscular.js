import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import DescargaUno from '../components/descargaMuscular/DescargaUno'
import DescargaDos from '../components/descargaMuscular/DescargaDos'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const DescargaMuscular = () => {
    return (
        <Layout
            pagina='Descarga Muscular'
            >
            <div className={styles.HeaderDescarga}></div>
            <div className={styles.btnPedirCita}>
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
            </div>
            <div className='separacion'></div>
            <DescargaUno/>
            <div className='separacion'></div>
            <DescargaDos/>
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default DescargaMuscular