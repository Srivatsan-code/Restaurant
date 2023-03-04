import { useState,useEffect, useRef } from "react";
import icecream from "./menus/ice-cream.json"
import drinks from "./menus/drinks.json";
import dessert from "./menus/desserts.json"
import burger from "./menus/burgers.json"
import pizza from "./menus/pizzas.json";
import chocolates from "./menus/chocolates.json"
import breads from "./menus/breads.json"
import defaultDessert from "./assets/dessert.jpg"
import { motion } from "framer-motion";
const Menu = () => {

  const [category,setCategory]=useState("");
  const [sort,setSort]=useState("--SELECT--")
  const [obj,setObj]=useState(dessert);
  const objRef=useRef([]);
  const sortRef=useRef([]);
   const handleImage=(event)=>{
         event.target.src =defaultDessert;
   }
   const handleCategory=(e)=>{
    
    setCategory(e.target.value)
   }
   const handleSort=(e)=>{
    setSort(e.target.value)
   }
   useEffect(()=>{
    if(sort!=="Small Amount" && sort!=="Large Amount" && sort!=="Name A-Z" && sort!=="Name Z-A"){
        if(category==="Ice Cream 🍧"){
          objRef.current=icecream
          setObj(objRef.current)
        
        }
        else if(category==="Drink 🥤"){
          objRef.current=drinks
          setObj(objRef.current)
        }
        else if(category==="Burger 🍔"){
          objRef.current=burger
          setObj(objRef.current)
        }
        else if(category==="Pizza 🍕"){
          objRef.current=pizza
          setObj(objRef.current)
        }
        else if(category==="Chocolates 🍫"){
          objRef.current=chocolates
          setObj(objRef.current)
        }
        else if(category==="Breads 🌭"){
          objRef.current=breads
          setObj(objRef.current)
        }
      }else{
        if(sort==="Small Amount"){
         sortRef.current=obj.sort((a, b) => a.price - b.price);
         setSort(sortRef.current)
        }
        else if(sort==="Large Amount"){
          console.log(sort)
          sortRef.current=obj.reverse((a, b) => a.price - b.price);
         setSort(sortRef.current)
        }
      }
   },[category,sort])
  
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}} 
    exit={{opacity:0,transition:{duration:0.1}}}
    >
    <form className='form' />
      <div className='form-menu-container'>
        <div>
      <label className='label' aria-label="Choose Menu here">Choose category</label>
   <select className='menu-input' value={category} onChange={handleCategory} >
    <option>--SELECT--</option>
    <option>Ice Cream 🍧</option>
    <option>Drink 🥤</option>
    <option>Burger 🍔</option>
    <option>Pizza 🍕</option>
    <option>Chocolates 🍫</option>
    <option>Breads 🌭</option>
    </select>
    </div>
    <div>
    <label className='label' aria-label="Arrange Items " id="sort">Arrange Items By</label>
   <select className='menu-input' onChange={handleSort} value={sort}>
    <option value="--SELECT--">--SELECT--</option>
    <option  value="Small Amount">Small Amount</option>
    <option  value="Large Amount">Large Amount</option>
    </select>
    </div></div>
      
    <section className='menu-container'>
      
    {
      
        obj.map((data)=>(
            <div className='card'>
           <img src={data.img} alt="dish" onError={handleImage}/>
           <h3>{data.name}</h3>
           <h4>$ {data.price}</h4>
           <p>{data.dsc} </p>
           <footer className="card-footer">
           <button 
           whileHover={{ scale: 1 }} 
           className='online-btn'><i class="fa fa-shopping-cart" style={{"font-size":"36px"}}></i> Order Online</button>
           </footer>
           
          </div>
        ))
    }
    </section>
    </motion.div>
  )
}

export default Menu
