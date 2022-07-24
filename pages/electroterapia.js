import React from 'react'
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
                <a>Pedir informes |</a>
                <a>Agendar cita</a>
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