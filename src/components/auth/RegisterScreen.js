import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator';

import {useForm} from '../../hooks/useForms';
import { removeError, setError } from '../../actions/ui';
import {startRegisterEmailPasswordName} from '../../actions/auth';

export const RegisterScreen = () => {
    
    const dispatch = useDispatch();

    const {msgError} = useSelector( state=> state.ui);



    const [ formValues, handleInputChange] = useForm(
    {
        name: 'Hernando',
        email: 'nando@gmail.com',
        password: "123456",
        password2: "123456"
    })

    const {name, email,password,password2}= formValues;

    const handleRegister = (e)=>{
        e.preventDefault();
        if (isFormValid()){
            console.log('formulario correcto');

            dispatch(startRegisterEmailPasswordName(email, password,name));

        }

    }

    const isFormValid = () =>{
        if (name.trim().length===0){
            dispatch(setError('Name is required'));
            return false;
        }else if(!validator.isEmail(email)){
            dispatch(setError("Email is not valid"));
            return false;
        }else if (password!==password2||password2.length<5){
            dispatch(setError("Password should be at least 5 characters and match each other"));
            return false;
        }
        dispatch(removeError());
        return true;
    }

    return (
        <>
          <h3 className="auth__title">Register</h3>  
          <form onSubmit={handleRegister}>
                {
                    msgError&&
                    (
                        <div className="auth__alert-error">
                            {msgError}
                        </div>
                    )
                }

                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    placeholder="Confirm password" 
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mt-5 "
                >
                    Register
                </button>

                <Link
                    to= '/auth/login'
                    className='link'
                >
                    Already register?
                </Link>
              </form>
        </>
    )
}
