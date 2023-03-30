
import React, { useEffect } from 'react';
import Link from 'next/link';

import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const EventsArea = () => {

    const data = [
        {
            des:"Internet of Things Forum Africa Exhibition 1",
            img:"https://media.istockphoto.com/id/466766434/vector/polygonal-professional-badminton-player.jpg?s=612x612&w=0&k=20&c=0k_PdhAnOePMkj-yQkv4kTldvN4o3xtGJhJZkA7LlQQ="
        },
        {
            des:"Internet of Things Forum Africa Exhibition 2",
            img:"images/events/events2.jpg"
        },
        {
            des:"Internet of Things Forum Africa Exhibition 3",
            img:"images/events/events3.jpg"
        },
    ]


    //heading view point and animation hook
    const [headingRef,headingInview] = useInView({threshold:0.1})
    const headingAnimation = useAnimation();

    //img view point and animation hook
    const [ImgRef,imgInview] = useInView({threshold:0.1})
    const imgAnimation = useAnimation();


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


        if(imgInview){
            imgAnimation.start({
            opacity:1,
            x:'0',
            transition:{
                ease: "linear",
                duration:0.7
            }
            })
        }else{
            imgAnimation.start({
            opacity:0,
            x:'-20vw',
            })
        }
    },[headingInview,imgInview])

  return (
    <>
      <section className='events-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <motion.h2 ref={headingRef} animate={headingAnimation}>Beat the stress in <span>Zestos</span></motion.h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p> */}
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='events-box'>
                <motion.img src='images/events/game_count.gif' alt='image'/>
                <div className='content'>
                  <h3>Global Robotics Summit & Festival</h3>
                  {/* <span className='meta'>
                    <i className='flaticon-calendar'></i> Thu, Jul 30, 11:30 am -
                    10:00 pm
                  </span> */}
                </div>
                <Link href='/single-events'>
                  <a className='link-btn'></a>
                </Link>
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='events-item-list'>

                {
                    data.map((detail,index)=>{
                        return(
                            <motion.div className='single-events-box' key={detail.des}>
                                <div className='row m-0'>
                                    <div className='col-lg-4 col-md-4 p-0'>
                                    <div className= {`image bg-${index+1}`}>
                                        {/* <img src={detail.img} alt='image' /> */}
                                        <Link href='/single-events'>
                                        <a className='link-btn'></a>
                                        </Link>
                                    </div>
                                    </div>

                                    <div className='col-lg-8 col-md-8 p-0'>
                                    <div className='content'>
                                        <h3>
                                        <Link href='/single-events'>
                                            <a>
                                                {detail.des}
                                            </a>
                                        </Link>
                                        </h3>
                                    </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsArea;
