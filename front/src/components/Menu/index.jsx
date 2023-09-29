import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
import logo from './logo-sinfondo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { comprobarEmail, comprobarPassword, mostrar, ocultar } from '../comprobaciones.jsx'

const plants = [
    { id: 1,name: "Cy Ganderton", species: "Blue", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id:2 ,name: "Cy Ganderton", species: "Red", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id:3 ,name: "Cy Ganderton", species: "Green", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> }
]



const Menu = () => {

    const [nombre_caja, setnombre_caja] = useState('')
    const [species_caja, setspecies_caja] = useState('')
    const [description_caja, setdescription_caja] = useState('')
    const [soil_caja, setsoil_caja] = useState('')
    const [temperature_caja, settemperature_caja] = useState('')
    const [sun_caja, setsun_caja] = useState('')
    const [water_caja, setwater_caja] = useState('')
    const [multiplication_caja, setmultiplication_caja] = useState('')


    const Row = (props) => {
        const { name, species, description, soil, temperature, sun, water, multiplication, image_url, edit,ddelete } = props
        return (<tr>
            <td>{name}</td>
            <td>{species}</td>
            <td>{description}</td>
            <td>{soil}</td>
            <td>{temperature}</td>
            <td>{sun}</td>
            <td>{water}</td>
            <td>{multiplication}</td>
            <td>{image_url}</td>
            <td>{edit}</td>
            <td>{ddelete}</td>
        </tr>)
    }



    const Table = (props) => {
        const { data } = props
        return (
            <table className="table-auto border-separate border-spacing-x-2.5 border-spacing-y-2.5 border border-slate-500 bg-amber-950">
                <thead>
                    <tr className='border border-slate-900 bg-slate-600'>
                        <th >Name</th>
                        <th >species </th>
                        <th >description </th>
                        <th >soil  </th>
                        <th >temperature  </th>
                        <th >sun  </th>
                        <th >water  </th>
                        <th >multiplication  </th>
                        <th >image_url  </th>
                        <th >edit</th>
                        <th >ddelete</th>
                    </tr>
                </thead>
                <tbody className='border border-slate-900 bg-slate-600'>
                    {data.map(row =>
                        <>
                            <Row name={row.name}
                                species={row.species}
                                description={row.description}
                                soil={row.soil}
                                temperature={row.temperature}
                                sun={row.sun}
                                water={row.water}
                                multiplication={row.multiplication}
                                image_url={row.image_url}
                                edit = { <button onClick={() => editDelete(row.name, row.species, row.description, row.soil, row.temperature, row.sun, row.water, row.multiplication, row.image_url,2)}>Edit</button>}
                                ddelete = { <button onClick={() => editDelete(row.name, row.species, row.description, row.soil, row.temperature, row.sun, row.water, row.multiplication, row.image_url,1)}>ddelete</button>}
                            />
                           
                        </>
                    )}

                </tbody>
            </table>
        )
    }

    const editDelete = (name, species, description, soil, temperature, sun, water, multiplication, image_url,editOrDelete) => {

        editOrDelete == 1 ? stadeReadonly(true) : stadeReadonly(false)

        document.getElementById('caja_nombre').style.display = 'block'
        document.getElementById('caja_nombre').value = name
        setnombre_caja(name)

        //esto preguntar a stephan

        document.getElementById('species_caja').style.display = 'block'
        document.getElementById('species_caja').value = species
        setspecies_caja(species)

        document.getElementById('description_caja').style.display = 'block'
        document.getElementById('description_caja').value = description

        document.getElementById('soil_caja').style.display = 'block'
        document.getElementById('soil_caja').value = soil

        document.getElementById('temperature_caja').style.display = 'block'
        document.getElementById('temperature_caja').value = temperature

        document.getElementById('sun_caja').style.display = 'block'
        document.getElementById('sun_caja').value = sun

        document.getElementById('water_caja').style.display = 'block'
        document.getElementById('water_caja').value = water

        document.getElementById('multiplication_caja').style.display = 'block'
        document.getElementById('multiplication_caja').value = multiplication

        document.getElementById('foto').style.display = 'block'
    }

    
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

    const stadeReadonly = (stade) => {
        document.getElementById('caja_nombre').readOnly = stade
        document.getElementById('species_caja').readOnly = stade
        document.getElementById('description_caja').readOnly = stade
        document.getElementById('soil_caja').readOnly = stade
        document.getElementById('temperature_caja').readOnly = stade
        document.getElementById('sun_caja').readOnly = stade
        document.getElementById('water_caja').readOnly = stade
        document.getElementById('multiplication_caja').readOnly = stade
        document.getElementById('foto').readOnly = stade
    }

    const comprobarNombre = () => {
        nombre_caja.length < 3 || nombre_caja.length > 20 ? mostrar('errorNombreCaja', 'El tamaño del nombre debe estar entre 3 y 20 caracteres') : ocultar('errorNombreCaja')
        return 3 >= nombre_caja.length >= 20
    }

    const comprobardescription_caja = () => {
        description_caja.length < 25 || description_caja.length > 200 ? mostrar('errordescription', 'El tamaño de la descripción debe estar entre 25 y 200 caracteres') : ocultar('errordescription')
        return 25 >= description_caja.length >= 200
    }

    const comprobarspecies_caja = () => {
        species_caja.length < 3 || species_caja.length > 20 ? mostrar('errorspecies', 'El tamaño del species debe estar entre 3 y 20 caracteres') : ocultar('errorspecies')
        return 3 >= species_caja.length >= 25
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


            <Table data={plants}></Table>
        </div>
    )

}
export default Menu
