import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { removeError, setError } from '../../actions/ui'
import {startRegisterWithEmailPasswordName} from '../../actions/auth'

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const {loading} = useSelector(state => state.ui)
    const {msgError} = useSelector(state => state.ui)



    const [formValues, handleInputChange] = useForm({
        name:'',
        email:'',
        password:'',
        password2:''
    });


    const{name, email, password, password2}=formValues;

    const handleRegister=(e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch (startRegisterWithEmailPasswordName(email, password, name))
        }
    }


    
    const isFormValid=()=>{
        if (name.trim().length === 0){
            dispatch(setError('Name is required'));
            return false;
        }else if (!validator.isEmail(email)){
            dispatch(setError('Email is not valid'));
            return false
        }else if(password !== password2 || password.length < 5){
            dispatch(setError('Password must be at least 6 characters and match'));
            return false
        }
        
        dispatch(removeError());        
        return true;
    }

    return (
        <div className="animate__animated animate__fadeIn animate__faster">
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
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input 
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <input 
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button 
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                    disabled={ loading }
                >
                    Register
                </button>

                <Link
                    className="link"
                    to="/auth/login"
                >
                    Already registered?
                </Link>
                

            </form>
        </div>
    )
}
