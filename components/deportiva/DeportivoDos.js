import React from 'react'
import styles from '../../styles/Neurologica.module.css'

const DeportivoDos = () => {
  return (
    <section className={`contenedor ${styles.Patologias}`}>
        <div className={styles.seccionPatologias}>
            <div className={`contenedor ${styles.PatologiasTexto}`}>
                <h2>¿Qué patologías se trabajan?</h2>
                <p>Entre las <span>lesiones más comunes</span> de la práctica deportiva se encuentran: 
                la contractura muscular, sobrecargas, contusiones, elongaciones, distensiones, roturas de 
                fibras, tendinopatías y esguinces. En ocasiones, es necesario llevar a cabo una recuperación 
                funcional que permita volver a la actividad deportiva, o a la vida cotidiana, tras 
                intervenciones quirúrgicas por lesiones traumáticas como fracturas, rotura total del 
                vientre muscular o plastias de tendón o ligamento.</p>
            </div>
            <div className={styles.imagenCheck}></div>
        </div>
    </section>
  )
}

export default DeportivoDos