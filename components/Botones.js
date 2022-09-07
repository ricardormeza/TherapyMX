import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Botones = () => {
    return (
        <div className={styles.inicioUnobtns}>
            <div className={styles.bordeBtnInicio}>
                <div className={styles.lineaBtn}>
                    <Link href='/'>
                        <a className={styles.btninicio}>¿Quénes somos?</a> 
                    </Link>
                </div>
                <div className={styles.lineaBtnB}>
                    <Link href='/funciona'>
                        <a className={styles.btninicio}>¿Cómo funciona?</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Botones