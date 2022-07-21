import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.Footer}>
        <div className={`contenedor ${styles.FooterTitulo}`}>
            <h2>Contáctanos</h2>
        </div>
        <div className={`contenedor ${styles.FooterContenedor}`}>
            <div className={`contenedor ${styles.FooterContenedorContacto}`}>
                <Link href='https://wa.me/525511775805'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    >E-mail: tufisio@uptherapy.com.mx</a>
                </Link>
                <Link href='https://wa.me/525511775805'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    >Teléfono: +52 554 757 6392 <strong>o</strong> +52 558 914 7374 </a>
                </Link>
                <Link href='https://wa.me/525511775805'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    >Whatsapp: +52 554 757 6392 <strong>o</strong> +52 551 177 5805 </a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    >Calzada Mariano Escobedo Ext. 543 Ciudad de México</a>
                </Link>
            </div>
            <div className={styles.FooterContenedorSecciones}>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Inicio</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>¿Quiénes somos?</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>¿Cómo funciona?</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Especialidades</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Fisioterapia a domicilio</span></a>
                </Link>
            </div>
            <div className={styles.FooterContenedorSecciones}>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Servicios e Innovaciones.</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Seguros de gastos médicos.</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Aviso de Privacidad.</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Masajes.</span></a>
                </Link>
                <Link href='/'>
                    <a className={styles.redesEnlaces}
                    aria-label='enlace de citas de whatsapp de Up Therapy MX'
                    target="_blank"
                    > {'>'} <span>Contacto.</span></a>
                </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer