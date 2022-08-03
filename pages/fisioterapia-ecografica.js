import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import EcograficaUno from '../components/ecografica/EcograficaUno'
import EcograficaDos from '../components/ecografica/EcograficaDos'
import EcograficaTres from '../components/ecografica/EcograficaTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const Ecografica = () => {
    return (
        <Layout
            pagina='Fisioterapia-Ecográfica'
            >
            <div className={styles.HeaderEcografica}></div>
            <div className={styles.btnPedirCita}>
            <Link href='tel:+525547576392'>
            <a>Pedir informes |</a>
            </Link>
            <Link href='https://wa.me/525511775805'>
                <a>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <EcograficaUno/>
            <div className='separacion'></div>
            <EcograficaDos/>
            <div className='separacion'></div>
            <EcograficaTres/>
            <div className='separacion'></div>
            <BannerTres/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default Ecografica