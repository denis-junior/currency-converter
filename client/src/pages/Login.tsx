// @flow 
import axios from 'axios';
import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { api } from '../services/api';

interface IFormState {
    email: string,
    password: string
};

export const Login: FC = () => {

    useEffect(() => {
        const token = localStorage.getItem('@token')
        token && navigate('/app')
      
      },[])
      

    const [formState, setFormState] = useState<IFormState>({
        email: "",
        password: ""
    })
    
    const navigate = useNavigate()

    const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // console.log({event})

        // make validation

        const { email, password } = formState
        if (!email || !password) return window.alert("Email and Password required!")

        // send data for the server
        api.post("session", formState).then((response) => {
            // console.log(response.data.token)
            localStorage.setItem('@token',response.data.token)
            window.alert("SUCCESS!")
            navigate("/app")
        })
    }, [formState])

    return (
        <>
            {/* {console.log({ formState })} */}
            <Navbar />
            <div className="container-fluid d-flex justify-content-center align-items-center mt-5">
                <div className="card text-dark bg-light mb-3 ">
                    <div className="card-header text-center">Login</div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Email</label>
                                <input type="email" name='email' className="form-control" value={formState.email} required onChange={(event) => {
                                    setFormState({
                                        ...formState,
                                        email: event.currentTarget?.value || ""
                                    })
                                }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name='password' required value={formState.password} onChange={(event) => {
                                    setFormState({
                                        ...formState,
                                        password: event.currentTarget?.value || ""
                                    })
                                }} className="form-control" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <button type="submit" className="align-items-center btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                        <div className="mt-3">
                            <a className='form-text pe-auto' href='/register'>Doesn't have a login ? register now!</a>
                        </div>
                    </div>
                </div>

            </div>
            <p className='text-white'>
                {/* {email} */}
            </p>
            <p className='text-white'>
                {/* {password} */}
            </p>
        </>
    );
};