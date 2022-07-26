import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import DeportivaUno from '../components/deportiva/DeportivaUno'
import DeportivoDos from '../components/deportiva/DeportivoDos'
import DeportivoTres from '../components/deportiva/DeportivoTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const Deportiva = () => {
  return (
    <Layout
        pagina='Fisioterapia-Deportiva'
        >
        <div className={styles.HeaderDeportiva}></div>
        <div className={styles.btnPedirCita}>
        <Link href='https://wa.me/525511775805'>
          <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
        </Link>
        <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
            <a title='Agendar cita en Doctoralia'>Agendar cita</a>
        </Link>
        </div>
        <div className='separacion'></div>
        <DeportivaUno/>
        <div className='separacion'></div>
        <DeportivoDos/>
        <div className='separacion'></div>
        <DeportivoTres/>
        <div className='separacion'></div>
        <BannerTres/>
        <div className='separacion'></div>
        <RedeSociales/>
        </Layout>
  )
}

export default Deportiva