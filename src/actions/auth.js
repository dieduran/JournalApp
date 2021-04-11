import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import {types} from '../types/types'
import { setError } from './ui';

export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{    //hacemos un callback porque es una funcion asincrona
        setTimeout(() => {
            dispatch(login(123,'Pedro'));
        }, 3500);
    }
}

export const startRegisterEmailPasswordName=(email, password,name)=>{
    return (dispatch)=>{    //hacemos un callback porque es una funcion asincrona
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async({user}) =>{
                await user.updateProfile({displayName: name});
                dispatch(
                    login(user.uid, user.displayName)
                )
            })
            .catch(e=>{
                // mio.. no de curso //dispatch(setError(e.message))
                console.log(e);
            })
    }
}


export const startGoogleLogin=(email, password)=>{
    return (dispatch)=>{    //hacemos un callback porque es una funcion asincrona
        firebase.auth().signInWithPopup(googleAuthProvider)
            // .then(userCred =>{
            .then(({user}) =>{
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login=(uid, displayName)=>({
    type: types.login,
            payload:{
                uid,
                displayName
            }
})