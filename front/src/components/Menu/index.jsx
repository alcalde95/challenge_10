import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
import logo from './logo-sinfondo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { comprobarEmail, comprobarPassword, mostrar, ocultar } from '../comprobaciones.jsx'

const Menu = () => {

    const [nombre_caja, setnombre_caja] = useState('')
    const [species_caja, setspecies_caja] = useState('')
    const [description_caja, setdescription_caja] = useState('')
    const [soil_caja, setsoil_caja] = useState('')
    const [temperature_caja, settemperature_caja] = useState('')
    const [sun_caja, setsun_caja] = useState('')
    const [water_caja, setwater_caja] = useState('')
    const [multiplication_caja, setmultiplication_caja] = useState('')

    const mostrarAnadir = () => {
        document.getElementById('caja_nombre').style.display = 'block'
        document.getElementById('species_caja').style.display = 'block'
        document.getElementById('description_caja').style.display = 'block'
        document.getElementById('soil_caja').style.display = 'block'
        document.getElementById('temperature_caja').style.display = 'block'
        document.getElementById('sun_caja').style.display = 'block'
        document.getElementById('water_caja').style.display = 'block'
        document.getElementById('multiplication_caja').style.display = 'block'
        document.getElementById('foto').style.display = 'block'

    }

    const comprobarNombre = () => {
        nombre_caja.length < 3 || nombre_caja.length > 20 ? mostrar('errorNombreCaja', 'El tamaño del nombre debe estar entre 3 y 20 caracteres') : ocultar('errorNombreCaja')
        return 3 >= nombre_caja.length >= 20
    }

    const comprobardescription_caja = () => {
        description_caja.length < 3 || description_caja.length > 20 ? mostrar('errordescription', 'El tamaño de la descripción debe estar entre 25 y 200 caracteres') : ocultar('errordescription')
        return 25 >= description_caja.length >= 200
    }

    const comprobarsoil_caja = () => {
        soil_caja.length < 3 || soil_caja.length > 20 ? mostrar('errorsoil', 'El tamaño del soil debe estar entre 3 y 20 caracteres') : ocultar('errorsoil')
        return 3 >= soil_caja.length >= 20
    }
    const comprobartemperature_caja = () => {
        temperature_caja.length < 3 || temperature_caja.length > 20 ? mostrar('errortemperature', 'El tamaño de la temperature debe estar entre 3 y 20 caracteres') : ocultar('errortemperature')
        return 3 >= temperature_caja.length >= 20
    }
    const comprobarsun_caja = () => {
        sun_caja.length < 3 || sun_caja.length > 20 ? mostrar('errorsun', 'El tamaño del sun debe estar entre 3 y 20 caracteres') : ocultar('errorsun')
        return 3 >= sun_caja.length >= 20
    }
    const comprobarwater_caja = () => {
        water_caja.length < 3 || water_caja.length > 20 ? mostrar('errorwater', 'El tamaño del water debe estar entre 3 y 20 caracteres') : ocultar('errorwater')
        return 3 >= water_caja.length >= 20
    }
    const comprobarmultiplication_caja = () => {
        multiplication_caja.length < 3 || multiplication_caja.length > 20 ? mostrar('errormultiplication', 'El tamaño del multiplication debe estar entre 3 y 20 caracteres') : ocultar('errormultiplication')
        return 3 >= multiplication_caja.length >= 20
    }
   

    return (
        <div className='flex flex-col justify-center items-center h-[100vh] bg-gray-500 text-neutral-50'>
            <header>Usuario : x (poner dp con el contexto)</header>
            <button
                className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out'
                onClick={() => mostrarAnadir()}
            >
                Añadir
            </button>


            <form>
                <input
                    type="text"
                    id='caja_nombre'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={nombre_caja}
                    style={{ display: 'none' }}
                    placeholder='Nombre'
                    name='caja_nombre'
                    autoComplete='off'
                    onChange={e => setnombre_caja(e.target.value)}
                    onBlur={() => comprobarNombre()}
                >
                </input>

                <p id='errorNombreCaja' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='species_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={species_caja}
                    style={{ display: 'none' }}
                    placeholder='species'
                    name='species_caja'
                    autoComplete='off'
                    onChange={e => setspecies_caja(e.target.value)}
                    onBlur={() => comprobarspecies_caja()}
                >
                </input>

                <p id='errorspecies' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='description_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={description_caja}
                    style={{ display: 'none' }}
                    placeholder='description'
                    name='description_caja'
                    autoComplete='off'
                    onChange={e => setdescription_caja(e.target.value)}
                    onBlur={() => comprobardescription_caja()}
                >
                </input>

                <p id='errordescription' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='soil_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={soil_caja}
                    style={{ display: 'none' }}
                    placeholder='Soil'
                    name='soil_caja'
                    autoComplete='off'
                    onChange={e => setsoil_caja(e.target.value)}
                    onBlur={() => comprobarsoil_caja()}
                >
                </input>

                <p id='errorsoil' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='temperature_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={temperature_caja}
                    style={{ display: 'none' }}
                    placeholder='Temperature'
                    name='temperature_caja'
                    autoComplete='off'
                    onChange={e => settemperature_caja(e.target.value)}
                    onBlur={() => comprobartemperature_caja()}
                >
                </input>

                <p id='errortemperature' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='sun_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={sun_caja}
                    style={{ display: 'none' }}
                    placeholder='Sun'
                    name='sun_caja'
                    autoComplete='off'
                    onChange={e => setsun_caja(e.target.value)}
                    onBlur={() => comprobarsun_caja()}
                >
                </input>

                <p id='errorsun' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='water_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={water_caja}
                    style={{ display: 'none' }}
                    placeholder='Water'
                    name='water_caja'
                    autoComplete='off'
                    onChange={e => setwater_caja(e.target.value)}
                    onBlur={() => comprobarwater_caja()}
                >
                </input>

                <p id='errorwater' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="text"
                    id='multiplication_caja'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    value={multiplication_caja}
                    style={{ display: 'none' }}
                    placeholder='Multiplication'
                    name='multiplication_caja'
                    autoComplete='off'
                    onChange={e => setmultiplication_caja(e.target.value)}
                    onBlur={() => comprobarmultiplication_caja()}
                >
                </input>

                <p id='errormultiplication' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                <input
                    type="file"
                    id='foto'
                    className='bg-neutral-500 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                    accept="image/*"
                    style={{ display: 'none' }}
                    placeholder='foto'
                    name='foto'
                    autoComplete='off'

                >
                </input>

                <p id='errorNombreNuevo' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            </form>

            <table className="table-auto border-separate border-spacing-x-2.5 border-spacing-y-2.5 border border-slate-500 bg-amber-950">

                <thead className=''>
                    <tr>
                        <th></th>
                        <th className='border border-slate-900 bg-slate-600'>Name</th>
                        <th className='border border-slate-900 bg-slate-600'>species </th>
                        <th className='border border-slate-900 bg-slate-600'>description </th>
                        <th className='border border-slate-900 bg-slate-600'>soil  </th>
                        <th className='border border-slate-900 bg-slate-600'>temperature  </th>
                        <th className='border border-slate-900 bg-slate-600'>sun  </th>
                        <th className='border border-slate-900 bg-slate-600'>water  </th>
                        <th className='border border-slate-900 bg-slate-600'>multiplication  </th>
                        <th className='border border-slate-900 bg-slate-600'>image_url  </th>
                    </tr>
                </thead>
                <tbody  >
                    <tr >
                        <th className='border border-slate-600 bg-slate-700'>1</th>
                        <td className='border border-slate-600 bg-slate-700'>Cy Ganderton</td>
                        <td className='border border-slate-600 bg-slate-700'>Quality Control Specialist</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'>Blue</td>
                        <td className='border border-slate-600 bg-slate-700'> <img className='w-12' src={logo} /></td>
                    </tr>
                    <tr className='border border-slate-600 bg-slate-700'>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                    <tr className='border border-slate-600 bg-slate-700'>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                        <td>Blue</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )

}
export default Menu