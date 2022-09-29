import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import NeurologicaUno from '../components/neurologica/NeurologicaUno'
import NeurologicaDos from '../components/neurologica/NeurologicaDos'
import NeurologicaTres from '../components/neurologica/NeurologicaTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const neurologica = () => {
    
    return (
        <Layout
        pagina='Fisioterapia-Neurológica'
        pageMeta={{
            description: 'Clínica de fisioterapia en CDMX con especialidad en la fisioterapia neurológicaaaaa.'
            }}
        >
        <div className={styles.HeaderNeurologica}></div>
        <div className={styles.btnPedirCita}>
            <Link href='tel:+525547576392'>
                <a>Pedir informes |</a>
            </Link>
            <Link href='https://wa.me/525511775805'>
                <a>Agendar cita</a>
            </Link>
        </div>
        <div className='separacion'></div>
        <NeurologicaUno/>
        <div className='separacion'></div>
        <NeurologicaDos/>
        <div className='separacion'></div>
        <NeurologicaTres/>
        <div className='separacion'></div>
        <BannerTres/>
        <div className='separacion'></div>
        <RedeSociales/>
        <div className='separacion'></div>
        </Layout>
    )
}

export default neurologica