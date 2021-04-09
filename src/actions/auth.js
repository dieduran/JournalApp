import {types} from '../types/types'

export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{    //hacemos un callback porque es una funcion asincrona
        setTimeout(() => {
            dispatch(login(123,'Pedro'));
        }, 3500);
    }
}


export const login=(uid, displayName)=>({
    type: types.login,
            payload:{
                uid,
                displayName
            }
})