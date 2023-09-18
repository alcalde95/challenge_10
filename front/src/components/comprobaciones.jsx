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

export const comporbarLength = (length,caracters) =>{
    let regex = new RegExp('.{' +{length} + '}.')
    return regex.test(caracters)
}