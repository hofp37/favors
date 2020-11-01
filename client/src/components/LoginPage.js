import React from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginPage = () => {

    return (
        <div className="container login-container">
            <div className="card">
                <div className="card-content">
                    <h3><FontAwesomeIcon icon="hands-helping" /> Favors</h3>
                    <div className="section">
                        <p className="lead">Help people with a little favor!</p>
                    </div>
                    <div className="divider"></div>
                    <div className="section">
                        <a href="/auth/google" className="btn red darken-1">
                            <FontAwesomeIcon icon={['fab', 'google']} /> Log In With Google
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;