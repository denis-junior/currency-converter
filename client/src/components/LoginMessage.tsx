// @flow 
import {FC} from 'react';

export const LoginMessage:FC = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                <h3 className="text-center">Information</h3>
            </div>
            <div className="card-body">
        <p>
            Hello, for you use this currency converter, you need to make login (if you don't have, <a href="/register">register now!</a>)
        </p>
            </div>

        </div>
    );
};