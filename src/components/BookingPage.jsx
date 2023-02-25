import React from 'react'
import BookingForm from './BookingForm'
import { useReducer,useState,useRef} from 'react';
import { useNavigate} from "react-router-dom";
import {fetchAPI,submitAPI} from './api'
const BookingPage = () => {
  const [timeData,setTimeData]=useState([]);
  const [formData,setFormData]=useState({});
  const currentData=useRef({});
  const navigate=useNavigate();
  const reducer=(time,action)=>{
    if(action.toString().includes("-")){
    const date = new Date(action);
    var arr=fetchAPI(date)
    setTimeData(arr); 
    }
    else{
    return action
    }
  }
  const [time,dispatch]=useReducer(reducer,""); 
  const [guests,setGuests]=useState("");
  const [occasion,setOccation]=useState("");
  const [date,setDate]=useState("");
  const submitForm=()=>{
   let val={
    date:date,
    time:time,
    guests:guests,
    occasion:occasion
  }
    setFormData(formData=>({
      ...formData,
      val
    })
    );
    currentData.current=val;
    console.log(currentData.current);
    var submitApi=submitAPI(currentData.current);
    if(submitApi){
      navigate("/confirmation")
    }
    }
  
  return (
    <section className='background'>

      <BookingForm 
      time={time} 
      dispatch={dispatch} 
      timeData={timeData} 
      submitForm={submitForm}
      date={date}
      setDate={setDate}
      guests={guests}
      setGuests={setGuests}
      occasion={occasion}
      setOccation={setOccation}

      />
    </section>
  )
}

export default BookingPage
