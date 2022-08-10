import axios from 'axios'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import {  useParams,useNavigate } from 'react-router-dom';

export const PizzaCart = () => {
  const [pizzaParams, setPizzaParams] = useState('')
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    const pizzaSingle = async ()=>{
      try {
        const {data} = await axios.get(`https://626d16545267c14d5677d9c2.mockapi.io/items/${id}`)
        return setPizzaParams(data)
      } catch (error) {
        alert('Ошибочка')
        navigate('/')
      }

      
    }
    pizzaSingle()
  },[])
  return (
    <div>
      <img src={pizzaParams.imageUrl} alt="" class="pizza-block"/>
      <h4 class="pizza-block__title">{pizzaParams.title}</h4>
      <div class="pizza-block__price">от {pizzaParams.price} ₽</div>
    </div>
  )
}
