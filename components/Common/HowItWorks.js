import React, { useEffect } from 'react';
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const HowItWorks = ({bgColor}) => {

  //heading view point and animation hook
  const [headingRef,headingInview] = useInView({threshold:0.1})
  const headingAnimation = useAnimation();


  useEffect(()=>{
      if(headingInview){
        headingAnimation.start({
          opacity:1,
          y:'0',
          transition:{
            ease: "linear",
            duration:0.7
          }
        })
      }else{
        headingAnimation.start({
          opacity:0,
          y:'20vh',
        })
      }
  },[headingInview])



  return (
    <>
      <section className={`how-it-works-area pt-100 pb-70 ${bgColor}`}>
        <div className='container'>
          <div className='section-title'>
            <motion.h2 ref={headingRef} animate={headingAnimation}>How to become <span>Zestian</span></motion.h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p> */}
          </div>

          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-placeholder'></i>
                </div>
                <h3>Select a Location</h3>
                {/* <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p> */}
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-support-1'></i>
                </div>
                <h3>Schedule a visite</h3>
                {/* <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p> */}
              </div>
            </div>

            <div className='col-lg-4 col-md-6 col-sm-6'>
              <div className='single-how-it-works-box'>
                <div className='icon'>
                  <i className='flaticon-tick'></i>
                </div>
                <h3>Confirm your place</h3>
                {/* <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
