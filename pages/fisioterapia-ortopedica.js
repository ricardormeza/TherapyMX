import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import OrtopedicaUno from '../components/ortopedica/OrtopedicaUno'
import OrtopedicaDos from '../components/ortopedica/OrtopedicaDos'
import OrtopedicaTres from '../components/ortopedica/OrtopedicaTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const Ortopedica = () => {
    return (
        <Layout
            pagina='Fisioterapia-Ortopédica'
            >
            <div className={styles.HeaderOrtopedica}></div>
            <div className={styles.btnPedirCita}>
            <Link href='https://wa.me/525511775805'>
            <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
            </Link>
            <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
                <a title='Agendar cita en Doctoralia'>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <OrtopedicaUno/>
            <div className='separacion'></div>
            <OrtopedicaDos/>
            <div className='separacion'></div>
            <OrtopedicaTres/>
            <div className='separacion'></div>
            <BannerTres/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default Ortopedica