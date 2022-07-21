import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const contacto = () => {
    return (
        <Layout
            pagina='Contacto'
            >
            <main>
                <h2>Contacto</h2>

                <div>
                {/* <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="imagen nosotros" /> */}
                <div>
                    <h3>CONTACTO WEY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lorem lectus, convallis a risus ultrices, vulputate facilisis enim.  Vestibulum auctor, augue ac vulputate commodo, mauris justo venenatis risus, non sodales velit lectus nec augue. Maecenas vitae nisl sed lorem pharetra auctor et eu dolor. Curabitur felis orci, ultricies in maximus in, auctor a arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id bibendum urna. </p>
                </div>
                </div>
            </main>

            </Layout>
    )
}

export default contacto