import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch,
    Route, 
    Redirect} from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
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
