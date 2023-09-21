import Inicio_sesion from "./components/inicio_sesion"
import Registro from "./components/Registro"

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio_sesion />
  }, {
    path: "/registro",
    element: <Registro />

  }
])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;