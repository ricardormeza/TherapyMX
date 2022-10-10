import React from 'react'
import Link from 'next/link'
import Image from 'next/future/image'
import Script from 'next/script'

export default function doctoralia() {
  return (
      <>
    <section>
        <div>
        <Script strategy="lazyOnload" 
                    src='https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico'
                />
            <Link href="https://www.doctoralia.com.mx/ivan-hernandez-peralta/fisioterapeuta/ciudad-de-mexico">
                <a id="zl-url" 
                className="zl-url"  rel="nofollow" 
                data-zlw-doctor="ivan-hernandez-peralta" 
                data-zlw-type="big_with_calendar" 
                data-zlw-opinion="false" 
                data-zlw-hide-branding="true">Iván Hernández Peralta - Doctoralia.com.mx
                </a>
                
                <Script strategy="lazyOnload"
                    id="zl-url">
                    {`!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");`}
                </Script>
                {/* <script>!function($_x,_s,id){var js,fjs=$_x.getElementsByTagName(_s)[0];if(!$_x.getElementById(id)){js = $_x.createElement(_s);js.id = id;js.src = "//platform.docplanner.com/js/widget.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","zl-widget-s");</script> */}
                
            </Link>
        </div>
    </section>
    </>
  )
}
