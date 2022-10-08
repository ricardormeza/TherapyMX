import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import PresoterapiaUno from '../components/Presoterapia/PresoterapiaUno'
import PresoterapiaDos from '../components/Presoterapia/PresoterapiaDos'
import PresoterapiaTres from '../components/Presoterapia/PresoterapiaTres'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'
const Presoterapia = () => {
    return (
        <Layout
            pagina='Presoterapia'
            >
            <div className={styles.HeaderPresoterapia}></div>
            <div className={styles.btnPedirCita}>
            <Link href='https://wa.me/525511775805'>
            <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
            </Link>
            <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
                <a title='Agendar cita en Doctoralia'>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <PresoterapiaUno/>
            <div className='separacion'></div>
            <PresoterapiaDos/>
            <div className='separacion'></div>
            <PresoterapiaTres/>
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default Presoterapia