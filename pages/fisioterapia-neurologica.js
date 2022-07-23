import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import NeurologicaUno from '../components/neurologica/NeurologicaUno'
import NeurologicaDos from '../components/neurologica/NeurologicaDos'
import NeurologicaTres from '../components/neurologica/NeurologicaTres'

const neurologica = () => {
    return (
        <Layout
        pagina='Fisioterapia-Neurológica'
        >
        <div className={styles.HeaderNeurologica}></div>
        <div className={styles.btnPedirCita}>
            <a>Pedir informes |</a>
            <a>Agendar cita</a>
        </div>
        <div className='separacion'></div>
        <NeurologicaUno/>
        <div className='separacion'></div>
        <NeurologicaDos/>
        <div className='separacion'></div>
        <NeurologicaTres/>
        <div className='separacion'></div>

        </Layout>
    )
}

export default neurologica