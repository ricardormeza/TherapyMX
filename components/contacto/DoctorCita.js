import React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import Script from 'next/script'
import styles from '../../styles/Contacto.module.css'

export default function DoctorCita() {
  return (
    <>
        <section className={styles.DoctoraliaCita}>
        <div className={styles.DoctoraliaContenedor}>
            <Link href="https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico">
                <a id="zl-url" 
                className={styles.zlUurl}  rel="nofollow" 
                data-zlw-doctor="ivan-hernandez-peralta" 
                data-zlw-type="big_with_calendar" 
                data-zlw-opinion="false" 
                data-zlw-hide-branding="true"
                target='_blank'
                >
                    <Image src='/img/docplanner.webp' 
                    alt='Doctoralia Ivan Hernández Peralta'
                        width={300}
                        height={300}
                    />
                </a>
                

            </Link>
            {/* <Script strategy="afterInteractive" 
            id="zl-url"
                    src={`https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico`}
                    class="zl-url"
                    data-zlw-doctor="ivan-hernandez-peralta" 
                data-zlw-type={"big_with_calendar"} 
                data-zlw-opinion={"false"} 
                data-zlw-hide-branding={"true"}
                dangerouslySetInnerHTML={{
                    __html:`!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");`
                }}
                /> */}
                {/* <Script strategy="lazyOnload"
                    class={"zl-url"}
                    id="zl-url"
                    data-zlw-doctor="ivan-hernandez-peralta" 
                    data-zlw-type={"big_with_calendar"} 
                    data-zlw-opinion={"false"}
                    data-zlw-hide-branding={"true"}
                    >
                        
                    {`!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");`}
                </Script> */}
            </div>
        </section>
    </>
  )
}
