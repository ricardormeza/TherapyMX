import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import PediatricaUno from '../components/pediatrica/PediatricaUno'
import PediatricaDos from '../components/pediatrica/PediatricaDos'
import PediatricaTres from '../components/pediatrica/PediatricaTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const pediatrica = () => {
  return (
    <Layout
        pagina='Fisioterapia-Pediatrica'
        >
        <div className={styles.HeaderPediatrica}></div>
        <div className={styles.btnPedirCita}>
        <Link href='https://wa.me/525511775805'>
            <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
        </Link>
        <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
            <a title='Agendar cita en Doctoralia'>Agendar cita</a>
        </Link>
        </div>
        <div className='separacion'></div>
        <PediatricaUno/>
        <div className='separacion'></div>
        <PediatricaDos/>
        <div className='separacion'></div>
        <PediatricaTres/>
        <div className='separacion'></div>
        <BannerTres/>
        <div className='separacion'></div>
        <RedeSociales/>
        </Layout>
  )
}

export default pediatrica