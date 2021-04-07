import {types} from '../types/types';

/*
//si el state esta vacio no estoy autenticado
cuadno este autenticado el state es:
{
    uid: 'ljiouwelqwjkjlkdsda'
    name: 'Fernando'
}
*/

export const authReducer=(state ={}, action)=>{
    switch (action.type) {
        case types.login:
            return{
                uid: action.payload.uid,
                name: action.payload.displayname
            }
        case types.logout:
            return{ }
        default:
            return state;
    }
}

