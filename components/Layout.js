import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>Up Therapy MX - {pagina}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content='Sitio web de venta de guitarras' />
            <link rel="icon" href='/img/UpTherapy-ico.ico' />
        </Head>
        <Header/>
        {children}
        <Footer/>
        
    </div>
  )
}

export default Layout