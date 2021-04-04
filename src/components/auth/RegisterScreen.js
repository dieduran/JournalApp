import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
          <h3 className="auth__title">Register</h3>  
          <form>
                <input 
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input 
                    type="text"
                    placeholder="Email"
                    autoComplete="off"
                    name="email"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    placeholder="Confirm password" 
                    name="password2"
                    autoComplete="off"
                    className="auth__input"
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