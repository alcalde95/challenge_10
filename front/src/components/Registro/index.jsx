import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css' // Remove
const Registro = () => {

    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [contrasenaRepetida, setContrasenaRepetida] = useState('')

    const mostrar = (id) => {
        document.getElementById(id).style.display = 'block'
    }
    return (

        <div className="flex flex-col justify-center items-center h-[100vh] bg-black">
            <div className='bg-neutral-600 p-8 rounded-lg flex flex-col justify-between gap-4 items-center w-[33vw]'>


                <hr className='border-b border-neutral-300 w-full' />

                <input
                    type="text"
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={correo}
                    placeholder='Correo electrónico'
                    name='correo'
                    autoComplete='off'
                    onChange={e => setCorreo(e.target.value)}
                    onBlur={() => mostrar('errorEmail')}
                />
                <p id='errorEmail' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'> El email no cumple los parámetros mínimos</p>

                <input type="password"
                    placeholder='Contraseña'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={contrasena}
                    name='correo'
                    autoComplete='off'
                    onChange={e => setContrasena(e.target.value)}
                    onBlur={() => mostrar('errorContrasena')}
                />
                <p id='errorContrasena' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'> La contraseña no cumple los parámetros mínimos</p>

                <input type="password"
                    placeholder='Repita la contraseña'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={contrasenaRepetida}
                    name='correo'
                    autoComplete='off'
                    onChange={e => setContrasenaRepetida(e.target.value)}
                    onBlur={() => mostrar('errorContrasenasNoIguales')}
                />

                <p id='errorContrasenasNoIguales' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'> Las contraseñas no son iguales</p>

                <hr className='border-b border-neutral-300 w-full' />



                <button
                    className='bg-neutral-400 p-2 rounded-lg w-full text-center hover:bg-neutral-300 transition duration-200 ease-in-out'
                >
                    <Link to={'/registro'} >Registro</Link>
                </button>
            </div>
        </div>
    )

}
export default Registro