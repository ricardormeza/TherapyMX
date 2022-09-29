import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/NoEncontrado.module.css'

const NoEncontrado = () => {
    return (
        <Layout
        pagina='Ups :( Página no encntrada'
        >
        <div className={styles.no_encontrado}>Página no encontrada :( </div>
        </Layout>
    )
}

export default NoEncontrado