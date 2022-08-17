

import React, { useState } from 'react'

//initialForm son los datos que nos van a mandar del formulario y lo inicializamos como arreglo vacio

export const useForm = (initialForm = {}) => {

    const [formstate, setFormstate] = useState({

  

    });

 
    //establezco el name y le paso el value que pongan en el formulario
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormstate({
            
            ...formstate,
            [name]: value

        });

    }

    const onResetForm = (() => {
        
        setFormstate(initialForm)
        // console.log(onResetForm)

    })


    return {
      
        ...formstate,
        formstate,
        onInputChange,
        onResetForm

  }
}
