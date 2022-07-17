// @flow 
import {FC} from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar: FC = () => {
    const navigate = useNavigate()
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" onClick={()=>{navigate('/')}}>Currency Converter</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" onClick={()=>{navigate('/')}}>Home</a>
                            <a className="nav-link" onClick={()=>{navigate('/register')}}>Register</a>
                            <a className="nav-link" onClick={()=>{navigate('/session')}}>Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};