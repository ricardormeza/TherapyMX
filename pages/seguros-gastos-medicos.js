import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/AvisoPrivacidad.module.css'
import GastosUno from '../components/gastosMedicos/GastosUno'
import GastosDos from '../components/gastosMedicos/GastosDos'
import RedeSociales from '../components/conocenos/RedeSociales'
import GastrosTres from '../components/gastosMedicos/GastrosTres'
import GastosCuatro from '../components/gastosMedicos/GastosCuatro'
import GastosCinco from '../components/gastosMedicos/GastosCinco'
import GastosSeis from '../components/gastosMedicos/GastosSeis'


const segurosGastosMedicos = () => {
  return (
    <Layout
    pagina='Seguros de gastos medicos'
    >
    <div className={styles.encabezado}>
        <h1>Seguro de Gastos Médicos</h1>
    </div>
    <div className={styles.imagenGastosMedicos}></div>
    <GastosUno/>
    <br/>
    <GastosDos/>
    <GastrosTres/>
    <br/>
    <GastosCuatro/>
    <br/>
    <GastosCinco/>
    <br/>
    <GastosSeis/>
    <br/>
    <RedeSociales/>
    <br/>
    </Layout>
  )
}

export default segurosGastosMedicos