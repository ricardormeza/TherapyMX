import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Quienes from '../components/Quienes'
import InicioUno from '../components/inicio/InicioUno'
import InicioDos from '../components/inicio/InicioDos'
import InicioTres from '../components/inicio/InicioTres'
import Botones from '../components/Botones'
import Lesiones from '../components/conocenos/Lesiones'
import BannerContacto from '../components/BannerContacto'
import RedeSociales from '../components/conocenos/RedeSociales'
import "swiper/css/bundle";



export default function Home() {
  return (
    <Layout
        pagina="Clínica de fisioterapia en CDMX"
        pageMeta={{
          
          description: 'Clínica de fisioterapia en Ciudad de México donde te ayudamos en tu recuperación. Atendemos desde un dolor agudo hasta padecimientos crónicos.'
        }}
      >
        <main className={styles.InicioImagen}>
          <div className={styles.InicioHeadGrdiContainer}>
            <div className={styles.InicioGridText}>
              <h2 className="tituloT">Tu bienestar está en nuestras manos.</h2>
              <p>Somos <span>expertos en tratamientos de fisioterapia.</span> </p>
              <div className={styles.BtnContacto}>
                <Link href='https://wa.me/525511775805'>
                  <a title='Enviar mensaje por Whatsapp' className={styles.BtnContactoBtn}>Pedir informes</a> 
                </Link>
                <Link href='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'>
                  <a title='Agendar cita en Doctoralia' className={styles.BtnContactoBtn}>Agendar cita</a>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </main>
        <Quienes>
          <Botones/>
        </Quienes>
        
        <InicioUno/>
        <div className='separacion'></div>
        <InicioDos/>
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
