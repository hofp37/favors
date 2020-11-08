import React from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const LoginPage = (props) => {

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
                        <p>Logged in status: {props.isAuthenticated}</p>
                        <p><Link to='/dashboard'>View Dashboard</Link></p>
                        <form onSubmit={props.handleLogin}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="email"
                                        type="email"
                                        className="validate"
                                        value={props.getEmail}
                                        onChange={e => props.setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="password"
                                        type="password"
                                        className="validate"
                                        value={props.getPassword}
                                        onChange={e => props.setPassword(e.target.value)} />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <div className="row">
                                <input
                                    className="btn waves-effect waves-light"
                                    type="submit"
                                    value="Submit" />
                            </div>
                        </form>
                        <div>
                            <a href="/auth/google" className="btn red darken-1">
                                <FontAwesomeIcon icon={['fab', 'google']} /> Log In With Google
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;