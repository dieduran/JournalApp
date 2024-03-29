import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForms'


export const LoginScreen = () => {
    
    //hook de redux para hacer dispatch
    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui)

    const [formValues, handleInputChanges]  = useForm({
        email: 'nando@gmail.com',
        password: '123456'
    });

    const {email,password} = formValues;

    const handleLogin=(e)=>{
        e.preventDefault();
        // dispatch(login(12345,'Hernando'));
        dispatch(startLoginEmailPassword(email,password));
                
    }
    const handleGoogleLogin=(e)=>{
        e.preventDefault();
        dispatch(startGoogleLogin());
    }

    return (
        <>
          <h3 className="auth__title">Login</h3>  
          <form onSubmit={handleLogin}>
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChanges}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChanges}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                    disabled={loading}
                >
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with social networks</p>
                    <div 
                    className="google-btn"
                    onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create new account
                </Link>
              </form>
        </>
    )
}
