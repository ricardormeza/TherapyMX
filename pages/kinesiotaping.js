import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Presoterapia.module.css'
import KinesiotapingUno from '../components/kinesiotaping/KinesiotapingUno'
import KinestapingDos from '../components/kinesiotaping/KinestapingDos'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const kinesiotaping = () => {
    return (
        <Layout
            pagina='Kinesiotaping'
            >
            <div className={styles.HeaderKinesiotaping}></div>
            <div className={styles.btnPedirCita}>
            <Link href='tel:+525547576392'>
            <a>Pedir informes |</a>
            </Link>
            <Link href='https://wa.me/525511775805'>
                <a>Agendar cita</a>
            </Link>
            </div>
            <div className='separacion'></div>
            <KinesiotapingUno/>
            <div className='separacion'></div>
            <KinestapingDos/>
            <div className='separacion'></div>
            
            <div className='separacion'></div>
            <Lesiones/>
            <div className='separacion'></div>
            <RedeSociales/>
        </Layout>
    )
}

export default kinesiotaping