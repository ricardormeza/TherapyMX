import React from 'react'
// import styles from '../styles/Contacto.module.css'
import Layout from '../components/Layout'
import ContactoUno from '../components/contacto/ContactoUno'
import BannerContacto from '../components/BannerContacto'
import RedeSociales from '../components/conocenos/RedeSociales'

const contacto = () => {
    return (
        <Layout
            pagina='Contacto'
            >
            <ContactoUno/>
            <div className='separacion'></div>
            <div className='separacion'></div>
            <BannerContacto/>
            <div className='separacion'></div>
            <RedeSociales/>
            <div className='separacion'></div>
        </Layout>
    )
}

export default contacto