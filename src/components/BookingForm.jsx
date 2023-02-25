import React from 'react'
const BookingForm = (props) => {
  
  const {time,
    dispatch,
    timeData,
    submitForm,
    date,
    setDate,
    guests,
    setGuests,
    occasion,
    setOccation

  }=props;
  
  const handleDate=(e)=>{
   setDate(e.target.value)
   dispatch(e.target.value)
  }
  
  const handleTime=(e)=>{
    dispatch(e.target.value)
  } 
  return (
   
    <div className='form-component'>
      <form className='form' />
      <div className='form-container'>
   <label className='label' htmlFor="res-date">Choose date</label>
   <input className='input' type="date" id="res-date" value={date} onChange={handleDate}/>
   <label className='label' htmlFor="res-time">Choose time</label>
   <select className='input' id="res-time" value={time} onChange={handleTime}>
     {
      timeData.map((data)=>(
         <option key={data}>{data}</option>
      )     
      )
     }
   </select>
   <label className='label' htmlFor="guests">Number of guests</label>
   <input className='input' type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={e=>setGuests(e.target.value)}/>
   <label className='label' htmlFor="occasion">Occasion</label>
   <select className='input' id="occasion" value={occasion} onChange={e=>setOccation(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   
   <input className='Book-btn' type="submit" onClick={submitForm} value="Make Your reservation"/>
   </div>
   
    
</div>

  )
}

export default BookingForm
