import React from 'react'
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
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
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