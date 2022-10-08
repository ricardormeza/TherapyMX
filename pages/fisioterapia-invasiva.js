import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Neurologica.module.css'
import InvasivaUno from '../components/invasiva/InvasivaUno'
import InvasivaDos from '../components/invasiva/InvasivaDos'
import InvasivaTres from '../components/invasiva/InvasivaTres'
import BannerTres from '../components/BannerTres'
import RedeSociales from '../components/conocenos/RedeSociales'

const Invasiva = () => {
  return (
    <Layout
        pagina='Fisioterapia-Pediatrica'
        >
        <div className={styles.HeaderInvasiva}></div>
        <div className={styles.btnPedirCita}>
        <Link href='https://wa.me/525511775805'>
          <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
        </Link>
        <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
            <a title='Agendar cita en Doctoralia'>Agendar cita</a>
        </Link>
        </div>
        <div className='separacion'></div>
        <InvasivaUno/>
        <div className='separacion'></div>
        <InvasivaDos/>
        <div className='separacion'></div>
        <InvasivaTres/>
        <div className='separacion'></div>
        <BannerTres/>
        <div className='separacion'></div>
        <RedeSociales/>
        </Layout>
  )
}

export default Invasiva