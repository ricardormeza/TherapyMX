import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import BiomecanicaUno from '../components/biomecanica/BiomecanicaUno'
import BiomecanicaCuatro from '../components/biomecanica/BiomecanicaCuatro'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const biomecanico = () => {
    return (
        <Layout
            pagina='Analisis Biomecanico'
            >
            <div className={styles.HeaderBiomecanico}></div>
            <div className={styles.btnPedirCita}>
            <Link href='tel:+525547576392'>
            <a>Pedir informes |</a>
            </Link>
            <Link href='https://wa.me/525511775805'>
                <a>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <BiomecanicaUno/>
            <div className='separacion'></div>
            <BiomecanicaCuatro/>
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default biomecanico