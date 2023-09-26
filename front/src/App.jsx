import Inicio_sesion from "./components/inicio_sesion"
import Registro from "./components/Registro"
import Menu from "./components/Menu"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio_sesion />
  }, {
    path: "/registro",
    element: <Registro />
  },{
    path: "/Menu",
    element: <Menu />

  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;