import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
// import { comporbarLength, comprobarEmail, comprobarPassword } from '../comprobaciones.jsx'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Inicio_sesion = () => {
  const navigate = useNavigate()
  const { email, setEmail } = useContext(MyEstadoGlobalContext)

  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [enterUse, setenterUse] = useState(0)

  useEffect(() => {
    // enterUse == 1 ? navigate("/registro") : null
    enterUse == 1 ? window.location.assign('https://www.youtube.com/watch?v=dQw4w9WgXcQ') : null
    setenterUse(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enterUse])

  const iniciarSesion = () => {
    setenterUse(1)
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className='bg-neutral-600 p-8 rounded-lg flex flex-col justify-between gap-4 items-center w-[33vw]'>
        <p className='bg-neutral-500 p-2 rounded-lg w-full text-center text-neutral-50'>
          {email}
        </p>

        <hr className='border-b border-neutral-300 w-full' />

        <input
          type="text"
          className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
          value={correo}
          placeholder='Correo electrónico'
          name='correo'
          autoComplete='off'
          onChange={e => setCorreo(e.target.value)}
        />

        {/* <p></p>  WTF ?? Para que esto */}

        <input type="password"
          placeholder='Contrase&#241a'
          className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
          value={contrasena}
          name='correo'
          autoComplete='off'
          onChange={e => setContrasena(e.target.value)}
        />

        {/* <p></p>  WTF ?? Para que esto  */}
        <hr className='border-b border-neutral-300 w-full' />

        <button
          onClick={() => iniciarSesion()}
          className='bg-neutral-400 p-2 rounded-lg w-full text-center hover:bg-neutral-300 transition duration-200 ease-in-out'
        >
          Inicio sesión
        </button>

        <button
          className='bg-neutral-400 p-2 rounded-lg w-full text-center hover:bg-neutral-300 transition duration-200 ease-in-out'
        >
          <Link to={'/registro'} >Registro</Link>
        </button>
      </div>
    </div>
  )
}
export default Inicio_sesion