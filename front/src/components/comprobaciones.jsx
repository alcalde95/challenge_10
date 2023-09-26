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
