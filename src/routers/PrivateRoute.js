import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    } )=>{


    return (
        <Route {...rest}
        component={ (props) => (
            //si esta autenticado.. devuelve el componente.. si no ..login
            (isAuthenticated)           
                ? (<Component {...props} />)
                : (<Redirect to="/auth/login" />)
        )}
        />
    )
}

//para que sea obligatorio el tipo
PrivateRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
