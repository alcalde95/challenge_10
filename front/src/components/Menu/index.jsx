import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Menu = () =>{

    return(
        <div className='flex flex-col items-center h-[100vh] bg-black text-neutral-50'>
            <header>Usuario : x (poner dp con el contexto)</header>
            <button className=' bg-neutral-400 p-2 rounded-lg w-full text-center hover:bg-neutral-300 transition duration-200 ease-in-out'>Añadir</button>
        </div>
    )
   
}
export default Menu