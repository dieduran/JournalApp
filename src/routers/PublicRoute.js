import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
    } )=>{

    return (
        <Route {...rest}
        component={ (props) => (
            //si esta autenticado.. devuelve el componente.. si no ..login
            (isAuthenticated)           
                ?(<Redirect to="/" />)
                :(<Component {...props} />)
        )}
        />
    )
}

//para que sea obligatorio el tipo
PublicRoute.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
