import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'

const Layout = ({children, pagina, pageMeta }) => {
  const router = useRouter();
  const meta = {
    title: `Up Therapy MX - ${pagina}`,
    description: 'Clínica de fisioterapia en Ciudad de México donde te ayudamos en tu recuperación. Atendemos desde un dolor agudo hasta padecimientos crónicos.',
    
    type: 'website',
    ...pageMeta,
  }
  return (
    <div>
        <Head>
            {/* <meta charset='utf-8'/> */}
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
            {/* <title>Up Therapy MX - {pagina}</title> */}
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            {/* <meta name="description" content='Clínica de fisioterapia en Ciudad de México 
            donde te ayudamos en tu recuperación. Atendemos desde un dolor agudo hasta 
            padecimientos crónicos. ' /> */}
    
            <link rel="icon" href='/img/UpTherapy-ico.ico' />
            <link rel="canonical" href={`https://www.uptherapy.com.mx/${pagina}.html`}/>
            <meta property="og:title" content={pagina} key="title" />

            <meta property='og:url' content={`https://www.uptherapy.com.mx${router.asPath}`}/>
            <meta property='og:type' content={meta.type} />
        </Head>
        <Header/>
        {children}
        <Footer/>
        
    </div>
  )
}

export default Layout