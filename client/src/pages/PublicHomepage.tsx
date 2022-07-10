// @flow 
import {FC} from 'react';
import { LoginMessage } from '../components/LoginMessage';
import { Navbar } from '../components/Navbar';

export const PublicHomepage:FC = () => {
    return (
        <div>
            <Navbar />
            <div className= "position-absolute top-50 start-50 translate-middle bg-light">
                        <LoginMessage/>
            </div>
            
        </div>
    );
};