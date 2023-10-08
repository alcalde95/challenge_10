import Inicio_sesion from "./components/Inicio_sesion"
import Registro from "./components/Registro"
import Menu from "./components/Menu"
import Add from "./components/Add/add"
import Edit from "./components/Edit/Edit"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { TableUseStatescontext } from "./Context/TableUseStatescontext"
import { useState } from "react"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio_sesion />
  }, {
    path: "/registro",
    element: <Registro />
  }, {
    path: "/Menu",
    element: <Menu />

  }, {
    path: "/Add",
    element: <Add />
  }, {
    path:"/Edit",
    element: <Edit />
  }
])

function App() {

  const [nombre_caja, setnombre_caja] = useState('')
  const [species_caja, setspecies_caja] = useState('')
  const [description_caja, setdescription_caja] = useState('')
  const [soil_caja, setsoil_caja] = useState('')
  const [temperature_caja, settemperature_caja] = useState('')
  const [sun_caja, setsun_caja] = useState('')
  const [water_caja, setwater_caja] = useState('')
  const [multiplication_caja, setmultiplication_caja] = useState('')

  return (
    <TableUseStatescontext.Provider value={{ nombre_caja, setnombre_caja, species_caja, setspecies_caja, description_caja, setdescription_caja, soil_caja, setsoil_caja,
      temperature_caja, settemperature_caja, sun_caja, setsun_caja,water_caja, setwater_caja,multiplication_caja, setmultiplication_caja}}>
      <RouterProvider router={router}></RouterProvider>
    </TableUseStatescontext.Provider>
  );
}

export default App;