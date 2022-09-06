import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
// import Link from 'next/link'
import styles from '../styles/ComoFunciona.module.css'
import SeccionUno from '../components/comofunciona/SeccionUno'
import SeccionDos from '../components/comofunciona/SeccionDos'
import SeccionTres from '../components/comofunciona/SeccionTres'
import Lesiones from '../components/conocenos/Lesiones'
import RedeSociales from '../components/conocenos/RedeSociales'

const comofunciona = () => {
  return (
    <Layout
      pagina='como-funciona'
    >
      <div className={styles.header}></div>
      <h3 className={`contenedor ${styles.btnComoFunciona}`}>¿Cómo funciona?</h3>
      <SeccionUno/>
      <div className='separacion'></div>
      <SeccionDos />
      <div className='separacion'></div>
      <SeccionTres/>
      <div className='separacion'></div>
      <Lesiones/>
      <div className='separacion'></div>
      <RedeSociales/>
      <div className='separacion'></div>
    </Layout>
  )
}

export default comofunciona