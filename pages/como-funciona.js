import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'

const comofunciona = () => {
  return (
    <Layout
      pagina='Como funciona'
    >
      
      <main>
        <h2>Como funciona</h2>

        <div>
          {/* <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt="imagen nosotros" /> */}
          <div>
            <p>Fusce luctus, quam non vestibulum fermentum, felis enim venenatis lorem, vitae hendrerit turpis felis id leo. In elementum nisl ac orci aliquet, eget vulputate augue hendrerit.  id porttitor turpis tincidunt. Nunc nec mauris odio. Aenean elementum tempus viverra. Maecenas pellentesque, tellus quis tristique vehicula, nunc tellus commodo dolor, vel ultricies massa dui at purus. Pellentesque feugiat metus erat, eget lobortis ipsum pharetra ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus eros lorem, aliquet vitae libero eget, suscipit imperdiet odio. Nunc consequat turpis a dui lobortis elementum. Nulla hendrerit ex malesuada, mollis nulla eget, scelerisque lorem. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed lorem lectus, convallis a risus ultrices, vulputate facilisis enim.  Vestibulum auctor, augue ac vulputate commodo, mauris justo venenatis risus, non sodales velit lectus nec augue. Maecenas vitae nisl sed lorem pharetra auctor et eu dolor. Curabitur felis orci, ultricies in maximus in, auctor a arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis id bibendum urna. </p>
          </div>
        </div>
      </main>

    </Layout>
  )
}

export default comofunciona