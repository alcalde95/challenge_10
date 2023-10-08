import { useContext, useState } from 'react'
import logo from './logo-sinfondo.png'
import Table from "../Table"
import FormTable from '../FormTable'
import { MyEstadoGlobalContext } from '../../Context/MyEstadoGlobalContext'
import { Link } from 'react-router-dom'

import { useFetch } from '../../customHooks/useFetch'


const Menu = () => {


    const { data, loading, error } = useFetch("http://localhost:3000/plantas")
    const { data:tryngAgain, loading:loading2, error:error2 } = useFetch('http://localhost:3000/usuarios/jorge@test.com')
    
    !loading2 ? console.log("El error es:" +  tryngAgain.email + " " ) : console.log("Aún no se cargó el usuario xd")
    const { email, setEmail } = useContext(MyEstadoGlobalContext)
    const [searchBox, setSearchBox] = useState('')

    return (

        <div className='flex flex-col flex-wrap justify-center overflow-auto items-center min-h-screen bg-black text-neutral-50 bg-fixed bg-cover py-5'>
            <div className='bg-neutral-600 p-8 rounded-lg flex flex-col justify-between gap-4 items-center w-[70vw]'>
                <header>Usuario : {email} (poner dp con el contexto)</header>
                <button
                    className=' bg-neutral-400 p-2 rounded-lg  text-center hover:bg-neutral-300 transition duration-200 ease-in-out'

                >

                    <Link
                        to={
                            "/Add"}
                        state={{ detail: "Some detail" }}

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
                {error && <li>Error: {error}</li>}
                {!loading ?
                    <Table data={data}></Table>
                    : <p>Loading...</p>
                }
            </div>

        </div >
    )

}
export default Menu
