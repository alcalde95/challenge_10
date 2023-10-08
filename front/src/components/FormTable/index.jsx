
import { comprobarNombre,comprobarspecies_caja,comprobardescription_caja,comprobarmultiplication_caja,comprobarsoil_caja,comprobarsun_caja,comprobartemperature_caja,comprobarwater_caja } from "../comprobaciones"
import { TableUseStatescontext } from "../../Context/TableUseStatescontext"
import { useContext,useState } from "react";
/*Estoy valorando si esto, cada fila de datos, si se podrá meter en otro componente*/

const FormTable = () => {

    const{ nombre_caja, setnombre_caja, species_caja, setspecies_caja, description_caja, setdescription_caja, soil_caja, setsoil_caja,
        temperature_caja, settemperature_caja, sun_caja, setsun_caja,water_caja, setwater_caja,multiplication_caja, setmultiplication_caja} = useContext( TableUseStatescontext )
        console.log("nombrecaja=" + nombre_caja)


    function    ComprobarNombre(nombre_caja){
        comprobarNombre(nombre_caja)
        console.log("nombrecaja=" + nombre_caja)
    }
    return(
        <form >
                    <input
                        type="text"
                        id='caja_nombre'
                        className='bg-neutral-500 my-3 p-2 border-separate  rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={nombre_caja}
                        style={{ display: 'none' }}
                        placeholder='Nombre'
                        name='caja_nombre'
                        autoComplete='off'
                        onChange={e => setnombre_caja(e.target.value)}
                        onBlur={() => ComprobarNombre(nombre_caja)}
                    >
                    </input>

                    <p id='errorNombreCaja' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='species_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={species_caja}
                        style={{ display: 'none' }}
                        placeholder='species'
                        name='species_caja'
                        autoComplete='off'
                        onChange={e => setspecies_caja(e.target.value)}
                        onBlur={() => comprobarspecies_caja(species_caja)}
                    >
                    </input>

                    <p id='errorspecies' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='description_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={description_caja}
                        style={{ display: 'none' }}
                        placeholder='description'
                        name='description_caja'
                        autoComplete='off'
                        onChange={e => setdescription_caja(e.target.value)}
                        onBlur={() => comprobardescription_caja(description_caja)}
                    >
                    </input>

                    <p id='errordescription' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='soil_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={soil_caja}
                        style={{ display: 'none' }}
                        placeholder='Soil'
                        name='soil_caja'
                        autoComplete='off'
                        onChange={e => setsoil_caja(e.target.value)}
                        onBlur={() => comprobarsoil_caja(soil_caja)}
                    >
                    </input>

                    <p id='errorsoil' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='temperature_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={temperature_caja}
                        style={{ display: 'none' }}
                        placeholder='Temperature'
                        name='temperature_caja'
                        autoComplete='off'
                        onChange={e => settemperature_caja(e.target.value)}
                        onBlur={() => comprobartemperature_caja(temperature_caja)}
                    >
                    </input>

                    <p id='errortemperature' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='sun_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={sun_caja}
                        style={{ display: 'none' }}
                        placeholder='Sun'
                        name='sun_caja'
                        autoComplete='off'
                        onChange={e => setsun_caja(e.target.value)}
                        onBlur={() => comprobarsun_caja(sun_caja)}
                    >
                    </input>

                    <p id='errorsun' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='water_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={water_caja}
                        style={{ display: 'none' }}
                        placeholder='Water'
                        name='water_caja'
                        autoComplete='off'
                        onChange={e => setwater_caja(e.target.value)}
                        onBlur={() => comprobarwater_caja(water_caja)}
                    >
                    </input>

                    <p id='errorwater' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='multiplication_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={multiplication_caja}
                        style={{ display: 'none' }}
                        placeholder='Multiplication'
                        name='multiplication_caja'
                        autoComplete='off'
                        onChange={e => setmultiplication_caja(e.target.value)}
                        onBlur={() => comprobarmultiplication_caja(multiplication_caja)}
                    >
                    </input>

                    <p id='errormultiplication' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="file"
                        id='foto'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        accept="image/*"
                        style={{ display: 'none' }}
                        placeholder='foto'
                        name='foto'
                        autoComplete='off'

                    >
                    </input>

                    <p id='errorNombreNuevo' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                </form>
    )
}
export default FormTable