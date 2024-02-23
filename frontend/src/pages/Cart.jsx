import React, { useState } from 'react'

const Cart = () => {
  const[count,Setcount]= useState(0);
  const increment = ()=>{
    Setcount(count+1);
    console.log(`count${count+1}`);

   };

  return (
  <>
  <p> count:{count}</p>
   <button onClick={increment} > click</button>
  
    </>
   
  )

}

export default Cart