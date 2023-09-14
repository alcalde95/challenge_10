import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'
const Registro = () =>{

    const [correo,setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')
    const [contrasenaRepetida,setContrasenaRepetida] = useState('')

   return (
    <>
     <div className={styles.correo}>
        <label>
            Correo electrónico: 
            <input type="text" value={correo} name='correo' autoComplete='off' onChange={e => setCorreo(e.target.value)} />
        </label>
     </div>
    
    <div className={styles.contrasenas}>
        <label>
            Contrase&#241;a: 
            <input type="password" value={contrasena} name='correo' autoComplete='off' onChange={e => setContrasena(e.target.value)} />
        </label>
     </div>
     <div className={styles.contrasenas}>
        <label>
            Introduzca de nuevo la contrase&#241;a: 
            <input type="password" value={contrasenaRepetida} name='correo' autoComplete='off' onChange={e => setContrasenaRepetida(e.target.value)} />
        </label>
     </div>

     <div className={styles.inicio_sesion}>
        <button>Registrarse</button>  
     </div>
    
    
    </>
   )

}
export default Registro