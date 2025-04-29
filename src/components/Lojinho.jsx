import React from 'react'
import { BiCoffeeTogo } from "react-icons/bi";

import './Lojinho.css'

function Lojinho() {
  return (
    <div className='lojinho-container'>
      <button className='btn-lojinho'> <BiCoffeeTogo className='cafe'/>Café: B$ 30</button>
    </div>
  )
}

export default Lojinho
