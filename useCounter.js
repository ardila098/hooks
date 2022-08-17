
import {useState } from 'react'

export const useCounter = (initialValue=10) => {

    const [counter, setCounter] = useState (initialValue)

    const increment = () => {
    
        setCounter(counter + 1);
}
    
    //puedo escoger si decremento de 2 en 2 
    const decrement = (value=2) => {
        if (counter === 0) return;
        setCounter(counter - value);

    }

    const reset = () => {
        setCounter (initialValue)

    }

    return {
      
        counter,
        increment,
        decrement,
        reset

    }
    
}
