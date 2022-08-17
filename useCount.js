import React, { useState } from 'react'

export const useCount = (valorInicial=10) => {

const [count, setCount] = useState({
  valorInicial,
  count1: 20,
  count2: 30,
 
})

const {count1,count2}= count;

//con esta funcion aumento dos contadores a la vez
const aumentar =()=>{

  setCount({
    count1: count1 + 1,
    count2: count2 + 2

   } )

}

const restar = ()=>{

  setCount( count-1)
}


const reset = ()=>{

  setCount(valorInicial)
}

  return {

...count,
setCount,
aumentar,
reset,
restar

  }
}
