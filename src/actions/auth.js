import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import {types} from '../types/types'
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{
        dispatch(startLoading())    
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user})=>{
                dispatch(
                    login(user.uid, user.displayName)
                )
                dispatch(finishLoading())    
            })
            .catch(e=>{
                // mio.. no de curso //dispatch(setError(e.message))
                console.log(e);
                dispatch(finishLoading())    
            })    
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