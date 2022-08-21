import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/AvisoPrivacidad.module.css'
import RedeSociales from '../components/conocenos/RedeSociales'

const avisoPrivacidad = () => {
    return (
        <Layout
        pagina='aviso-privacidad'
        >
            <div className={styles.encabezado}>
                    <h1>Aviso de Privacidad</h1>
            </div>
            <br/>
            <section className='contenedor'>
                <div className={styles.contenedorTexto}>
                    <p className={styles.parrafos}>El presente aviso de privacidad rige el tratamiento de los datos personales por parte 
                        de Up Therapy Mx S.A. de C.V. Con DOMICILIO EN CALZADA MARIANO ESCOBEDO NÚM. 543, 
                        CONSULTORIO 203, C.P. 11560, DELEGACIÓN MIGUEL HIDALGO, COL. POLANCO, EN LA 
                        CIUDAD DE MÉXICO, en los términos previstos por la Ley Federal de Protección de Datos 
                        Personales en posesión de los particulares(la Ley) y su Reglamento. Por lo que es 
                        responsable de recabar sus datos personales, del uso que se le de a los mismos y de 
                        su protección.</p>
                    <br/>
                    <p className={styles.parrafos}>I. Información que se recolecta y mecanismos para su recolección.</p>
                    <br/>
                    <p className={styles.parrafos}>
                        UP THERAPY MX trata sus datos personales, es decir, aquella información que puede identificarle 
                        razonablemente, y que puede constar en diversos documentos, sean impresos o en forma digital. 
                        Su información personal será utilizada para proveer los servicios médicos y de rehabilitación que 
                        ha solicitado, informarle sobre cambios en los mismos y evaluar la calidad del servicio 
                        que le brindamos. Los datos personales que se recolectan y/o contratan incluyen:
                    </p>
                    <br/>
                    <p className={styles.parrafos}>a{')'}Nombre y Apellidos;</p>
                    <p className={styles.parrafos}>b{')'}Fecha y lugar de nacimiento;</p>
                    <p className={styles.parrafos}>c{')'}Nacionalidad;</p>
                    <p className={styles.parrafos}>d{')'}Domicilio, sea particular, de trabajo, o fiscal;</p>
                    <p className={styles.parrafos}>e{')'}Dirección de correo electrónico, personal o del trabajo;</p>
                    <p className={styles.parrafos}>f{')'}Número telefónico, particular o del trabajo;</p>
                    <br/>
                    <p className={styles.parrafos}>Con la finalidad de cumplir con los servicios que ofrecemos, 
                    ademas de los datos personales que se recolectan, recabamos datos identificados como sensibles 
                    de acuerdo a la Ley Federal de Protección de Datos en Posesión de Particulares tales como:</p>
                    <br/>
                    <p className={styles.parrafos}>a{')'}Antecedentes médicos.</p>
                    <p className={styles.parrafos}>b{')'}Plan de tratamiento de fisioterapia.</p>
                    <p className={styles.parrafos}>c{')'}Resultado de la consulta.</p>
                    <p className={styles.parrafos}>d{')'}Imágenes ilustrativas.</p>
                    <p className={styles.parrafos}>e{')'}Imagenología.</p>
                    <p className={styles.parrafos}>f{')'}Información del expediente clínico.</p>
                    <p className={styles.parrafos}>g{')'}Diversos datos obtenidos durante el tratamiento.</p>
                    <br/>
                    <p className={styles.parrafos}>Los datos personales referidos con anterioridad le permitirán a 
                    Up Therapy MX cumplir con sus obligaciones administrativas, fiscales, civiles, mercantiles y 
                    a la autoridad competente en caso de que lo requiera. Los datos personales se recolectan mediante:</p>
                    <br/>
                    <p className={styles.parrafos}>1.- Directamente de su titular.</p>
                    <p className={styles.parrafos}>2.- Directamente de su representante legal, o tutor.</p>
                    <p className={styles.parrafos}>3.- Mediante nuestra página web www.uptherapy.com.mx/contacto</p>
                    <p className={styles.parrafos}>4.- Mediante nuestra hoja de contacto e historial clínico.</p>
                    <br/>
                    <p className={styles.parrafos}>II. Finalidades del tratamiento.</p>
                    <br/>
                    <p className={styles.parrafos}>a{')'}Proveer servicios médicos y de rehabilitación requeridos.</p>
                    <p className={styles.parrafos}>b{')'}Informar sobre nuevos productos o servicios que estén relacionados con el contratado por el cliente.</p>
                    <p className={styles.parrafos}>c{')'}Dar cumplimiento a obligaciones contraídas con nuestros clientes.</p>
                    <p className={styles.parrafos}>d{')'}Informar sobre cambios de nuestros productos o servicios.</p>
                    <p className={styles.parrafos}>e{')'}Evaluar la calidad del servicio.</p>
                    <p className={styles.parrafos}>f{')'}Cumplir con las disposiciones fiscales y administrativas, vigentes.</p>
                    <br/>
                    <p className={styles.parrafos}>III. Transferencias de datos.</p>
                    <br/>
                    <p className={styles.parrafos}>Up Therapy MX hace de su conocimiento que con el objetivo de 
                    cumplir con sus obligaciones contractuales, administrativas, fiscales, civiles y/o mercantiles, 
                    Up Therapy MX ha celebrado o celebrará diversos contratos con proveedores ubicados en territorio 
                    nacional, para que le suministren distintos servicios que permitan a Up Therapy MX llevar a cabo 
                    sus actividades en México, en el entendido de que dichos proveedores están obligados, a mantener la 
                    confidencialidad de los datos.</p>
                    <br/>
                    <p className={styles.parrafos}>Si usted no manifiesta su oposición para que sus datos personales sean 
                    transferidos, se entenderá que ha otorgado su consentimiento para ello.</p>
                    <br/>
                    <p className={styles.parrafos}>*No consiento que mis datos personales sean tranferidos en los términos 
                    que señala el presente aviso de privacidad.</p>
                    <br/>
                    <p className={styles.parrafos}>IV. Medidas para proteger los datos personales.</p>
                    <br/>
                    <p className={styles.parrafos}>Los datos personales tratados por Up Therapy MX se encuentran protegidos 
                    por medidas de seguridad administrativas, técnicas y físicas adecuadas contra el daño, pérdida, alteración, 
                    destrucción o uso, acceso o tratamiento no autorizado, de conformidad con lo dispuesto en la LFPDP y su Reglamento.</p>
                    <br/>
                    <p className={styles.parrafos}>V. Medios para hacer valer los Derechos ARCO.</p>
                    <br/>
                    <p className={styles.parrafos}>Usted tiene derecho de acceder, rectificar y cancelar sus datos personales, 
                    así como de oponerse al tratamiento de los mismos, o revocar el consentimiento que para tal fin nos haya 
                    otorgado, así como limitar su uso, divulgación o transferencia a través de los procedimientos que hemos implementado. 
                    Para conocer dichos procedimientos, sus requisitos y plazos, sírvase poner en contacto con nuestro 
                    Departamento de Protección de Datos Personales.</p>
                    <br/>
                    <p className={styles.parrafos}>Para oponerse al tratamiento de sus datos personales, usted deberá presentar 
                    su solicitud de oposición al Departamento de Protección de Datos, dentro de los siguientes cinco días hábiles a 
                    la fecha en la que fue puesto a su disposición el presente aviso, de no hacerlo, se entenderá por otorgado su consentimiento tácito</p>
                    <br/>
                    <p className={styles.parrafos}>La solicitud de acceso, rectificación, cancelación u oposición deberá contener y acompañar 
                    lo siguiente:</p>
                    <p className={styles.parrafos}>Nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud.</p>
                    <p className={styles.parrafos}>Documento que acredite su identidad o, en su caso, la representación legal del titular.</p>
                    <p className={styles.parrafos}>Descripción clara y precisa de los datos personales respecto de los que busca ejercer 
                    alguno de los derechos antes mencionados y, </p>
                    <br/>
                    <p className={styles.parrafos}>Cualquier otro elemento o documento que facilite la localización de los datos personales.</p>
                    <br/>
                    <p className={styles.parrafos}>VI. Departamento de Protección de Datos.</p>
                    <br/>
                    <p className={styles.parrafos}>Para cualquier consulta que tenga en torno a la protección de 
                    sus datos personales, sírvase contactar al Departamento de Protección de Datos Personales de 
                    Up Therapy Mx en el e-mail a: tuterapeuta@uptherapy.com.mx</p>
                    <br/>
                    <p className={styles.parrafos}>VII. Cambios al aviso de privacidad.</p>
                    <br/>
                    <p className={styles.parrafos}>Up Therapy MX se reseva el derecho de efectuar en cualquier momento 
                    modifiaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades lesgislativas 
                    o jurisprudenciales, políticas internas, nuevos requerimientos para la presentación u ofrecimiento de 
                    nuestros servicios o productos y prácticas del mercado.</p>
                    <br/>
                    <p className={styles.parrafos}>La fecha de la última actualización al presente aviso de privacidad:[1/Enero/2020].</p>
                </div>
            </section>
            <br/>
            <RedeSociales/>
            <br/>
        </Layout>
    )
}

export default avisoPrivacidad