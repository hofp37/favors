import React, { useState } from 'react';
import './LoginPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const LoginPage = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitForm = async (event) => {
        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            if (res.token) props.history.push('/dashboard');
        });

        event.preventDefault();
    };


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
                        <form onSubmit={submitForm}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="email"
                                        type="email"
                                        className="validate"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)} />
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="password"
                                        type="password"
                                        className="validate"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)} />
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