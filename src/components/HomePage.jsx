import React from 'react'
import banner from './assets/restauranfood.jpg';
import card1 from './assets/greek salad.jpg';
import bike from "./assets/bike.png";
import card3 from "./assets/lemon dessert.jpg";
const HomePage = () => {
  return (
    <div className='home-background'>
      <section>
          <article className='banner'>
          <h2 className='heading'>Little Lemon</h2>
          <img className='bannerImage' src={banner} alt="banner"/>
          <h3 className='subheading'>Chicago</h3>
        
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
          <button className='Reserve-btn'>Reserve a Table</button>
          
          </article>
        </section>
        <section className='menu-section'>
          <article className='menu'>
          <h3 className='heading2'>This week Specials !!!</h3> 
          <button className='menu-btn'>Online Menu</button>
          </article>
          <div className='card'>
           <img src={card1} alt="dish1" />
           <h3>Greek salad</h3>
           <h4>$12.99</h4>
           <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
           <h5>Order a delivery  </h5>
           <img className='bike' src={bike} alt="bike icon"/>
          </div>
          <div className='card'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg" alt="dish1" />
           <h3>Bruchetta</h3>
           <h4>$ 5.99</h4>
           <p>Our Bruschetta is made from grilled bread that has been smeared with garlic.every last ingredient has been sourced and is as authentic as can be imagined. </p>
           <h5>Order a delivery  </h5>
           <img className='bike' src={bike} alt="bike icon"/>
           </div>
           <div className='card'>
           <img src={card3} alt="dish1" />
           <h3>Lemon Dessert</h3>
           <h4>$ 5.00</h4>
           <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
           <h5>Order a delivery  <img className='bike' src={bike} alt="bike icon"/></h5>
           <img className='bike' src={bike} alt="bike icon"/>
           </div>
        </section>
    </div>
  )
}

export default HomePage
