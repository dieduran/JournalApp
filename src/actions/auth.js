import {firebase, googleAuthProvider} from '../firebase/firebaseConfig'
import {types} from '../types/types'

export const startLoginEmailPassword=(email, password)=>{
    return (dispatch)=>{    //hacemos un callback porque es una funcion asincrona
        setTimeout(() => {
            dispatch(login(123,'Pedro'));
        }, 3500);
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