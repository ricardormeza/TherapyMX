import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import ElectroterapiaUno from '../components/electroterapia/ElectroterapiaUno'
import ElectroterapiaDos from '../components/electroterapia/ElectroterapiaDos'
import ElectroterapiaTres from '../components/electroterapia/ElectroterapiaTres'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const electroterapia = () => {
    return (
        <Layout
            pagina='Electroterapia'
            >
            <div className={styles.HeaderElectroterapia}></div>
            <div className={styles.btnPedirCita}>
            <Link href='https://wa.me/525511775805'>
            <a title='Enviar mensaje por Whatsapp'>Pedir informes |</a>
            </Link>
            <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
                <a title='Agendar cita en Doctoralia'>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <ElectroterapiaUno/>
            <div className='separacion'></div>
            <ElectroterapiaDos/>
            <div className='separacion'></div>
            <ElectroterapiaTres/>
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default electroterapia