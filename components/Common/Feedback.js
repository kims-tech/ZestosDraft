import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Feedback = ({ bgColor, bgImage }) => {

  const data = [
    {
      name:"temp",
      relation:"Restaurant Owner",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    },
    {
      name:"temp",
      relation:"Restaurant Owner",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    },
    {
      name:"temp",
      relation:"user",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    },
    {
      name:"temp",
      relation:"Restaurant Owner",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    },
    {
      name:"temp",
      relation:"user",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    },
    {
      name:"temp",
      relation:"Restaurant Owner",
      feedback:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus viverra maecenas accumsan.",
      img:"images/user1.jpg"
    }
  ]

  //heading view point and animation hook
  const [headingRef,headingInview] = useInView({threshold:0.1})
  const headingAnimation = useAnimation();

  //paragraph view point 7 animation
  const [paraRef,paraInview] = useInView({threshold:0.1})
  const paraAnimation = useAnimation();

  //feedbox view and animation


  useEffect(()=>{

      //heading animation
      if(headingInview){
        headingAnimation.start({
          opacity:1,
          y:'0',
          transition:{
            ease: "linear",
            duration:0.9
          }
        })
      }else{
        headingAnimation.start({
          opacity:0,
          y:'20vh',
        })
      }

      //paragraph animation
      if(paraInview){
        paraAnimation.start({
          opacity:1,
          x:'0',
          transition:{
            ease: "linear",
            duration:0.9
          }
        })
      }else{
        paraAnimation.start({
          opacity:0,
          x:'20vw',
        })
      }
  },[headingInview])


  return (
    <>
      <div className={`feedback-area ${bgImage} ${bgColor} ptb-100`}>
        <div className="container">
          <div className="section-title">
            <motion.h2 ref={headingRef} animate={headingAnimation}>Users Feedback About Us</motion.h2>
            {/* <motion.p ref={paraRef} animate={paraAnimation}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </motion.p> */}
          </div>

          <Swiper
            spaceBetween={25}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides"
          > 
            {
              data.map((detail,index)=>{
                return(
                  <SwiperSlide>
                    <div 
                      className="single-feedback-box" >
                      <div className="rating">
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                        <i className="bx bxs-star"></i>
                      </div>
                      <p>
                        {detail.feedback}
                      </p>
                      <div className="client-info">
                        <div className="d-flex align-items-center">
                          <img src={detail.img} alt="image" />
                          <div className="title">
                            <h3>{detail.name}</h3>
                            <span>{detail.relation}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Feedback;
