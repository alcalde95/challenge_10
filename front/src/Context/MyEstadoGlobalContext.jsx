import { createContext } from 'react'

const MyEstadoGlobalContext = createContext({
    email: 'NoEmail', setEmail: () => { }
})

export { MyEstadoGlobalContext }