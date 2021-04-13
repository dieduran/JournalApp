import React, { useEffect, useState } from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
    Route, 
    Redirect} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'
import {firebase} from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch= useDispatch();

    const [checking, setChecking] = useState(true); //mientras sea true no muestra el resto de la app
    const [isLoggedIn, setIsLoggedIn] = useState(false); //mientras sea falso no hay nadie logueado

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user)=>{
            
            if (user?.uid){//si el objeto tiene uid y no es null
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        } );
    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking){
        return(
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div> 
                <Switch>
                    <Route
                        path ='/auth'
                        component={AuthRouter}
                    />
                    <Route
                        exact path="/"
                        component= {JournalScreen}
                    />
                    {/* cualquier otra ruta que no sea esa.. register */}
                    <Redirect to="/auth/login"/> 
                </Switch>
            </div>
        </Router>
    )
}
