import { useContext, useState } from 'react'
import logo from './logo-sinfondo.png'
import Table from "../Table"
import FormTable from '../FormTable'
import { stadeReadonly } from '../FormTable/EstadosFormTable'
import { ocultar } from '../comprobaciones'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
import { Link } from 'react-router-dom'
const plants = [
    { id: 1, name: "Cy Ganderton", species: "Blue", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id: 2, name: "Cy Ganderton", species: "Red", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> },
    { id: 3, name: "Cy Ganderton", species: "Green", description: "Blue", soil: "Blue", temperature: "Blue", sun: "Blue", water: "Blue", multiplication: "Blue", image_url: <img className='w-12' src={logo} /> }
]



export const plantsElementsInfo = {
    nombre_caja: '',
    species_caja: '',
    description_caja: '',
    soil_caja: '',
    temperature_caja: '',
    sun_caja: '',
    water_caja: '',
    multiplication_caja: '',
}


const Menu = () => {



    const [nombre_caja, setnombre_caja] = useState('')
    const [species_caja, setspecies_caja] = useState('')
    const [description_caja, setdescription_caja] = useState('')
    const [soil_caja, setsoil_caja] = useState('')
    const [temperature_caja, settemperature_caja] = useState('')
    const [sun_caja, setsun_caja] = useState('')
    const [water_caja, setwater_caja] = useState('')
    const [multiplication_caja, setmultiplication_caja] = useState('')
    const { email, setEmail } = useContext(MyEstadoGlobalContext)
    const [searchBox, setSearchBox] = useState('')

    return (

        <div className='flex flex-col justify-center items-center h-[100vh] bg-black text-neutral-50'>
            <div className='bg-neutral-600 p-8 rounded-lg flex flex-col justify-between gap-4 items-center w-[50vw]'>
                <header>Usuario : {email} (poner dp con el contexto)</header>
                <button
                    className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out'

                >

                    <Link
                        to={
                            "/Add"}
                        state= {{ detail: "Some detail" }}

                    >
                        Navigate
                    </Link>
                </button>



                <FormTable />

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


                <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='editButton' style={{ display: 'none' }} >Edit</button>
                <button className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out' id='deleteButton' style={{ display: 'none' }} >Delete</button>

                {/*No c pq esto me lo marca como error, en otro lado hace igual y tb va, así q ni idea xddddd*/}

                <Table data={plants} plantsElementsInfo={plantsElementsInfo}></Table>
            </div>
        </div >
    )

}
export default Menu
