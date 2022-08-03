import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Quienes from '../components/Quienes'
import styles from '../styles/Home.module.css'
import InicioUno from '../components/inicio/InicioUno'
import InicioDos from '../components/inicio/InicioDos'
import InicioTres from '../components/inicio/InicioTres'
import Botones from '../components/Botones'
import Lesiones from '../components/conocenos/Lesiones'
import BannerContacto from '../components/BannerContacto'
import RedeSociales from '../components/conocenos/RedeSociales'

const uno = () => {
    return (
        <Layout
            pagina="Inicio cómo funciona"
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
            <Botones/>
            <Quienes>
                <section className='contenedor'>
                    <div className='separacion'></div>
                    <div className={styles.InicioSeccionUno}>
                        <div className={styles.QuienesSomosContenedor}>
                            <div className={styles.QuieneSomosImagen}>
                                <div className={styles.ComoFuncionaImg}></div>
                            </div>
                            <div className={styles.QuienesSomosTexto}>
                                <h3>¿Cómo funciona?</h3>
                                <p>Up Therapy MX busca realizar una rehabilitación de calidad en el menor número 
                                    de sesiones siendo efectiva para aquellas personas que han sufrido una cirugía, 
                                    traumatismo o reactivación de una patología. Se realizan sesiones personalizadas con 
                                    un tratamiento individualizado el cual se combina con electroterapia, terapia manual, 
                                    terapia invasiva y técnicas más innovadoras en el área.
                                </p>
                                <br />
                                
                                <br />
                                <Link href='/como-funciona'>
                                    <a>Leer más</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Quienes>
            {/* <InicioUno/> */}
            <div className='separacion'></div>
            <InicioDos />
            <div className='separacion'></div>


            <div className='separacion'></div>
            <Lesiones />
            <div className='separacion'></div>
            <InicioTres />

            <div className='separacion'></div>
            <RedeSociales />
            <div className='separacion'></div>
        </Layout>
    )
}

export default uno