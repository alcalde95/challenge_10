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

