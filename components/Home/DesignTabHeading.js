
import React, { useEffect } from 'react'
import {motion,useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'


export default function DesignTabHeading({title,subtitle,span,reff,bool_reff,animate}) {

  // useEffect(()=>{
    
  // },[])


  return (
        <section class="designtab-heading">

          <motion.h1 className='myheading' ref={reff} animate={animate}> 
            {title} <span>{span}</span> 
          </motion.h1>

          {/* <p>
              {subtitle}
          </p> */}
        </section>
  )
}
