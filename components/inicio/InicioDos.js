import React, { useRef, useState } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "swiper/css/bundle";
import styles from '../../styles/Carousel.module.css'


const InicioDos = () => {
    return (
        <>
            <div className={`contenedor ${styles.contenedorCarousel}`}>
            <h2>Nuestras Especialidades</h2>
                <Swiper
                    breakpoints={{
                        // when window width is >= 640px
                        640: {
                            width: 640,
                            slidesPerView: 1,
                        },
                        // when window width is >= 768px
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                        
                    }}
                    // slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgNeuralgica}>
                            </div>
                            <Link href='/fisioterapia-neurologica'>
                                <a>Fisioterapia Neurológica</a>
                            </Link>
                        </div>
                            <br/>
                            <br/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgPediatrica}>
                            </div>
                            <Link href='/fisioterapia-pediatrica'>
                                <a>Fisioterapia Pediátrica</a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgInvasiva}>
                            </div>
                            <Link href='/fisioterapia-invasiva'>
                                <a>Fisioterapia Invasiva</a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgDeportiva}>
                            </div>
                            <Link href='/fisioterapia-deportiva'>
                                <a>Fisioterapia Deportiva</a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgEcografica}>
                            </div>
                            <Link href='/fisioterapia-ecografica'>
                                <a>Fisioterapia Ecográfica</a>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.CardCarousel}>
                            <div className={styles.ImgOrtopedica}>
                            </div>
                            <Link href='/fisioterapia-ortopedica'>
                                <a>Fisioterapia Ortopédica</a>
                            </Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </>
    )
}

export default InicioDos