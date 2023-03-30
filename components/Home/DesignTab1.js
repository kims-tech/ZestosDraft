import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// import image1 from 'images/designTab/dt1.png'

// import 

export default function DesignTab1() {


  return (
    <>
        <section className="design-tab" id="1">

            <div className="text-section">
                {/* <h1>Create Memories</h1>
                <h2>Memories are encoded through repetition, emotion, and association, shaping our past and influencing our future.</h2> */}

                <div className="img-section hidden">
                    {/* <img src='images/designTab/dt1.png' alt='no img'/> */}
                    <Swiper
                        autoplay={{delay: 1500}}
                        effect='fade'
                        loop={true}
                        modules={[Pagination,Autoplay]}
                        >
                        <SwiperSlide>
                            <img src='images/designTab/dt1.png' alt='no img'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='images/designTab/dt2.png' alt='no img'/>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <p>
                    Zestos Living offers a warm and welcoming environment for 
                    guests to create lasting memories. Our comfortable living 
                    spaces, modern bathrooms, high-speed internet, healthy food 
                    options, and 24/7 security guarantee a comfortable and 
                    hassle-free stay. We organize various events and activities 
                    to encourage social interaction and community engagement. Our 
                    friendly and professional staff is always available to assist you. 
                    At Zestos Living, we are committed to providing an unforgettable 
                    experience that makes you feel at home and allows you to look back 
                    on your stay with fond memories.
                </p>
            </div>

            <div className="img-section">

                 {/* <img src='images/designTab/dt1.png' alt='no img'/>  */}

                <Swiper
                    autoplay={{delay: 1500}}
                    effect='fade'
                    modules={[Pagination,Autoplay]}
                    loop={true}>
                    <SwiperSlide>
                        <img src='images/designTab/dt1.png' alt='no img'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src='images/designTab/dt2.png' alt='no img'/>
                    </SwiperSlide>
                </Swiper>

                
            </div>
        </section>
    </>
  )
}

