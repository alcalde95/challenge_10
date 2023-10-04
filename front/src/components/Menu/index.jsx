import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
import logo from './logo-sinfondo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { comprobarEmail, comprobarPassword, mostrar, ocultar } from '../comprobaciones.jsx'
import Table from "../Table"
import FormTable from '../FormTable'
import { addeditDelete } from '../addEditDeleteManagement/addEditDeleteFuction'
const plants = [
    { id: 1, name: "Cy Ganderton", species: "Blue", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id: 2, name: "Cy Ganderton", species: "Red", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id: 3, name: "Cy Ganderton", species: "Green", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> }
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
    const [searchBox, setSearchBox] = useState('')


   

    

    return (

        <div className='flex flex-col justify-center items-center h-[100vh] bg-black text-neutral-50'>
            <div className='bg-neutral-600 p-8 rounded-lg flex flex-col justify-between gap-4 items-center w-[50vw]'>
                <header>Usuario : x (poner dp con el contexto)</header>
                <button
                    className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out'
                    onClick={() => addeditDelete('', '', '', '', '', '', '', '', '', 'add',nombre_caja,species_caja,description_caja,soil_caja,temperature_caja,sun_caja,water_caja,multiplication_caja)}
                >
                    Añadir
                </button>

                {/*Esto de aquí abajo me da error, la cosa es q funciona. No sé qué estoy haciendo mal xd. Perdón stephan :( */}

                <FormTable data={nombre_caja,species_caja,description_caja,soil_caja,temperature_caja,sun_caja,water_caja,multiplication_caja} />

                <div className='grid grid-cols-2 py-2.5 '>
                    <input
                        type='text'
                        id='searchBox'
                        className=' bg-neutral-500 p-2 rounded-l-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={searchBox}
                        placeholder='Search'
                        name='searchBox'
                        autoComplete='off'
                        onChange={e => setSearchBox(e.target.value)}
                    ></input>
                    <button className=' bg-neutral-400 p-2 rounded-r-lg hover:bg-neutral-300 transition duration-200 ease-in-out w-max'>Search</button>

                </div>

                
                <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='addButton' style={{ display: 'none' }} >Add</button>
                <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='editButton' style={{ display: 'none' }} >Edit</button>
                <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='deleteButton' style={{ display: 'none' }} >Delete</button>


                <Table data={plants} addeditDeleteData={nombre_caja,species_caja,description_caja,soil_caja,temperature_caja,sun_caja,water_caja,multiplication_caja}></Table>
            </div>
        </div>
    )

}
export default Menu
