import React from 'react'
import { motion } from 'framer-motion'
const Login = () => {
  return (
    <motion.div className='login'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.1}}}
    >
    <section className='form-component'>
      <form className='form' />
      <div className='form-container'>
      <label className='label' htmlFor="res-mail" aria-label="Enter Mail Id" >Enter UserName</label>
      <input className='input' type="text" id="res-mail" placeholder="UserName" />
      <label className='label' htmlFor="res-password" aria-label="Enter Mail Id" >Enter Password</label>
      <input className='input' type="text" id="res-password" placeholder="Password" />
      <button className='login-btn'>Login</button>
      </div>
    </section>
    </motion.div>
  )
}

export default Login
