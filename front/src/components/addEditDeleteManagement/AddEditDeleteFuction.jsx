import { stadeReadonly } from "../FormTable/EstadosFormTable"
import { ocultar } from "../comprobaciones"
import { useState } from "react"


export const AddeditDelete = (name, species, description, soil, temperature, sun, water, multiplication, image_url, addeditDelete, nombre_caja, species_caja, description_caja, soil_caja, temperature_caja,
    sun_caja,water_caja,multiplication_caja) => {

        const [nombre_caja2, setnombre_caja] = useState(nombre_caja)
        const [species_caja2, setspecies_caja] = useState(species_caja)
        const [description_caja2, setdescription_caja] = useState(description_caja)
        const [soil_caja2, setsoil_caja] = useState('')
        const [temperature_caja2, settemperature_caja] = useState('')
        const [sun_caja2, setsun_caja] = useState('')
        const [water_caja2, setwater_caja] = useState('')
        const [multiplication_caja2, setmultiplication_caja] = useState('')

    stadeReadonly(false)

    if (addeditDelete == 'add') {
        document.getElementById('addButton').style.display = 'block'
        ocultar('editButton')
        ocultar('deleteButton')
    } else if (addeditDelete == 'edit') {
        ocultar('addButton')
        document.getElementById('editButton').style.display = 'block'
        ocultar('deleteButton')
    } else {
        ocultar('addButton')
        ocultar('editButton')
        document.getElementById('deleteButton').style.display = 'block'
        stadeReadonly(true)
    }

    document.getElementById('caja_nombre').style.display = 'block'
    setnombre_caja(name)
    ocultar('errorNombreCaja')
    //esto preguntar a stephan

    document.getElementById('species_caja').style.display = 'block'
    ocultar('errorspecies')
    setspecies_caja(species)


    document.getElementById('description_caja').style.display = 'block'
    ocultar('errordescription')
    setdescription_caja(description)

    document.getElementById('soil_caja').style.display = 'block'
    ocultar('errorsoil')
    setsoil_caja(soil)

    document.getElementById('temperature_caja').style.display = 'block'
    ocultar('errortemperature')
    settemperature_caja(temperature)

    document.getElementById('sun_caja').style.display = 'block'
    ocultar('errorsun')
    setsun_caja(sun)

    document.getElementById('water_caja').style.display = 'block'
    ocultar('errorwater')
    setwater_caja(water)

    document.getElementById('multiplication_caja').style.display = 'block'
    ocultar('errormultiplication')
    setmultiplication_caja(multiplication)

    document.getElementById('foto').style.display = 'block'


    return (
        <div>

        </div>
    );

}
