
import React, { useEffect, useReducer } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';


const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: "Recolectar la piedra del alma",
    //   done: false,
    // },

  ];


  const initial = () => {
    
try {
  return JSON.parse( localStorage.getItem('todos')) || [];
} catch (error) {
  
}

  }

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, initial);


    //almacenar en el storage
    //cuando mi todo cambia le mando un efecto
    //utilizo el localstorage y utilizo el json.stringify y los todos los convierto en string
    
    useEffect(() => {
    
      localStorage.setItem('todos', JSON.stringify( todos))
    
    }, [todos])
    



    const handleDeleteTodo = (id) => {

      dispatch({
        type: ' [todo] remove Todo',
        payload:id
        
        })
    
    
    }

    const handleToggleTodo = (id) =>{


      dispatch({

type: '[todo] Toggle Todo',
payload: id

      })

    }
        
    
    
    //en handlenewTodo , recibo el todo de onNewtodo que mandamos del formulario
      // le pongo el tipo que tengo definido en el todoReducer.js y la payload que seria el todo que creamos
      //y en el despachador pongo la action 
      const handleNewTodo = (todo) => {
        const  action = {
    type: '[todo] add Todo',
    payload: todo
        }
    dispatch(action);
    
    

    
    
    
      };
    


  return {
    todos,
   handleNewTodo,
   handleDeleteTodo,
   handleToggleTodo


  
    


  }
}
