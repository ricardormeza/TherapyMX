import React from 'react'
import styles from '../../styles/Home.module.css'
import inicioCuatro from './inicioCuatro'

const InicioTres = () => {
  
  return (
    <section className='contenedor'>
      <div className={`contenedor ${styles.InicioTresContenedor}`}>
        <div className={styles.inicioTresTexto}>
          <h3>Más de 2 mil pacientes atendidos.</h3>
          <h4>¡Conoce sus opiniones!</h4>
          <p>Para Up Therapy Mx la calidad es un valor escencial y cuidamos 
            hasta el más minimo detalle, por ello tu opinión es muy importante 
            para nosotros y queremos concerla.
          </p>
        </div>
        <div className={styles.Comentarios}>
        <div className={styles.ComentariosImg}></div>
            
          </div>
      </div>
    </section>
  )
}

export default InicioTres