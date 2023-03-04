import React from 'react'
import card1 from './assets/greek salad.jpg';
import card3 from "./assets/lemon dessert.jpg";
import { useNavigate} from "react-router-dom";
import burger from "./slides/burger.jpg"
import cake from "./slides/cake.jpg"
import cupcake from "./slides/cupcake.jpg"
import icecream from "./slides/ice-cream.jpg"
import pizza from "./slides/pizza.jpg"
import strawberry from "./slides/strawberry-dessert.jpg"
import fruit from "./slides/fruit-juice.jpg"
import {motion, LazyMotion, domAnimation, m } from "framer-motion"
const HomePage = () => {
  const navigate=useNavigate();
  const handle=()=>{
    navigate('/reservation')
  }
  return (
    <LazyMotion features={domAnimation}>
    <motion.div className='home-background'
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,transition:{duration:0.1}}}
    >
      <section className='home-section'>
          <article className='banner'>
            <section className='banner-section1'>
                <h2 className='heading'>Let's Start</h2>
                <h2 className='heading'>Reserve Your Table</h2>
              <footer className='banner-footer'>
                <motion.button whileHover={{ scale: 1.2 }} 
               
                className='Reserve-btn' onClick={handle}>ReserveTable</motion.button>
                </footer>
                
          </section>
          <section className='slider'>
                 <span style={{"--i":"1"}}> <img className='slide-img' src={pizza} alt="pizza" /><p>"Hot Italian pizza 30% offer 🍕"</p></span>
                 <span style={{"--i":"2"}}> <img className='slide-img' src={icecream} alt="icecream" /><p>"Treat yourself with our delicious Icecream 🍦" </p></span>
                 <span style={{"--i":"3"}}> <img className='slide-img' src={cupcake} alt="cupcake" /><p>"Yummy CupCake Make your Day 😍"</p></span>
                 <span style={{"--i":"4"}}> <img className='slide-img' src={cake} alt="cake" /><p>"Celebrate Your BirthDay With Chocolate Cake 🎂🎉"</p></span>
                 <span style={{"--i":"5"}}> <img className='slide-img' src={burger} alt="burger" /><p>"Build Your Day🍔😎"</p></span>
                 <span style={{"--i":"6"}}> <img className='slide-img' src={strawberry} alt="strawberry" /><p>"Strawberry Icecream 🍓"</p></span>
                 <span style={{"--i":"7"}}> <img className='slide-img' src={fruit} alt="strawberry" /><p>"Healthy Fresh Juice 💪"</p></span>
                </section>
          </article>
        </section>
        <h3 className='heading2'>This week Specials !!!</h3> 
        <section className='spl-section'>
          <div className='card'>
           <img src={card1} alt="dish1" />
           <h3>Greek salad</h3>
           <h4>$12.99</h4>
           <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
           
          </div>
          <div className='card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg" alt="dish1" />
           <h3>Bruchetta</h3>
           <h4>$ 5.99</h4>
           <p>Our Bruschetta is made from grilled bread that has been smeared with garlic.every last ingredient has been sourced and is as authentic as can be imagined. </p>
          
           </div>
           <div className='card'>
           <img src={card3} alt="dish1" />
           <h3>Lemon Dessert</h3>
           <h4>$ 5.00</h4>
           <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
          
           </div>
        </section>
    </motion.div>
    </LazyMotion>
  )
}

export default HomePage
