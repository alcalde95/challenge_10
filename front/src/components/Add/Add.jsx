
import { comprobarNombre, comprobarspecies_caja, comprobardescription_caja, comprobarmultiplication_caja, comprobarsoil_caja, comprobarsun_caja, comprobartemperature_caja, comprobarwater_caja } from "../comprobaciones"
import { useState } from "react";
import { useLocation } from "react-router-dom";
/*Estoy valorando si esto, cada fila de datos, si se podrá meter en otro componente*/

const Add = () => {
    const [nombre_caja, setnombre_caja] = useState('')
    const [species_caja, setspecies_caja] = useState('')
    const [description_caja, setdescription_caja] = useState('')
    const [soil_caja, setsoil_caja] = useState('')
    const [temperature_caja, settemperature_caja] = useState('')
    const [sun_caja, setsun_caja] = useState('')
    const [water_caja, setwater_caja] = useState('')
    const [multiplication_caja, setmultiplication_caja] = useState('')


    return (
        <form >
            <input
                type="text"
                id='caja_nombre'
                className='bg-neutral-500 my-3 p-2 border-separate  rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={nombre_caja}
                placeholder='Nombre'
                name='caja_nombre'
                autoComplete='off'
                onChange={e => setnombre_caja(e.target.value)}
                onBlur={() => comprobarNombre(nombre_caja)}
            >
            </input>

            <p id='errorNombreCaja' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='species_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={species_caja}
                placeholder='species'
                name='species_caja'
                autoComplete='off'
                onChange={e => setspecies_caja(e.target.value)}
                onBlur={() => comprobarspecies_caja(species_caja)}
            >
            </input>

            <p id='errorspecies' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='description_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={description_caja}
                placeholder='description'
                name='description_caja'
                autoComplete='off'
                onChange={e => setdescription_caja(e.target.value)}
                onBlur={() => comprobardescription_caja(description_caja)}
            >
            </input>

            <p id='errordescription' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='soil_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={soil_caja}
                placeholder='Soil'
                name='soil_caja'
                autoComplete='off'
                onChange={e => setsoil_caja(e.target.value)}
                onBlur={() => comprobarsoil_caja(soil_caja)}
            >
            </input>

            <p id='errorsoil' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='temperature_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={temperature_caja}
                placeholder='Temperature'
                name='temperature_caja'
                autoComplete='off'
                onChange={e => settemperature_caja(e.target.value)}
                onBlur={() => comprobartemperature_caja(temperature_caja)}
            >
            </input>

            <p id='errortemperature' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='sun_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={sun_caja}
                placeholder='Sun'
                name='sun_caja'
                autoComplete='off'
                onChange={e => setsun_caja(e.target.value)}
                onBlur={() => comprobarsun_caja(sun_caja)}
            >
            </input>

            <p id='errorsun' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='water_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={water_caja}
                placeholder='Water'
                name='water_caja'
                autoComplete='off'
                onChange={e => setwater_caja(e.target.value)}
                onBlur={() => comprobarwater_caja(water_caja)}
            >
            </input>

            <p id='errorwater' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="text"
                id='multiplication_caja'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                value={multiplication_caja}
                placeholder='Multiplication'
                name='multiplication_caja'
                autoComplete='off'
                onChange={e => setmultiplication_caja(e.target.value)}
                onBlur={() => comprobarmultiplication_caja(multiplication_caja)}
            >
            </input>

            <p id='errormultiplication' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <input
                type="file"
                id='foto'
                className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                accept="image/*"
                placeholder='foto'
                name='foto'
                autoComplete='off'

            >
            </input>

            <p id='errorNombreNuevo' className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

            <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='addButton' >Add</button>


        </form>


    )
}
export default Add