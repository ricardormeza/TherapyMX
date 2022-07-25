import React from 'react'
import styles from '../../styles/Contacto.module.css'

const ContactoUno = () => {
    return (
        <main className='contenedor'>
            <div className={`contenedor ${styles.ContactoGrid}`}>
                <div className={styles.ContactoTexto}>
                    <h1>Nos encantaría <span>saber más</span> acerca de usted.</h1>
                    <p>Completa el siguiente formulario para agendar una cita y un miembro de 
                        nuestro equipo se pondrá en contacto contigo. Nuestros terapeutas se 
                        certifican constantement con la intención de ofrecerte los mejores 
                        servicios fisioterapéuticos, así como las últimas innovaciones en el área.
                    </p>
                    <br/>
                    <form className={styles.formulario}>
                        <input className={styles.input} type="text" name='name' placeholder='Nombre completo' required />
                        <input className={styles.input} type="email" name='email' placeholder='E-mail' required />
                        <input className={styles.input} type="tel" name='phone' placeholder='Número' required />
                        <input className={styles.input} type="date" name='date' />
                        {/* <input className={styles.input} type="datetime" name='new_year' /> */}
                        <textarea className={styles.textarea} name="message" id="" rows="3" placeholder='Motivos de cita' required></textarea>
                    </form>
                        <button type='submit' className={styles.btnContacto}>Agendar</button>
                </div>
                <div className={styles.contactoImagen}></div>
            </div>
            
        </main>
    )
}

export default ContactoUno