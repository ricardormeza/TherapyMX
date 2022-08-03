import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import InicioUno from '../components/inicio/InicioUno'
import InicioDos from '../components/inicio/InicioDos'
import InicioTres from '../components/inicio/InicioTres'
import Lesiones from '../components/conocenos/Lesiones'
import BannerContacto from '../components/BannerContacto'
import RedeSociales from '../components/conocenos/RedeSociales'
import "swiper/css/bundle";



export default function Home() {
  return (
    <Layout
        pagina="Inicio"
      >
        <main className={styles.InicioImagen}>
          <div className={styles.InicioHeadGrdiContainer}>
            <div className={styles.InicioGridText}>
              <h2>Tu bienestar está en nuestras manos.</h2>
              <p>Somos <span>expertos en tratamientos de fisioterapia.</span> </p>
              <div className={styles.BtnContacto}>
                <Link href='/contacto'>
                  <a className={styles.BtnContactoBtn}>Pedir informes</a> 
                </Link>
                <Link href='https://wa.me/525511775805'>
                  <a className={styles.BtnContactoBtn}>Agendar cita</a>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </main>
        {/* <div className='separacion'></div> */}
        <InicioUno/>
        <div className='separacion'></div>
        <InicioDos/>
        <div className='separacion'></div>
        
          
          <div className='separacion'></div>
          <BannerContacto/>
          <div className='separacion'></div>
          <InicioTres/>
          
          <div className='separacion'></div>
          <RedeSociales/>
          <div className='separacion'></div>

      </Layout>
  )
}
