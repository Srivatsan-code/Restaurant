import React from 'react'
import {useParams} from 'react-router-dom'
import gif from './assets/gif.gif'
import { motion } from 'framer-motion'
const ConfirmedBooking = () => {
  let { date,time} = useParams();
  return (
    <motion.main className='endPage'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.1}}}
    >
      <img className='gif' src={gif} alt="gif"/>
      <section className='msg'>
      <h1>Your Booking confirmed !!!</h1>
      <h1>THANKS FOR CHOOSING OUR RESTAURANT</h1>
      <h2>See you on <span>{date}</span> at <span>{time}</span></h2>
      </section>
    </motion.main>
  )
}

export default ConfirmedBooking;
