import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Redes.module.css'
import {TiSocialTwitterCircular} from 'react-icons/ti'
import { RiFacebookCircleLine,
        RiInstagramLine,
        RiYoutubeLine,
        RiWhatsappLine } from 'react-icons/ri'

const RedeSociales = () => {
  return (
    <section className='contenedor'>
        <div className={styles.redesContenedor}>
            <Link href='https://www.facebook.com/UpTherapyMX'>
                <a className={styles.redesEnlaces}
                aria-label='perfil de facebook de Up Therapy MX'
                target="_blank"
                ><RiFacebookCircleLine/></a>
            </Link>
            <Link href='https://www.instagram.com/uptherapymx/'>
                <a className={styles.redesEnlaces}
                    aria-label='perfil de instagram de Up Therapy MX'
                    target="_blank"
                ><RiInstagramLine/></a>
            </Link>
            <Link href='https://twitter.com'>
                <a className={styles.redesEnlaces}
                aria-label='perfil de TWITTER de Up Therapy MX'
                target="_blank"
                ><TiSocialTwitterCircular/></a>
            </Link>
            <Link href='https://www.youtube.com/channel/UCamOAzIoFj8la9ekhSlqsLw'>
                <a className={styles.redesEnlaces}
                aria-label='canal de Youtube de Up Therapy MX'
                target="_blank"
                ><RiYoutubeLine/></a>
            </Link>
            <Link href='https://wa.me/525511775805'>
                <a className={styles.redesEnlaces}
                aria-label='enlace de citas de whatsapp de Up Therapy MX'
                target="_blank"
                ><RiWhatsappLine/></a>
            </Link>
        </div>
        <div className={styles.redesEnlacesGastosMedicos}>
            <Link href='/seguros-gastos-medicos'>
                <a className={styles.redesEnlaces}
                aria-label='enlace a sección de seguro de gastos medicos de Up Therapy MX'
                >Seguro de Gastos Médicos </a>
            </Link>
            <Link href='/aviso-privacidad'>
                <a className={styles.redesEnlaces}
                aria-label='enlace a sección de aviso de privacidad Up Therapy MX'
                >/ aviso de privacidad</a>
            </Link>
        </div>
        <br/>
    </section>
  )
}

export default RedeSociales