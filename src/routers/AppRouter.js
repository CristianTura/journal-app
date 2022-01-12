import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { useDispatch } from "react-redux";

import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { login } from '../actions/auth';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, seIsLoggedIn] = useState(false)

    useEffect(() => {

        const auth = getAuth();
            onAuthStateChanged( auth, ( user ) => {

                if( user?.uid ) {
                    dispatch( login( user.uid, user.displayName ) );
                    seIsLoggedIn( true );
                } else {
                    seIsLoggedIn( false );
                }

                setChecking( false );

            } );
        
    }, [ dispatch, setChecking, seIsLoggedIn ])

    if (  checking ) { 
        return (
            <h1> Loading... </h1>
        )
    }


    return (
            <Router>
                <div>
                    <Switch>

                        <Route path="/auth">
                            <PublicRoute isLoggedIn={isLoggedIn}>
                                <AuthRouter /> 
                            </PublicRoute>
                        </Route>
                            
                        <Route exact path="/">
                            <PrivateRoute isLoggedIn={isLoggedIn}>
                                <JournalScreen />
                            </PrivateRoute>
                        </Route>

                        <Redirect to="auth/login"/>

                    </Switch>
                </div>
            </Router>
    )
}

export default AppRouter
