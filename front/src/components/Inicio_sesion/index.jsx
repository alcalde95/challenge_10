import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import {MyEstadoGlobalContext} from '../../Context/MyEstadoGlobalContext';
import React from 'react';
import {comporbarLength,comprobarEmail,comprobarPassword} from '../comprobaciones.jsx'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Inicio_sesion = () => {

 
   const {email, setEmail} = React.useContext(MyEstadoGlobalContext);
  
   const [correo,setCorreo] = useState('')
   const [contrasena,setContrasena] = useState('')
   const [enterUse,setenterUse] = useState('false')
   
  

    function iniciarSesion () { 
      const navigate = useNavigate();
      setenterUse('true')

     useEffect(() => {
      if(enterUse == 'true'){
         navigate("../registro")
      }
      
     },[enterUse])
      
    }


   return (

    <form className={styles.body}>
      <p>{email}</p>
        <label>
            Correo electrónico: 
            <input type="text" value={correo} name='correo' autoComplete='off' onChange={e => setCorreo(e.target.value)} />
        </label>
      <p></p>
        <label>
          Contrase&#241;a: 
            <input type="password" value={contrasena} name='correo' autoComplete='off' onChange={e => setContrasena(e.target.value)} />
        </label>
        <p></p>
        <button onClick={() =>iniciarSesion()}>Inicio sesión</button>  
  
        <button>
        <Link to={'/registro'} >Registro</Link>
        </button>
  
     </form>
   )
}
export default Inicio_sesion