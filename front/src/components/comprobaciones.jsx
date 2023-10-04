import {validEmail, validPassword} from './regex.jsx'

export const comprobarEmail = (email) => {
    if(!validEmail.test(email)){
        return false;
    }else return true;
}

export const comprobarPassword = (password) => {
    if(!validPassword.test(password)){
        return false;
    }else return true;
}

export const mostrar = (id, mensaje) => {
    document.getElementById(id).style.display = 'block'
    document.getElementById(id).textContent = mensaje
}

export const ocultar = (id) => {
    document.getElementById(id).style.display = 'none'
}


export const comprobarNombre = () => {
    nombre_caja.length < 3 || nombre_caja.length > 20 ? mostrar('errorNombreCaja', 'El tamaño del nombre debe estar entre 3 y 20 caracteres') : ocultar('errorNombreCaja')
    return 3 >= nombre_caja.length >= 20
}

export const comprobarspecies_caja = () => {
    species_caja.length < 3 || species_caja.length > 20 ? mostrar('errorspecies', 'El tamaño del species debe estar entre 3 y 20 caracteres') : ocultar('errorspecies')
    return 3 >= species_caja.length >= 25
}

export const comprobardescription_caja = () => {
    description_caja.length < 25 || description_caja.length > 200 ? mostrar('errordescription', 'El tamaño de la descripción debe estar entre 25 y 200 caracteres') : ocultar('errordescription')
    return 25 >= description_caja.length >= 200
}


export const comprobarsoil_caja = (soil_caja) => {
    soil_caja.length < 3 || soil_caja.length > 20 ? mostrar('errorsoil', 'El tamaño del soil debe estar entre 3 y 20 caracteres') : ocultar('errorsoil')
    return 3 >= soil_caja.length >= 20
}
export const comprobartemperature_caja = (temperature_caja) => {
    temperature_caja.length < 3 || temperature_caja.length > 20 ? mostrar('errortemperature', 'El tamaño de la temperature debe estar entre 3 y 20 caracteres') : ocultar('errortemperature')
    return 3 >= temperature_caja.length >= 20
}
export const comprobarsun_caja = (sun_caja) => {
    sun_caja.length < 3 || sun_caja.length > 20 ? mostrar('errorsun', 'El tamaño del sun debe estar entre 3 y 20 caracteres') : ocultar('errorsun')
    return 3 >= sun_caja.length >= 20
}
export const comprobarwater_caja = (water_caja) => {
    water_caja.length < 3 || water_caja.length > 20 ? mostrar('errorwater', 'El tamaño del water debe estar entre 3 y 20 caracteres') : ocultar('errorwater')
    return 3 >= water_caja.length >= 20
}
export const comprobarmultiplication_caja = (multiplication_caja) => {
    multiplication_caja.length < 3 || multiplication_caja.length > 20 ? mostrar('errormultiplication', 'El tamaño del multiplication debe estar entre 3 y 20 caracteres') : ocultar('errormultiplication')
    return 3 >= multiplication_caja.length >= 20
}

