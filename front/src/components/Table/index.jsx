import { addeditDelete } from "../addEditDeleteManagement/addEditDeleteFuction"
const Row = (props) => {
    const { name, species, description, soil, temperature, sun, water, multiplication, image_url, edit, ddelete } = props
    return (<tr className='rounded-lg'>
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



const Table = (props,addEditDeleteData) => {
    
    const { data } = props

    return (
        <table className="table-auto border-separate border-spacing-x-2.5 border-spacing-y-2.5   bg-neutral-500 rounded-lg">
            <thead>
                <tr className=''>
                    <th className='rounded-lg w-auto  bg-zinc-800' >Name</th>
                    <th className='rounded-lg w-auto bg-zinc-800'>species </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>description </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>soil  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>temperature  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>sun  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>water  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>multiplication  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>image_url  </th>
                    <th className='rounded-lg w-auto bg-zinc-800'>edit</th>
                    <th className='rounded-lg w-auto bg-zinc-800'>ddelete</th>
                </tr>
            </thead>
            <tbody className='bg-zinc-700 rounded-lg'>
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
                            edit={<button onClick={() => addeditDelete(row.name, row.species, row.description, row.soil, row.temperature, row.sun, row.water, row.multiplication, row.image_url, 'edit',addEditDeleteData)}>Edit</button>}
                            ddelete={<button onClick={() => addeditDelete(row.name, row.species, row.description, row.soil, row.temperature, row.sun, row.water, row.multiplication, row.image_url, 'delete',addEditDeleteData)}>ddelete</button>}
                        />

                    </>
                )}

            </tbody>
        </table>
    )
}
export default Table

