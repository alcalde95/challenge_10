


/*Estoy valorando si esto, cada fila de datos, si se podrá meter en otro componente*/

const FormTable = (data) => {
    return(
        <form >
                    <input
                        type="text"
                        id='caja_nombre'
                        className='bg-neutral-500 my-3 p-2 border-separate  rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.nombre_caja}
                        style={{ display: 'none' }}
                        placeholder='Nombre'
                        name='caja_nombre'
                        autoComplete='off'
                        onChange={e => data.setnombre_caja(e.target.value)}
                        onBlur={() => data.comprobarNombre()}
                    >
                    </input>

                    <p id='errorNombreCaja' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='species_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.species_caja}
                        style={{ display: 'none' }}
                        placeholder='species'
                        name='species_caja'
                        autoComplete='off'
                        onChange={e => data.setspecies_caja(e.target.value)}
                        onBlur={() => data.comprobarspecies_caja()}
                    >
                    </input>

                    <p id='errorspecies' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='description_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.description_caja}
                        style={{ display: 'none' }}
                        placeholder='description'
                        name='description_caja'
                        autoComplete='off'
                        onChange={e => data.setdescription_caja(e.target.value)}
                        onBlur={() => data.comprobardescription_caja()}
                    >
                    </input>

                    <p id='errordescription' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='soil_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.soil_caja}
                        style={{ display: 'none' }}
                        placeholder='Soil'
                        name='soil_caja'
                        autoComplete='off'
                        onChange={e => data.setsoil_caja(e.target.value)}
                        onBlur={() => data.comprobarsoil_caja()}
                    >
                    </input>

                    <p id='errorsoil' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='temperature_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.temperature_caja}
                        style={{ display: 'none' }}
                        placeholder='Temperature'
                        name='temperature_caja'
                        autoComplete='off'
                        onChange={e => data.settemperature_caja(e.target.value)}
                        onBlur={() => data.comprobartemperature_caja()}
                    >
                    </input>

                    <p id='errortemperature' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='sun_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.sun_caja}
                        style={{ display: 'none' }}
                        placeholder='Sun'
                        name='sun_caja'
                        autoComplete='off'
                        onChange={e => data.setsun_caja(e.target.value)}
                        onBlur={() => data.comprobarsun_caja()}
                    >
                    </input>

                    <p id='errorsun' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='water_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.water_caja}
                        style={{ display: 'none' }}
                        placeholder='Water'
                        name='water_caja'
                        autoComplete='off'
                        onChange={e => data.setwater_caja(e.target.value)}
                        onBlur={() => data.comprobarwater_caja()}
                    >
                    </input>

                    <p id='errorwater' style={{ display: 'none' }} className='text-red-700 bg-zinc-300	border-2 rounded-md'></p>

                    <input
                        type="text"
                        id='multiplication_caja'
                        className='bg-neutral-500 my-3 p-2 rounded-lg w-full text-center placeholder:text-neutral-50 text-neutral-50 outline-none'
                        value={data.multiplication_caja}
                        style={{ display: 'none' }}
                        placeholder='Multiplication'
                        name='multiplication_caja'
                        autoComplete='off'
                        onChange={e => data.setmultiplication_caja(e.target.value)}
                        onBlur={() => data.comprobarmultiplication_caja()}
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