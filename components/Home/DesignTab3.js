
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

export default function DesignTab3() {
  return (
    <>
        <section className="design-tab" id="dt2">
            <div className="img-section">

                <Swiper
                autoplay={{delay: 1500}}
                effect='fade'
                loop={true}
                modules={[Pagination,Autoplay]}>
                    <SwiperSlide>
                        <img src='images/designTab/dt3.png' alt='no img'/>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src='images/designTab/dt4.png' alt='no img'/>
                    </SwiperSlide>
                </Swiper>
            </div>


            <div className="text-section">
            
                {/* <h1>Start living your best life from <span>day one</span></h1> */}

                <div className="img-section hidden">

                    <Swiper
                    autoplay={{delay: 1500}}
                    effect='fade'
                    loop={true}
                    modules={[Pagination,Autoplay]}>

                        <SwiperSlide>
                            <img src='images/designTab/dt3.png' alt='no img'/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <img src='images/designTab/dt4.png' alt='no img'/>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <p>
                    Zestos Living with Room offers free, diverse food options made with fresh ingredients and prepared with care. We cater to different tastes and dietary requirements, and guests can enjoy their meals in our cozy dining area or take them to go. We take care of your food needs so that you can focus on enjoying your stay with us. Come and experience our delicious food options today!
                </p>
            </div>
        </section>
    </>
  )
}
