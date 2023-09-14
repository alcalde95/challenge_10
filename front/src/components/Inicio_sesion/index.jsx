import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Inicio_sesion = () => {


    const [correo,setCorreo] = useState('')
    const [contrasena,setContrasena] = useState('')

   return (
    <>
     <div className={styles.correo}>
        <label>
            Correo electrónico: 
            <input type="text" value={correo} name='correo' autoComplete='off' onChange={e => setCorreo(e.target.value)} />
        </label>
     </div>
    
    <div className={styles.contrasena}>
        <label>
            Contrase&#241;a: 
            <input type="password" value={contrasena} name='correo' autoComplete='off' onChange={e => setContrasena(e.target.value)} />
        </label>
     </div>

     <div className={styles.inicio_sesion}>
        <button>Inicio sesión</button>  
     </div>
     <div className={styles.registro}>
        <button>
        <Link to={'/registro'} >Registro</Link>
        </button>
     </div>
    
    </>
   )
}
export default Inicio_sesion