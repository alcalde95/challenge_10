import { stadeReadonly } from "../FormTable/EstadosFormTable"
import { ocultar } from "../comprobaciones"

export  const addeditDelete = (name, species, description, soil, temperature, sun, water, multiplication, image_url, addeditDelete,data) => {

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
    data.setnombre_caja(name)
    ocultar('errorNombreCaja')
    //esto preguntar a stephan

    document.getElementById('species_caja').style.display = 'block'
    ocultar('errorspecies')
    data.setspecies_caja(species)


    document.getElementById('description_caja').style.display = 'block'
    ocultar('errordescription')
    data.setdescription_caja(description)

    document.getElementById('soil_caja').style.display = 'block'
    ocultar('errorsoil')
    data.setsoil_caja(soil)

    document.getElementById('temperature_caja').style.display = 'block'
    ocultar('errortemperature')
    data.settemperature_caja(temperature)

    document.getElementById('sun_caja').style.display = 'block'
    ocultar('errorsun')
    data.setsun_caja(sun)

    document.getElementById('water_caja').style.display = 'block'
    ocultar('errorwater')
    data.setwater_caja(water)

    document.getElementById('multiplication_caja').style.display = 'block'
    ocultar('errormultiplication')
    data.setmultiplication_caja(multiplication)

    document.getElementById('foto').style.display = 'block'
}